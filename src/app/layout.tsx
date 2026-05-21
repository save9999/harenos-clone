import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/posts";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { CookieBanner } from "@/components/ui/CookieBanner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const DEFAULT_TITLE =
  "Harenos — Rénovation Île-de-France : devis gratuit, certifié RGE";
const DEFAULT_DESC =
  "Entreprise générale de rénovation en Île-de-France. Devis gratuit, certifiée RGE et Qualibat, garantie décennale. Paris, 92, 93, 94, 77, 78, 91, 95.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Harenos — Rénovation IDF",
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "rénovation Île-de-France",
    "rénovation Paris",
    "entreprise rénovation IDF",
    "devis rénovation gratuit",
    "rénovation appartement Paris",
    "rénovation maison Île-de-France",
    "tous corps d'état IDF",
    "TCE rénovation Paris",
    "entreprise RGE Île-de-France",
    "rénovation 75 92 93 94",
    "Harenos",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    locale: "fr_FR",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Harenos — Rénovation IDF certifiée RGE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "renovation",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HomeImprovementBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Harenos",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b4ef69340625108f0191a4_logo.png",
      },
      image: `${SITE_URL}/opengraph-image`,
      description: DEFAULT_DESC,
      telephone: "+33180000000",
      email: "bonjour@harenos.fr",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "State", name: "Île-de-France" },
        { "@type": "City", name: "Paris" },
        {
          "@type": "AdministrativeArea",
          name: "Hauts-de-Seine",
          identifier: "92",
        },
        {
          "@type": "AdministrativeArea",
          name: "Seine-Saint-Denis",
          identifier: "93",
        },
        {
          "@type": "AdministrativeArea",
          name: "Val-de-Marne",
          identifier: "94",
        },
        {
          "@type": "AdministrativeArea",
          name: "Seine-et-Marne",
          identifier: "77",
        },
        { "@type": "AdministrativeArea", name: "Yvelines", identifier: "78" },
        { "@type": "AdministrativeArea", name: "Essonne", identifier: "91" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise", identifier: "95" },
      ],
      priceRange: "€€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
        bestRating: "5",
      },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "RGE" },
        { "@type": "EducationalOccupationalCredential", name: "Qualibat" },
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Harenos",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${figtree.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
