import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Datenschutzerklärung | Milan Webdesign",
  },
  description:
    "Datenschutzerklärung von Milan Webdesign mit Informationen zur Bearbeitung personenbezogener Daten, Kontaktformular, Hosting und Rechten betroffener Personen.",
  robots: { index: false, follow: false },
};

// TODO: Genaue technische Hostingdetails, Serverstandorte und Auftragsbearbeitung prüfen.
// TODO: Tracking-/Cookie-Status vor Veröffentlichung nochmals technisch prüfen.

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-bold text-slate-950">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Datenschutz
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-slate-700">
          Diese Datenschutzerklärung wird vor der Veröffentlichung nochmals
          geprüft und mit den finalen technischen Hostingangaben abgeglichen.
        </div>

        <div className="space-y-6">
          <Section title="Verantwortliche Stelle">
            <p>
              Verantwortlich für die Bearbeitung personenbezogener Daten auf
              dieser Website ist:
            </p>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-950">Milan Webdesign</p>
              <p>Milan Jankovic</p>
              <p>Waldeggstrasse 7</p>
              <p>9320 Arbon</p>
              <p>Schweiz</p>
              <p className="mt-3">
                E-Mail:{" "}
                <a
                  className="font-medium text-accent hover:text-accent-dark"
                  href="mailto:info@milan-webdesign.ch"
                >
                  info@milan-webdesign.ch
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  className="font-medium text-accent hover:text-accent-dark"
                  href="https://milan-webdesign.ch"
                >
                  https://milan-webdesign.ch
                </a>
              </p>
            </div>
          </Section>

          <Section title="Allgemeine Hinweise zur Datenbearbeitung">
            <p>
              Wir bearbeiten personenbezogene Daten nur, soweit dies für den
              Betrieb dieser Website, die Bearbeitung von Anfragen, die
              Kommunikation mit Interessenten oder die Erbringung unserer
              Dienstleistungen erforderlich ist.
            </p>
            <p>
              Die Datenbearbeitung erfolgt insbesondere nach dem Schweizer
              Datenschutzgesetz (DSG / revDSG). Bei Zugriffen aus der EU oder
              dem EWR kann zusätzlich die Datenschutz-Grundverordnung (DSGVO)
              relevant sein.
            </p>
          </Section>

          <Section title="Erhebung technischer Daten beim Besuch der Website">
            <p>
              Beim Besuch dieser Website können technische Daten verarbeitet
              werden. Dazu gehören insbesondere:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>aufgerufene Seiten</li>
              <li>Referrer-URL</li>
              <li>Server-Logfiles</li>
            </ul>
            <p>
              Diese Daten werden zur sicheren Bereitstellung der Website, zur
              technischen Stabilität, zur Fehleranalyse sowie zur Missbrauchs-
              und Sicherheitsprävention verarbeitet.
            </p>
          </Section>

          <Section title="Kontaktformular">
            <p>
              Wenn Nutzer das Kontaktformular verwenden, werden die eingegebenen
              Daten verarbeitet. Dazu können gehören:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Firma optional</li>
              <li>E-Mail-Adresse</li>
              <li>aktuelle Website optional</li>
              <li>gewünschte Leistung optional</li>
              <li>Budget optional</li>
              <li>Nachricht</li>
            </ul>
            <p>
              Die Daten werden zur Bearbeitung der Anfrage, zur Kontaktaufnahme,
              zur Erstellung einer möglichen Offerte und zur vorvertraglichen
              Kommunikation verwendet.
            </p>
            <p>
              Die Daten werden nicht für Newsletter oder Werbeversand verwendet,
              solange kein separater Newsletter existiert.
            </p>
          </Section>

          <Section title="E-Mail-Versand über Resend">
            <p>
              Für den Versand und die Zustellung von Kontaktformular-Anfragen
              verwenden wir den E-Mail-Dienst Resend.
            </p>
            <p>
              Beim Versand können die Formularangaben und technische Versanddaten
              an Resend übermittelt werden. Resend kann Daten ausserhalb der
              Schweiz bearbeiten. Es gelten die Datenschutzbestimmungen von
              Resend.
            </p>
            <p>
              Details zur Datenbearbeitung durch Resend sind vor der
              Veröffentlichung nochmals anhand der aktuellen Resend-Unterlagen zu
              prüfen.
            </p>
          </Section>

          <Section title="Hosting">
            <p>
              Diese Website wird bei ServerTown gehostet. Beim Aufruf der
              Website können technische Zugriffsdaten wie IP-Adresse, Datum und
              Uhrzeit des Zugriffs, Browserinformationen und aufgerufene Seiten
              verarbeitet werden. Diese Daten sind erforderlich, um die Website
              sicher, stabil und performant bereitzustellen.
            </p>
            <p>
              ServerTown gibt an, Hosting mit Server-Standort Schweiz
              anzubieten. Die genauen technischen Details und Serverstandorte
              werden vor der Veröffentlichung nochmals geprüft.
            </p>
          </Section>

          <Section title="Cookies und Tracking">
            <p>
              Diese Website verwendet derzeit keine Marketing- oder
              Tracking-Cookies.
            </p>
            <p>
              Es können technisch notwendige Cookies oder vergleichbare
              Technologien eingesetzt werden, soweit sie für den Betrieb der
              Website erforderlich sind.
            </p>
          </Section>

          <Section title="Eingebundene Inhalte und externe Dienste">
            <p>
              Derzeit werden keine externen Medieninhalte wie YouTube-Videos
              oder Google Maps direkt eingebunden.
            </p>
            <p>
              Die Website verwendet lokale Gestaltungselemente und Systemschriften;
              Google Fonts oder vergleichbare externe Schriftendienste wurden im
              Code nicht festgestellt.
            </p>
          </Section>

          <Section title="Weitergabe von Daten">
            <p>
              Personenbezogene Daten werden nicht verkauft und nicht ohne Anlass
              an Dritte weitergegeben. Eine Weitergabe kann erfolgen, wenn dies
              zur Bearbeitung von Anfragen, zur technischen Bereitstellung der
              Website, zur Erfüllung gesetzlicher Pflichten oder zur Wahrung
              berechtigter Interessen erforderlich ist.
            </p>
          </Section>

          <Section title="Aufbewahrungsdauer">
            <p>
              Personenbezogene Daten werden nur so lange aufbewahrt, wie dies für
              den jeweiligen Zweck erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
            <p>
              Kontaktanfragen werden so lange gespeichert, wie es für die
              Bearbeitung, Nachverfolgung oder mögliche Zusammenarbeit
              erforderlich ist.
            </p>
          </Section>

          <Section title="Datensicherheit">
            <p>
              Wir treffen angemessene technische und organisatorische Massnahmen,
              um personenbezogene Daten vor Verlust, Missbrauch, unberechtigtem
              Zugriff und Veränderung zu schützen.
            </p>
          </Section>

          <Section title="Rechte betroffener Personen">
            <p>
              Betroffene Personen können je nach anwendbarem Recht verschiedene
              Rechte haben. Dazu gehören insbesondere:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung oder Widerspruch</li>
              <li>Datenherausgabe oder Datenübertragung, soweit anwendbar</li>
            </ul>
            <p>
              Anfragen können an{" "}
              <a
                className="font-medium text-accent hover:text-accent-dark"
                href="mailto:info@milan-webdesign.ch"
              >
                info@milan-webdesign.ch
              </a>{" "}
              gerichtet werden.
            </p>
          </Section>

          <Section title="Änderungen">
            <p>
              Diese Datenschutzerklärung kann angepasst werden, wenn sich
              rechtliche Anforderungen, eingesetzte Dienste oder die
              Website-Funktionen ändern.
            </p>
          </Section>

          <p className="border-t border-slate-100 pt-6 text-sm text-slate-500">
            Stand: Mai 2026
          </p>
        </div>
      </div>
    </section>
  );
}
