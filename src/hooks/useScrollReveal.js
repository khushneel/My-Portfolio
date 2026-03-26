import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 50,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = "power3.out",
      stagger = 0,
      start = "top 85%",
    } = options;

    const targets = stagger > 0 ? el.children : el;

    gsap.fromTo(
      targets,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return ref;
}

export function useTextReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.innerText.split("");
    el.innerHTML = chars
      .map(
        (c) =>
          `<span style="display:inline-block;opacity:0;transform:translateY(20px)">${c === " " ? "&nbsp;" : c}</span>`,
      )
      .join("");

    const spans = el.querySelectorAll("span");
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return ref;
}

/**
 * Animate a set of elements with stagger as they enter the viewport.
 * Usage:  const ref = useStaggerReveal();  <div ref={ref}> <card/> <card/> </div>
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.65,
      stagger = 0.1,
      ease = "power3.out",
      start = "top 82%",
      scale = 1,
    } = options;

    const items = container.children;
    if (!items.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      items,
      { y, x, opacity, scale },
      { y: 0, x: 0, opacity: 1, scale: 1, duration, stagger, ease },
    );

    return () => tl.kill();
  }, []);

  return ref;
}

/**
 * Pinned horizontal scroll for a container of cards.
 */
export function useHorizontalScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const panels = container.querySelectorAll(".h-panel");
    if (!panels.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });

    tl.to(panels, { xPercent: -100 * (panels.length - 1), ease: "none" });

    return () => tl.kill();
  }, []);

  return ref;
}
