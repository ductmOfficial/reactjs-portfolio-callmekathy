import { Container, SectionHead } from "../components/layout";
import { useReveal } from "../components/useReveal";
import { useContent } from "../content";

function Group({ label, items, index }: { label: string; items: string[]; index: number }) {
  const ref = useReveal<HTMLDivElement>(index * 100);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <h3 className="kicker text-ink">{label}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-line px-2.5 py-1 font-mono text-[13px] hover:border-muted motion-safe:transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const { skills } = useContent();

  return (
    <section id="skills" className="border-b border-line py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHead n={3} kicker={skills.kicker} title={skills.title} />
        <div className="grid gap-10 md:grid-cols-3">
          {skills.groups.map((group, index) => (
            <Group key={group.label} label={group.label} items={group.items} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
