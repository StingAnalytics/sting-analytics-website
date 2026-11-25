# Sting Analytics Website

Sales & Financial Performance Analytics — Understand. Diagnose. Improve.

Statically-exported Next.js + TypeScript + Tailwind site for
**https://stinganalytics.com**. Contact: stinganalytics01@gmail.com.

## Routes

- `/` — hero, problems, services, Understand–Diagnose–Improve, simulated case studies, why-us, final CTA
- `/services/` — five services with challenges, questions, deliverables, data needed, decision value
- `/case-studies/` — three simulated studies (labelled as simulated; GitHub links are `TODO` until supplied)
- `/about/` — approved positioning; no invented team, history or claims
- `/contact/` — validated enquiry form (no backend by default; see below)
- 404 page included

## Brand

- Navy `#0B2545`, gold `#FFCA3A (accent; dark #7A5C00 for text, light #FFE08A on navy)` (restrained), white, mist `#F4F6F8`, charcoal `#202A35`
- Logo: `logo/STING Analytics Corporate Logo.png` (source of truth, 1.1 MB original).
  Web copy at `public/logo.png` (600px, ~180 KB). Header uses compact `h-11`,
  footer shows larger version on navy. Never distort the logo.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks & build

```bash
npm run lint
npm run typecheck
npm run build     # static output in out/
```

`next.config.js` uses `output: "export"` so `out/` is deployable as static hosting.

## Contact form

- No backend by default: validates (name, work email, ≥20-char problem
  description), shows accessible errors, then opens the visitor's email client
  addressed to `stinganalytics01@gmail.com` with a **truthful** status message.
  Nothing is stored on the site and no credentials are in client code.
- To enable direct POST delivery, set in `.env.local` (see `.env.example`):
  `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxx`
  then rebuild. Verify in production by submitting a test enquiry (see DEPLOY.md).

## Google Business Profile

- Footer, contact page and homepage link to Google Maps search for
  "Sting Analytics Nairobi"; JSON-LD `sameAs` points at the same link.
- The profile (ID 16699284863670889784) is newly created and verification is
  pending: no reviews or direct profile URL until Google approves it.
- After verification, set the website to `https://stinganalytics.com`,
  then swap the Maps search links for the real profile URL.

## Deployment

See [DEPLOY.md](DEPLOY.md) for hosting, environment variables, Namecheap DNS
for `stinganalytics.com`, HTTPS verification, form testing and updates.
Do not claim the site is live until verified in a browser on the real domain.
