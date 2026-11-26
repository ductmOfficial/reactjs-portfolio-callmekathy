import { useLayoutEffect, useRef } from "react";

const EASING = "cubic-bezier(0.645, 0.045, 0.355, 1)";
const DURATION_MS = 500;
const DISTANCE_PX = 20;
// Share of the element that must be on screen before it fades in.
const VIEW_FACTOR = 0.25;

/**
 * Fades an element in and slides it up the first time it scrolls into view. While hidden it
 * carries `data-pending`, so CSS can animate its children too (the career path lines), and
 * `--reveal-delay` holds its delay.
 * Does nothing when the visitor prefers reduced motion or the browser has no
 * IntersectionObserver, so the content is always readable.
 */
export function useReveal<T extends HTMLElement>(delayMs = 200) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    element.dataset.pending = "";
    element.style.setProperty("--reveal-delay", `${String(delayMs)}ms`);
    element.style.opacity = "0";
    element.style.transform = `translateY(${String(DISTANCE_PX)}px)`;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        element.style.transition = `opacity ${String(DURATION_MS)}ms ${EASING} ${String(delayMs)}ms, transform ${String(DURATION_MS)}ms ${EASING} ${String(delayMs)}ms`;
        element.style.opacity = "1";
        element.style.transform = "none";
        delete element.dataset.pending;
      },
      { threshold: VIEW_FACTOR },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delayMs]);

  return ref;
}
