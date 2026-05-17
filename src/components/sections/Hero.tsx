import Image from "next/image";
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
              <span className="inline-block align-middle">
                <Image
                  src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b59ba7d08eb11325bd4b16_sparkles-svgrepo-com%20(4)%201.png"
                  alt=""
                  width={56}
                  height={56}
                  className="inline-block size-10 md:size-14"
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
                src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66c1a744a9f78e8cf0e9e8ea_Hero%20section%20new%20image.png"
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
