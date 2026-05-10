interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const DefaultIcon = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
        {icon ?? <DefaultIcon />}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
