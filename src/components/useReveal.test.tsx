import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useReveal } from "./useReveal";

function Revealed({ delayMs }: { delayMs?: number }) {
  const ref = useReveal<HTMLDivElement>(delayMs);
  return <div ref={ref}>content</div>;
}

type Callback = (entries: Pick<IntersectionObserverEntry, "isIntersecting">[]) => void;

let observerCallback: Callback | undefined;
const disconnect = vi.fn();

function mockBrowser({ reducedMotion }: { reducedMotion: boolean }) {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function (this: unknown, callback: Callback) {
      observerCallback = callback;
      return { observe: vi.fn(), disconnect };
    }),
  );
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: reducedMotion })),
  );
}

describe("useReveal", () => {
  beforeEach(() => {
    observerCallback = undefined;
    disconnect.mockClear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("leaves content visible when IntersectionObserver is missing", () => {
    render(<Revealed />);

    expect(screen.getByText("content").style.opacity).toBe("");
  });

  it("leaves content visible when the visitor prefers reduced motion", () => {
    mockBrowser({ reducedMotion: true });
    render(<Revealed />);

    expect(screen.getByText("content").style.opacity).toBe("");
    expect(observerCallback).toBeUndefined();
  });

  it("hides content until it scrolls into view, then fades it in after the delay", () => {
    mockBrowser({ reducedMotion: false });
    render(<Revealed delayMs={300} />);
    const element = screen.getByText("content");

    expect(element.style.opacity).toBe("0");

    observerCallback?.([{ isIntersecting: false }]);
    expect(element.style.opacity).toBe("0");

    observerCallback?.([{ isIntersecting: true }]);
    expect(element.style.opacity).toBe("1");
    expect(element.style.transform).toBe("none");
    expect(element.style.transition).toContain("300ms");
    expect(disconnect).toHaveBeenCalled();
  });

  it("stops observing on unmount", () => {
    mockBrowser({ reducedMotion: false });
    const { unmount } = render(<Revealed />);

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});
