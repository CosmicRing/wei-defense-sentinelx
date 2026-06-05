export function renderHeader(root, content) {
  root.innerHTML = `
    <a class="brand" href="#top" aria-label="${content.brand.name} home">
      <span class="brand-mark wei-wordmark" aria-hidden="true">
        <span>W</span><span>E</span><span>I</span>
      </span>
      <span>
        <strong>${content.brand.name}</strong>
        <small>${content.brand.chineseName}</small>
      </span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      ${content.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
    </nav>
    <div class="header-actions">
      <a class="locale-pill" href="#language-versions">${content.activeLocale.toUpperCase()}</a>
      <button class="icon-button" type="button" data-open-search aria-label="Open search" title="Search">S</button>
      <button class="menu-button" type="button" data-open-menu aria-label="Open menu" title="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

export function renderMenu(root, content) {
  root.innerHTML = `
    <button class="menu-scrim" type="button" data-close-menu aria-label="Close menu"></button>
    <div class="menu-panel">
      <div class="menu-top">
        <span>${content.brand.name}</span>
        <button class="close-button" type="button" data-close-menu aria-label="Close menu">x</button>
      </div>
      <nav class="menu-nav" aria-label="Menu navigation">
        ${content.nav.map(([label, href]) => `<a href="${href}" data-close-menu>${label}</a>`).join("")}
      </nav>
      <p>${content.brand.about}</p>
    </div>
  `;
}

export function renderSearch(root, content) {
  root.innerHTML = `
    <button class="search-scrim" type="button" data-close-search aria-label="Close search"></button>
    <div class="search-panel">
      <div class="search-panel-top">
        <h2>${content.search.title}</h2>
        <button class="close-button" type="button" data-close-search aria-label="Close search">x</button>
      </div>
      <label class="search-box">
        <span>${content.search.label}</span>
        <input type="search" placeholder="${content.search.placeholder}" />
      </label>
      <div class="keyword-cloud" aria-label="Recommended keywords">
        ${content.search.keywords
          .map((keyword) => `<a href="#framework" data-close-search>${keyword}</a>`)
          .join("")}
      </div>
    </div>
  `;
}

export function renderFooter(root, content) {
  root.innerHTML = `
    <div class="footer-brand">
      <span class="brand-mark wei-wordmark" aria-hidden="true">
        <span>W</span><span>E</span><span>I</span>
      </span>
      <div>
        <strong>${content.brand.name}</strong>
        <p>${content.brand.tagline}</p>
      </div>
    </div>
    <div class="footer-links">
      ${content.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      <a href="mailto:${content.contact.email}">Email</a>
    </div>
  `;
}
