import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Harenos, entreprise générale de rénovation en Île-de-France.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[var(--color-paper)] py-16 md:py-24">
        <Container as="div">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            >
              ← Retour à l&apos;accueil
            </Link>

            <h1 className="font-display text-[36px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[48px]">
              Mentions légales
            </h1>

            <div className="prose prose-neutral mt-10 max-w-none text-[var(--color-ink-soft)]">
              <h2>Éditeur du site</h2>
              <p>
                <strong>Harenos SAS</strong><br />
                Entreprise générale de rénovation<br />
                Siège social : Île-de-France, France<br />
                SIRET : [en cours d&apos;immatriculation]<br />
                Capital social : [en cours]<br />
                Téléphone : <a href="tel:+33180000000">+33 1 80 00 00 00</a><br />
                Email : <a href="mailto:bonjour@harenos.fr">bonjour@harenos.fr</a>
              </p>

              <h2>Directeur de la publication</h2>
              <p>Le directeur de la publication est le représentant légal de Harenos SAS.</p>

              <h2>Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
                est la propriété exclusive de Harenos SAS, sauf mention contraire. Toute reproduction,
                distribution, modification ou utilisation de ces contenus, même partielle, est interdite
                sans autorisation préalable écrite de Harenos SAS.
              </p>

              <h2>Liens hypertextes</h2>
              <p>
                Harenos SAS ne peut être tenu responsable du contenu des sites vers lesquels des liens
                hypertextes peuvent pointer depuis ce site.
              </p>

              <h2>Données personnelles</h2>
              <p>
                Pour toute information sur la collecte et le traitement de vos données personnelles,
                consultez notre <Link href="/confidentialite">politique de confidentialité</Link>.
              </p>

              <h2>Droit applicable et juridiction</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>

              <p className="text-sm text-[var(--color-ink-soft)]/60">
                Dernière mise à jour : mai 2026
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
