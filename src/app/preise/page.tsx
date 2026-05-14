import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { getPackageContactHref } from "@/lib/contact-packages";

export const metadata: Metadata = {
  title: "Preise & Pakete – Webdesign Thurgau & Ostschweiz",
  description:
    "Transparente Webdesign-Preise für KMU in der Schweiz. Starter ab CHF 1'200, Business ab CHF 2'500, Premium ab CHF 4'500. Alle Preise als Richtwerte, kostenlose Offerte.",
  openGraph: {
    siteName: "Milan Webdesign",
    locale: "de_CH",
    type: "website",
    title: "Preise & Pakete – Webdesign Thurgau & Ostschweiz",
    description:
      "Klare Preise ohne Überraschungen. Webdesign-Pakete für KMU in der Schweiz ab CHF 1'200.",
    url: "https://milan-webdesign.ch/preise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milan Webdesign – Moderne Websites für KMU",
      },
    ],
  },
};

const packages = [
  {
    name: "Starter",
    price: "ab CHF 1'200",
    description: "Für kleine Websites mit wenigen Seiten",
    features: [
      { text: "Startseite" },
      { text: "Bis ca. 3 Unterseiten" },
      { text: "Mobile Optimierung" },
      { text: "Kontaktbereich mit E-Mail-/Telefon-/WhatsApp-Verlinkung" },
      { text: "SEO-Basis (Titel, Beschreibungen)" },
      { text: "Impressum / Datenschutz-Struktur" },
    ],
    highlighted: false,
    ctaHref: getPackageContactHref("starter"),
  },
  {
    name: "Business",
    price: "ab CHF 2'500",
    description: "Für komplette Firmenwebsites",
    features: [
      { text: "Startseite + alle Unterseiten" },
      { text: "Leistungen, Über uns, Referenzen" },
      { text: "Kontaktformular" },
      { text: "Inhaltsübernahme aus alter Website" },
      { text: "SEO-Grundstruktur" },
      { text: "Responsive Design für alle Geräte" },
    ],
    highlighted: true,
    ctaHref: getPackageContactHref("business"),
  },
  {
    name: "Premium",
    price: "ab CHF 4'500",
    description: "Für grössere Relaunch-Projekte",
    features: [
      { text: "Mehrere Unterseiten und Bereiche" },
      { text: "Referenz- und Projektseiten" },
      { text: "Downloadbereich (optional)" },
      { text: "CMS-Anbindung (optional)" },
      { text: "Erweiterte Struktur und Inhalte" },
      { text: "Langfristige Zusammenarbeit möglich" },
    ],
    highlighted: false,
    ctaHref: getPackageContactHref("premium"),
  },
];

const faqs = [
  {
    q: "Sind das Fixpreise?",
    a: "Nein, alle genannten Preise sind Richtwerte. Die genaue Offerte erhalten Sie nach einem kostenlosen Erstgespräch, in dem wir Ihren Bedarf besprechen.",
  },
  {
    q: "Was ist im Preis enthalten?",
    a: "Gestaltung, Umsetzung, mobile Optimierung und Übergabe. Hosting, Domain und laufende Wartung sind nicht enthalten und werden separat vereinbart.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Das hängt vom Umfang des Projekts ab. Ein Starter-Paket ist oft in 2–3 Wochen fertig, grössere Projekte können 4–8 Wochen dauern.",
  },
  {
    q: "Was kostet die Wartung?",
    a: "Die monatliche Wartungspauschale beginnt ab CHF 120 pro Monat. Sie beinhaltet kleine Anpassungen, technische Kontrolle und Backups.",
  },
];

export default function PreisePage() {
  return (
    <>
      <Hero
        label="Preise"
        headline="Klare Preise, keine Überraschungen"
        subheadline="Alle Angaben sind Richtwerte. Die genaue Offerte erhalten Sie nach einem kostenlosen Erstgespräch – unverbindlich und ohne Verpflichtung."
        primaryCta={{ label: "Kostenloses Erstgespräch anfragen", href: "/kontakt" }}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Pakete"
            title="Das passende Paket für Ihr Vorhaben"
            description="Alle Preise verstehen sich als Richtwerte und können je nach Umfang und Anforderungen variieren."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                highlighted={pkg.highlighted}
                ctaHref={pkg.ctaHref}
              />
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Alle Preise in CHF. MwSt. gemäss individuellem Angebot.
          </p>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="Wartung"
            title="Laufende Betreuung Ihrer Website"
            description="Nach der Übergabe stehe ich für Anpassungen und technische Kontrolle zur Verfügung."
          />
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm max-w-lg mx-auto">
            <div className="text-3xl font-bold text-slate-900 mb-1">
              {"ab CHF 120"}
            </div>
            <div className="text-slate-500 text-sm mb-7">pro Monat</div>
            <ul className="space-y-3">
              {[
                "Kleine Textanpassungen und Aktualisierungen",
                "Bildaustausch und einfache Ergänzungen",
                "Technische Kontrolle und Updates",
                "Regelmässige Backups",
                "Persönliche Erreichbarkeit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 shrink-0 mt-0.5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle label="Häufige Fragen" title="Fragen zu den Preisen" />
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interesse an einer Offerte?"
        description="Senden Sie mir eine Anfrage und ich melde mich in der Regel innert 24–48 Stunden mit einer ersten Einschätzung."
        primaryCta={{ label: "Unverbindliche Anfrage senden", href: "/kontakt" }}
        secondaryCta={{ label: "Leistungen ansehen", href: "/leistungen" }}
      />
    </>
  );
}
