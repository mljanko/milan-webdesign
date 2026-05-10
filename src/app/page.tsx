import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Milan Webdesign – Moderne Webseiten für kleine Schweizer Firmen",
  },
  description:
    "Website-Relaunch und moderne Webseiten für KMU in Arbon, Thurgau und Ostschweiz.",
  openGraph: {
    title: "Milan Webdesign – Moderne Webseiten für kleine Schweizer Firmen",
    description:
      "Website-Relaunch und moderne Webseiten für KMU in Arbon, Thurgau und Ostschweiz.",
    url: "https://milan-webdesign.ch",
    images: [
      {
        url: "/brand/milan-logo-social-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Milan Webdesign – Moderne Webseiten für kleine Schweizer Firmen",
      },
    ],
  },
};

function SvgIcon({ path, path2 }: { path: string; path2?: string }) {
  return (
    <svg
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
      {path2 && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path2} />
      )}
    </svg>
  );
}

const services = [
  {
    title: "Website-Relaunch",
    description:
      "Ihre bestehende Webseite wird modernisiert, mobilfreundlich gemacht und klar strukturiert.",
    icon: (
      <SvgIcon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: "Neue Firmenwebseite",
    description:
      "Sie haben noch keine Website? Ich erstelle einen professionellen Online-Auftritt von Grund auf.",
    icon: (
      <SvgIcon path="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Kontaktformular",
    description:
      "Ein einfaches, gut sichtbares Kontaktformular – damit Kunden schnell eine Anfrage senden können.",
    icon: (
      <SvgIcon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: "Referenzseiten",
    description:
      "Zeigen Sie Ihre Projekte oder Leistungen auf einer klar strukturierten Referenzseite.",
    icon: (
      <SvgIcon path="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "SEO-Grundstruktur",
    description:
      "Saubere Metadaten, strukturierte Inhalte und lokale Optimierung für die Suchmaschinen.",
    icon: <SvgIcon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  },
  {
    title: "Wartung & Updates",
    description:
      "Kleine Änderungen, technische Kontrolle und Backups – damit Ihre Website aktuell bleibt.",
    icon: (
      <SvgIcon
        path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        path2="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
];

const targetGroups = [
  "Handwerksbetriebe",
  "Garagen & Autowerkstätten",
  "Gartenbau & Landschaftspflege",
  "Reinigungsfirmen",
  "Lokale Dienstleister",
  "Kleine Industriebetriebe",
  "Vereine",
  "Freischaffende & Selbstständige",
];

const steps = [
  {
    number: "01",
    title: "Kostenlose Prüfung",
    description:
      "Ich schaue mir Ihre aktuelle Website unverbindlich an und zeige, was man verbessern könnte.",
  },
  {
    number: "02",
    title: "Vorschlag & Offerte",
    description:
      "Sie erhalten eine klare Offerte mit Umfang und Preis – kein Kleingedrucktes.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Ich setze die Website um und halte Sie dabei auf dem Laufenden.",
  },
  {
    number: "04",
    title: "Übergabe & Betreuung",
    description:
      "Nach der Übergabe stehe ich für Fragen und Anpassungen zur Verfügung.",
  },
];

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
      { text: "SEO-Basis" },
      { text: "Impressum / Datenschutz-Struktur" },
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "ab CHF 2'500",
    description: "Komplette Firmenwebsite",
    features: [
      { text: "Startseite + Unterseiten" },
      { text: "Leistungen, Über uns, Referenzen" },
      { text: "Kontaktformular" },
      { text: "Inhaltsübernahme" },
      { text: "SEO-Grundstruktur" },
      { text: "Responsive Design" },
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "ab CHF 4'500",
    description: "Für grössere Relaunch-Projekte",
    features: [
      { text: "Mehrere Unterseiten" },
      { text: "Referenz- und Projektseiten" },
      { text: "Downloadbereich optional" },
      { text: "CMS optional" },
      { text: "Erweiterte Struktur" },
      { text: "Langfristige Zusammenarbeit" },
    ],
    highlighted: false,
  },
];

const trustPoints = [
  {
    title: "Persönlicher Ansprechpartner",
    description:
      "Sie haben immer den gleichen Ansprechpartner – keine Weiterleitungen, keine Anonymität.",
    iconPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Klare Preise",
    description:
      "Offerten ohne Überraschungen. Was besprochen wurde, wird so umgesetzt.",
    iconPath:
      "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Verständliche Kommunikation",
    description:
      "Kein Fachjargon. Ich erkläre alles so, dass es verständlich ist.",
    iconPath:
      "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  },
  {
    title: "Fokus auf lokale KMU",
    description:
      "Ich kenne die Bedürfnisse kleiner Schweizer Unternehmen im Thurgau und der Ostschweiz.",
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Das Problem"
            title="Alte Websites kosten Sie Kunden"
            description="Viele KMU-Websites sehen auf dem Handy schlecht aus, laden langsam oder wirken unprofessionell – das kostet Vertrauen und Anfragen."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Nicht mobilfreundlich",
                description:
                  "Viele Besucher kommen heute über das Smartphone. Eine schlechte Mobile-Ansicht kann schnell Vertrauen kosten.",
              },
              {
                title: "Langsame Ladezeit",
                description:
                  "Lädt die Website zu langsam, klicken Besucher weg – bevor sie überhaupt Ihr Angebot gesehen haben.",
              },
              {
                title: "Kein klarer nächster Schritt",
                description:
                  "Wenn Besucher nicht sofort sehen, wie sie Kontakt aufnehmen können, verlassen sie die Seite.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution – 3 visual value props */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Die Lösung"
            title="Eine klare, moderne Website – die für Sie arbeitet"
            description="Ich übernehme Ihre bestehenden Inhalte, bringe Struktur hinein und baue daraus einen modernen Online-Auftritt."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
            {[
              {
                title: "Mobilfreundlich",
                desc: "Optimal auf allen Geräten – vom Smartphone bis zum grossen Desktop.",
                iconPath:
                  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "Schnell & strukturiert",
                desc: "Klare Texte, übersichtliches Layout – Besucher verstehen Ihr Angebot sofort.",
                iconPath:
                  "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Lokal & persönlich",
                desc: "Ihr direkter Ansprechpartner in Arbon, Thurgau – kein anonymes Agenturteam.",
                iconPath:
                  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Leistungen"
            title="Was ich anbiete"
            description="Von der einfachen Anpassung bis zum vollständigen Relaunch – angepasst an Ihren Bedarf."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Target groups */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="Zielgruppe"
            title="Für wen ist das geeignet?"
            description="Ich konzentriere mich auf kleine Unternehmen im Thurgau und der Ostschweiz, die einen persönlichen, unkomplizierten Webdesign-Partner suchen."
          />
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {targetGroups.map((group) => (
              <span
                key={group}
                className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Ablauf"
            title="So funktioniert die Zusammenarbeit"
            description="Klar, unkompliziert und transparent – von der ersten Anfrage bis zur fertigen Website."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-bold text-blue-200 mb-4 leading-none select-none">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Preise"
            title="Transparente Preise für jedes Budget"
            description="Alle Preise sind Richtwerte. Eine genaue Offerte erhalten Sie nach einem kostenlosen Erstgespräch."
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
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/preise"
              className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
            >
              Alle Preisdetails ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Warum Milan Webdesign"
            title="Was Sie von mir erwarten können"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl shrink-0 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={point.iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sie haben eine alte Website?"
        description="Lassen Sie mich Ihre aktuelle Website unverbindlich prüfen und erfahren Sie kostenlos, was man verbessern könnte."
        primaryCta={{
          label: "Website kostenlos prüfen lassen",
          href: "/kontakt",
        }}
        secondaryCta={{ label: "Leistungen ansehen", href: "/leistungen" }}
      />
    </>
  );
}
