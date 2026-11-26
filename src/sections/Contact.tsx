import { buttonStyles, Container } from "../components/layout";
import { contactMailto, profile, useContent } from "../content";

export function Contact() {
  const { contact, labels } = useContent();

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-7">
        <p className="kicker">05 · {contact.kicker}</p>
        <h2 className="text-[clamp(40px,7vw,72px)] leading-none font-semibold tracking-[-0.02em]">
          {contact.title}
        </h2>
        <p className="max-w-[56ch] text-lg text-muted">{contact.text}</p>
        <a
          href={contactMailto}
          className="w-fit font-mono text-[clamp(18px,3vw,30px)] break-all text-accent underline decoration-1 underline-offset-[0.2em] hover:text-ink"
        >
          {profile.email}
        </a>
        <div>
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
        <p className="text-[15px] text-muted">{contact.interest}</p>
      </Container>
    </section>
  );
}
