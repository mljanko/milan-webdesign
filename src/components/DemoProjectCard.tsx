import Image from "next/image";
import Link from "next/link";

interface DemoProjectCardProps {
  category: string;
  title: string;
  description: string;
  benefit: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function DemoProjectCard({
  category,
  title,
  description,
  benefit,
  tags,
  imageSrc,
  imageAlt,
}: DemoProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#061B31] via-[#0D2B4A] to-[#1D4ED8]">
        <div className="relative h-48 w-full sm:h-52 lg:h-56">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-2"
          />
        </div>
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-navy/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm shadow-navy/30 backdrop-blur">
          Konzept / Demo-Projekt
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-accent">
          {category}
        </span>
        <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
        <p className="mb-5 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium leading-relaxed text-navy">
          {benefit}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/kontakt"
          className="mt-auto inline-flex items-center justify-center rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-blue-50"
        >
          Ähnliches Projekt anfragen
        </Link>
      </div>
    </article>
  );
}
