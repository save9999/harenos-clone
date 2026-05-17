import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const POSTS = [
  {
    title: "Tout savoir sur la rénovation d'un salon",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d97c70334f3320bd08dbc_renovation-salon.webp",
  },
  {
    title: "Quels sont les avantages de rénover une salle à manger ?",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d98280364f94e4deda57b_renovation-salle-a-manger.webp",
  },
  {
    title: "Comment intégrer la domotique à vos projets de rénovation ?",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d98b30334f3320bd15ae7_renovation-domotique.webp",
  },
  {
    title: "Éclairage : jusqu'à 60% d'économie d'énergie",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d996acc478abd1d716422_renovation-eclairage.webp",
  },
  {
    title: "Rénovation de chambre : nos conseils",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d951291d457002c2f1906_renovation-chambre.webp",
  },
  {
    title: "Rénovation complète : guide à l'usage des particuliers",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d946254eb594420fcc81e_renovation-complete.webp",
  },
  {
    title: "Travaux de rafraîchissement pour redonner vie à votre appartement",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d9b3fbe44e20a364054ef_travaux-de-rafraichissement.webp",
  },
  {
    title: "Choisir ses matériaux : durabilité et budget",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2cacb6220f316a820c1_project-image-9.png",
  },
];

export function Blog() {
  return (
    <section id="expertises" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
            Nos conseils travaux
          </h2>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]"
          >
            Voir tous les articles
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => (
            <article key={p.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                {p.title}
              </h3>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)]"
              >
                Lire l&apos;article
                <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
