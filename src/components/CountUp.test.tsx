import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CountUp, splitLeadingNumber } from "./CountUp";

type Callback = (entries: Pick<IntersectionObserverEntry, "isIntersecting">[]) => void;

let intersect: Callback | undefined;
const disconnect = vi.fn();
let frames: FrameRequestCallback[] = [];

function mockBrowser({ reducedMotion }: { reducedMotion: boolean }) {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function (this: unknown, callback: Callback) {
      intersect = callback;
      return { observe: vi.fn(), disconnect };
    }),
  );
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: reducedMotion })),
  );
  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn((callback: FrameRequestCallback) => {
      frames.push(callback);
      return frames.length;
    }),
  );
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
}

// The visible, ticking copy is the aria-hidden one.
const ticker = () =>
  screen.getByText((_, element) => element?.getAttribute("aria-hidden") === "true");

function runFrames(at: number) {
  const pending = frames;
  frames = [];
  for (const frame of pending) frame(at);
}

describe("splitLeadingNumber", () => {
  it.each([
    ["34/40", { number: 34, decimals: 0, rest: "/40" }],
    ["2+ yrs", { number: 2, decimals: 0, rest: "+ yrs" }],
    ["6.5", { number: 6.5, decimals: 1, rest: "" }],
    ["8 năm", { number: 8, decimals: 0, rest: " năm" }],
  ])("splits %s", (value, expected) => {
    expect(splitLeadingNumber(value)).toEqual(expected);
  });

  it("returns null without a leading number", () => {
    expect(splitLeadingNumber("IELTS")).toBeNull();
  });
});

describe("CountUp", () => {
  beforeEach(() => {
    intersect = undefined;
    frames = [];
    disconnect.mockClear();
    vi.spyOn(performance, "now").mockReturnValue(0);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("gives screen readers the final value", () => {
    render(<CountUp value="34/40" />);

    expect(screen.getByText("34/40", { selector: ".sr-only" })).toBeInTheDocument();
  });

  it("shows the final value at once when motion is reduced", () => {
    mockBrowser({ reducedMotion: true });
    render(<CountUp value="34/40" />);

    expect(ticker()).toHaveTextContent("34/40");
    expect(intersect).toBeUndefined();
  });

  it("counts up from zero once in view and keeps the decimals", () => {
    mockBrowser({ reducedMotion: false });
    render(<CountUp value="6.5" />);

    expect(ticker()).toHaveTextContent("0.0");

    intersect?.([{ isIntersecting: true }]);
    runFrames(700);
    const midway = Number(ticker().textContent);
    expect(midway).toBeGreaterThan(0);
    expect(midway).toBeLessThan(6.5);

    runFrames(1400);
    expect(ticker()).toHaveTextContent("6.5");
    expect(frames).toHaveLength(0);
  });

  it("waits while out of view and restores the value on unmount", () => {
    mockBrowser({ reducedMotion: false });
    const { unmount, container } = render(<CountUp value="2+ yrs" />);

    intersect?.([{ isIntersecting: false }]);
    expect(ticker()).toHaveTextContent("0+ yrs");

    const element = ticker();
    unmount();
    expect(element.textContent).toBe("2+ yrs");
    expect(container).toBeEmptyDOMElement();
    expect(disconnect).toHaveBeenCalled();
  });

  it("leaves a value without a number alone", () => {
    mockBrowser({ reducedMotion: false });
    render(<CountUp value="IELTS" />);

    expect(ticker()).toHaveTextContent("IELTS");
    expect(intersect).toBeUndefined();
  });
});
