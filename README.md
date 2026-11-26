# callmekathy

One-page portfolio for Khue Nguyen, a manual tester: who she is, her skills, education and
certifications, and how to get in touch.

**Live:** https://callmekathy.vercel.app

**Stack:** Vite 8 · React 19 · TypeScript (strict) · MUI 9 with Emotion · Tabler icons ·
self-hosted Roboto · Vitest and Testing Library · Playwright with axe · Lighthouse CI · pnpm on
Node 24.

## Structure

```text
src/
  content/profile.ts   every piece of text on the page: name, contact, skills, education
  sections/            one component per page section (Hero, AboutMe, Skills, …)
  components/          header, logo and the scroll reveal hook
  theme/               MUI theme: brand palette and the custom typography variants
  assets/              avatar photo
public/                resume-en.pdf, resume-vi.pdf, favicon, robots.txt (served as is)
scripts/cv/            CV text in both languages and the script that renders the PDFs
e2e/                   Playwright tests against the production build
```

To change what the page says, edit `src/content/en.ts` (shared facts such as the email are in
`src/content/profile.ts`). To change the CV, edit `scripts/cv/data.js` and run `pnpm cv`.

## Setup

### 1. Prerequisites

- **Node.js 24** (`.nvmrc`): `nvm install && nvm use`
- **pnpm 12** through Corepack: `corepack enable` (the exact version comes from `packageManager`)
- **Google Chrome**, only for the browser tests and Lighthouse

### 2. Clone and install

```bash
git clone git@github.com:ductmOfficial/reactjs-portfolio-callmekathy.git
cd reactjs-portfolio-callmekathy
nvm use
pnpm install
```

`pnpm install` also sets up the husky `commit-msg` hook that checks Conventional Commits.

There is nothing to configure: the site has no environment variables and calls no API.

## Running

```bash
pnpm dev                 # http://localhost:5173 with hot reload
pnpm build               # production build in dist/
pnpm preview             # serve dist/ on http://localhost:4173
```

## CV

The CV is generated, not drawn by hand. `scripts/cv/data.js` holds the text in English and
Vietnamese; `pnpm cv` renders each language to an A4 PDF in `public/` with Chrome and the same
self-hosted Roboto as the site, and fails if a CV runs past one page.

```bash
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" pnpm cv
```

Commit the PDFs with the data change. Without `CHROME_PATH` the script uses Playwright’s Chromium.

## Testing

```bash
pnpm check               # format, lint, typecheck, unit tests with coverage, build (what Verify runs)
pnpm test                # unit tests once
pnpm test:watch          # unit tests in watch mode
pnpm test:coverage       # unit tests with the coverage thresholds from vitest.config.ts
```

The browser checks run against the production build, so build first:

```bash
pnpm build
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" pnpm e2e
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" pnpm lighthouse
```

`pnpm e2e` starts `pnpm preview` itself and runs every test on a desktop and a phone viewport.
Without `CHROME_PATH`, Playwright uses its own Chromium: install it once with
`pnpm exec playwright install chromium`. Lighthouse finds an installed Chrome by itself.

### All scripts

| Script               | What it does                                               |
| -------------------- | ---------------------------------------------------------- |
| `pnpm dev`           | Vite dev server                                            |
| `pnpm build`         | Production build to `dist/`                                |
| `pnpm preview`       | Serve the production build                                 |
| `pnpm lint`          | ESLint with type-aware rules, no warnings allowed          |
| `pnpm typecheck`     | `tsc --noEmit`                                             |
| `pnpm test`          | Vitest once                                                |
| `pnpm test:coverage` | Vitest with coverage thresholds                            |
| `pnpm e2e`           | Playwright with axe on desktop and mobile                  |
| `pnpm lighthouse`    | Lighthouse CI: scores and budgets from `lighthouserc.json` |
| `pnpm format`        | Prettier write                                             |
| `pnpm format:check`  | Prettier check                                             |
| `pnpm cv`            | Render `public/resume-en.pdf` and `public/resume-vi.pdf`   |
| `pnpm check`         | Everything the `Verify` job runs                           |

## CI

Every pull request to `main` runs two jobs, both required by the ruleset in
`.github/rulesets/protect-main.json`:

- **Verify**: commit messages and the PR title (Conventional Commits), formatting, lint,
  typecheck, unit tests with coverage, build.
- **Browser**: Playwright with axe on the production build, then Lighthouse. It uses the Google
  Chrome that ships with the runner image and falls back to Playwright's Chromium.

Reports from a failed Browser run are uploaded as the `reports` artifact. Dependabot opens weekly
grouped updates for npm packages and GitHub Actions.

## Deployment (Vercel)

The site is static. To set up a Vercel project:

1. Import the repository; Vercel detects Vite (build `pnpm build`, output `dist`).
2. In **Settings → Build and Deployment**, set **Node.js Version** to **24.x** before the first
   deploy: `engines` requires Node 24 and the install stops on another version.
3. In **Settings → Environments → Production**, the tracked branch must be `main`.
   Production deploys from it to https://callmekathy.vercel.app; every pull request gets a
   preview.

No environment variables are needed.

## Troubleshooting

| Problem                                             | Fix                                                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ERR_PNPM_UNSUPPORTED_ENGINE`                       | You are not on Node 24: `nvm use`                                                                          |
| Commit goes through without the commitlint check    | Same cause: the hook needs Node 24. Check afterwards with `git log -1 --format=%B \| pnpm exec commitlint` |
| Playwright: `Executable doesn't exist`              | Set `CHROME_PATH` to Google Chrome, or run `pnpm exec playwright install chromium`                         |
| `pnpm e2e` fails with `port 4173 is already in use` | Stop the running `pnpm preview`, or let Playwright reuse it (it does outside CI)                           |
| A section stays blank in a screenshot or test       | Sections fade in when scrolled into view; scroll first, or emulate `prefers-reduced-motion: reduce`        |

## Known issues

- Lines marked `[to confirm]` on the page and in the CV are drafts Khue has not confirmed yet.
  Remove `toConfirm` from a line once it is confirmed, then run `pnpm cv` for the PDFs.

## Progress

Each step and the decisions behind it are in [PROGRESS.md](PROGRESS.md).
