import { Container, SectionHead } from "../components/layout";
import { LineText } from "../components/LineText";
import { useReveal } from "../components/useReveal";
import { useContent } from "../content";

import type { CareerItem } from "../content";

function Stop({ item, index }: { item: CareerItem; index: number }) {
  const { labels } = useContent();
  const ref = useReveal<HTMLLIElement>(index * 100);
  const running = item.status === "running";

  return (
    <li ref={ref} className="flex flex-col gap-2">
      <div aria-hidden="true" className="mb-3 flex items-center">
        <span
          className={`size-3 shrink-0 rounded-full border-2 ${running ? "border-accent bg-accent" : "border-muted bg-bg"}`}
        />
        <span className={`h-0.5 flex-1 ${running ? "bg-accent" : "bg-line"}`} />
      </div>
      <p className="tabular font-mono text-[13px] text-muted">{item.period}</p>
      <h3 className="text-lg leading-snug font-semibold">{item.org}</h3>
      <p className="text-[15px] font-medium">{item.role}</p>
      <p className="font-mono text-xs text-muted">{item.place}</p>
      <p className="text-[15px] leading-relaxed text-muted">
        <LineText line={item.summary} />
      </p>
      <p className="mt-1">
        <span
          className={`inline-block px-2 py-0.5 font-mono text-xs tracking-[0.06em] uppercase ${
            running ? "bg-blush text-accent-strong" : "border border-line text-muted"
          }`}
        >
          {running ? labels.running : labels.passed}
        </span>
      </p>
    </li>
  );
}

export function Career() {
  const { career } = useContent();

  return (
    <section id="experience" className="border-b border-line py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHead n={1} kicker={career.kicker} title={career.title} aside={career.aside} />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {career.items.map((item, index) => (
            <Stop key={`${item.org}-${item.role}`} item={item} index={index} />
          ))}
        </ol>
        <p className="text-[15px] text-muted">{career.note}</p>
      </Container>
    </section>
  );
}
