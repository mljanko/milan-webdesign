import Image from "next/image";
import Link from "next/link";

const angebotLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/referenzen", label: "Referenzen" },
];

const infoLinks = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label="Zur Startseite von Milan Webdesign"
              className="mb-5 inline-flex items-center"
            >
              <Image
                src="/brand/milan-logo-footer-transparent.png"
                alt=""
                width={660}
                height={156}
                className="h-auto w-[260px] max-w-full"
              />
            </Link>
            <p className="mb-4 text-sm leading-relaxed">
              Moderne, klare und mobilfreundliche Webseiten für kleine Schweizer
              Unternehmen im Thurgau und der Ostschweiz.
            </p>
            <address className="not-italic text-sm space-y-1">
              <p className="text-slate-400">Arbon / Thurgau / Ostschweiz</p>
              <a
                href="mailto:info@milan-webdesign.ch"
                className="text-blue-300 transition-colors hover:text-white"
              >
                info@milan-webdesign.ch
              </a>
              <p className="pt-2 text-slate-400">
                Beratung auf Deutsch, Englisch und Serbisch möglich.
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Angebot
            </h3>
            <ul className="space-y-3">
              {angebotLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Informationen
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-slate-500">
            {`© ${year} Milan Webdesign – Arbon, Thurgau, Schweiz`}
          </p>
          <p className="text-xs text-slate-500">
            Alle Preise in CHF. MwSt. gemäss individuellem Angebot.
          </p>
        </div>
      </div>
    </footer>
  );
}
