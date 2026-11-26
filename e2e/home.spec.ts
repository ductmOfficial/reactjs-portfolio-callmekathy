import AxeBuilder from "@axe-core/playwright";
import { test as base, expect } from "@playwright/test";

import type { Page } from "@playwright/test";

// Scroll reveal keeps sections transparent until they enter the viewport; walk the page so
// every section is on screen at least once before checking what is visible.
async function scrollThroughPage(page: Page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= height; y += 400) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(50);
  }
  await page.waitForTimeout(800);
}

// Fails any test that logs a console error or throws in the page.
const test = base.extend<{ pageErrors: string[] }>({
  pageErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      await use(errors);
      expect(errors).toEqual([]);
    },
    { auto: true },
  ],
});

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the name, title and calls to action", async ({ page }) => {
  await expect(page).toHaveTitle("callmekathy");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Khue Nguyen");
  await expect(page.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
    "href",
    /^mailto:/,
  );
});

test("every section becomes visible when scrolled to", async ({ page }) => {
  await scrollThroughPage(page);

  for (const name of [
    "About me",
    "Experience",
    "Skills",
    "Education & Certifications",
    "Get In Touch",
  ]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: "Attention to detail" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Test Consultant" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ISTQB Foundation Level" })).toBeVisible();
});

test("sections are visible without scrolling when motion is reduced", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();

  const section = page.locator("#get-in-touch");
  await expect(section).toHaveCSS("opacity", "1");
});

test("the menu jumps to each section", async ({ page, isMobile }) => {
  test.skip(isMobile, "The menu is shown from the lg breakpoint up.");

  await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();

  await expect(page).toHaveURL(/#get-in-touch$/);
  await expect(page.getByRole("link", { name: "Say hello" })).toBeInViewport();
});

for (const file of ["resume-en.pdf", "resume-vi.pdf"]) {
  test(`serves ${file}`, async ({ request }) => {
    const response = await request.get(`/${file}`);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/pdf");
  });
}

test("the CV buttons point at a PDF that exists", async ({ page, request }) => {
  const href = await page.getByRole("link", { name: "Download CV" }).first().getAttribute("href");

  expect(href).toBe("/resume-en.pdf");
  expect((await request.get(href ?? "")).status()).toBe(200);
});

test("fits the viewport without horizontal scrolling", async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );

  expect(overflow).toBe(0);
});

test("has no detectable accessibility violations", async ({ page }) => {
  await scrollThroughPage(page);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
    .analyze();

  expect(results.violations.map(({ id, nodes }) => `${id} (${String(nodes.length)})`)).toEqual([]);
});
