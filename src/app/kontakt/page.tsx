import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import InstagramIcon from "@/components/InstagramIcon";
import { getPackageOptionByParam } from "@/lib/contact-packages";

const instagramUrl = "https://www.instagram.com/milanwebdesign.ch";

export const metadata: Metadata = {
  title: "Kontakt – Kostenlose Website-Prüfung anfragen",
  description:
    "Nehmen Sie Kontakt auf und erhalten Sie eine kostenlose, unverbindliche Website-Prüfung. Milan Webdesign – Arbon, Thurgau. Antwort in der Regel innert 24–48 Stunden.",
  openGraph: {
    siteName: "Milan Webdesign",
    locale: "de_CH",
    type: "website",
    title: "Kontakt – Kostenlose Website-Prüfung anfragen",
    description:
      "Unverbindliche Anfrage für Ihre neue Website oder Ihren Website-Relaunch. Milan Webdesign, Arbon.",
    url: "https://milan-webdesign.ch/kontakt",
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

type KontaktPageProps = {
  searchParams?: Promise<{ paket?: string | string[] }>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const params = searchParams ? await searchParams : {};
  const paketParam = Array.isArray(params.paket) ? params.paket[0] : params.paket;
  const packageOption = getPackageOptionByParam(paketParam);
  const initialPackage = packageOption?.packageLabel ?? "";
  const initialBudget = packageOption?.budget ?? "";

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
            Kontakt
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Ich freue mich auf Ihre Anfrage
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto">
            Beschreiben Sie kurz Ihr Anliegen – ich melde mich in der Regel
            innert 24–48 Stunden bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-7">
              <div>
                <h2 className="font-bold text-slate-900 text-lg mb-5">
                  Kontaktinformationen
                </h2>
                <div className="space-y-5 text-sm text-slate-600">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-0.5">
                        E-Mail
                      </div>
                      <a
                        href="mailto:info@milan-webdesign.ch"
                        className="text-accent hover:underline"
                      >
                        info@milan-webdesign.ch
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl shrink-0 flex items-center justify-center mt-0.5">
                      <InstagramIcon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-0.5">
                        Instagram
                      </div>
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        @milanwebdesign.ch
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-0.5">
                        Standort
                      </div>
                      <address className="not-italic text-slate-600">
                        Arbon, Thurgau
                        <br />
                        <span className="text-slate-400">Ostschweiz, Schweiz</span>
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7m-3.5-7v7m-10-7h7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-0.5">
                        Sprachen
                      </div>
                      <p className="text-slate-600">
                        Beratung auf Deutsch, Englisch und Serbisch möglich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">
                  Kostenlose Website-Prüfung
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Geben Sie Ihre aktuelle Website-Adresse im Formular an. Ich
                  schaue sie mir unverbindlich an und teile Ihnen mit, was man
                  konkret verbessern könnte.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">
                  Antwortzeit
                </h3>
                <p className="text-sm text-slate-600">
                  Ich melde mich in der Regel innert{" "}
                  <strong>24–48 Stunden</strong> bei Ihnen.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-bold text-slate-900 text-lg mb-6">
                Anfrage senden
              </h2>
              <ContactForm
                key={`${initialPackage}-${initialBudget}`}
                initialPackage={initialPackage}
                initialBudget={initialBudget}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
