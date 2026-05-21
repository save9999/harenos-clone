import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

const REVIEWS = [
  {
    project: "Projet Tourel",
    title: "Un partenaire de confiance pour la rénovation",
    body:
      "L'équipe a tenu le planning et le devis à la lettre. Notre chef de projet répondait dans la journée à chacune de nos questions.",
    name: "Marie-Laure D.",
    image:
      "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66d6687505276e332e8df7ee_Rectangle%2056.png",
  },
  {
    project: "Projet Victoire",
    title: "Entreprise expérimentée",
    body:
      "Trois chantiers livrés avec Harenos. C'est rare de trouver une entreprise aussi rigoureuse sur le chiffrage et la qualité des finitions.",
    name: "Jean-Patrick L.",
    image:
      "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66d668d9e96667b08c500d59_Rectangle%2056.png",
  },
  {
    project: "Projet Estère",
    title: "Je recommande fortement",
    body:
      "Rénovation de la cuisine et de deux salles de bain réalisée en six semaines, sans surprise. Le résultat est à la hauteur de nos attentes.",
    name: "Stéphanie M.",
    image:
      "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66d6696fd25970ab5c731fa7_Rectangle%2056.png",
  },
  {
    project: "Projet Saint-Marc",
    title: "Service efficace",
    body:
      "Visite technique sérieuse, devis lisible, ouvriers ponctuels. Tout a été géré du début à la fin par un interlocuteur unique.",
    name: "Frantz J.",
    image:
      "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66d669ef42ef5e3425be9073_Rectangle%2056.png",
  },
  {
    project: "Projet Marcel",
    title: "Entreprise très compétente",
    body:
      "Coordination impeccable entre les corps d'état et exécution conforme aux plans. Une vraie tranquillité d'esprit du début à la fin.",
    name: "Carine B.",
    image:
      "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/6722b40004f57d75950faade_Rectangle%2056.png",
  },
  {
    project: "Projet Vincennes",
    title: "Devis clair, chantier propre",
    body:
      "Harenos a réalisé la rénovation complète de notre appartement Vincennois en huit semaines. Devis respecté à l'euro près, artisans sérieux et ponctuels.",
    name: "Thomas & Aurélie R.",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2f502f907359d9b01e8_project-image-10.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
            Nos clients témoignent
          </h2>
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                />
              ))}
            </div>
            <span className="font-semibold text-[var(--color-ink)]">5/5</span>{" "}
            sur 47 avis vérifiés
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.project}
              className="flex flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[var(--color-line)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.project}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                    />
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                  {r.title}
                </h3>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  « {r.body} »
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                  <div className="text-sm font-semibold text-[var(--color-ink)]">
                    {r.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {r.project}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
