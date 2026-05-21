import Image from "next/image";
import { ShieldCheck, Star, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <Container className="pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            {/* Badge de confiance */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand)]">
              <ShieldCheck size={14} />
              Entreprise certifiée RGE · Garantie décennale
            </div>

            <h1 className="font-display text-[44px] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-[68px]">
              Rénover pour le meilleur{" "}
              <span className="inline-block align-middle">
                <Image
                  src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b59ba7d08eb11325bd4b16_sparkles-svgrepo-com%20(4)%201.png"
                  alt=""
                  width={56}
                  height={56}
                  unoptimized
                  className="inline-block size-10 md:size-14"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)] md:text-[17px]">
              Rénovation clé en main en Île-de-France — de A à Z, sans stress.
              Artisans certifiés, chef de projet dédié, devis gratuit sous 48h
              et garantie décennale sur tous nos chantiers.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact">Devis gratuit en 48h</Button>
              <Button href="#process" variant="secondary">
                Comment ça marche ?
              </Button>
            </div>

            {/* Rassurance inline */}
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-[var(--color-ink-soft)]">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[var(--color-brand)]" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={13} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="font-semibold text-[var(--color-ink)]">5/5</span>
                &nbsp;— 47 avis vérifiés
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[var(--color-brand)]" />
                Garantie décennale incluse
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66c1a744a9f78e8cf0e9e8ea_Hero%20section%20new%20image.png"
                alt="Intérieur résidentiel rénové par Harenos"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-[20px] bg-white px-5 py-4 shadow-xl ring-1 ring-[var(--color-line)] md:block">
              <div className="text-2xl font-bold text-[var(--color-brand)]">+ 150</div>
              <div className="mt-0.5 text-xs font-medium text-[var(--color-ink-soft)]">chantiers livrés</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
