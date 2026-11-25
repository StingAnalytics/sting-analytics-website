# Deployment — stinganalytics.com (Namecheap domain)

No DNS changes have been made. Nothing is live until you verify it below.

## 1. Build

```bash
npm install
npm run lint && npm run typecheck && npm run build
```

Output: `out/` (static HTML + assets).

## 2. Environment variables

- `NEXT_PUBLIC_FORM_ENDPOINT` (optional): form POST endpoint, e.g. Formspree.
  Without it the form uses the honest mailto fallback and stores nothing.
  Copy `.env.example` → `.env.local` for local testing; configure the same
  variable in your host's dashboard for production, then rebuild/redeploy.

## 3. Hosting options (low-cost, static)

- **Freebuff Sites / Cloudflare Pages / Netlify / Vercel static**: upload `out/`.
  Any static host works since the export is plain HTML/CSS/JS.
- Recommended: the host you already use for previews; keep staging + production.

## 4. Connect the custom domain

1. In your host, add custom domain `stinganalytics.com` (+ `www` redirect).
2. The host will show required DNS records. Typical patterns (follow your
   host's **actual** instructions, not these examples):
   - CNAME for `www` → host-provided target, and
   - A/ALIAS/ANAME for apex `@` → host-provided IP/hostname.
3. In Namecheap dashboard → Domain List → Manage → Advanced DNS, add exactly
   the records your host shows. Do not change anything else.

## 5. HTTPS

- Enable automatic TLS in the host dashboard (Let's Encrypt / host-managed).
- Verify: `https://stinganalytics.com` loads with a valid certificate,
  `http://` redirects to `https://`, and `/sitemap.xml` + `/robots.txt` resolve.

## 6. Test the contact form in production

1. Submit with missing fields → accessible errors appear.
2. Submit valid enquiry → with no endpoint, your mail client opens addressed
   to `stinganalytics01@gmail.com`; with an endpoint set, check the inbox /
   Formspree dashboard for delivery.
3. Confirm no secrets in client bundle and no fake success message.

## 7. Google Business Profile (after verification)

1. Verify the profile (ID 16699284863670889784) via Google's video/postcard flow.
2. Set business name, service area (Kenya), hours and website `https://stinganalytics.com`.
3. Replace the Maps search links (footer, contact page, homepage, JSON-LD
   `sameAs`) with the real profile URL and redeploy.
4. Publish GBP posts linking to `/case-studies/` for genuine local signal.
5. Submit the sitemap in Google Search Console and request indexing.

## 8. Update flow

Edit → `npm run build` → re-upload/redeploy `out/` → verify changed pages in
a browser (desktop + mobile widths) → check console for errors.
