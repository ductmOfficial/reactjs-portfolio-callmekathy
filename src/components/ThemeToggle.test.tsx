import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeToggle } from "./ThemeToggle";

const button = () => screen.getByRole("button", { name: "Dark theme" });

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = "light";
    window.localStorage.clear();
    document.head.innerHTML = '<meta name="theme-color" content="#f8f4f1" />';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("starts from the theme already on the page", () => {
    document.documentElement.dataset.theme = "dark";
    render(<ThemeToggle />);

    expect(button()).toHaveAttribute("aria-pressed", "true");
  });

  it("switches the theme, the browser colour and remembers the choice", () => {
    render(<ThemeToggle />);

    fireEvent.click(button());

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(button()).toHaveAttribute("aria-pressed", "true");
    expect(window.localStorage.getItem("theme")).toBe("dark");
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      "content",
      "#1a1718",
    );

    fireEvent.click(button());

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(window.localStorage.getItem("theme")).toBe("light");
  });

  it("still switches when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    render(<ThemeToggle />);

    fireEvent.click(button());

    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
