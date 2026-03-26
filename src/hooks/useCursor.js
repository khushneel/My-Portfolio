import { useEffect, useRef } from "react";

export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let rafId;
    let isVisible = false;

    const show = () => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "0.6";
      }
    };

    const hide = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      if (label) label.classList.remove("visible");
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      if (label) {
        label.style.left = `${mouseX}px`;
        label.style.top = `${mouseY}px`;
      }
      show();
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => dot.classList.add("clicking");
    const onMouseUp = () => dot.classList.remove("clicking");

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    rafId = requestAnimationFrame(animateRing);

    // Hover detection with data-cursor-label support
    const onEnter = (e) => {
      dot.classList.add("hovered");
      ring.classList.add("hovered");
      const el = e.currentTarget;
      const cursorLabel = el.dataset.cursorLabel;
      if (label && cursorLabel) {
        label.textContent = cursorLabel;
        label.classList.add("visible");
      }
    };

    const onLeave = () => {
      dot.classList.remove("hovered");
      ring.classList.remove("hovered");
      if (label) label.classList.remove("visible");
    };

    const attachToNewElements = () => {
      document
        .querySelectorAll(
          "a, button, [data-cursor-hover], [data-cursor-label], input, textarea, select, label",
        )
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    attachToNewElements();

    // Re-attach when new elements appear
    const observer = new MutationObserver(attachToNewElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return { dotRef, ringRef, labelRef };
}
