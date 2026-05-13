# Milan Webdesign

Next.js Website fuer Milan Webdesign.

## Development

```bash
npm run dev
```

Lokale Vorschau: http://localhost:3000

## Netlify

Build command:

```bash
npm run build
```

Die Website nutzt eine Next.js API-Route fuer das Kontaktformular. Deshalb darf
kein statischer Export (`output: "export"`) aktiviert werden.

## Environment Variables

Diese Variablen muessen in Netlify gesetzt werden:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=info@milan-webdesign.ch
CONTACT_FROM_EMAIL=Milan Webdesign <kontakt@milan-webdesign.ch>
```

Keine echten API-Keys im Repository speichern.
