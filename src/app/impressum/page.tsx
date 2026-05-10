import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Milan Webdesign - Angaben gemäss Schweizer Recht.",
};

export default function ImpressumPage() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Rechtliche Angaben
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Impressum
          </h1>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-950">
              Anbieter / Verantwortliche Person
            </h2>
            <dl className="grid gap-4 text-sm text-slate-700 sm:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">Anbieter</dt>
              <dd>
                Milan Webdesign
                <br />
                Inhaber: Milan Jankovic
                <br />
                Waldeggstrasse 7
                <br />
                9320 Arbon
                <br />
                Schweiz
              </dd>

              <dt className="font-semibold text-slate-950">E-Mail</dt>
              <dd>
                <a
                  className="font-medium text-accent hover:text-accent-dark"
                  href="mailto:info@milan-webdesign.ch"
                >
                  info@milan-webdesign.ch
                </a>
              </dd>

              <dt className="font-semibold text-slate-950">Website</dt>
              <dd>
                <a
                  className="font-medium text-accent hover:text-accent-dark"
                  href="https://milan-webdesign.ch"
                >
                  https://milan-webdesign.ch
                </a>
              </dd>

              <dt className="font-semibold text-slate-950">Telefon</dt>
              <dd>Telefon / WhatsApp auf Anfrage</dd>
            </dl>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Angaben gemäss Schweizer Recht
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Diese Website informiert über Dienstleistungen von Milan
              Webdesign. Die Angaben zur verantwortlichen Person und
              Kontaktadresse sind im Abschnitt Anbieter / Verantwortliche Person
              aufgeführt.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Handelsregister
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Eintragung im Handelsregister: nicht eingetragen / wird bei Bedarf
              ergänzt.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Mehrwertsteuer
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Milan Webdesign ist aktuell nicht als mehrwertsteuerpflichtiges
              Unternehmen ausgewiesen. Die steuerliche Behandlung wird im
              individuellen Angebot korrekt angegeben.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Haftung für Inhalte
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird
              jedoch keine Gewähr übernommen.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Externe Links
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Diese Website kann Links zu externen Websites enthalten. Für deren
              Inhalte ist der jeweilige Anbieter verantwortlich.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              Urheberrecht
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder,
              Logos und Gestaltungselemente unterliegen dem Urheberrecht. Eine
              Verwendung ausserhalb der Website ist nur mit vorheriger
              Zustimmung erlaubt.
            </p>
          </section>

          <p className="border-t border-slate-100 pt-6 text-sm text-slate-500">
            Stand: Mai 2026
          </p>
        </div>
      </div>
    </section>
  );
}
