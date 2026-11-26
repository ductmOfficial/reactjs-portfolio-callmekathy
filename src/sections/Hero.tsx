import { buttonStyles, Container } from "../components/layout";
import { profile, useContent } from "../content";

export function Hero() {
  const { name, hero, labels, resumeUrl } = useContent();

  return (
    <section id="top" className="border-b border-line">
      <Container className="grid items-center gap-12 pt-16 pb-20 sm:pt-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-7">
          <p className="kicker flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent" />
            {hero.status}
          </p>
          <h1 className="max-w-[16ch] text-[clamp(38px,6vw,72px)] leading-[1.04] font-semibold tracking-[-0.02em]">
            {hero.tagline}
          </h1>
          <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{hero.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a href={resumeUrl} target="_blank" rel="noopener" className={buttonStyles.primary}>
              {labels.downloadCv}
              <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className={buttonStyles.secondary}>
              {labels.getInTouch}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener"
              className={buttonStyles.secondary}
            >
              {labels.linkedin}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[300px] pr-4 pb-4 lg:max-w-[340px]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-pastel"
            />
            <img
              src="/avatar.webp"
              fetchPriority="high"
              alt={name}
              width={640}
              height={640}
              className="relative block h-auto w-full bg-blush"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
