import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { POSTS } from "@/lib/posts";

export function Blog() {
  return (
    <section id="expertises" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
            Nos conseils travaux
          </h2>
          <Link
            href="/conseils"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]"
          >
            Voir tous les articles
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/conseils/${p.slug}`}
              className="group block"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)]">
                  Lire l&apos;article
                  <ArrowUpRight size={14} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
