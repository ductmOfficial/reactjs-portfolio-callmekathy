import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { App } from "./App";
import { content, ContentContext, profile } from "./content";

import type { Content } from "./content";

let current: Content = content.en;

function renderPage() {
  return render(
    <ContentContext value={current}>
      <App />
    </ContentContext>,
  );
}

const hrefs = (container: HTMLElement) =>
  [...container.querySelectorAll("a")].map((link) => link.getAttribute("href") ?? "");

describe.each(Object.values(content))("App in $lang", (c) => {
  beforeEach(() => {
    current = c;
  });

  it("leads with the headline in the only h1", () => {
    renderPage();

    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(c.hero.tagline);
  });

  it("renders every section the navigation links to", () => {
    const { container } = renderPage();
    // The menu is hidden below the lg breakpoint, and jsdom applies no media queries.
    const nav = screen.getByRole("navigation", { hidden: true });

    for (const { id, title } of c.nav) {
      expect(within(nav).getByRole("link", { name: title, hidden: true })).toHaveAttribute(
        "href",
        `#${id}`,
      );
      expect(container.querySelector(`section#${id}`)).not.toBeNull();
    }
  });

  it("shows every stat, career stop, step, skill and certification", () => {
    renderPage();

    for (const stat of c.stats) {
      expect(screen.getByText(stat.value, { selector: ".sr-only" })).toBeInTheDocument();
    }
    for (const item of c.career.items) {
      expect(screen.getAllByText(item.role).length).toBeGreaterThan(0);
      expect(screen.getByText(item.period)).toBeInTheDocument();
    }
    for (const step of c.howIWork.steps) {
      expect(screen.getByRole("heading", { name: step.title })).toBeInTheDocument();
    }
    for (const item of c.skills.groups.flatMap((group) => group.items)) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
    for (const item of c.certifications.items) {
      expect(screen.getByRole("heading", { name: item.name })).toBeInTheDocument();
    }
  });

  it("marks the current role as running and the others as passed", () => {
    renderPage();

    const running = c.career.items.filter((item) => item.status === "running");
    expect(screen.getAllByText(c.labels.running)).toHaveLength(running.length);
    expect(screen.getAllByText(c.labels.passed)).toHaveLength(
      c.career.items.length - running.length,
    );
  });

  it("marks every unconfirmed line", () => {
    renderPage();

    const unconfirmed = [
      ...c.career.items.map((item) => item.summary),
      ...c.howIWork.steps.map((step) => step.text),
      ...c.certifications.items.map((item) => item.date),
    ].filter((line) => typeof line !== "string");

    expect(unconfirmed.length).toBeGreaterThan(0);
    expect(screen.getAllByText(c.labels.toConfirm)).toHaveLength(unconfirmed.length);
  });

  it("links the CV of this language and the email address", () => {
    const { container } = renderPage();

    const pdfs = hrefs(container).filter((href) => href.endsWith(".pdf"));
    expect(pdfs.length).toBeGreaterThan(0);
    expect(new Set(pdfs)).toEqual(new Set([c.resumeUrl]));
    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      expect.stringMatching(new RegExp(`^mailto:${profile.email}\\?subject=`)),
    );
  });

  it("links LinkedIn and no Facebook, Skype or phone", () => {
    const { container } = renderPage();
    const links = hrefs(container);

    expect(links).toContain(profile.social.linkedin);
    expect(links.filter((href) => /facebook\.com|^(skype|tel):/.test(href))).toEqual([]);
    expect(container.textContent).not.toMatch(/\+?\d[\d\s().-]{7,}\d/);
    expect(container.textContent).not.toMatch(/skype|phone/i);
  });
});
