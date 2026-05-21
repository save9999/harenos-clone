import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 items-center bg-[var(--color-paper)] py-24"
      >
        <Container as="div">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-6xl font-bold text-[var(--color-brand)]">404</p>
            <h1 className="mt-6 font-display text-[32px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[44px]">
              Page introuvable
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
              Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil
              pour découvrir nos prestations de rénovation en Île-de-France.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-brand-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
