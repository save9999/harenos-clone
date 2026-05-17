import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    n: "1",
    title: "Prise de contact",
    body:
      "Nous échangeons sur votre projet pour comprendre vos besoins et vos contraintes. Vous recevez une première estimation sous 24h.",
  },
  {
    n: "2",
    title: "Visite technique",
    body:
      "Un chef de projet se déplace, vérifie la faisabilité technique, prend les mesures et écoute vos priorités sur place.",
  },
  {
    n: "3",
    title: "Devis détaillé",
    body:
      "Vous recevez un devis transparent, poste par poste. Une fois validé, la signature lance officiellement votre chantier.",
  },
  {
    n: "4",
    title: "Démarrage des travaux",
    body:
      "Votre chantier est piloté par votre chef de projet, avec un suivi rigoureux et des points d'avancement réguliers.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[var(--color-ink)] py-20 text-white md:py-28">
      <Container>
        <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight md:text-[48px]">
          Comment ça marche ?
        </h2>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-[28px] bg-white/5 p-7 ring-1 ring-white/10"
            >
              <div className="grid size-12 place-items-center rounded-full bg-[var(--color-brand)] font-display text-xl font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
