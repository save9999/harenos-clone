import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/posts";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const DEFAULT_TITLE = "Harenos — Rénovation tous corps d'état en Île-de-France";
const DEFAULT_DESC =
  "Entreprise générale de rénovation en Île-de-France : conception, pilotage et réalisation de vos travaux résidentiels. Appartements, maisons, rénovation complète.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Harenos",
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "entreprise rénovation",
    "rénovation Île-de-France",
    "rénovation Paris",
    "rénovation appartement",
    "rénovation maison",
    "tous corps d'état",
    "TCE rénovation",
    "Harenos",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
