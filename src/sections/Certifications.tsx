import { Container, SectionHead } from "../components/layout";
import { LineText } from "../components/LineText";
import { useReveal } from "../components/useReveal";
import { useContent } from "../content";

export function Certifications() {
  const { certifications, labels } = useContent();
  const ref = useReveal<HTMLUListElement>();

  return (
    <section id="certifications" className="border-b border-line py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHead n={4} kicker={certifications.kicker} title={certifications.title} />
        <ul ref={ref} className="border-t border-line">
          {certifications.items.map((item) => (
            <li
              key={item.name}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-[15px] text-muted">{item.issuer}</p>
              </div>
              <p className="tabular font-mono text-[13px] text-muted sm:text-right">
                <LineText line={item.date} />
                {item.grade && (
                  <>
                    {" · "}
                    {labels.grade} {item.grade}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
