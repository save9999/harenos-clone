import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const POSTS = [
  {
    title: "Tout savoir sur la rénovation d'un salon",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quels sont les avantages de rénover une salle à manger ?",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comment intégrer la domotique à vos projets de rénovation ?",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Éclairage : jusqu'à 60% d'économie d'énergie",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rénovation de chambre : nos conseils",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rénovation complète : guide à l'usage des particuliers",
    image:
      "https://images.unsplash.com/photo-1581094488379-6b6c1f8c5a5a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Travaux de rafraîchissement pour redonner vie à votre appartement",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Choisir ses matériaux : durabilité et budget",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
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
