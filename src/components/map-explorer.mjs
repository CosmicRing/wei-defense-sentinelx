export function renderHero(root, content) {
  root.innerHTML = `
    <div class="hero-media" aria-hidden="true">
      <img src="${content.assets.heroImage}" alt="" />
      <div class="scan-ring"></div>
    </div>
    <div class="hero-copy">
      <p class="eyebrow">${content.hero.eyebrow}</p>
      <h1 id="hero-title">${content.hero.title}</h1>
      <p>${content.hero.subtitle}</p>
      <div class="hero-actions">
        <a class="button primary" href="#products">${content.hero.primaryCta}</a>
        <a class="button ghost" href="#case">${content.hero.secondaryCta}</a>
      </div>
    </div>
    <div class="hero-metrics" aria-label="Core capabilities">
      ${content.hero.metrics
        .map(([title, copy]) => `<article><strong>${title}</strong><span>${copy}</span></article>`)
        .join("")}
    </div>
  `;
}
