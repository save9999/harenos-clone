import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const LOGO =
  "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b4ef69340625108f0191a4_logo.png";

const COLS = [
  {
    title: "Entreprise",
    links: [
      { href: "#pourquoi", label: "Pourquoi Harenos" },
      { href: "#projets", label: "Nos projets" },
      { href: "#process", label: "Comment ça marche" },
      { href: "#expertises", label: "Nos conseils" },
    ],
  },
  {
    title: "Travaux",
    links: [
      { href: "#", label: "Rénovation complète" },
      { href: "#", label: "Cuisine & salle de bain" },
      { href: "#", label: "Toiture & façade" },
      { href: "#", label: "Extension & gros œuvre" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "#", label: "Mentions légales" },
      { href: "#", label: "Politique de confidentialité" },
      { href: "#", label: "CGV" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={LOGO}
                alt="Harenos"
                width={140}
                height={36}
                unoptimized
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              Entreprise générale de rénovation tous corps d&apos;état,
              intervenant partout en Île-de-France.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <a href="tel:+33180000000" className="block hover:text-white">
                +33 1 80 00 00 00
              </a>
              <a
                href="mailto:bonjour@harenos.fr"
                className="block hover:text-white"
              >
                bonjour@harenos.fr
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  {c.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-white/80 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Harenos. Tous droits réservés.</p>
          <p>Conception & rénovation résidentielle — Île-de-France</p>
        </div>
      </Container>
    </footer>
  );
}
