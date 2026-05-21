import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    n: "1",
    title: "Prise de contact",
    body:
      "Décrivez votre projet en ligne ou par téléphone. Un chef de projet vous rappelle sous 48h pour un premier échange sans engagement.",
  },
  {
    n: "2",
    title: "Visite technique offerte",
    body:
      "Un chef de projet se déplace gratuitement sur place, vérifie la faisabilité, prend les mesures et écoute vos priorités.",
  },
  {
    n: "3",
    title: "Devis gratuit sous 48h",
    body:
      "Vous recevez un devis transparent et détaillé poste par poste, sans frais. Une fois signé, votre chantier est planifié.",
  },
  {
    n: "4",
    title: "Travaux & livraison",
    body:
      "Votre chantier est piloté par votre chef de projet, avec points d'avancement réguliers. Livraison garantie, décennale incluse.",
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
