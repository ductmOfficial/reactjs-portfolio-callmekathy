import { useLayoutEffect, useRef } from "react";

const DURATION_MS = 1400;
const easeOut = (t: number) => 1 - (1 - t) ** 3;

/** Splits "34/40" into 34 and "/40", "2+ yrs" into 2 and "+ yrs"; null when it starts with no number. */
export function splitLeadingNumber(value: string) {
  const match = /^(\d+(?:\.(\d+))?)(.*)$/s.exec(value);
  if (!match) return null;
  return { number: Number(match[1]), decimals: match[2]?.length ?? 0, rest: match[3] ?? "" };
}

/**
 * Counts the leading number of a stat up from 0 when it scrolls into view. The final value is
 * rendered first, so it is what screen readers, crawlers and reduced-motion visitors get; the
 * ticking copy is aria-hidden and written straight to the DOM, without a re-render per frame.
 */
export function CountUp({ value, delayMs = 0 }: { value: string; delayMs?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const parts = splitLeadingNumber(value);
    if (
      !element ||
      !parts ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const show = (n: number) => {
      element.textContent = `${n.toFixed(parts.decimals)}${parts.rest}`;
    };
    show(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now() + delayMs;
        const tick = (now: number) => {
          const t = Math.min(1, Math.max(0, (now - start) / DURATION_MS));
          show(parts.number * easeOut(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value, delayMs]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
    </>
  );
}
