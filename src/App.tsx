import { Container } from "./components/layout";
import { Header } from "./components/Header";
import { contactMailto, credit, profile, useContent } from "./content";
import { Career } from "./sections/Career";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { HowIWork } from "./sections/HowIWork";
import { Skills } from "./sections/Skills";
import { Stats } from "./sections/Stats";

const footerLink = "link-slide text-muted no-underline hover:text-ink";

export function App() {
  const { labels, resumeUrl } = useContent();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Career />
        <HowIWork />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-8 font-mono text-[13px] text-muted">
          <p>
            © 2026 · {labels.builtBy}{" "}
            <a
              href={credit.url}
              target="_blank"
              rel="noopener"
              className="text-ink underline underline-offset-[0.2em]"
            >
              {credit.name}
            </a>
          </p>
          <ul className="flex gap-5">
            <li>
              <a href={resumeUrl} target="_blank" rel="noopener" className={footerLink}>
                {labels.cv}
              </a>
            </li>
            <li>
              <a href={contactMailto} className={footerLink}>
                {labels.email}
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener"
                className={footerLink}
              >
                {labels.linkedin}
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}
