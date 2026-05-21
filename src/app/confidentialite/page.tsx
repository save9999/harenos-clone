import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) de Harenos.",
  alternates: { canonical: `${SITE_URL}/confidentialite` },
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex-1 bg-[var(--color-paper)] py-16 md:py-24"
      >
        <Container as="div">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            >
              ← Retour à l&apos;accueil
            </Link>

            <h1 className="font-display text-[36px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[48px]">
              Politique de confidentialité
            </h1>

            <div className="prose prose-neutral mt-10 max-w-none text-[var(--color-ink-soft)]">
              <p>
                Harenos SAS s&apos;engage à protéger vos données personnelles conformément au
                Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la
                loi Informatique et Libertés modifiée.
              </p>

              <h2>1. Responsable du traitement</h2>
              <p>
                <strong>Harenos SAS</strong>, entreprise générale de rénovation, Île-de-France.<br />
                Contact DPO : <a href="mailto:bonjour@harenos.fr">bonjour@harenos.fr</a>
              </p>

              <h2>2. Données collectées</h2>
              <p>
                Lors de l&apos;utilisation du formulaire de demande de devis, nous collectons :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Adresse du chantier (département / commune)</li>
                <li>Description du projet de rénovation</li>
              </ul>

              <h2>3. Finalités du traitement</h2>
              <p>Vos données sont collectées pour :</p>
              <ul>
                <li>Répondre à votre demande de devis</li>
                <li>Vous recontacter dans le cadre de votre projet de rénovation</li>
                <li>Améliorer nos services (statistiques anonymisées uniquement)</li>
              </ul>

              <h2>4. Base légale</h2>
              <p>
                Le traitement repose sur votre consentement explicite (formulaire) et sur
                l&apos;intérêt légitime de Harenos SAS à répondre à vos demandes.
              </p>

              <h2>5. Durée de conservation</h2>
              <p>
                Vos données sont conservées 3 ans à compter de votre dernière interaction
                avec Harenos SAS, puis supprimées ou anonymisées.
              </p>

              <h2>6. Destinataires</h2>
              <p>
                Vos données ne sont ni vendues, ni louées, ni cédées à des tiers. Elles peuvent
                être transmises à des prestataires techniques (hébergement, emailing) soumis à
                des obligations de confidentialité strictes.
              </p>

              <h2>7. Cookies et traceurs</h2>
              <p>
                Ce site peut utiliser des cookies fonctionnels nécessaires à son bon fonctionnement.
                Aucun cookie publicitaire ou de profilage n&apos;est déposé sans votre consentement.
                Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>

              <h2>8. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données :
              </p>
              <ul>
                <li><strong>Accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Rectification</strong> : corriger des données inexactes</li>
                <li><strong>Effacement</strong> : demander la suppression (droit à l&apos;oubli)</li>
                <li><strong>Opposition</strong> : vous opposer à un traitement</li>
                <li><strong>Portabilité</strong> : récupérer vos données dans un format lisible</li>
                <li><strong>Limitation</strong> : restreindre temporairement un traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:bonjour@harenos.fr">bonjour@harenos.fr</a>. En cas de litige, vous
                pouvez saisir la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL
                </a>
                .
              </p>

              <h2>9. Sécurité</h2>
              <p>
                Harenos SAS met en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données contre tout accès non autorisé, divulgation, altération
                ou destruction.
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
