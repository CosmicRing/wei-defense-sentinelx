function sectionHead(kicker, title, id) {
  return `
    <div class="section-head">
      <p class="section-kicker">${kicker}</p>
      <h2 id="${id}">${title}</h2>
    </div>
  `;
}

export function renderLanguages(root, content) {
  root.innerHTML = `
    <div class="language-version-bar" id="language-versions" aria-labelledby="languages-title">
      <div>
        <p class="section-kicker">${content.activeLocale === "zh" ? "官网语言版本" : "Website Versions"}</p>
        <h2 id="languages-title">${content.activeLocale === "zh" ? "选择官网语言" : "Choose a website language"}</h2>
      </div>
      <nav class="language-switcher" aria-label="Website language versions">
        ${content.localeOptions
          .map(([code, label, short]) => {
            const href = `?lang=${code}#top`;
            const active = code === content.activeLocale ? " is-active" : "";
            return `<a class="language-option${active}" href="${href}" lang="${code}"><strong>${short}</strong><span>${label}</span></a>`;
          })
          .join("")}
      </nav>
    </div>
  `;
}

export function renderIdentity(root, content) {
  root.innerHTML = `
    <div class="identity-copy">
      <p class="section-kicker">${content.identity.kicker}</p>
      <h2 id="identity-title">${content.identity.title}</h2>
      <p>${content.identity.meaning}</p>
    </div>
    <div class="identity-grid">
      <article class="identity-logo identity-mark-card">
        <div class="identity-wordmark wei-wordmark" aria-hidden="true">
          <span>W</span><span>E</span><span>I</span>
        </div>
        <span>${content.brand.chineseName}</span>
        <small>${content.brand.tagline}</small>
      </article>
      <article class="identity-logo identity-word-card">
        <strong>WEI DEFENSE</strong>
        <span>Autonomous Security Systems</span>
      </article>
      ${content.identity.cards
        .map(
          ([title, copy]) => `
            <article class="identity-card">
              <span>${title}</span>
              <p>${copy}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function renderSolutions(root, content) {
  root.innerHTML = `
    ${sectionHead(content.sections.solutionsKicker, content.sections.solutionsTitle, "solutions-title")}
    <div class="solution-grid">
      ${content.solutions
        .map(
          ([tag, title, copy]) => `
            <article class="solution-card">
              <span>${tag}</span>
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function renderProducts(root, content) {
  root.innerHTML = `
    ${sectionHead(content.sections.productsKicker, content.sections.productsTitle, "products-title")}
    <figure class="product-family">
      <img src="${content.assets.productFamilyImage}" alt="Generated WEI DEFENSE autonomous product family visual" />
    </figure>
    <div class="product-grid">
      ${content.products
        .map(
          (product) => `
            <article class="product-card">
              <div>
                <span>${product.series}</span>
                <h3>${product.title}</h3>
                <p>${product.subtitle}</p>
                <small>${product.models}</small>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function renderPlatform(root, content) {
  root.innerHTML = `
    <div class="platform-media">
      <img src="${content.assets.commandImage}" alt="Generated autonomous refinery security command center with digital twin displays" />
    </div>
    <div class="platform-copy">
      <p class="section-kicker">${content.sections.platformKicker}</p>
      <h2 id="platform-title">${content.sections.platformTitle}</h2>
      <div class="platform-list">
        ${content.platforms.map(([en, zh]) => `<span><strong>${en}</strong>${zh}</span>`).join("")}
      </div>
      <div class="capability-list">
        ${content.capabilities.map(([en, zh]) => `<article><strong>${en}</strong><span>${zh}</span></article>`).join("")}
      </div>
    </div>
  `;
}

export function renderCase(root, content) {
  root.innerHTML = `
    <div class="case-copy">
      <p class="section-kicker">${content.case.kicker}</p>
      <h2 id="case-title">${content.case.title}</h2>
      <p>${content.case.copy}</p>
    </div>
    <div class="case-visual">
      <img src="${content.assets.responseImage}" alt="Generated refinery target tracking and layered response chain overview" />
      <div class="case-table">
        ${content.case.scenario
          .map(
            ([label, copy]) => `
              <article>
                <strong>${label}</strong>
                <p>${copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderFramework(root, content) {
  root.innerHTML = `
    ${sectionHead(content.framework.kicker, content.framework.title, "framework-title")}
    <div class="flow-layout">
      <div class="flow-diagram" data-flow-diagram aria-label="Animated mission state machine">
        <svg class="flow-lines" viewBox="0 0 1000 760" preserveAspectRatio="none" aria-hidden="true">
          <path class="flow-line main-line" data-flow-line d="M500 55 V660 H775 V95 H500" />
          <path class="flow-line" data-flow-line d="M205 110 H352" />
          <path class="flow-line" data-flow-line d="M205 235 H352" />
          <path class="flow-line" data-flow-line d="M205 235 V360 H352" />
          <path class="flow-line" data-flow-line d="M648 360 H805" />
          <path class="flow-line" data-flow-line d="M648 485 H805" />
          <path class="flow-line" data-flow-line d="M352 540 H205 V620 H352" />
          <path class="flow-line" data-flow-line d="M500 660 H650" />
        </svg>
        <div class="start-node">Start</div>
        ${content.framework.states
          .map(
            ([number, title, subtitle, copy], index) => `
              <article class="state-node state-${index + 1}" data-flow-step>
                <span>${number}</span>
                <h3>${title}</h3>
                <small>${subtitle}</small>
                <p>${copy}</p>
              </article>
            `
          )
          .join("")}
        ${content.framework.modules
          .map(
            ([key, copy]) => `
              <article class="module-node module-${key.toLowerCase()}" data-flow-module>
                <span>${key}</span>
                <p>${copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <aside class="flow-legend">
        <div><span class="legend-state"></span>State</div>
        <div><span class="legend-module"></span>External entity / module</div>
        <div><span class="legend-transition"></span>State transition</div>
      </aside>
    </div>
  `;
}

export function renderContact(root, content) {
  root.innerHTML = `
    <div>
      <p class="section-kicker">Contact</p>
      <h2 id="contact-title">${content.contact.title}</h2>
      <p>${content.contact.copy}</p>
    </div>
    <a class="button primary" href="mailto:${content.contact.email}">${content.contact.email}</a>
  `;
}
