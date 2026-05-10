import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leistungen – Webdesign & Website-Relaunch im Thurgau",
  description:
    "Website-Relaunch, neue Firmenwebseiten, Kontaktformulare und SEO für KMU in Arbon, Thurgau und der Ostschweiz. Persönlich, klar und zum fairen Preis.",
  openGraph: {
    title: "Leistungen – Webdesign & Website-Relaunch im Thurgau",
    description:
      "Professionelle Webdesign-Leistungen für KMU in Arbon und der Ostschweiz. Website-Relaunch, SEO, Kontaktformulare und laufende Wartung.",
    url: "https://milan-webdesign.ch/leistungen",
    images: [
      {
        url: "https://milan-webdesign.ch/brand/social-preview-whatsapp.png",
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
      "Bestehende Inhalte werden übernommen, die Struktur verbessert und das Design modernisiert. Das Resultat ist eine klare, schnelle und mobilfreundliche Website.",
    icon: (
      <SvgIcon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: "Neue Firmenwebseite",
    description:
      "Sie haben noch keinen Online-Auftritt? Ich erstelle eine professionelle Firmenwebsite von Grund auf – mit klarem Aufbau und passend für Ihr Unternehmen.",
    icon: (
      <SvgIcon path="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Landingpages",
    description:
      "Für Sonderaktionen, Jubiläen oder spezifische Angebote erstelle ich gezielte Landingpages mit einer klaren Botschaft und Handlungsaufforderung.",
    icon: <SvgIcon path="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: "Referenz- und Projektseiten",
    description:
      "Zeigen Sie Ihre besten Arbeiten, Projekte oder realisierten Aufträge auf einer übersichtlich gestalteten Seite.",
    icon: (
      <SvgIcon path="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "Kontaktformulare",
    description:
      "Ein gut sichtbares und einfaches Kontaktformular sorgt dafür, dass Interessenten schnell eine Anfrage senden können.",
    icon: (
      <SvgIcon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: "SEO-Grundoptimierung",
    description:
      "Saubere Seitentitel, Beschreibungen, strukturierte Inhalte und lokale Suchmaschinenoptimierung für Ihren Standort in der Schweiz.",
    icon: <SvgIcon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  },
  {
    title: "Wartung und Anpassungen",
    description:
      "Texte anpassen, Bilder tauschen, Öffnungszeiten aktualisieren – ich übernehme kleine Anpassungen schnell und zuverlässig.",
    icon: (
      <SvgIcon
        path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        path2="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Technische Betreuung",
    description:
      "Sicherheitsupdates, Backups und technische Kontrolle sorgen dafür, dass Ihre Website stabil und sicher bleibt.",
    icon: (
      <SvgIcon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

const approach = [
  {
    title: "Inhalte übernehmen",
    description:
      "Bestehende Texte, Bilder und Informationen werden übernommen und strukturiert aufgebaut – Sie müssen nichts neu schreiben.",
  },
  {
    title: "Mobilfreundlich",
    description:
      "Jede Website wird so gebaut, dass sie auf allen Geräten gut aussieht – vom Smartphone bis zum Desktop-PC.",
  },
  {
    title: "Schnell und verständlich",
    description:
      "Besucher sollen sofort verstehen, was Sie anbieten. Kein überladenes Design, keine unnötigen Spielereien.",
  },
  {
    title: "Lokal und persönlich",
    description:
      "Sie haben immer den gleichen Ansprechpartner. Ich bin in der Ostschweiz für Sie erreichbar.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Hero
        label="Leistungen"
        headline="Website-Relaunch & neue Webseiten für KMU"
        subheadline="Ich modernisiere veraltete Firmenwebseiten und erstelle neue Online-Auftritte – klar, mobilfreundlich und auf Ihre Kunden ausgerichtet."
        primaryCta={{ label: "Kostenlose Anfrage senden", href: "/kontakt" }}
        secondaryCta={{ label: "Preise ansehen", href: "/preise" }}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Überblick"
            title="Was ich für Sie umsetzen kann"
            description="Ich konzentriere mich auf das Wesentliche: eine klare, schnelle und mobilfreundliche Website, die Ihren Besuchern sofort erklärt, was Sie anbieten."
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
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="Mein Ansatz"
            title="Einfach, klar und auf KMU-Bedürfnisse ausgerichtet"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approach.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm"
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

      <CTASection
        title="Bereit für Ihren neuen Online-Auftritt?"
        description="Lassen Sie mich Ihre aktuelle Website unverbindlich prüfen und erfahren Sie, was man verbessern könnte."
        primaryCta={{
          label: "Website kostenlos prüfen lassen",
          href: "/kontakt",
        }}
        secondaryCta={{ label: "Preise ansehen", href: "/preise" }}
      />
    </>
  );
}
