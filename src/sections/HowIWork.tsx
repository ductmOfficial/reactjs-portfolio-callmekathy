import { Container, SectionHead } from "../components/layout";
import { LineText } from "../components/LineText";
import { useReveal } from "../components/useReveal";
import { useContent } from "../content";

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  const ref = useReveal<HTMLLIElement>(n * 100);

  return (
    <li
      ref={ref}
      className="flex flex-col gap-3 border border-line bg-surface p-6 hover:border-pastel motion-safe:transition-colors"
    >
      <span className="font-mono text-sm font-medium text-accent">
        {String(n).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-muted">{children}</p>
    </li>
  );
}

export function HowIWork() {
  const { howIWork } = useContent();

  return (
    <section id="how-i-work" className="border-b border-line py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHead n={2} kicker={howIWork.kicker} title={howIWork.title} aside={howIWork.aside} />
        <ol className="grid gap-4 md:grid-cols-3">
          {howIWork.steps.map((step, index) => (
            <Step key={step.title} n={index + 1} title={step.title}>
              <LineText line={step.text} />
            </Step>
          ))}
        </ol>
      </Container>
    </section>
  );
}
