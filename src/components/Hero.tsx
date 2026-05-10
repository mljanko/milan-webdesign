import Link from "next/link";

interface HeroProps {
  label?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  label,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light py-24 md:py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {label && (
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg text-center"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/40 transition-colors text-base text-center"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
