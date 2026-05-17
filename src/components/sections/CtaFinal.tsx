import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaFinal() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-ink)] px-8 py-16 text-white md:px-16 md:py-20">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-brand)]/20 blur-3xl"
          />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-tight md:text-[52px]">
                Prêt à démarrer votre rénovation&nbsp;?
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
                Décrivez votre projet en quelques lignes. Un chef de projet vous
                rappelle sous 24h avec une première estimation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
              <Button
                href="#"
                className="bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)]"
              >
                Décrire mon projet
              </Button>
              <a
                href="tel:+33180000000"
                className="text-sm text-white/70 hover:text-white"
              >
                ou appelez-nous au{" "}
                <span className="font-semibold text-white">
                  +33 1 80 00 00 00
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
