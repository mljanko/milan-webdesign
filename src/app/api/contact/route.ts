import { NextRequest } from "next/server";
import { Resend } from "resend";

const FALLBACK_CONTACT_EMAIL = "info@milan-webdesign.ch";
const FROM =
  process.env.CONTACT_FROM_EMAIL ||
  "Milan Webdesign <kontakt@milan-webdesign.ch>";
const TO = process.env.CONTACT_TO_EMAIL || FALLBACK_CONTACT_EMAIL;
const REPLY_TO = FALLBACK_CONTACT_EMAIL;
const PACKAGE_OPTIONS = new Set([
  "Starter Website",
  "Business Website",
  "Premium Website",
  "Individuelle Anfrage",
]);

type ContactPayload = {
  name?: unknown;
  firma?: unknown;
  email?: unknown;
  phone?: unknown;
  telefon?: unknown;
  tel?: unknown;
  website?: unknown;
  paket?: unknown;
  leistung?: unknown;
  budget?: unknown;
  nachricht?: unknown;
  addressLine2?: unknown;
};

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (text(body.addressLine2)) {
    return Response.json({ ok: true });
  }

  const name = text(body.name);
  const firma = text(body.firma);
  const email = text(body.email);
  const phone = text(body.phone) || text(body.telefon) || text(body.tel);
  const website = text(body.website);
  const paketValue = text(body.paket);
  const paket = PACKAGE_OPTIONS.has(paketValue) ? paketValue : "";
  const leistung = text(body.leistung);
  const budget = text(body.budget);
  const nachricht = text(body.nachricht);

  if (!name || !email || !nachricht) {
    return Response.json(
      { error: "Name, E-Mail und Nachricht sind Pflichtfelder." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Ungültige E-Mail-Adresse." }, { status: 422 });
  }

  const normalizedWebsite = normalizeWebsite(website);
  if (website && !normalizedWebsite) {
    return Response.json(
      { error: "Bitte geben Sie eine gültige Website-Adresse ein." },
      { status: 422 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      {
        error:
          "Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie direkt an info@milan-webdesign.ch.",
      },
      { status: 503 }
    );
  }

  const subject = paket
    ? `Neue Anfrage – ${paket}`
    : `Neue Anfrage von ${name}${firma ? ` (${firma})` : ""}`;
  const html = `
<table style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#1e293b;max-width:600px">
  <tr><td style="padding:24px 0 8px"><strong>Name</strong><br>${esc(name)}</td></tr>
  ${firma ? `<tr><td style="padding:8px 0"><strong>Firma</strong><br>${esc(firma)}</td></tr>` : ""}
  <tr><td style="padding:8px 0"><strong>E-Mail</strong><br><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  ${phone ? `<tr><td style="padding:8px 0"><strong>Telefon</strong><br>${esc(phone)}</td></tr>` : ""}
  ${normalizedWebsite ? `<tr><td style="padding:8px 0"><strong>Website</strong><br><a href="${esc(normalizedWebsite)}">${esc(normalizedWebsite)}</a></td></tr>` : ""}
  ${paket ? `<tr><td style="padding:8px 0"><strong>Gewünschtes Paket</strong><br>${esc(paket)}</td></tr>` : ""}
  ${leistung ? `<tr><td style="padding:8px 0"><strong>Gewünschte Leistung</strong><br>${esc(leistung)}</td></tr>` : ""}
  ${budget ? `<tr><td style="padding:8px 0"><strong>Budget</strong><br>${esc(budget)}</td></tr>` : ""}
  <tr><td style="padding:8px 0 24px"><strong>Nachricht</strong><br><pre style="white-space:pre-wrap;font-family:inherit;margin:4px 0 0">${esc(nachricht)}</pre></td></tr>
  <tr><td style="padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8">
    Gesendet über das Kontaktformular auf milan-webdesign.ch
  </td></tr>
</table>
  `.trim();
  const plainText = [
    `Name: ${name}`,
    firma ? `Firma: ${firma}` : "",
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : "",
    normalizedWebsite ? `Website: ${normalizedWebsite}` : "",
    paket ? `Gewünschtes Paket: ${paket}` : "",
    leistung ? `Gewünschte Leistung: ${leistung}` : "",
    budget ? `Budget: ${budget}` : "",
    "",
    "Nachricht:",
    nachricht,
    "",
    "Gesendet über das Kontaktformular auf milan-webdesign.ch",
  ]
    .filter((line) => line !== "")
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: REPLY_TO,
      subject,
      html,
      text: plainText,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        {
          error:
            "Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie direkt an info@milan-webdesign.ch.",
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[contact] Unexpected send error:", error);
    return Response.json(
      {
        error:
          "Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie direkt an info@milan-webdesign.ch.",
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeWebsite(value: string): string {
  if (!value) {
    return "";
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }
    return url.toString();
  } catch {
    return "";
  }
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
