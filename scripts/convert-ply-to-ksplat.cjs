#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

global.window = global;
global.self = global;
if (!global.performance) {
  global.performance = { now: () => Date.now() };
}

const GaussianSplats3D = require(path.resolve(
  __dirname,
  '../node_modules/@mkkellogg/gaussian-splats-3d/build/gaussian-splats-3d.umd.cjs'
));

const DEFAULTS = {
  compression: 1,
  alpha: 1,
  shDegree: 0,
  force: false,
  recursive: false,
  outputDir: null
};

function printHelp() {
  console.log(`
PLY to KSPLAT converter

Usage:
  npm run convert:ply -- <path>

Examples:
  npm run convert:ply -- Scenes
  npm run convert:ply -- Scenes/AC_day.ply
  npm run convert:ply -- Scenes --recursive --force
  npm run convert:ply -- Scenes --output-dir ConvertedScenes

Options:
  --force              Rebuild .ksplat even if it already exists
  --recursive          Search subfolders too
  --output-dir <dir>   Write .ksplat files into another folder
  --compression <n>    KSPLAT compression level: 0, 1, or 2
  --alpha <n>          Minimum alpha threshold, default 1
  --sh-degree <n>      Spherical harmonics degree, default 0
  --help               Show this help message
`);
}

function parseArgs(argv) {
  const options = { ...DEFAULTS };
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--force') {
      options.force = true;
    } else if (arg === '--recursive') {
      options.recursive = true;
    } else if (arg === '--output-dir') {
      options.outputDir = argv[i + 1];
      i += 1;
    } else if (arg === '--compression') {
      options.compression = Number(argv[i + 1]);
      i += 1;
    } else if (arg === '--alpha') {
      options.alpha = Number(argv[i + 1]);
      i += 1;
    } else if (arg === '--sh-degree') {
      options.shDegree = Number(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--')) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  return { options, positional };
}

function validateOptions(options) {
  if (![0, 1, 2].includes(options.compression)) {
    throw new Error(`Invalid compression level "${options.compression}". Use 0, 1, or 2.`);
  }
  if (![0, 1, 2].includes(options.shDegree)) {
    throw new Error(`Invalid sh degree "${options.shDegree}". Use 0, 1, or 2.`);
  }
  if (Number.isNaN(options.alpha) || options.alpha < 0 || options.alpha > 255) {
    throw new Error(`Invalid alpha threshold "${options.alpha}". Use a value from 0 to 255.`);
  }
}

function collectPlyFiles(targetPath, recursive) {
  const absoluteTarget = path.resolve(targetPath);
  if (!fs.existsSync(absoluteTarget)) {
    throw new Error(`Path not found: ${absoluteTarget}`);
  }

  const stats = fs.statSync(absoluteTarget);
  if (stats.isFile()) {
    if (!absoluteTarget.toLowerCase().endsWith('.ply')) {
      throw new Error(`File is not a .ply: ${absoluteTarget}`);
    }
    return [absoluteTarget];
  }

  const files = [];
  const entries = fs.readdirSync(absoluteTarget, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(absoluteTarget, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        files.push(...collectPlyFiles(fullPath, true));
      }
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.ply')) {
      files.push(fullPath);
    }
  }
  return files.sort((a, b) => a.localeCompare(b));
}

function getOutputPath(inputFile, inputRoot, outputDir) {
  if (!outputDir) {
    return inputFile.replace(/\.ply$/i, '.ksplat');
  }

  const absoluteOutputDir = path.resolve(outputDir);
  const relativePath = path.relative(path.resolve(inputRoot), inputFile);
  const nextRelative = relativePath.replace(/\.ply$/i, '.ksplat');
  return path.join(absoluteOutputDir, nextRelative);
}

async function convertFile(inputFile, outputFile, options) {
  const input = fs.readFileSync(inputFile);
  const arrayBuffer = input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength);
  const splatBuffer = await GaussianSplats3D.PlyLoader.loadFromFileData(
    arrayBuffer,
    options.alpha,
    options.compression,
    true,
    options.shDegree
  );

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, Buffer.from(splatBuffer.bufferData));
}

async function main() {
  const { options, positional } = parseArgs(process.argv.slice(2));

  if (options.help || positional.length === 0) {
    printHelp();
    return;
  }

  validateOptions(options);

  const inputTarget = positional[0];
  const inputFiles = collectPlyFiles(inputTarget, options.recursive);

  if (inputFiles.length === 0) {
    console.log(`No .ply files found in ${path.resolve(inputTarget)}`);
    return;
  }

  let convertedCount = 0;
  let skippedCount = 0;

  for (const inputFile of inputFiles) {
    const outputFile = getOutputPath(inputFile, inputTarget, options.outputDir);
    if (!options.force && fs.existsSync(outputFile)) {
      console.log(`Skip   ${path.basename(inputFile)} -> ${path.relative(process.cwd(), outputFile)}`);
      skippedCount += 1;
      continue;
    }

    console.log(`Build  ${path.basename(inputFile)} -> ${path.relative(process.cwd(), outputFile)}`);
    await convertFile(inputFile, outputFile, options);
    convertedCount += 1;
  }

  console.log(`Done. Converted ${convertedCount}, skipped ${skippedCount}.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
