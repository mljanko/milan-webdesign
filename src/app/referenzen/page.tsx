import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import DemoProjectCard from "@/components/DemoProjectCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Referenzen & Konzeptbeispiele | Milan Webdesign",
  },
  description:
    "Konzeptbeispiele für moderne Webseiten von Milan Webdesign – für Handwerker, Garagen, Gartenbau und kleine Schweizer KMU.",
  openGraph: {
    title: "Referenzen & Konzeptbeispiele | Milan Webdesign",
    description:
      "Konzeptbeispiele für moderne Webseiten von Milan Webdesign – für Handwerker, Garagen, Gartenbau und kleine Schweizer KMU.",
    url: "https://milan-webdesign.ch/referenzen",
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

const demoProjects = [
  {
    category: "Handwerk",
    title: "Konzept für einen Handwerksbetrieb",
    description:
      "Möglicher Online-Auftritt für einen lokalen Handwerksbetrieb: klare Leistungsübersicht, Referenzfotos und ein gut sichtbares Kontaktformular für direkte Anfragen.",
    benefit:
      "Ziel: Leistungen klar zeigen und mehr qualifizierte Anfragen erhalten.",
    tags: ["Website-Relaunch", "Kontaktformular", "SEO-Basis", "Mobilfreundlich"],
    imageSrc: "/references/ihr-handwerksbetrieb.png",
    imageAlt: "Konzept-Mockup für eine Handwerker-Webseite",
  },
  {
    category: "Automobil",
    title: "Konzept für eine Garage",
    description:
      "Mögliche Firmenwebsite für eine kleine Autowerkstatt: Startseite mit Leistungsübersicht, Öffnungszeiten, Standort und Direktkontakt.",
    benefit:
      "Ziel: Services verständlich präsentieren und Termin-Anfragen vereinfachen.",
    tags: [
      "Neue Firmenwebseite",
      "Lokale SEO",
      "Responsive Design",
      "Termin-Anfrage",
    ],
    imageSrc: "/references/ihre-garage.png",
    imageAlt: "Konzept-Mockup für eine Garage-Webseite",
  },
  {
    category: "Gartenbau",
    title: "Konzept für einen Gartenbau-Betrieb",
    description:
      "Mögliche Website für einen Gartenbau-Betrieb mit Leistungsseite und einer übersichtlichen Angebotsstruktur für Privat- und Gewerbekunden.",
    benefit:
      "Ziel: Arbeiten visuell zeigen und Anfragen mit klaren Angaben erhalten.",
    tags: ["Referenzseiten", "Website-Relaunch", "SEO", "Mobilfreundlich"],
    imageSrc: "/references/gartenbau-muster.png",
    imageAlt: "Konzept-Mockup für eine Gartenbau-Webseite",
  },
];

export default function ReferenzenPage() {
  return (
    <>
      <Hero
        label="Referenzen"
        headline="Klare Webseiten für verschiedene Branchen"
        subheadline="Die folgenden Konzepte zeigen, wie moderne Webseiten für typische KMU-Branchen aussehen könnten. Echte Kundenprojekte werden laufend ergänzt."
        primaryCta={{ label: "Eigenes Projekt anfragen", href: "/kontakt" }}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-12 text-sm text-amber-900">
            <strong>Transparenzhinweis:</strong> Die folgenden Beispiele sind
            Konzept- und Demo-Projekte. Sie zeigen mögliche Umsetzungen für
            typische Schweizer KMU. Echte Kundenreferenzen werden ergänzt,
            sobald erste Projekte abgeschlossen sind.
          </div>

          <SectionTitle
            label="Konzeptbeispiele"
            title="So könnte Ihre neue Website aussehen"
            description="Diese Konzeptbeispiele zeigen, wie eine moderne Website für typische Schweizer KMU aufgebaut sein kann – klar, mobilfreundlich und auf Anfragen ausgerichtet."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((project) => (
              <DemoProjectCard
                key={project.title}
                category={project.category}
                title={project.title}
                description={project.description}
                benefit={project.benefit}
                tags={project.tags}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            label="Ihr Projekt"
            title="Seien Sie unter den ersten Projekten"
            description="Ich starte jedes Projekt mit besonderer Sorgfalt. Wenn Sie eine klare, moderne Website möchten, freue ich mich auf Ihre unverbindliche Anfrage."
          />
        </div>
      </section>

      <CTASection
        title="Interesse an einer Zusammenarbeit?"
        description="Senden Sie mir eine unverbindliche Anfrage und wir besprechen, was ich für Ihre Website tun kann."
        primaryCta={{ label: "Unverbindlich anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Leistungen ansehen", href: "/leistungen" }}
      />
    </>
  );
}
