const SHARED_CHROME_STYLE_ID = 'shared-subpage-chrome';

const SHARED_CHROME_CSS = `
body[data-shared-chrome="true"]::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 90;
    pointer-events: none;
    background:
        radial-gradient(circle at top left, rgba(0, 0, 0, 0.62), transparent 30%),
        radial-gradient(circle at top right, rgba(0, 0, 0, 0.62), transparent 30%),
        radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.68), transparent 32%),
        radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.68), transparent 32%),
        radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.28) 100%);
}

body[data-shared-chrome="true"].scene-loading #nav,
body[data-shared-chrome="true"].scene-loading #screenshot-button,
body[data-shared-chrome="true"].scene-loading #side-tags,
body[data-shared-chrome="true"].scene-loading .page-identity-card,
body[data-shared-chrome="true"].scene-loading #map-overlay,
body[data-shared-chrome="true"].scene-loading #regional-map-overlay,
body[data-shared-chrome="true"].scene-loading #memo-overlay,
body[data-shared-chrome="true"].scene-loading #items-overlay {
    opacity: 0 !important;
    pointer-events: none !important;
}

body[data-shared-chrome="true"] #nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    z-index: 160;
}

body[data-shared-chrome="true"] #nav:hover .nav-shell,
body[data-shared-chrome="true"] #nav:focus-within .nav-shell {
    transform: translateY(0);
}

body[data-shared-chrome="true"].nav-peek #nav .nav-shell {
    transform: translateY(0);
}

body[data-shared-chrome="true"] .nav-shell {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr) 72px minmax(0, 1fr);
    align-items: center;
    width: 100%;
    height: 54px;
    margin: 0;
    padding: 0 18px;
    border-radius: 0;
    background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03)),
        rgba(10, 10, 10, 0.26);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
    transform: translateY(-38px);
    transition: transform 0.32s ease;
}

body[data-shared-chrome="true"] .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 34px;
    padding: 0 10px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.92);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

body[data-shared-chrome="true"] .nav-link:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
}

body[data-shared-chrome="true"] .nav-button {
    width: 100%;
    border: 0;
    background: transparent;
    cursor: pointer;
}

body[data-shared-chrome="true"] .nav-icon {
    font-size: 14px;
    line-height: 1;
}

body[data-shared-chrome="true"] .nav-connector {
    width: 72px;
    height: 1px;
    background: rgba(255, 255, 255, 0.58);
    justify-self: center;
}

body[data-shared-chrome="true"] #screenshot-button {
    position: fixed;
    top: 68px;
    left: 20px;
    z-index: 166;
    min-width: 52px;
    height: 42px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}

body[data-shared-chrome="true"] #screenshot-button:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.58);
    transform: translateY(-1px);
}

body[data-shared-chrome="true"] #screenshot-button[disabled] {
    opacity: 0.42;
    cursor: default;
    transform: none;
}

body[data-shared-chrome="true"] #screenshot-button svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
}

body[data-shared-chrome="true"] #map-overlay,
body[data-shared-chrome="true"] #regional-map-overlay,
body[data-shared-chrome="true"] #memo-overlay,
body[data-shared-chrome="true"] #items-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(14px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
}

body[data-shared-chrome="true"] #map-overlay { z-index: 170; }
body[data-shared-chrome="true"] #regional-map-overlay { z-index: 170; }
body[data-shared-chrome="true"] #memo-overlay { z-index: 171; }
body[data-shared-chrome="true"] #items-overlay { z-index: 172; }

body[data-shared-chrome="true"] #map-overlay.visible,
body[data-shared-chrome="true"] #regional-map-overlay.visible,
body[data-shared-chrome="true"] #memo-overlay.visible,
body[data-shared-chrome="true"] #items-overlay.visible {
    opacity: 1;
    pointer-events: auto;
}

body[data-shared-chrome="true"] .map-panel,
body[data-shared-chrome="true"] .memo-panel,
body[data-shared-chrome="true"] .items-panel {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.42);
}

body[data-shared-chrome="true"] .map-panel {
    width: min(92vw, 920px);
    aspect-ratio: 16 / 10;
    border-radius: 30px;
    background:
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.09), transparent 24%),
        radial-gradient(circle at 78% 70%, rgba(255, 255, 255, 0.07), transparent 22%),
        rgba(10, 10, 10, 0.82);
    overflow: hidden;
    touch-action: none;
    user-select: none;
}

body[data-shared-chrome="true"] .map-panel.dragging {
    cursor: grabbing;
}

body[data-shared-chrome="true"] .map-viewport {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

body[data-shared-chrome="true"] .map-canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 1400px;
    height: 980px;
    cursor: grab;
    will-change: transform;
}

body[data-shared-chrome="true"] .map-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
}

body[data-shared-chrome="true"] .map-caption {
    position: absolute;
    left: 28px;
    top: 24px;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Castle Regular", "Times New Roman", Times, serif;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .map-close {
    position: absolute;
    right: 18px;
    top: 18px;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    color: white;
    font-size: 22px;
    cursor: pointer;
}

body[data-shared-chrome="true"] .map-line {
    position: absolute;
    border-top: 1px dashed rgba(255, 255, 255, 0.22);
    transform-origin: left center;
}

body[data-shared-chrome="true"] .map-node {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.92);
    text-decoration: none;
    font-family: "Castle Regular", "Times New Roman", Times, serif;
    font-size: clamp(14px, 1.35vw, 20px);
    letter-spacing: 0.03em;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
    transition: transform 0.22s ease, background 0.22s ease;
}

body[data-shared-chrome="true"] .map-node:hover {
    transform: scale(1.04);
    background: rgba(255, 255, 255, 0.12);
}

body[data-shared-chrome="true"] .map-node.has-icon {
    gap: 12px;
}

body[data-shared-chrome="true"] .map-node::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.55);
    flex: 0 0 auto;
}

body[data-shared-chrome="true"] .map-node.has-icon::before {
    display: none;
}

body[data-shared-chrome="true"] .map-node-icon {
    width: 26px;
    height: 26px;
    object-fit: contain;
    flex: 0 0 auto;
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.28));
}

body[data-shared-chrome="true"] .map-node.home-node {
    pointer-events: none;
    background: rgba(255, 255, 255, 0.1);
}

body[data-shared-chrome="true"] .place-card {
    position: absolute;
    left: 28px;
    bottom: 28px;
    width: min(320px, calc(100% - 56px));
    padding: 18px 18px 16px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(14px);
}

body[data-shared-chrome="true"] .place-kicker,
body[data-shared-chrome="true"] .memo-kicker,
body[data-shared-chrome="true"] .items-kicker {
    color: rgba(255, 255, 255, 0.58);
    font-family: "Castle Regular", "Times New Roman", Times, serif;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .place-title,
body[data-shared-chrome="true"] .memo-title,
body[data-shared-chrome="true"] .items-title {
    margin: 14px 0 8px;
    color: white;
    font-family: "Castle Regular", "Times New Roman", Times, serif;
    line-height: 0.98;
}

body[data-shared-chrome="true"] .place-title { font-size: 30px; }
body[data-shared-chrome="true"] .memo-title { font-size: clamp(34px, 5vw, 58px); }
body[data-shared-chrome="true"] .items-title { font-size: clamp(32px, 4.4vw, 50px); }

body[data-shared-chrome="true"] .place-copy,
body[data-shared-chrome="true"] .memo-intro,
body[data-shared-chrome="true"] .items-copy {
    margin: 0;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.7;
}

body[data-shared-chrome="true"] .place-actions,
body[data-shared-chrome="true"] .items-actions {
    display: flex;
    gap: 12px;
    margin-top: 18px;
    flex-wrap: wrap;
}

body[data-shared-chrome="true"] .place-action,
body[data-shared-chrome="true"] .items-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.07);
    color: white;
    text-decoration: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

body[data-shared-chrome="true"] .place-action:hover,
body[data-shared-chrome="true"] .items-action:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-1px);
}

body[data-shared-chrome="true"] .memo-panel {
    width: min(92vw, 920px);
    max-height: min(82vh, 760px);
    overflow: auto;
    border-radius: 30px;
    padding: 30px 26px 26px;
    background:
        radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 24%),
        rgba(12, 12, 12, 0.86);
}

body[data-shared-chrome="true"] .memo-letter {
    margin-top: 8px;
    padding: 22px 22px 18px;
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
}

body[data-shared-chrome="true"] .gift-card {
    margin-top: 8px;
    padding: 22px 22px 18px;
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
}

body[data-shared-chrome="true"] .gift-visual {
    display: block;
    width: min(220px, 100%);
    height: auto;
    margin: 0 auto 14px;
    border-radius: 14px;
    object-fit: contain;
}

body[data-shared-chrome="true"] .gift-question {
    margin: 0;
    color: rgba(255, 255, 255, 0.92);
    font-family: "Times New Roman", Times, serif;
    font-size: clamp(24px, 2.2vw, 34px);
    line-height: 1.3;
}

body[data-shared-chrome="true"] .gift-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
}

body[data-shared-chrome="true"] .gift-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.07);
    color: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

body[data-shared-chrome="true"] .gift-action:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-1px);
}

body[data-shared-chrome="true"] .gift-form {
    display: none;
    margin-top: 16px;
}

body[data-shared-chrome="true"] .gift-form.visible {
    display: block;
}

body[data-shared-chrome="true"] .gift-input {
    width: 100%;
    min-height: 40px;
    margin-top: 10px;
    padding: 0 12px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(0, 0, 0, 0.36);
    color: rgba(255, 255, 255, 0.95);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    box-sizing: border-box;
}

body[data-shared-chrome="true"] .gift-note {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 1.45;
}

body[data-shared-chrome="true"] .memo-letter p {
    margin: 0 0 18px;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Times New Roman", Times, serif;
    font-size: clamp(23px, 2.1vw, 34px);
    line-height: 1.45;
}

body[data-shared-chrome="true"] .memo-letter p:last-child {
    margin-bottom: 0;
}

body[data-shared-chrome="true"] .memo-emphasis {
    display: block;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .items-panel {
    width: min(92vw, 560px);
    padding: 28px 24px 24px;
    border-radius: 28px;
    background:
        radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 24%),
        rgba(12, 12, 12, 0.88);
}

body[data-shared-chrome="true"] #side-tags {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 150;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    opacity: 1;
    pointer-events: auto;
}

body[data-shared-chrome="true"] .side-line {
    width: 1px;
    height: 42px;
    margin-left: 10px;
    background: rgba(255, 255, 255, 0.58);
}

body[data-shared-chrome="true"] .side-tag {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.9);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.25;
    text-align: left;
    padding: 10px 12px;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

body[data-shared-chrome="true"] .side-tag:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateX(2px);
}

body[data-shared-chrome="true"] .page-identity-card {
    position: fixed;
    left: 20px;
    bottom: 18px;
    z-index: 148;
    width: min(240px, calc(100vw - 36px));
    padding: 0;
    opacity: 0;
    transform: translateY(12px);
    pointer-events: none;
    transition: opacity 0.45s ease, transform 0.45s ease;
}

body[data-shared-chrome="true"] .page-identity-card.visible {
    opacity: 1;
    transform: translateY(0);
}

body[data-shared-chrome="true"] .page-identity-kicker {
    color: rgba(255, 255, 255, 0.54);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .page-identity-title {
    margin: 6px 0 6px;
    color: rgba(255, 255, 255, 0.96);
    font-family: "Times New Roman", Times, serif;
    font-size: clamp(17px, 2vw, 22px);
    font-weight: 700;
    line-height: 1;
}

body[data-shared-chrome="true"] .page-identity-rule {
    width: 48px;
    height: 1px;
    background: rgba(255, 255, 255, 0.82);
}

body[data-shared-chrome="true"] .page-identity-copy {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.45;
}

body[data-shared-chrome="true"] #coordinate-popover {
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 151;
    max-width: min(320px, calc(100vw - 36px));
    padding: 10px 12px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(12px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.24);
    color: rgba(255, 255, 255, 0.92);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    opacity: 0;
    pointer-events: none;
    transform: translateY(8px);
    transition: opacity 0.25s ease, transform 0.25s ease;
}

body[data-shared-chrome="true"] #coordinate-popover.visible {
    opacity: 1;
    transform: translateY(0);
}

body[data-shared-chrome="true"] .coordinate-popover-label {
    display: block;
    color: rgba(255, 255, 255, 0.54);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .coordinate-popover-value {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: 0.04em;
    line-height: 1.45;
}
`;

function ensureStyles() {
    if (document.getElementById(SHARED_CHROME_STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = SHARED_CHROME_STYLE_ID;
    style.textContent = SHARED_CHROME_CSS;
    document.head.appendChild(style);
}

function ensureTopNav(homeHref) {
    const nav = document.getElementById('nav');
    if (!nav) return null;
    nav.innerHTML = `
        <div class="nav-shell">
            <button class="nav-link nav-button" id="map-toggle" type="button" aria-label="Open map">
                <span class="nav-icon">+</span>
                <span>Map</span>
            </button>
            <div class="nav-connector" aria-hidden="true"></div>
            <button class="nav-link nav-button" id="home-reset" type="button" aria-label="Go home">
                <span class="nav-icon">⌂</span>
                <span>Home</span>
            </button>
            <div class="nav-connector" aria-hidden="true"></div>
            <button class="nav-link nav-button" id="memo-toggle" type="button" aria-label="Open more panel">
                <span class="nav-icon">?</span>
                <span>More</span>
            </button>
        </div>
    `;
    nav.dataset.homeHref = homeHref;
    return nav;
}

function buildMapOverlayMarkup(mapConfig, closeId = 'map-close') {
    const lines = (mapConfig.lines || []).map((line) => `
        <div class="map-line" style="left: ${line.left}; top: ${line.top}; width: ${line.width}; transform: rotate(${line.rotate});"></div>
    `).join('');

    const nodes = (mapConfig.nodes || []).map((node) => `
        <a class="map-node${node.icon ? ' has-icon' : ''}" href="${node.href}" style="left: ${node.left}; top: ${node.top};">${node.icon ? `<img class="map-node-icon" src="${node.icon}" alt="">` : ''}<span>${node.label}</span></a>
    `).join('');

    return `
        <div class="map-panel">
            <div class="map-viewport">
                <div class="map-canvas" data-map-canvas>
                    <div class="map-grid"></div>
                    ${lines}
                    <div class="map-node home-node${mapConfig.center.icon ? ' has-icon' : ''}" style="left: ${mapConfig.center.left}; top: ${mapConfig.center.top};">${mapConfig.center.icon ? `<img class="map-node-icon" src="${mapConfig.center.icon}" alt="">` : ''}<span>${mapConfig.center.label}</span></div>
                    ${nodes}
                </div>
            </div>
            <div class="map-caption">${mapConfig.caption || 'Interactive Map'}</div>
            <button class="map-close" id="${closeId}" type="button" aria-label="Close map">×</button>
        </div>
    `;
}

function parsePercent(value, fallback = 50) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string') {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) return parsed;
    }
    return fallback;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function bindMapPan(overlayId, mapConfig) {
    const overlay = document.getElementById(overlayId);
    const panel = overlay?.querySelector('.map-panel');
    const viewport = overlay?.querySelector('.map-viewport');
    const canvas = overlay?.querySelector('[data-map-canvas]');
    if (!overlay || !panel || !viewport || !canvas) return;

    const state = overlay._mapPanState || {
        x: 0,
        y: 0,
        pointerId: null,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0,
        initialized: false
    };
    overlay._mapPanState = state;

    const canvasWidth = Number.isFinite(mapConfig.canvasWidth) ? mapConfig.canvasWidth : 1400;
    const canvasHeight = Number.isFinite(mapConfig.canvasHeight) ? mapConfig.canvasHeight : 980;

    const applyTransform = () => {
        canvas.style.transform = `translate(${state.x}px, ${state.y}px)`;
    };

    const clampToViewport = () => {
        const minX = Math.min(0, viewport.clientWidth - canvasWidth);
        const minY = Math.min(0, viewport.clientHeight - canvasHeight);
        state.x = clamp(state.x, minX, 0);
        state.y = clamp(state.y, minY, 0);
    };

    const centerMap = () => {
        const centerLeft = parsePercent(mapConfig.center?.left, 38) / 100;
        const centerTop = parsePercent(mapConfig.center?.top, 45) / 100;
        state.x = (viewport.clientWidth / 2) - (centerLeft * canvasWidth);
        state.y = (viewport.clientHeight / 2) - (centerTop * canvasHeight);
        clampToViewport();
        applyTransform();
        state.initialized = true;
    };

    const layoutMap = (preservePosition = true) => {
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        if (!preservePosition || !state.initialized) {
            centerMap();
            return;
        }
        clampToViewport();
        applyTransform();
    };

    if (panel.dataset.mapPanBound !== 'true') {
        panel.dataset.mapPanBound = 'true';

        viewport.addEventListener('pointerdown', (event) => {
            if (event.target.closest('.map-node, .map-close')) return;
            state.pointerId = event.pointerId;
            state.startX = event.clientX;
            state.startY = event.clientY;
            state.originX = state.x;
            state.originY = state.y;
            panel.classList.add('dragging');
            viewport.setPointerCapture(event.pointerId);
        });

        viewport.addEventListener('pointermove', (event) => {
            if (state.pointerId !== event.pointerId) return;
            state.x = state.originX + (event.clientX - state.startX);
            state.y = state.originY + (event.clientY - state.startY);
            clampToViewport();
            applyTransform();
        });

        const endDrag = (event) => {
            if (state.pointerId !== event.pointerId) return;
            panel.classList.remove('dragging');
            if (viewport.hasPointerCapture(event.pointerId)) {
                viewport.releasePointerCapture(event.pointerId);
            }
            state.pointerId = null;
        };

        viewport.addEventListener('pointerup', endDrag);
        viewport.addEventListener('pointercancel', endDrag);
        window.addEventListener('resize', () => layoutMap(true));
    }

    layoutMap(false);
}

function buildItemsOverlayMarkup(itemsConfig = {}) {
    const kicker = itemsConfig.kicker || 'Find Items';
    const title = itemsConfig.title || 'Meaning hides inside objects.';
    const copy = itemsConfig.copy || `
        Items contain memories, and some of them carry a little more meaning than the rest.
        Would you like to discover the items and the stories behind them?
    `;
    const primaryLabel = itemsConfig.primaryLabel || 'Yes';
    const secondaryLabel = itemsConfig.secondaryLabel || 'Hell Yes';

    return `
        <div class="items-panel">
            <button class="map-close" id="items-close" type="button" aria-label="Close items prompt">×</button>
            <div class="items-kicker">${kicker}</div>
            <h2 class="items-title">${title}</h2>
            <p class="items-copy">${copy}</p>
            <div class="items-actions">
                <button class="items-action" id="items-yes" type="button">${primaryLabel}</button>
                <button class="items-action" id="items-hell-yes" type="button">${secondaryLabel}</button>
            </div>
        </div>
    `;
}

function ensureOverlays(homeHref, globalMapConfig, regionalMapConfig, itemsConfig = {}) {
    const rootHref = getRootHref(homeHref);
    if (!document.getElementById('map-overlay')) {
        const mapOverlay = document.createElement('div');
        mapOverlay.id = 'map-overlay';
        mapOverlay.setAttribute('aria-hidden', 'true');
        mapOverlay.innerHTML = buildMapOverlayMarkup(globalMapConfig, 'map-close');
        document.body.appendChild(mapOverlay);
    } else {
        document.getElementById('map-overlay').innerHTML = buildMapOverlayMarkup(globalMapConfig, 'map-close');
    }

    if (!document.getElementById('regional-map-overlay')) {
        const regionalMapOverlay = document.createElement('div');
        regionalMapOverlay.id = 'regional-map-overlay';
        regionalMapOverlay.setAttribute('aria-hidden', 'true');
        regionalMapOverlay.innerHTML = buildMapOverlayMarkup(regionalMapConfig, 'regional-map-close');
        document.body.appendChild(regionalMapOverlay);
    } else {
        document.getElementById('regional-map-overlay').innerHTML = buildMapOverlayMarkup(regionalMapConfig, 'regional-map-close');
    }

    if (!document.getElementById('memo-overlay')) {
        const memoOverlay = document.createElement('div');
        memoOverlay.id = 'memo-overlay';
        memoOverlay.setAttribute('aria-hidden', 'true');
        memoOverlay.innerHTML = `
            <div class="memo-panel">
                <button class="map-close" id="memo-close" type="button" aria-label="Close more panel">×</button>
                <div class="memo-kicker">Atlantic College Memo</div>
                <h2 class="memo-title">More</h2>
                <p class="memo-intro">
                    Private access card
                </p>
                <div class="gift-card">
                    <img class="gift-visual" src="${rootHref}iconntext/waving.GIF" alt="Waving animation">
                    <p class="gift-question">Did you receive a gift?</p>
                    <div class="gift-actions">
                        <button class="gift-action" id="gift-yes" type="button">Yes</button>
                        <button class="gift-action" id="gift-no" type="button">No</button>
                    </div>
                    <form class="gift-form" id="gift-form" autocomplete="off">
                        <input class="gift-input" id="gift-name" type="text" name="name" placeholder="Type your name" required>
                        <input class="gift-input" id="gift-password" type="password" name="password" placeholder="Type password" required>
                        <div class="gift-actions">
                            <button class="gift-action" id="gift-enter" type="submit">Enter Secret Location</button>
                        </div>
                    </form>
                    <p class="gift-note" id="gift-note">Choose an option to continue.</p>
                </div>
            </div>
        `;
        document.body.appendChild(memoOverlay);
    }

    if (!document.getElementById('items-overlay')) {
        const itemsOverlay = document.createElement('div');
        itemsOverlay.id = 'items-overlay';
        itemsOverlay.setAttribute('aria-hidden', 'true');
        itemsOverlay.innerHTML = buildItemsOverlayMarkup(itemsConfig);
        document.body.appendChild(itemsOverlay);
    } else {
        document.getElementById('items-overlay').innerHTML = buildItemsOverlayMarkup(itemsConfig);
    }

    bindMapPan('map-overlay', globalMapConfig);
    bindMapPan('regional-map-overlay', regionalMapConfig);
}

function ensureSideRail() {
    if (document.getElementById('side-tags')) return;
    const sideTags = document.createElement('div');
    sideTags.id = 'side-tags';
    sideTags.setAttribute('aria-label', 'Memo tools');
    sideTags.innerHTML = `
        <button class="side-tag" id="review-memos" type="button">Reveal<br>Memories</button>
        <div class="side-line"></div>
        <button class="side-tag" id="review-notes" type="button">Find<br>Items</button>
        <div class="side-line"></div>
        <button class="side-tag" id="search-stories" type="button">Regional<br>Map</button>
    `;
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle?.nextSibling) {
        document.body.insertBefore(sideTags, heroTitle.nextSibling);
    } else {
        document.body.appendChild(sideTags);
    }
}

function ensureScreenshotButton() {
    let button = document.getElementById('screenshot-button');
    if (!button) {
        button = document.createElement('button');
        button.id = 'screenshot-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Take scene screenshot');
        button.title = 'Take scene screenshot';
        button.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 8.5h3l1.6-2h6.8l1.6 2H20a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17v-7A1.5 1.5 0 0 1 4 8.5Z"></path>
                <circle cx="12" cy="13.2" r="3.2"></circle>
            </svg>
        `;
        document.body.appendChild(button);
    }
    return button;
}

function getPageIdentityContent() {
    const heroTitle = document.getElementById('hero-title');
    const heroTitleLine = heroTitle?.querySelector('.hero-title-line')?.textContent?.trim();
    const heroSubtitle = heroTitle?.querySelector('.hero-subtitle')?.textContent?.trim();

    if (heroTitleLine) {
        return {
            kicker: document.title?.replace(' - Atlantic College Memo', '').trim() === heroTitleLine ? 'Location' : 'Memo',
            title: heroTitleLine,
            copy: heroSubtitle || 'A smaller marker for this page, held just off the edge of the main scene.'
        };
    }

    const pageCard = document.querySelector('.page-card');
    const kicker = pageCard?.querySelector('.kicker')?.textContent?.trim();
    const title = pageCard?.querySelector('h1')?.textContent?.trim();
    const copy = pageCard?.querySelector('p')?.textContent?.trim();

    if (title) {
        return {
            kicker: kicker || 'Subpage',
            title,
            copy: copy || 'A smaller marker for this page, held just off the edge of the main scene.'
        };
    }

    return null;
}

function ensurePageIdentityCard() {
    const content = getPageIdentityContent();
    if (!content) return;

    let card = document.getElementById('page-identity-card');
    if (!card) {
        card = document.createElement('aside');
        card.id = 'page-identity-card';
        card.className = 'page-identity-card';
        document.body.appendChild(card);
    }

    card.innerHTML = `
        <div class="page-identity-kicker">${content.kicker}</div>
        <div class="page-identity-title">${content.title}</div>
        <div class="page-identity-rule" aria-hidden="true"></div>
        <p class="page-identity-copy">${content.copy}</p>
    `;

    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) {
        window.requestAnimationFrame(() => {
            card.classList.add('visible');
        });
        return;
    }

    let navPeekUsed = false;
    let navPeekTimer = null;
    const queueNavPeek = () => {
        if (navPeekUsed) return;
        navPeekUsed = true;
        window.setTimeout(() => {
            document.body.classList.add('nav-peek');
            navPeekTimer = window.setTimeout(() => {
                document.body.classList.remove('nav-peek');
            }, 1600);
        }, 1450);
    };

    const syncVisibility = () => {
        const isHidden = heroTitle.classList.contains('hidden') || heroTitle.style.display === 'none';
        card.classList.toggle('visible', isHidden);
        if (isHidden) queueNavPeek();
    };

    const observer = new MutationObserver(syncVisibility);
    observer.observe(heroTitle, { attributes: true, attributeFilter: ['class', 'style'] });
    syncVisibility();
}

function bindScreenshotBehavior() {
    const button = ensureScreenshotButton();
    if (!button || button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';

    const getSceneCanvas = () => document.querySelector('canvas');

    button.addEventListener('click', async () => {
        const sceneCanvas = getSceneCanvas();
        if (!sceneCanvas) return;

        await new Promise((resolve) => window.requestAnimationFrame(resolve));
        const filename = `${document.title.replace(/\s+-\s+Atlantic College Memo$/, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'scene'}-${new Date().toISOString().replace(/[:.]/g, '-')}.png`;

        const downloadBlob = (blob) => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        };

        if (sceneCanvas.toBlob) {
            sceneCanvas.toBlob(downloadBlob, 'image/png');
            return;
        }

        const link = document.createElement('a');
        link.href = sceneCanvas.toDataURL('image/png');
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
    });
}

function setupUiClickSfx() {
    let audioContext = null;
    let armed = false;

    const ensureContext = async () => {
        if (!audioContext) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return null;
            audioContext = new Ctx();
        }
        if (audioContext.state === 'suspended') {
            try {
                await audioContext.resume();
            } catch (err) {
                return null;
            }
        }
        return audioContext;
    };

    const playClick = async () => {
        const ctx = await ensureContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(980, now);
        osc.frequency.exponentialRampToValueAtTime(620, now + 0.035);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.06, now + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.045);
    };

    const unlock = () => {
        if (armed) return;
        armed = true;
        ensureContext();
    };

    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true });

    document.addEventListener('pointerdown', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (!target.closest('.nav-button, .map-close, .items-action, .gift-action, .side-tag, #screenshot-button')) return;
        playClick();
    }, true);
}

function bindOverlayBehavior(homeHref, globalMapConfig = DEFAULT_MAP_CONFIG, regionalMapConfig = DEFAULT_MAP_CONFIG, itemsConfig = {}) {
    const mapOverlay = document.getElementById('map-overlay');
    const regionalMapOverlay = document.getElementById('regional-map-overlay');
    const memoOverlay = document.getElementById('memo-overlay');
    const itemsOverlay = document.getElementById('items-overlay');
    const mapToggle = document.getElementById('map-toggle');
    const homeReset = document.getElementById('home-reset');
    const memoToggle = document.getElementById('memo-toggle');
    const mapClose = document.getElementById('map-close');
    const regionalMapClose = document.getElementById('regional-map-close');
    const memoClose = document.getElementById('memo-close');
    const itemsClose = document.getElementById('items-close');
    const itemsYes = document.getElementById('items-yes');
    const itemsHellYes = document.getElementById('items-hell-yes');
    const reviewMemosButton = document.getElementById('review-memos');
    const reviewNotesButton = document.getElementById('review-notes');
    const searchStoriesButton = document.getElementById('search-stories');
    const giftYes = document.getElementById('gift-yes');
    const giftNo = document.getElementById('gift-no');
    const giftForm = document.getElementById('gift-form');
    const giftName = document.getElementById('gift-name');
    const giftPassword = document.getElementById('gift-password');
    const giftNote = document.getElementById('gift-note');

    const open = (overlay, overlayId, mapConfig) => {
        overlay.classList.add('visible');
        overlay.setAttribute('aria-hidden', 'false');
        if (overlayId) bindMapPan(overlayId, mapConfig);
    };
    const close = (overlay) => {
        overlay.classList.remove('visible');
        overlay.setAttribute('aria-hidden', 'true');
    };

    mapToggle?.addEventListener('click', () => open(mapOverlay, 'map-overlay', globalMapConfig));
    memoToggle?.addEventListener('click', () => open(memoOverlay));
    homeReset?.addEventListener('click', () => {
        window.location.href = homeHref;
    });
    mapClose?.addEventListener('click', () => close(mapOverlay));
    regionalMapClose?.addEventListener('click', () => close(regionalMapOverlay));
    memoClose?.addEventListener('click', () => close(memoOverlay));
    itemsClose?.addEventListener('click', () => close(itemsOverlay));
    itemsYes?.addEventListener('click', () => {
        close(itemsOverlay);
        if (itemsConfig.primaryHref) window.location.href = itemsConfig.primaryHref;
    });
    itemsHellYes?.addEventListener('click', () => {
        close(itemsOverlay);
        if (itemsConfig.secondaryHref) {
            window.location.href = itemsConfig.secondaryHref;
            return;
        }
        if (itemsConfig.primaryHref) window.location.href = itemsConfig.primaryHref;
    });

    reviewMemosButton?.addEventListener('click', () => open(memoOverlay));
    reviewNotesButton?.addEventListener('click', () => open(itemsOverlay));
    searchStoriesButton?.addEventListener('click', () => open(regionalMapOverlay, 'regional-map-overlay', regionalMapConfig));

    mapOverlay?.addEventListener('click', (event) => {
        if (event.target === mapOverlay) close(mapOverlay);
    });
    regionalMapOverlay?.addEventListener('click', (event) => {
        if (event.target === regionalMapOverlay) close(regionalMapOverlay);
    });
    memoOverlay?.addEventListener('click', (event) => {
        if (event.target === memoOverlay) close(memoOverlay);
    });
    itemsOverlay?.addEventListener('click', (event) => {
        if (event.target === itemsOverlay) close(itemsOverlay);
    });

    giftYes?.addEventListener('click', () => {
        giftForm?.classList.add('visible');
        if (giftNote) giftNote.textContent = 'Enter your name and password.';
        giftName?.focus();
    });

    giftNo?.addEventListener('click', () => {
        giftForm?.classList.remove('visible');
        if (giftNote) giftNote.textContent = 'No worries. You can come back anytime.';
    });

    giftForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const typedName = giftName?.value?.trim();
        const typedPassword = giftPassword?.value?.trim();
        if (!typedName || !typedPassword) {
            if (giftNote) giftNote.textContent = 'Please fill in both fields.';
            return;
        }

        const secretLocationHref = itemsConfig.secretLocationHref || '#';
        if (secretLocationHref === '#') {
            if (giftNote) giftNote.textContent = 'Secret location is still being prepared.';
            return;
        }
        window.location.href = `${secretLocationHref}${secretLocationHref.includes('?') ? '&' : '?'}name=${encodeURIComponent(typedName)}`;
    });

    window.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        close(mapOverlay);
        close(regionalMapOverlay);
        close(memoOverlay);
        close(itemsOverlay);
    });
}

function buildGlobalMapConfig(homeHref) {
    const rootHref = homeHref.replace(/index\.html(?:[?#].*)?$/, '');

    return {
        caption: 'Interactive Map',
        center: { label: 'Atlantic College Memo', left: '38%', top: '45%', icon: `${rootHref}iconntext/Map_icons/Castle_icon.PNG` },
        lines: [
            { left: '38%', top: '50%', width: '19%', rotate: '-18deg' },
            { left: '42%', top: '52%', width: '17%', rotate: '28deg' },
            { left: '32%', top: '44%', width: '20%', rotate: '160deg' },
            { left: '34%', top: '55%', width: '18%', rotate: '208deg' },
            { left: '47%', top: '44%', width: '20%', rotate: '350deg' },
            { left: '36%', top: '40%', width: '18%', rotate: '268deg' }
        ],
        nodes: [
            { label: 'The Arts', href: `${rootHref}pages/The_Arts_folder/The_Arts.html`, left: '58%', top: '34%', icon: `${rootHref}iconntext/Map_icons/TheArts_icon.PNG` },
            { label: 'Seafront', href: `${rootHref}pages/Seafront_folder/Seafront.html`, left: '14%', top: '26%' },
            { label: 'Church', href: `${rootHref}pages/Church_folder/Church.html`, left: '15%', top: '67%', icon: `${rootHref}iconntext/Map_icons/Church_icon.PNG` },
            { label: 'PK', href: `${rootHref}pages/PK_folder/PK.html`, left: '76%', top: '44%', icon: `${rootHref}iconntext/Map_icons/PK_icon.PNG` },
            { label: 'Academic Blocks', href: `${rootHref}pages/Academic_Blocks_folder/Academic_Blocks.html`, left: '37%', top: '18%', icon: `${rootHref}iconntext/Map_icons/AcademicBlocks_icon.PNG` }
        ]
    };
}

function getRootHref(homeHref) {
    return homeHref.replace(/index\.html(?:[?#].*)?$/, '');
}

const DEFAULT_MAP_CONFIG = buildGlobalMapConfig('../index.html');

export function initSharedChrome(options = {}) {
    const homeHref = options.homeHref || '../index.html';
    const globalMapConfig = buildGlobalMapConfig(homeHref);
    const regionalMapConfig = options.regionalMap || globalMapConfig;
    const itemsConfig = options.itemsExperience || {};
    const keepSubpagesPanel = Boolean(options.keepSubpagesPanel);
    document.body.dataset.sharedChrome = 'true';
    ensureStyles();
    ensureTopNav(homeHref);
    ensureOverlays(homeHref, globalMapConfig, regionalMapConfig, itemsConfig);
    ensureSideRail();
    ensureScreenshotButton();
    ensurePageIdentityCard();
    bindOverlayBehavior(homeHref, globalMapConfig, regionalMapConfig, itemsConfig);
    bindScreenshotBehavior();
    setupUiClickSfx();
    if (!keepSubpagesPanel) {
        document.getElementById('subpages-panel')?.remove();
    }
}

export function bindSceneCoordinatePicker({ viewer, THREE }) {
    if (!viewer || !THREE) return;

    let coordinatePopover = document.getElementById('coordinate-popover');
    if (!coordinatePopover) {
        coordinatePopover = document.createElement('div');
        coordinatePopover.id = 'coordinate-popover';
        coordinatePopover.setAttribute('aria-live', 'polite');
        coordinatePopover.innerHTML = `
            <span class="coordinate-popover-label">Picked Point</span>
            <span class="coordinate-popover-value" id="coordinate-popover-value">Double-click the scene to capture coordinates.</span>
        `;
        document.body.appendChild(coordinatePopover);
    }

    const coordinatePopoverValue = document.getElementById('coordinate-popover-value');
    let coordinatePopoverTimer = null;

    const showCoordinatePopover = (message) => {
        coordinatePopoverValue.textContent = message;
        coordinatePopover.classList.add('visible');
        if (coordinatePopoverTimer) window.clearTimeout(coordinatePopoverTimer);
        coordinatePopoverTimer = window.setTimeout(() => {
            coordinatePopover.classList.remove('visible');
        }, 2600);
    };

    const copyPickedCoordinates = async (message) => {
        try {
            await navigator.clipboard.writeText(message);
            showCoordinatePopover(`${message} Copied.`);
        } catch (err) {
            showCoordinatePopover(message);
        }
    };

    const canvas = viewer.renderer?.domElement;
    if (!canvas || canvas.dataset.coordinatePickerBound === 'true') return;
    canvas.dataset.coordinatePickerBound = 'true';
    canvas.addEventListener('dblclick', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!viewer.camera || !viewer.splatMesh) return;
        const rect = canvas.getBoundingClientRect();
        const mousePosition = new THREE.Vector2(event.clientX - rect.left, event.clientY - rect.top);
        const renderDimensions = new THREE.Vector2();
        const hits = [];
        viewer.getRenderDimensions(renderDimensions);
        viewer.raycaster.setFromCameraAndScreenPosition(viewer.camera, mousePosition, renderDimensions);
        viewer.raycaster.intersectSplatMesh(viewer.splatMesh, hits);
        if (!hits.length) {
            showCoordinatePopover('No splat hit found at that point.');
            return;
        }
        const { x, y, z } = hits[0].origin;
        const coordinateMessage = `X ${x.toFixed(2)} Y ${y.toFixed(2)} Z ${z.toFixed(2)}`;
        await copyPickedCoordinates(coordinateMessage);
    });
}
