import { PencilRuler, Users, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    Icon: PencilRuler,
    title: "Conception du projet",
    body:
      "De la première idée au plan technique, nos chefs de projet posent les bases d'un chantier maîtrisé : besoins, contraintes, budget et planning.",
  },
  {
    Icon: Users,
    title: "Une équipe d'expert",
    body:
      "Maçons, électriciens, plombiers, menuisiers, carreleurs : tous nos corps d'état sont sélectionnés pour leur savoir-faire et coordonnés par un seul interlocuteur.",
  },
  {
    Icon: FileCheck2,
    title: "Un engagement clair",
    body:
      "Devis détaillé, planning écrit, points d'avancement réguliers. Vous savez ce qui se passe et combien ça coûte, à chaque étape.",
  },
];

export function Pillars() {
  return (
    <section id="pourquoi" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
            Votre rénovation, prise en main par une entreprise experte
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-[28px] bg-white p-8 ring-1 ring-[var(--color-line)]"
            >
              <div className="grid size-14 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-ink)]">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
