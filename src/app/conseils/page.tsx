import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { POSTS, SITE_NAME, SITE_URL } from "@/lib/posts";

const PAGE_URL = `${SITE_URL}/conseils`;
const PAGE_TITLE = "Nos conseils travaux — Harenos | Guides rénovation IDF";
const PAGE_DESC =
  "Guides pratiques, retours d'expérience et conseils d'experts pour réussir vos projets de rénovation en Île-de-France : pièces de vie, domotique, éclairage, matériaux, méthodologie.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "conseils rénovation",
    "guide rénovation",
    "blog travaux",
    "entreprise rénovation Île-de-France",
    "rénovation Paris",
    "Harenos blog",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESC,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": PAGE_URL,
    name: "Nos conseils travaux",
    url: PAGE_URL,
    description: PAGE_DESC,
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      name: p.seoTitle,
      description: p.seoDescription,
      image: p.image,
      url: `${SITE_URL}/conseils/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
      author: { "@type": "Organization", name: p.author },
      keywords: p.keywords.join(", "),
      articleSection: p.category,
    })),
  };
}

function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nos conseils travaux",
        item: PAGE_URL,
      },
    ],
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ConseilsIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd()) }}
      />
      <Navbar />
      <main className="pb-24">
        <Container className="pt-10 md:pt-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Le journal Harenos
          </p>
          <h1 className="font-display mt-3 max-w-[920px] text-[36px] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-[64px]">
            Nos conseils travaux
          </h1>
          <p className="mt-5 max-w-[680px] text-[18px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[20px]">
            Guides pratiques, retours d&apos;expérience et conseils
            d&apos;experts pour vous aider à concevoir, budgéter et piloter vos
            projets de rénovation.
          </p>
        </Container>

        <Container className="mt-12 md:mt-16">
          <Link
            href={`/conseils/${featured.slug}`}
            className="group grid gap-6 md:grid-cols-2 md:gap-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] md:aspect-[5/4]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                unoptimized
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                {featured.category} · à la une
              </span>
              <h2 className="font-display mt-4 text-[28px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[40px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[17px]">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[13px] text-[var(--color-muted)]">
                <span>{formatDate(featured.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]">
                Lire l&apos;article
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>
        </Container>

        <Container className="mt-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-[24px] font-bold tracking-tight text-[var(--color-ink)] md:text-[30px]">
              Tous les articles
            </h2>
            <span className="text-[13px] text-[var(--color-muted)]">
              {POSTS.length} articles publiés
            </span>
          </div>

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/conseils/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                  {p.category}
                </p>
                <h3 className="mt-2 text-[17px] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[12px] text-[var(--color-muted)]">
                  <span>{formatDate(p.publishedAt)}</span>
                  <span aria-hidden>·</span>
                  <span>{p.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
