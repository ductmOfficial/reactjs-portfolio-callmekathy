import { Container } from "../components/layout";
import { useContent } from "../content";

export function Stats() {
  const { stats } = useContent();

  return (
    <section aria-label={stats.map((s) => `${s.value} ${s.label}`).join(", ")} className="bg-board">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse gap-1.5">
              <dt className="font-mono text-xs tracking-[0.08em] text-board-ink uppercase">
                {label}
              </dt>
              <dd className="tabular font-mono text-3xl font-medium text-board-fig sm:text-[38px]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
