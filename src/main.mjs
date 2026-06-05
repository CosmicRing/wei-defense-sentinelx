import { getSiteContent } from "./data/site-content.mjs";
import { renderFooter, renderHeader, renderMenu, renderSearch } from "./components/layout.mjs";
import { renderHero } from "./components/map-explorer.mjs";
import {
  renderCase,
  renderContact,
  renderFramework,
  renderIdentity,
  renderLanguages,
  renderPlatform,
  renderProducts,
  renderSolutions
} from "./components/content-sections.mjs";
import { initOverlays } from "./components/overlays.mjs";
import { initMotion } from "./components/motion.mjs";

const params = new URLSearchParams(window.location.search);
const siteContent = getSiteContent(params.get("lang") || "en");

document.documentElement.lang = siteContent.lang;
document.documentElement.dir = siteContent.dir || "ltr";

renderHeader(document.querySelector('[data-component="site-header"]'), siteContent);
renderMenu(document.querySelector('[data-component="site-menu"]'), siteContent);
renderSearch(document.querySelector('[data-component="site-search"]'), siteContent);
renderHero(document.querySelector('[data-component="hero"]'), siteContent);
renderLanguages(document.querySelector('[data-component="languages"]'), siteContent);
renderIdentity(document.querySelector('[data-component="identity"]'), siteContent);
renderSolutions(document.querySelector('[data-component="solutions"]'), siteContent);
renderProducts(document.querySelector('[data-component="products"]'), siteContent);
renderPlatform(document.querySelector('[data-component="platform"]'), siteContent);
renderCase(document.querySelector('[data-component="case"]'), siteContent);
renderFramework(document.querySelector('[data-component="framework"]'), siteContent);
renderContact(document.querySelector('[data-component="contact"]'), siteContent);
renderFooter(document.querySelector('[data-component="site-footer"]'), siteContent);

initOverlays();
initMotion();
