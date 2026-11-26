import { useContent } from "../content";
import { LanguageSwitch } from "./LanguageSwitch";
import { Container } from "./layout";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { name, nav, labels, resumeUrl } = useContent();
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2.5 text-ink no-underline">
            <span
              aria-hidden="true"
              className="inline-flex size-9 items-center justify-center bg-ink font-mono text-[13px] font-medium text-bg"
            >
              {initials}
            </span>
            <span className="hidden font-semibold sm:inline">{name}</span>
            <span className="sr-only sm:hidden">{name}</span>
          </a>
          <nav aria-label={labels.menu} className="hidden lg:block">
            <ul className="flex gap-6 text-[15px]">
              {nav.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-ink no-underline hover:text-accent">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center border border-ink bg-ink px-3.5 font-mono text-[13px] font-medium text-bg no-underline hover:border-accent hover:bg-accent hover:text-on-accent"
          >
            {labels.cv}
            <span className="sr-only"> · {labels.downloadCv}</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
