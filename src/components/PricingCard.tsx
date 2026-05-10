import Link from "next/link";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaLabel = "Anfrage senden",
  ctaHref = "/kontakt",
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col h-full ${
        highlighted
          ? "bg-navy text-white ring-2 ring-accent shadow-xl"
          : "bg-white border border-slate-100 shadow-sm"
      }`}
    >
      {highlighted && (
        <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">
          Empfehlung
        </span>
      )}
      <h3
        className={`text-xl font-bold mb-1 ${
          highlighted ? "text-white" : "text-slate-900"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-sm mb-5 ${
          highlighted ? "text-blue-200" : "text-slate-500"
        }`}
      >
        {description}
      </p>
      <div className="mb-6">
        <span
          className={`text-3xl font-bold ${
            highlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {price}
        </span>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${
                highlighted ? "text-blue-300" : "text-accent"
              }`}
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
            <span className={highlighted ? "text-blue-100" : "text-slate-600"}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center font-semibold py-3 px-6 rounded-xl transition-colors ${
          highlighted
            ? "bg-accent hover:bg-accent-dark text-white"
            : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
