"use client";

import { useState } from "react";

const services = [
  "Website-Relaunch",
  "Neue Firmenwebseite",
  "Landingpage",
  "SEO-Optimierung",
  "Wartung und Betreuung",
  "Anderes",
];

const budgets = [
  "Noch offen",
  "ab CHF 1'200 (Starter)",
  "ab CHF 2'500 (Business)",
  "ab CHF 4'500 (Premium)",
];

type Status = "idle" | "loading" | "success" | "error";

const sendErrorMessage =
  "Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie direkt an info@milan-webdesign.ch.";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          (json as { error?: string }).error ?? sendErrorMessage
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(sendErrorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-white"
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
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Ihre Nachricht ist bei mir angekommen. Ich melde mich in der Regel
          innert <strong>24–48 Stunden</strong> bei Ihnen.
        </p>
        <p className="mt-5 text-sm text-slate-500">
          Oder direkt schreiben:{" "}
          <a
            href="mailto:info@milan-webdesign.ch"
            className="text-accent hover:underline font-medium"
          >
            info@milan-webdesign.ch
          </a>
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-accent transition-colors bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <input
          id="addressLine2"
          name="addressLine2"
          type="text"
          aria-label="Optionales Zusatzfeld"
          tabIndex={-1}
          autoComplete="off"
          className="h-px w-px border-0 p-0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Max Mustermann"
          />
        </div>
        <div>
          <label
            htmlFor="firma"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Firma
          </label>
          <input
            id="firma"
            name="firma"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Musterfirma GmbH"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          E-Mail <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="max@musterfirma.ch"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Aktuelle Webseite
        </label>
        <input
          id="website"
          name="website"
          type="url"
          autoComplete="url"
          className={fieldClass}
          placeholder="https://www.meinefirma.ch"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="leistung"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Gewünschte Leistung
          </label>
          <select id="leistung" name="leistung" className={fieldClass}>
            <option value="">Bitte wählen ...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Budget (optional)
          </label>
          <select id="budget" name="budget" className={fieldClass}>
            <option value="">Noch nicht sicher</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="nachricht"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Nachricht <span className="text-accent">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Beschreiben Sie kurz, was Sie sich vorstellen ..."
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors text-base"
      >
        {status === "loading" ? "Wird gesendet ..." : "Anfrage senden"}
      </button>

      <p className="text-xs text-slate-500 text-center">
        Alternativ direkt per E-Mail:{" "}
        <a
          href="mailto:info@milan-webdesign.ch"
          className="text-accent hover:underline"
        >
          info@milan-webdesign.ch
        </a>
      </p>
    </form>
  );
}
