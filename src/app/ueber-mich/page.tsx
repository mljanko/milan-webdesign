import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Über mich – Webdesigner in Arbon & Thurgau",
  description:
    "Milan Jankovic unterstützt kleine KMU mit Webdesign in Arbon, Thurgau und der Ostschweiz. Persönliche Webseiten für KMU, fair und verständlich umgesetzt.",
  openGraph: {
    siteName: "Milan Webdesign",
    locale: "de_CH",
    type: "website",
    title: "Über mich – Webdesigner in Arbon & Thurgau",
    description:
      "Persönliches Webdesign aus Arbon für kleine Schweizer KMU in Thurgau und der Ostschweiz.",
    url: "https://milan-webdesign.ch/ueber-mich",
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

const values = [
  {
    title: "Persönlicher Kontakt",
    description:
      "Sie sprechen direkt mit mir. Ich höre zu, frage nach und begleite Ihr Projekt persönlich statt über anonyme Agenturwege.",
  },
  {
    title: "Verständliche Umsetzung",
    description:
      "Ich erkläre die Schritte klar und nachvollziehbar. So wissen Sie jederzeit, was entsteht und warum es für Ihre Website sinnvoll ist.",
  },
  {
    title: "Fokus auf lokale KMU",
    description:
      "Mein Angebot ist auf kleine Firmen, Handwerker und Dienstleister in Arbon, Thurgau und der Ostschweiz ausgerichtet.",
  },
  {
    title: "Faire Preise",
    description:
      "Sie erhalten klare, nachvollziehbare Angebote, die zum Budget kleiner Unternehmen passen und keine unnötige Komplexität enthalten.",
  },
];

const profile = [
  { label: "Name", value: "Milan Jankovic" },
  { label: "Standort", value: "Arbon, Thurgau" },
  { label: "Region", value: "Ostschweiz & Bodenseeregion" },
  { label: "Fokus", value: "Webseiten für kleine KMU" },
  { label: "Sprachen", value: "Deutsch, Serbisch, Englisch" },
];

const trustPoints = [
  "Persönlicher Ansprechpartner",
  "Klare und verständliche Umsetzung",
  "Fokus auf kleine Schweizer KMU",
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-accent-light"
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
  );
}

export default function UeberMichPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-[#08233f] to-navy-light px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-widest text-blue-300">
              Über mich
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Hallo, ich bin Milan
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
              Ich unterstütze kleine und mittlere Unternehmen dabei, ihre alte
              Website modern, übersichtlich und mobilfreundlich zu machen. Mein
              Fokus liegt auf sauberen Firmenwebseiten, einfacher Pflege und
              fairen Preisen.
            </p>

            <ul className="mt-8 grid gap-3 text-sm font-medium text-white sm:grid-cols-3 lg:max-w-3xl">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <figure className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/images/milan-portrait.jpg"
                  alt="Portrait von Milan Jankovic, Ansprechpartner von Milan Webdesign"
                  width={900}
                  height={1100}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="aspect-[4/5] w-full object-cover object-[55%_38%]"
                />
              </div>
              <figcaption className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-navy/85 px-4 py-3 text-sm text-blue-100 shadow-lg backdrop-blur">
                Direkter Ansprechpartner aus Arbon
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
            <div>
              <SectionTitle
                label="Warum Milan Webdesign"
                title="Was mich antreibt"
                centered={false}
              />
              <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                <p>
                  Ich weiss, wie wichtig ein klarer und professioneller Auftritt
                  für kleine Unternehmen ist. Viele Betriebe leisten gute Arbeit,
                  aber ihre Website zeigt das nicht richtig – sie wirkt veraltet,
                  ist auf dem Handy unübersichtlich oder bringt zu wenige
                  Anfragen.
                </p>
                <p>
                  Genau hier unterstütze ich. Ich erstelle moderne, einfache und
                  verständliche Webseiten, die Vertrauen schaffen und Kunden
                  schnell zeigen, wer Sie sind, was Sie anbieten und wie man Sie
                  erreicht.
                </p>
                <p>
                  Mein Ziel ist nicht, komplizierte Agentur-Lösungen zu
                  verkaufen. Ich möchte kleinen Unternehmen aus Arbon, Thurgau
                  und der Ostschweiz helfen, online professioneller aufzutreten –
                  fair, persönlich und ohne unnötige Komplexität.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="mb-6 text-lg font-bold text-slate-900">
                Auf einen Blick
              </h2>
              <dl className="space-y-4">
                {profile.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <dt className="w-28 shrink-0 text-sm font-semibold text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-slate-700">{item.value}</dd>
                  </div>
                ))}
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-slate-500">
                    Kontakt
                  </dt>
                  <dd className="text-sm">
                    <a
                      href="mailto:info@milan-webdesign.ch"
                      className="text-accent hover:underline"
                    >
                      info@milan-webdesign.ch
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Mein Hintergrund
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Mein Interesse für Webdesign, WordPress und moderne Webseiten habe
              ich über mehrere Weiterbildungen in den Bereichen Webentwicklung,
              WordPress, JavaScript und Onlinemarketing vertieft. Gleichzeitig
              kenne ich durch meine praktische Berufserfahrung auch die Welt von
              Handwerk, Bau und lokalen Betrieben. Dadurch verstehe ich, worauf
              es kleinen Unternehmen wirklich ankommt: eine klare Website,
              einfache Pflege, faire Kosten und ein Ergebnis, das Kunden
              überzeugt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="Meine Werte" title="Was mir wichtig ist" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">{val.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            label="Kontakt"
            title="Lernen wir uns kennen"
            description="Sie haben eine Frage oder möchten wissen, ob ich der richtige Partner für Ihr Website-Projekt bin? Melden Sie sich einfach."
          />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-xl bg-accent px-8 py-4 font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="mailto:info@milan-webdesign.ch"
              className="rounded-xl border border-slate-200 bg-slate-50 px-8 py-4 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              info@milan-webdesign.ch
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Bereit für eine bessere Website?"
        description="Ich prüfe gerne unverbindlich, wie Ihre aktuelle Website wirkt und wo Verbesserungen möglich sind."
        primaryCta={{
          label: "Website kostenlos prüfen lassen",
          href: "/kontakt",
        }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      />
    </>
  );
}
