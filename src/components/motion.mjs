export function initMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ duration: 0.7, ease: "power3.out" });

  gsap.set(".menu-panel", { xPercent: -106, autoAlpha: 1 });
  gsap.set(".search-panel", { y: -18, autoAlpha: 0 });

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 981px)",
      isFlowDesktop: "(min-width: 721px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      const { isDesktop, isFlowDesktop, reduceMotion } = context.conditions;

      if (reduceMotion) {
        gsap.set(
          ".hero-copy > *, .hero-media, .hero-metrics article, .language-option, .identity-copy > *, .identity-grid > *, .solution-card, .product-card, .platform-media, .platform-copy > *, .case-copy > *, .case-table article, .state-node, .module-node, .contact",
          { clearProps: "all", autoAlpha: 1 }
        );
        return;
      }

      gsap.set(".hero-copy > *, .hero-metrics article", { y: 28, autoAlpha: 0 });
      gsap.set(".hero-media", { scale: 0.94, y: 28, autoAlpha: 0 });

      gsap.timeline()
        .from(".site-header", { y: -26, autoAlpha: 0, duration: 0.7 }, 0)
        .to(".hero-copy > *", { y: 0, autoAlpha: 1, stagger: 0.08 }, 0.16)
        .to(".hero-media", { scale: 1, y: 0, autoAlpha: 1, duration: 1.0 }, 0.26)
        .to(".hero-metrics article", { y: 0, autoAlpha: 1, stagger: 0.06 }, 0.55);

      gsap.to(".hero-media img", {
        yPercent: isDesktop ? -6 : -3,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".scan-ring", {
        rotation: "+=360",
        duration: 28,
        ease: "none",
        repeat: -1
      });

      gsap.utils
        .toArray(".section-head, .identity-copy > *, .platform-copy > *, .case-copy > *, .contact")
        .forEach((element) => {
          gsap.from(element, {
            y: 34,
            autoAlpha: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              toggleActions: "play none none reverse"
            }
          });
        });

      ScrollTrigger.batch(
        ".language-option, .identity-grid > *, .solution-card, .product-card, .capability-list article, .platform-list span, .case-table article",
        {
          start: "top 86%",
          batchMax: isDesktop ? 6 : 2,
          once: true,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { y: 42, autoAlpha: 0, scale: 0.985 },
              { y: 0, autoAlpha: 1, scale: 1, stagger: 0.06, overwrite: true }
            );
          }
        }
      );

      if (isFlowDesktop) {
        const steps = gsap.utils.toArray("[data-flow-step]");
        const modules = gsap.utils.toArray("[data-flow-module]");
        const lines = gsap.utils.toArray("[data-flow-line]");

        gsap.set([...steps, ...modules], { y: 18, autoAlpha: 0 });
        lines.forEach((line) => {
          const length = line.getTotalLength();
          gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        });

        const flowTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".flow",
            start: "top top",
            end: "+=2200",
            pin: true,
            scrub: 1,
            anticipatePin: 1
          },
          defaults: { ease: "power2.out" }
        });

        flowTl
          .to(lines, { strokeDashoffset: 0, duration: 1.2, stagger: 0.08 }, 0)
          .to(modules, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.06 }, 0.12)
          .to(steps, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, 0.2);

        steps.forEach((step, index) => {
          flowTl
            .call(() => {
              steps.forEach((item) => item.classList.remove("is-active"));
              step.classList.add("is-active");
            }, null, 0.55 + index * 0.18)
            .to(step, { scale: 1.035, duration: 0.12, yoyo: true, repeat: 1 }, 0.55 + index * 0.18);
        });
      } else {
        gsap.from("[data-flow-step], [data-flow-module]", {
          y: 28,
          autoAlpha: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".flow-diagram",
            start: "top 82%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }
  );

  window.addEventListener("load", () => ScrollTrigger.refresh());
}
