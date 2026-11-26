import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { App } from "../App";
import { content } from "../content";
import { LanguageProvider } from "./LanguageProvider";

function renderPage() {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  );
}

const h1 = () => screen.getByRole("heading", { level: 1 });

describe("LanguageProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("starts in English", () => {
    renderPage();

    expect(h1()).toHaveTextContent(content.en.hero.tagline);
    expect(document.documentElement.lang).toBe("en");
    expect(window.location.search).toBe("");
  });

  it("switches the copy, the page language, the CV and the URL", () => {
    renderPage();

    fireEvent.click(screen.getByRole("button", { name: "VI Tiếng Việt" }));

    expect(h1()).toHaveTextContent(content.vi.hero.tagline);
    expect(document.documentElement.lang).toBe("vi");
    expect(window.location.search).toBe("?lang=vi");
    expect(window.localStorage.getItem("lang")).toBe("vi");
    expect(screen.getByRole("link", { name: content.vi.labels.downloadCv })).toHaveAttribute(
      "href",
      "/resume-vi.pdf",
    );
    expect(screen.getByRole("button", { name: "VI Tiếng Việt" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    fireEvent.click(screen.getByRole("button", { name: "EN English" }));

    expect(h1()).toHaveTextContent(content.en.hero.tagline);
    expect(window.location.search).toBe("");
  });

  it("opens in the language of a shared link", () => {
    window.history.replaceState(null, "", "/?lang=vi");
    renderPage();

    expect(h1()).toHaveTextContent(content.vi.hero.tagline);
  });

  it("remembers the last choice", () => {
    window.localStorage.setItem("lang", "vi");
    renderPage();

    expect(h1()).toHaveTextContent(content.vi.hero.tagline);
  });

  it("ignores an unknown language and blocked storage", () => {
    window.history.replaceState(null, "", "/?lang=fr");
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    renderPage();

    expect(h1()).toHaveTextContent(content.en.hero.tagline);
  });
});
