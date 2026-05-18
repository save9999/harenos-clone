import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArticleRenderer } from "@/components/article/ArticleRenderer";
import {
  POSTS,
  SITE_NAME,
  SITE_URL,
  getPostBySlug,
  type Post,
} from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable — Harenos" };

  const url = `${SITE_URL}/conseils/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.image, alt: post.title }],
      locale: "fr_FR",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

function articleJsonLd(post: Post) {
  const url = `${SITE_URL}/conseils/${post.slug}`;
  const wordCount = post.blocks.reduce((acc, b) => {
    if (b.type === "p" || b.type === "h2" || b.type === "h3") {
      return acc + b.text.split(/\s+/).length;
    }
    if (b.type === "ul" || b.type === "ol") {
      return acc + b.items.join(" ").split(/\s+/).length;
    }
    if (b.type === "callout") {
      return acc + (b.title + " " + b.text).split(/\s+/).length;
    }
    if (b.type === "quote") {
      return acc + b.text.split(/\s+/).length;
    }
    return acc;
  }, post.intro.split(/\s+/).length);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    name: post.seoTitle,
    description: post.seoDescription,
    image: [post.image],
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b4ef69340625108f0191a4_logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "fr-FR",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount,
    url,
  };
}

function breadcrumbJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nos conseils travaux",
        item: `${SITE_URL}/conseils`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/conseils/${post.slug}`,
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

export default async function ArticlePage({
  params,
}: PageProps<"/conseils/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(post)),
        }}
      />
      <Navbar />
      <main className="pb-24">
        <article>
          <Container className="pt-10 md:pt-14">
            <Link
              href="/conseils"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              <ArrowLeft size={14} />
              Tous les articles
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--color-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Tag size={13} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} />
                {post.readingTime}
              </span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <h1 className="font-display mt-4 max-w-[920px] text-[34px] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-[56px]">
              {post.title}
            </h1>

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[var(--color-ink-soft)] md:text-[20px]">
              {post.intro}
            </p>
          </Container>

          <Container className="mt-10 md:mt-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] md:aspect-[21/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                unoptimized
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
            </div>
          </Container>

          <Container className="mt-12 md:mt-16">
            <div className="mx-auto max-w-[760px]">
              <ArticleRenderer blocks={post.blocks} />
            </div>
          </Container>

          <Container className="mt-16">
            <div className="mx-auto flex max-w-[760px] flex-col items-start gap-5 rounded-[24px] bg-[var(--color-ink)] px-8 py-10 text-white md:flex-row md:items-center md:justify-between md:px-12">
              <div>
                <h3 className="font-display text-[22px] font-bold leading-tight md:text-[26px]">
                  Un projet de rénovation en tête ?
                </h3>
                <p className="mt-2 max-w-md text-[15px] text-white/70">
                  Décrivez-nous votre projet, nous revenons vers vous sous 48
                  heures avec une première estimation gratuite.
                </p>
              </div>
              <Button href="/#contact">Décrire mon projet</Button>
            </div>
          </Container>
        </article>

        <Container className="mt-20 md:mt-28">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[36px]">
              À lire aussi
            </h2>
            <Link
              href="/conseils"
              className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-brand)] md:inline-flex"
            >
              Tous les articles
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3">
            {related.map((p) => (
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
                <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)]">
                  Lire l&apos;article
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
