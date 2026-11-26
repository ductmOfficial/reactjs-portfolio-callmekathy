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

// Sections fade in as they scroll into view, and axe measures contrast on whatever opacity an
// element has at that moment. With reduced motion every section is fully drawn from the start.
async function settleForAxe(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
}

async function axeViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
    .analyze();
  return results.violations.map(({ id, nodes }) => `${id} (${String(nodes.length)})`);
}

async function horizontalOverflow(page: Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
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

test("shows the role, the headline and the calls to action", async ({ page }) => {
  await expect(page).toHaveTitle("Khue Nguyen · Test Consultant");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "I test software so people can trust it.",
  );
  await expect(page.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
    "href",
    "#contact",
  );
  await expect(page.getByRole("link", { name: "khuenguyen.official@gmail.com" })).toHaveAttribute(
    "href",
    /^mailto:/,
  );
});

test("every section becomes visible when scrolled to", async ({ page }) => {
  await scrollThroughPage(page);

  for (const name of [
    "Career path",
    "Understand, design, report",
    "Toolbox",
    "Certifications & education",
    "Let’s talk.",
  ]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
  await expect(
    page.getByRole("heading", { name: "Vietnam Australia International School" }),
  ).toBeVisible();
  await expect(
    page.locator("#skills").getByText("Requirements analysis", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ISTQB Certified Tester Foundation Level" }),
  ).toBeVisible();
});

test("sections are visible without scrolling when motion is reduced", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();

  await expect(page.locator("#contact")).toHaveCSS("opacity", "1");
  await expect(page.locator("#experience li").last()).toHaveCSS("opacity", "1");
});

test("the menu jumps to each section", async ({ page, isMobile }) => {
  test.skip(isMobile, "The menu is shown from the lg breakpoint up.");

  await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();

  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("link", { name: "khuenguyen.official@gmail.com" })).toBeInViewport();
});

for (const file of ["resume-en.pdf", "resume-vi.pdf"]) {
  test(`serves ${file}`, async ({ request }) => {
    const response = await request.get(`/${file}`);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/pdf");
  });
}

test("the CV links point at a PDF that exists", async ({ page, request }) => {
  const hrefs = await page
    .locator('a[href$=".pdf"]')
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));

  expect(new Set(hrefs)).toEqual(new Set(["/resume-en.pdf"]));
  expect((await request.get("/resume-en.pdf")).status()).toBe(200);
});

test("fits the viewport without horizontal scrolling", async ({ page }) => {
  expect(await horizontalOverflow(page)).toBe(0);
});

test("has no detectable accessibility violations", async ({ page }) => {
  await settleForAxe(page);

  expect(await axeViolations(page)).toEqual([]);
});

test.describe("in Vietnamese", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("button", { name: "VI Tiếng Việt" }).click();
  });

  test("shows the Vietnamese page and CV", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Mình kiểm thử để phần mềm đáng tin cậy.",
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
    await expect(page).toHaveURL(/\?lang=vi/);
    await expect(page.getByRole("link", { name: "Tải CV", exact: true })).toHaveAttribute(
      "href",
      "/resume-vi.pdf",
    );
  });

  test("keeps the language after a reload", async ({ page }) => {
    await page.reload();

    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
  });

  test("fits the viewport without horizontal scrolling", async ({ page }) => {
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test("has no detectable accessibility violations", async ({ page }) => {
    await settleForAxe(page);

    expect(await axeViolations(page)).toEqual([]);
  });
});

test.describe("in the dark theme", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("button", { name: "Dark theme" }).click();
  });

  test("switches the theme and keeps it after a reload", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("button", { name: "Dark theme" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("has no detectable accessibility violations", async ({ page }) => {
    await settleForAxe(page);

    expect(await axeViolations(page)).toEqual([]);
  });
});

test.describe("on a system set to dark", () => {
  test.use({ colorScheme: "dark" });

  test("opens in the dark theme on a first visit", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });
});
