import { ThemeProvider } from "@mui/material/styles";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";
import { education, profile, sections, skills } from "./content/profile";
import { theme } from "./theme";

function renderPage() {
  return render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
}

describe("App", () => {
  it("names the person in the only h1", () => {
    renderPage();

    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(`${profile.firstName} ${profile.lastName}`);
  });

  it("renders every section the navigation links to", () => {
    const { container } = renderPage();
    // The menu is hidden below the lg breakpoint, and jsdom applies no media queries.
    const nav = screen.getByRole("navigation", { hidden: true });

    for (const { id, title } of sections) {
      expect(within(nav).getByRole("link", { name: title, hidden: true })).toHaveAttribute(
        "href",
        `#${id}`,
      );
      expect(container.querySelector(`section#${id}`)).not.toBeNull();
    }
  });

  it("lists every skill and every education entry", () => {
    renderPage();

    for (const skill of skills.items) {
      expect(screen.getByRole("heading", { name: skill })).toBeInTheDocument();
    }
    for (const item of education.items) {
      expect(screen.getByRole("heading", { name: item.degree })).toBeInTheDocument();
      expect(screen.getByText(`Grade: ${item.grade}`)).toBeInTheDocument();
    }
  });

  it("links the CV and email actions", () => {
    renderPage();

    for (const link of screen.getAllByRole("link", { name: "Download CV" })) {
      expect(link).toHaveAttribute("href", profile.resumeUrl);
    }
    for (const name of ["Hire me now", "Say Hello"]) {
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

  it("gives the icon-only links an accessible name", () => {
    renderPage();

    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      profile.social.facebook,
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.social.linkedin,
    );
  });
});
