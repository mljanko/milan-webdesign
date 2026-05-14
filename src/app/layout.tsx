import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteTitle = "Milan Webdesign – Moderne Websites für KMU";
const siteDescription =
  "Professionelle Websites für KMU und Selbständige in Arbon, Thurgau und der Ostschweiz. Modern, schnell und kundenorientiert.";
const socialPreviewImage = "/og-image.jpg";
const socialPreviewAlt = "Milan Webdesign – Moderne Websites für KMU";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Milan Webdesign",
  },
  description: siteDescription,
  keywords: [
    "Webdesign Arbon",
    "Webdesigner Thurgau",
    "Website Relaunch Thurgau",
    "Website Relaunch Ostschweiz",
    "Webseiten für KMU Schweiz",
    "Webseiten KMU Schweiz",
    "Webdesigner Ostschweiz",
    "Website modernisieren Schweiz",
    "Firmenwebseite Thurgau",
    "Webdesign Bodensee",
  ],
  authors: [{ name: "Milan Webdesign" }],
  metadataBase: new URL("https://milan-webdesign.ch"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: "Milan Webdesign",
    locale: "de_CH",
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: "https://milan-webdesign.ch",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: socialPreviewAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialPreviewImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://milan-webdesign.ch/#business",
  name: "Milan Webdesign",
  url: "https://milan-webdesign.ch",
  email: "info@milan-webdesign.ch",
  description:
    "Professionelle Webseiten und Website-Relaunch für KMU in Arbon, Thurgau und der Ostschweiz.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Waldeggstrasse 7",
    addressLocality: "Arbon",
    addressRegion: "TG",
    postalCode: "9320",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.518,
    longitude: 9.431,
  },
  areaServed: [
    { "@type": "City", name: "Arbon" },
    { "@type": "AdministrativeArea", name: "Thurgau" },
    { "@type": "AdministrativeArea", name: "Ostschweiz" },
    { "@type": "AdministrativeArea", name: "Bodenseeregion" },
  ],
  priceRange: "ab CHF 1'200",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-slate-800 bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
