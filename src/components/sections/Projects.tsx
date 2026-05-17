import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PROJECTS = [
  {
    name: "Projet Tourel",
    type: "Rénovation complète",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b1cb6304088c3fdf2e68_project-image-1.png",
  },
  {
    name: "Projet Victoire",
    type: "Rénovation complète",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b210d31b6ec8537f2063_project-image-2.png",
  },
  {
    name: "Projet Estère",
    type: "Cuisine & salle de bain",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b228b0a1aec2b339b701_project-image-3.png",
  },
  {
    name: "Projet Saint-Marc",
    type: "Rénovation intérieure",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2456541f311e4b2afb5_project-image-4.png",
  },
  {
    name: "Projet Marcel",
    type: "Extension & gros œuvre",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2cacb6220f316a820c1_project-image-9.png",
  },
  {
    name: "Projet Vincennes",
    type: "Rénovation appartement",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2f502f907359d9b01e8_project-image-10.png",
  },
];

export function Projects() {
  return (
    <section id="projets" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
            Nos projets
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]"
          >
            Voir tous les projets
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-[28px] bg-white ring-1 ring-[var(--color-line)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[var(--color-ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-[var(--color-ink-soft)]">
                    {p.type}
                  </p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
