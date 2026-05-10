interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-slate-600 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
