import { ThemeProvider } from "@mui/material/styles";
import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { App } from "./App";
import { content, ContentContext, profile } from "./content";
import { theme } from "./theme";

import type { Content } from "./content";

let current: Content = content.en;

function renderPage() {
  return render(
    <ThemeProvider theme={theme}>
      <ContentContext value={current}>
        <App />
      </ContentContext>
    </ThemeProvider>,
  );
}

describe.each(Object.values(content))("App in $lang", (en) => {
  beforeEach(() => {
    current = en;
  });

  it("names the person in the only h1", () => {
    renderPage();

    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(en.name);
  });

  it("renders every section the navigation links to", () => {
    const { container } = renderPage();
    // The menu is hidden below the lg breakpoint, and jsdom applies no media queries.
    const nav = screen.getByRole("navigation", { hidden: true });

    for (const { id, title } of en.nav) {
      expect(within(nav).getByRole("link", { name: title, hidden: true })).toHaveAttribute(
        "href",
        `#${id}`,
      );
      expect(container.querySelector(`section#${id}`)).not.toBeNull();
    }
  });

  it("lists every role, skill and education entry", () => {
    renderPage();

    for (const item of en.experience.items) {
      expect(screen.getByRole("heading", { name: item.role })).toBeInTheDocument();
    }
    for (const skill of en.skills.items) {
      expect(screen.getByRole("heading", { name: skill })).toBeInTheDocument();
    }
    for (const item of en.education.items) {
      expect(screen.getByRole("heading", { name: item.degree })).toBeInTheDocument();
      if (item.grade) {
        expect(screen.getByText(`${en.labels.grade}: ${item.grade}`)).toBeInTheDocument();
      }
    }
  });

  it("marks every unconfirmed line", () => {
    renderPage();

    const unconfirmed = [
      ...en.about.paragraphs,
      ...en.experience.items.map((item) => item.summary),
      ...en.education.items.map((item) => item.date),
    ].filter((line) => typeof line !== "string");

    expect(unconfirmed.length).toBeGreaterThan(0);
    expect(screen.getAllByText(en.labels.toConfirm)).toHaveLength(unconfirmed.length);
  });

  it("links the CV and email actions", () => {
    renderPage();

    for (const link of screen.getAllByRole("link", { name: en.labels.downloadCv })) {
      expect(link).toHaveAttribute("href", en.resumeUrl);
    }
    for (const name of [en.hero.action, en.contact.action]) {
      expect(screen.getByRole("link", { name })).toHaveAttribute(
        "href",
        expect.stringMatching(new RegExp(`^mailto:${profile.email}\\?subject=`)),
      );
    }
  });

  it("publishes no phone number, street address or Skype contact", () => {
    const { container } = renderPage();
    const text = container.textContent;
    const hrefs = [...container.querySelectorAll("a")].map(
      (link) => link.getAttribute("href") ?? "",
    );

    expect(text).not.toMatch(/\+?\d[\d\s().-]{7,}\d/);
    expect(text).not.toMatch(/skype|phone|location/i);
    expect(hrefs.filter((href) => /^(skype|tel):/.test(href))).toEqual([]);
  });

  it("links no Facebook profile", () => {
    const { container } = renderPage();
    const hrefs = [...container.querySelectorAll("a")].map(
      (link) => link.getAttribute("href") ?? "",
    );

    expect(hrefs.filter((href) => href.includes("facebook.com"))).toEqual([]);
    expect(screen.queryByRole("link", { name: /facebook/i })).toBeNull();
  });

  it("gives the icon-only links an accessible name", () => {
    renderPage();

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.social.linkedin,
    );
  });
});
