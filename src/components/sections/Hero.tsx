import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <Container className="pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h1 className="font-display text-[44px] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-[68px]">
              Rénover pour le meilleur{" "}
              <span className="inline-flex size-10 items-center justify-center md:size-14">
                <Sparkles
                  className="text-[var(--color-brand)]"
                  strokeWidth={2.2}
                  size={48}
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)] md:text-[17px]">
              Une entreprise de rénovation tous corps d&apos;état qui prend en
              main votre projet de A à Z. Estimation transparente, artisans
              qualifiés et un chef de projet dédié — partout en
              Île-de-France.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact">Décrire mon projet</Button>
              <Button href="#process" variant="secondary">
                Comment ça marche ?
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Intérieur résidentiel rénové"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
