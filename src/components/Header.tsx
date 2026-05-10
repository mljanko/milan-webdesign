"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

const desktopLinkAreas = [
  {
    href: "/leistungen",
    label: "Leistungen",
    className: "left-[32.9%] top-[29%] h-[42%] w-[8.5%]",
  },
  {
    href: "/preise",
    label: "Preise",
    className: "left-[43.8%] top-[29%] h-[42%] w-[5.5%]",
  },
  {
    href: "/referenzen",
    label: "Referenzen",
    className: "left-[51.2%] top-[29%] h-[42%] w-[8.7%]",
  },
  {
    href: "/ueber-mich",
    label: "Über mich",
    className: "left-[61.8%] top-[29%] h-[42%] w-[8.5%]",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    className: "left-[71.5%] top-[29%] h-[42%] w-[6.7%]",
  },
  {
    href: "/kontakt",
    label: "Kostenlos anfragen",
    className: "left-[80.8%] top-[26%] h-[48%] w-[15.4%]",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="relative hidden h-[7.34375vw] min-h-[96px] max-h-[141px] overflow-hidden bg-white lg:block">
        <Image
          src="/brand/milan-reference-header-desktop.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 1px"
          className="object-fill"
        />
        <Link
          href="/"
          aria-label="Zur Startseite von Milan Webdesign"
          className="absolute left-[3%] top-[18%] h-[62%] w-[18%] rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        />
        <nav aria-label="Hauptnavigation">
          {desktopLinkAreas.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              aria-label={link.label}
              className={`absolute rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${link.className}`}
            />
          ))}
        </nav>
      </div>

      <div className="mx-auto flex h-[72px] items-center justify-between px-5 sm:px-8 lg:hidden">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
          aria-label="Zur Startseite von Milan Webdesign"
        >
          <Image
            src="/brand/milan-logo-horizontal.png"
            alt=""
            width={660}
            height={156}
            priority
            className="h-auto w-[200px] max-w-[70vw] sm:w-[230px]"
          />
        </Link>

        <button
          className="-mr-2 rounded-lg p-2 text-navy transition-colors hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white shadow-lg lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-slate-100 py-3 text-sm font-semibold last:border-0 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-navy hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-5 rounded-xl bg-accent px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Kostenlos anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
