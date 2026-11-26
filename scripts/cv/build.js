// @ts-check
// Renders the CV in each language to public/resume-<lang>.pdf with Chrome.
// Usage: pnpm cv   (set CHROME_PATH to use an installed Chrome instead of Playwright's Chromium)

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { chromium } from "@playwright/test";

import { cv, shared } from "./data.js";

const root = fileURLToPath(new URL("../..", import.meta.url));
const fontCss = [400, 500, 700].map(
  (weight) =>
    pathToFileURL(join(root, `node_modules/@fontsource/roboto/${String(weight)}.css`)).href,
);

// A4 at 96 dpi.
const PAGE_HEIGHT_PX = 1123;

/** @param {string} value */
const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

/** @param {import("./data.js").Line} line @param {string} mark */
const line = (line, mark) =>
  typeof line === "string"
    ? escape(line)
    : `${escape(line.text)} <span class="confirm">${escape(mark)}</span>`;

/** @param {(typeof cv)[keyof typeof cv]} c */
function html(c) {
  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8" />
<title>${escape(c.name)} · CV</title>
${fontCss.map((href) => `<link rel="stylesheet" href="${href}" />`).join("\n")}
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-family: Roboto, sans-serif; font-size: 9.6pt; color: #1f2a30; line-height: 1.38; }
  body { width: 210mm; padding: 13mm 13mm 10mm; }
  .page { display: grid; grid-template-columns: 1fr 62mm; column-gap: 9mm; }
  header { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 62mm; column-gap: 9mm; margin-bottom: 7mm; }
  h1 { font-size: 30pt; font-weight: 700; color: #ab5049; line-height: 1.05; }
  .title { font-size: 11.5pt; color: #5d717d; margin-top: 1.5mm; }
  .contact { align-self: end; font-size: 9.6pt; line-height: 1.6; }
  h2 { font-size: 12.5pt; font-weight: 500; color: #ab5049; margin: 0 0 2.2mm; }
  section + section { margin-top: 5.5mm; }
  p { text-align: left; }
  .job + .job { margin-top: 3.6mm; }
  .org { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.02em; color: #5d717d; }
  .role { font-weight: 700; font-size: 10.4pt; }
  .meta { font-size: 8.4pt; color: #5d717d; margin-bottom: 1mm; }
  ul { padding-left: 4.2mm; }
  li + li { margin-top: 0.7mm; }
  .label { font-weight: 700; }
  .group + .group { margin-top: 2.6mm; }
  .cert + .cert { margin-top: 2.4mm; }
  .cert .name { font-weight: 700; }
  .cert .detail { font-size: 8.4pt; color: #5d717d; }
  .confirm { font-size: 7.6pt; color: #8a969d; white-space: nowrap; }
</style>
</head>
<body>
<div class="page">
  <header>
    <div>
      <h1>${escape(c.name)}</h1>
      <div class="title">${escape(c.title)}</div>
    </div>
    <div class="contact">
      ${escape(shared.email)}<br />${escape(shared.linkedin)}<br />${escape(shared.website)}
    </div>
  </header>
  <main>
    <section>
      <h2>${escape(c.headings.summary)}</h2>
      <p>${escape(c.summary)}</p>
    </section>
    <section>
      <h2>${escape(c.headings.experience)}</h2>
      ${c.experience
        .map(
          (job) => `<div class="job">
        <div class="org">${escape(job.company)}</div>
        <div class="role">${escape(job.role)}</div>
        <div class="meta">${escape(job.period)} · ${escape(job.place)}</div>
        <ul>${job.bullets.map((b) => `<li>${line(b, c.toConfirm)}</li>`).join("")}</ul>
      </div>`,
        )
        .join("\n")}
    </section>
  </main>
  <aside>
    <section>
      <h2>${escape(c.headings.skills)}</h2>
      ${c.skills
        .map(
          (group) => `<div class="group">
        <div class="label">${escape(group.label)}</div>
        ${group.items.map((item) => `<div>${line(item, c.toConfirm)}</div>`).join("")}
      </div>`,
        )
        .join("\n")}
    </section>
    <section>
      <h2>${escape(c.headings.certifications)}</h2>
      ${c.certifications
        .map(
          (item) => `<div class="cert">
        <div class="name">${escape(item.name)}</div>
        <div class="detail">${escape(item.detail)}</div>
      </div>`,
        )
        .join("\n")}
    </section>
  </aside>
</div>
</body>
</html>`;
}

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
const dir = await mkdtemp(join(tmpdir(), "cv-"));
try {
  const page = await browser.newPage();
  for (const c of Object.values(cv)) {
    const file = join(dir, `${c.lang}.html`);
    await writeFile(file, html(c));
    await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const height = await page.evaluate(() => document.body.scrollHeight);
    if (height > PAGE_HEIGHT_PX) {
      throw new Error(
        `${c.file} needs ${String(height)}px, more than one A4 page (${String(PAGE_HEIGHT_PX)}px)`,
      );
    }
    await page.pdf({ path: join(root, "public", c.file), format: "A4", printBackground: true });
    console.log(`public/${c.file} (${String(height)}px of ${String(PAGE_HEIGHT_PX)})`);
  }
} finally {
  await browser.close();
  await rm(dir, { recursive: true, force: true });
}
