# Progress

> Last updated: 2026-11-26
>
> Legend: ✅ done · 🔄 in progress · ⬜ not started

The site moves to a current toolchain with its content and look unchanged. Each step is a pull
request that builds on its own, with green checks, merged with rebase.

## Steps

| #   | Step                                                           | Branch                        | Status |
| --- | -------------------------------------------------------------- | ----------------------------- | ------ |
| 1   | Remove unused code and 22 unused dependencies                  | `chore/remove-movie-app-code` | 🔄     |
| 2   | Vite, TypeScript, pnpm, React 19, MUI 9; content in one module | `build/migrate-to-vite`       | 🔄     |
| 3   | CI `Verify`, commitlint, husky, ruleset                        | `ci/verify-pull-requests`     | 🔄     |
| 4   | Unit tests, Playwright with axe, Lighthouse, `Browser` job     | `test/browser-checks`         | 🔄     |
| 5   | README, this log, Dependabot                                   | `docs/readme`                 | 🔄     |
| 6   | Vercel project on Node 24                                      | —                             | ⬜     |

## Decisions

| Decision                                                     | Reason                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Vite single-page app, no router                              | One page and no server work; a router only served a 404 page                                     |
| Keep MUI, now version 9                                      | The page keeps its exact look; checked by full-page screenshots before and after                 |
| All text in `src/content/profile.ts`                         | A content change never touches a component; the unit tests read the same module                  |
| Scroll reveal with `IntersectionObserver`                    | Same fade and slide as before without a library; skipped when the visitor prefers reduced motion |
| Self-hosted Roboto through Fontsource                        | No request to Google Fonts and no render-blocking stylesheet                                     |
| Avatar resized to 800 px                                     | Shown at 400 px at most; 125 kB instead of 878 kB                                                |
| Light theme only                                             | The dark theme had no visible toggle, so visitors never saw it                                   |
| Browser checks use the runner's Chrome through `CHROME_PATH` | No browser download and no apt packages in CI                                                    |

## Visual check

Full-page screenshots of the old and the new build, desktop (1440 px) and phone (390 px),
differ by 0.03% of pixels, all in text anti-aliasing. The visible text of both builds is
identical.

## Issues met

| Issue                                                                               | Fix                                               |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| MUI 9 ignores the `color` prop on `Typography`; text fell back to the default color | Colors moved into `sx`                            |
| The photo outline, offset 20 px, made the page wider than a phone screen            | Room for the outline next to the photo below `lg` |
| The footer link differed from its sentence by color only (axe `link-in-text-block`) | Underlined                                        |
| Brand pink below 4.5:1 against white (axe `color-contrast`)                         | Open: needs a palette change, see README          |
