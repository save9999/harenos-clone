import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site Harenos, entreprise de rénovation en Île-de-France.",
  alternates: { canonical: `${SITE_URL}/cgu` },
  robots: { index: false, follow: false },
};

export default function CguPage() {
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
              Conditions générales d&apos;utilisation
            </h1>

            <div className="prose prose-neutral mt-10 max-w-none text-[var(--color-ink-soft)]">
              <h2>Article 1 — Objet</h2>
              <p>
                Les présentes CGU ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation
                du site <strong>harenos-clone.vercel.app</strong> (ci-après « le Site »), édité par
                Harenos SAS.
              </p>

              <h2>Article 2 — Accès au site</h2>
              <p>
                Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès
                à Internet. Harenos SAS se réserve le droit de modifier, interrompre ou suspendre
                l&apos;accès au Site à tout moment, sans préavis.
              </p>

              <h2>Article 3 — Utilisation du formulaire de contact</h2>
              <p>
                Le formulaire de demande de devis permet à l&apos;utilisateur de transmettre ses
                coordonnées et la description de son projet de rénovation. Ces informations sont
                utilisées exclusivement pour établir un devis et recontacter le demandeur.
                Aucune vente directe n&apos;est réalisée via le Site.
              </p>

              <h2>Article 4 — Données personnelles</h2>
              <p>
                Les données collectées via le formulaire font l&apos;objet d&apos;un traitement conforme
                au RGPD. Pour en savoir plus, consultez notre{" "}
                <Link href="/confidentialite">politique de confidentialité</Link>.
              </p>

              <h2>Article 5 — Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus du Site (textes, photographies, logos, icônes) est
                protégé par le droit d&apos;auteur et appartient à Harenos SAS ou à ses partenaires.
                Toute reproduction est interdite sans autorisation.
              </p>

              <h2>Article 6 — Limitation de responsabilité</h2>
              <p>
                Harenos SAS s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur
                le Site. Toutefois, l&apos;entreprise ne peut garantir l&apos;exhaustivité ou l&apos;absence
                d&apos;erreurs et décline toute responsabilité pour les dommages résultant d&apos;une
                utilisation du Site.
              </p>

              <h2>Article 7 — Droit applicable</h2>
              <p>
                Les présentes CGU sont régies par le droit français.
                Tout litige sera soumis aux tribunaux compétents du ressort de Paris.
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
