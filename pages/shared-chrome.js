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
body[data-shared-chrome="true"] #memo-overlay { z-index: 171; }
body[data-shared-chrome="true"] #items-overlay { z-index: 172; }

body[data-shared-chrome="true"] #map-overlay.visible,
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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    font-family: "Times New Roman", Times, serif;
    font-size: clamp(14px, 1.35vw, 20px);
    letter-spacing: 0.03em;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
    transition: transform 0.22s ease, background 0.22s ease;
}

body[data-shared-chrome="true"] .map-node:hover {
    transform: scale(1.04);
    background: rgba(255, 255, 255, 0.12);
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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
}

body[data-shared-chrome="true"] .place-title,
body[data-shared-chrome="true"] .memo-title,
body[data-shared-chrome="true"] .items-title {
    margin: 14px 0 8px;
    color: white;
    font-family: "Times New Roman", Times, serif;
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
            <button class="nav-link nav-button" id="memo-toggle" type="button" aria-label="Open about panel">
                <span class="nav-icon">?</span>
                <span>About</span>
            </button>
        </div>
    `;
    nav.dataset.homeHref = homeHref;
    return nav;
}

function buildMapOverlayMarkup(mapConfig) {
    const lines = (mapConfig.lines || []).map((line) => `
        <div class="map-line" style="left: ${line.left}; top: ${line.top}; width: ${line.width}; transform: rotate(${line.rotate});"></div>
    `).join('');

    const nodes = (mapConfig.nodes || []).map((node) => `
        <a class="map-node" href="${node.href}" style="left: ${node.left}; top: ${node.top};">${node.label}</a>
    `).join('');

    const placeCard = mapConfig.placeCard ? `
        <div class="place-card">
            <div class="place-kicker">${mapConfig.placeCard.kicker || 'Location'}</div>
            <h2 class="place-title">${mapConfig.placeCard.title}</h2>
            <p class="place-copy">${mapConfig.placeCard.copy}</p>
            ${(mapConfig.placeCard.actions || []).length ? `
                <div class="place-actions">
                    ${mapConfig.placeCard.actions.map((action) => `
                        <a class="place-action" href="${action.href}"${action.target ? ` target="${action.target}" rel="noreferrer"` : ''}>${action.label}</a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    ` : '';

    return `
        <div class="map-panel">
            <div class="map-grid"></div>
            <div class="map-caption">${mapConfig.caption || 'Interactive Map'}</div>
            <button class="map-close" id="map-close" type="button" aria-label="Close map">×</button>
            ${lines}
            <div class="map-node home-node" style="left: ${mapConfig.center.left}; top: ${mapConfig.center.top};">${mapConfig.center.label}</div>
            ${nodes}
            ${placeCard}
        </div>
    `;
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

function ensureOverlays(mapConfig, itemsConfig = {}) {
    if (!document.getElementById('map-overlay')) {
        const mapOverlay = document.createElement('div');
        mapOverlay.id = 'map-overlay';
        mapOverlay.setAttribute('aria-hidden', 'true');
        mapOverlay.innerHTML = buildMapOverlayMarkup(mapConfig);
        document.body.appendChild(mapOverlay);
    } else {
        document.getElementById('map-overlay').innerHTML = buildMapOverlayMarkup(mapConfig);
    }

    if (!document.getElementById('memo-overlay')) {
        const memoOverlay = document.createElement('div');
        memoOverlay.id = 'memo-overlay';
        memoOverlay.setAttribute('aria-hidden', 'true');
        memoOverlay.innerHTML = `
            <div class="memo-panel">
                <button class="map-close" id="memo-close" type="button" aria-label="Close about panel">×</button>
                <div class="memo-kicker">Atlantic College Memo</div>
                <h2 class="memo-title">Farewell Transmission</h2>
                <p class="memo-intro">
                    A note that feels half diary, half departure, and already belongs somewhere between memory and orbit.
                </p>
                <div class="memo-letter">
                    <p>Hello, fellow human ;)</p>
                    <p>It has been my greatest pleasure to cross paths with you in this immense galaxy. But I am afraid it is time to say goodbye.</p>
                    <p>Travellers come and go like meteorites. Yet a voyage among the stars still awaits us, scenes you've never seen.</p>
                    <p>Ah... save your water for the journey. Shall we?</p>
                    <p>Into the Great Wilds and Misty Future!<span class="memo-emphasis">Memo fragment / star log / parting note</span></p>
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

function bindOverlayBehavior(homeHref, itemsConfig = {}) {
    const mapOverlay = document.getElementById('map-overlay');
    const memoOverlay = document.getElementById('memo-overlay');
    const itemsOverlay = document.getElementById('items-overlay');
    const mapToggle = document.getElementById('map-toggle');
    const homeReset = document.getElementById('home-reset');
    const memoToggle = document.getElementById('memo-toggle');
    const mapClose = document.getElementById('map-close');
    const memoClose = document.getElementById('memo-close');
    const itemsClose = document.getElementById('items-close');
    const itemsYes = document.getElementById('items-yes');
    const itemsHellYes = document.getElementById('items-hell-yes');
    const reviewMemosButton = document.getElementById('review-memos');
    const reviewNotesButton = document.getElementById('review-notes');
    const searchStoriesButton = document.getElementById('search-stories');

    const open = (overlay) => {
        overlay.classList.add('visible');
        overlay.setAttribute('aria-hidden', 'false');
    };
    const close = (overlay) => {
        overlay.classList.remove('visible');
        overlay.setAttribute('aria-hidden', 'true');
    };

    mapToggle?.addEventListener('click', () => open(mapOverlay));
    memoToggle?.addEventListener('click', () => open(memoOverlay));
    homeReset?.addEventListener('click', () => {
        window.location.href = homeHref;
    });
    mapClose?.addEventListener('click', () => close(mapOverlay));
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
    searchStoriesButton?.addEventListener('click', () => open(mapOverlay));

    mapOverlay?.addEventListener('click', (event) => {
        if (event.target === mapOverlay) close(mapOverlay);
    });
    memoOverlay?.addEventListener('click', (event) => {
        if (event.target === memoOverlay) close(memoOverlay);
    });
    itemsOverlay?.addEventListener('click', (event) => {
        if (event.target === itemsOverlay) close(itemsOverlay);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        close(mapOverlay);
        close(memoOverlay);
        close(itemsOverlay);
    });
}

const DEFAULT_MAP_CONFIG = {
    caption: 'Interactive Map',
    center: { label: 'Atlantic College Memo', left: '38%', top: '45%' },
    lines: [
        { left: '38%', top: '50%', width: '19%', rotate: '-18deg' },
        { left: '42%', top: '52%', width: '17%', rotate: '28deg' },
        { left: '32%', top: '44%', width: '20%', rotate: '160deg' },
        { left: '34%', top: '55%', width: '18%', rotate: '208deg' },
        { left: '47%', top: '44%', width: '20%', rotate: '350deg' }
    ],
    nodes: [
        { label: 'Music', href: './Music_Department_folder/Music_Department.html', left: '58%', top: '34%' },
        { label: 'Languages', href: './Languages_folder/Languages.html', left: '59%', top: '62%' },
        { label: 'Seafront', href: './Seafront_folder/Seafront.html', left: '14%', top: '26%' },
        { label: 'Church', href: './Church_folder/Church.html', left: '15%', top: '67%' },
        { label: 'PK', href: './PK_folder/PK.html', left: '76%', top: '44%' }
    ],
    placeCard: {
        kicker: 'Location',
        title: 'UWC Atlantic',
        copy: `St Donat's Castle, Llantwit Major, CF61 1WF, Wales, UK.
Rail access typically routes through Llantwit Major or Bridgend before the final taxi leg.`,
        actions: [
            { label: 'Open in Maps', href: 'https://maps.google.com/?q=UWC+Atlantic+St+Donat%27s+Castle+Llantwit+Major+CF61+1WF', target: '_blank' },
            { label: 'Official Site', href: 'https://www.uwcatlantic.org/contact', target: '_blank' }
        ]
    }
};

export function initSharedChrome(options = {}) {
    const homeHref = options.homeHref || '../index.html';
    const mapConfig = options.regionalMap || DEFAULT_MAP_CONFIG;
    const itemsConfig = options.itemsExperience || {};
    const keepSubpagesPanel = Boolean(options.keepSubpagesPanel);
    document.body.dataset.sharedChrome = 'true';
    ensureStyles();
    ensureTopNav(homeHref);
    ensureOverlays(mapConfig, itemsConfig);
    ensureSideRail();
    ensureScreenshotButton();
    ensurePageIdentityCard();
    bindOverlayBehavior(homeHref, itemsConfig);
    bindScreenshotBehavior();
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
