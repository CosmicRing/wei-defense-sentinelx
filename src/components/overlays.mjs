export function initOverlays() {
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const search = document.querySelector("[data-search]");
  const menuPanel = document.querySelector(".menu-panel");
  const menuScrim = document.querySelector(".menu-scrim");
  const searchPanel = document.querySelector(".search-panel");
  const searchScrim = document.querySelector(".search-scrim");

  function setHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  function setOverlayLock(isLocked) {
    document.documentElement.style.overflow = isLocked ? "hidden" : "";
  }

  function openMenu() {
    menu?.classList.add("is-open");
    menu?.setAttribute("aria-hidden", "false");
    setOverlayLock(true);

    if (!window.gsap) {
      menuScrim.style.opacity = "1";
      menuPanel.style.transform = "translateX(0)";
      return;
    }

    gsap.killTweensOf([menuScrim, menuPanel, ".menu-nav a", ".menu-panel p"]);
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .to(menuScrim, { opacity: 1, duration: 0.24 }, 0)
      .to(menuPanel, { xPercent: 0, autoAlpha: 1, duration: 0.5 }, 0)
      .fromTo(
        ".menu-nav a, .menu-panel p",
        { x: -24, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, stagger: 0.045, duration: 0.34 },
        0.16
      );
  }

  function closeMenu() {
    if (!window.gsap) {
      menu?.classList.remove("is-open");
      menu?.setAttribute("aria-hidden", "true");
      setOverlayLock(false);
      menuScrim.style.opacity = "0";
      menuPanel.style.transform = "";
      return;
    }

    gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        menu?.classList.remove("is-open");
        menu?.setAttribute("aria-hidden", "true");
        setOverlayLock(search?.classList.contains("is-open"));
      }
    })
      .to(menuPanel, { xPercent: -106, duration: 0.32 }, 0)
      .to(menuScrim, { opacity: 0, duration: 0.22 }, 0);
  }

  function openSearch() {
    search?.classList.add("is-open");
    search?.setAttribute("aria-hidden", "false");
    setOverlayLock(true);

    if (!window.gsap) {
      searchScrim.style.opacity = "1";
      searchPanel.style.opacity = "1";
      searchPanel.style.transform = "translateY(0)";
      return;
    }

    gsap.killTweensOf([searchScrim, searchPanel, ".keyword-cloud a"]);
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .to(searchScrim, { opacity: 1, duration: 0.22 }, 0)
      .to(searchPanel, { y: 0, autoAlpha: 1, duration: 0.36 }, 0)
      .fromTo(
        ".keyword-cloud a",
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.25 },
        0.14
      );

    window.setTimeout(() => search?.querySelector("input")?.focus(), 120);
  }

  function closeSearch() {
    if (!window.gsap) {
      search?.classList.remove("is-open");
      search?.setAttribute("aria-hidden", "true");
      setOverlayLock(false);
      searchScrim.style.opacity = "0";
      searchPanel.style.opacity = "0";
      searchPanel.style.transform = "";
      return;
    }

    gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        search?.classList.remove("is-open");
        search?.setAttribute("aria-hidden", "true");
        setOverlayLock(menu?.classList.contains("is-open"));
      }
    })
      .to(searchPanel, { y: -18, autoAlpha: 0, duration: 0.24 }, 0)
      .to(searchScrim, { opacity: 0, duration: 0.22 }, 0);
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  document.querySelector("[data-open-menu]")?.addEventListener("click", openMenu);
  document.querySelectorAll("[data-close-menu]").forEach((element) => {
    element.addEventListener("click", closeMenu);
  });

  document.querySelector("[data-open-search]")?.addEventListener("click", openSearch);
  document.querySelectorAll("[data-close-search]").forEach((element) => {
    element.addEventListener("click", closeSearch);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (menu?.classList.contains("is-open")) closeMenu();
    if (search?.classList.contains("is-open")) closeSearch();
  });
}
