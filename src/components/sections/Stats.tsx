import { Container } from "@/components/ui/Container";

const STATS = [
  { value: "+ 150", label: "Chantiers livrés en IDF" },
  { value: "97%", label: "Clients satisfaits" },
  { value: "8", label: "Départements couverts" },
  { value: "10 ans", label: "Garantie décennale" },
];

export function Stats() {
  return (
    <section className="bg-[var(--color-brand-soft)] py-20 md:py-28">
      <Container>
        <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
          Harenos c&apos;est...
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-[28px] bg-white px-8 py-10 text-center ring-1 ring-[var(--color-line)]"
            >
              <div className="font-display text-6xl font-bold text-[var(--color-brand)] md:text-7xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
