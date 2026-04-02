const SHARED_CHROME_STYLE_ID = 'shared-subpage-chrome';

const SHARED_CHROME_CSS = `
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
        { left: '34%', top: '55%', width: '18%', rotate: '208deg' }
    ],
    nodes: [
        { label: 'Music', href: './Music_Department_folder/Music_Department.html', left: '58%', top: '34%' },
        { label: 'Languages', href: './Languages.html', left: '59%', top: '62%' },
        { label: 'Seafront', href: './Seafront_folder/Seafront.html', left: '14%', top: '26%' },
        { label: 'Church', href: './Church.html', left: '15%', top: '67%' }
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
    bindOverlayBehavior(homeHref, itemsConfig);
    if (!keepSubpagesPanel) {
        document.getElementById('subpages-panel')?.remove();
    }
}
