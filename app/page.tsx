import Link from "next/link";
import { CONTACT_EMAIL, FOUNDER_PHOTO, GBP_URL, SITE_URL } from "../lib/site";
import { caseStudies, faqs, services } from "../lib/content";

const problems = [
  { title: "Sales up, profit down", text: "Revenue is growing but gross profit keeps falling and nobody can explain which products or prices are eroding margin." },
  { title: "Uneven branch performance", text: "Some branches or outlets underperform without a clear reason — is it volume, mix, pricing, or execution?" },
  { title: "Expenses outpacing revenue", text: "Operating costs rise faster than sales, but reports do not show which expense lines are driving the gap." },
  { title: "Cash tied up in receivables", text: "The receivables balance keeps growing, overdue accounts pile up, and cash becomes hard to manage." },
  { title: "Reports without causes", text: "Monthly packs show the results but never explain why performance moved or what to do next." },
  { title: "Manual reporting overload", text: "Management spends days rebuilding Excel reports instead of acting on validated, repeatable analysis." },
];

const deliverables = [
  { title: "Analytical report", text: "Findings, root causes and ranked recommendations in plain business language." },
  { title: "Excel analysis model", text: "A working model of the diagnosis that you keep and can re-run." },
  { title: "Power BI management views", text: "Clear performance views for branches, products and customers." },
  { title: "Validated data pipeline", text: "SQL and Python checks so the numbers reconcile before decisions are made." },
  { title: "Monthly review rhythm", text: "A repeatable pack that tracks whether agreed actions moved the numbers." },
];




const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sting Analytics",
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  slogan: "Understand. Diagnose. Improve.",
  description:
    "Sales and financial performance analytics: sales trends, profitability, financial performance reviews, receivables and cash conversion analysis, and reporting automation.",
  areaServed: "Kenya",
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-cover.png`,
  sameAs: [GBP_URL],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
              Sales &amp; Financial Performance Analytics · Kenya
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Understand Your Numbers. Improve Your Business Performance.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Sting Analytics helps businesses uncover what is driving their
              sales, profitability and financial results. We investigate the
              causes, identify improvement opportunities, and turn business
              data into practical recommendations.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span aria-hidden className="font-bold text-accent-light">—</span> Accounting-led analysis, not generic dashboards</li>
              <li className="flex gap-2"><span aria-hidden className="font-bold text-accent-light">—</span> Root causes quantified, actions prioritised</li>
              <li className="flex gap-2"><span aria-hidden className="font-bold text-accent-light">—</span> Assumptions stated upfront, in writing</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="rounded-md bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-accent-dark hover:text-white"
              >
                Discuss Your Business
              </Link>
              <Link
                href="/services/"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 text-navy shadow-xl">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Management pack · illustrative excerpt
              </p>
              <p className="text-xs text-slate-400">Aug</p>
            </div>
            <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">Illustrative management pack excerpt: budget versus actual by line</caption>
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-2 pr-2 font-semibold">Line</th>
                  <th className="py-2 pr-2 text-right font-semibold">Budget</th>
                  <th className="py-2 pr-2 text-right font-semibold">Actual</th>
                  <th className="py-2 text-right font-semibold">Variance</th>
                </tr>
              </thead>
              <tbody className="text-charcoal">
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-2">Revenue</td>
                  <td className="py-2 pr-2 text-right">12.40M</td>
                  <td className="py-2 pr-2 text-right">12.31M</td>
                  <td className="py-2 text-right text-accent-dark">-0.7%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-2">Cost of goods</td>
                  <td className="py-2 pr-2 text-right">7.10M</td>
                  <td className="py-2 pr-2 text-right">7.68M</td>
                  <td className="py-2 text-right font-semibold text-red-700">+8.2%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-2">Gross profit</td>
                  <td className="py-2 pr-2 text-right">5.30M</td>
                  <td className="py-2 pr-2 text-right">4.63M</td>
                  <td className="py-2 text-right font-semibold text-red-700">-12.6%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2">Overdue receivables</td>
                  <td className="py-2 pr-2 text-right">—</td>
                  <td className="py-2 pr-2 text-right">10.75M</td>
                  <td className="py-2 text-right text-slate-500">64% of ledger</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p className="mt-4 border-l-4 border-accent bg-mist p-3 text-sm leading-relaxed text-charcoal">
              Sales within 1% of budget — yet gross profit 19% behind. The
              diagnosis: cost pressure plus a shift toward lower-margin lines.
            </p>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-5 text-sm font-medium text-charcoal sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Built for</span>
          <span>Retailers</span>
          <span>Wholesalers &amp; distributors</span>
          <span>Growing SMEs</span>
          <span>Finance &amp; management teams</span>
        </div>
      </section>

      {/* Problems */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Business problems we solve</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-navy">
              Recognise any of these in your business?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal">
              The businesses we work with see the results in their reports —
              what they cannot see is the reason behind them.
            </p>
          </div>
          <figure className="md:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/business-owner.jpg"
              alt="A boutique owner in a cream blazer standing among brass clothing rails in her upscale store"
              className="aspect-[3/2] w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
              width={1248}
              height={832}
              loading="lazy"
            />
            <figcaption className="mt-2 text-xs text-slate-500">
              Illustrative image.
            </figcaption>
          </figure>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">What you receive</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-navy">
            Not just charts — working outputs you keep
          </h2>
          <p className="mt-3 max-w-3xl text-charcoal">
            Every engagement is scoped first. You receive what the diagnosis
            needs — never a padded bundle of everything below.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <div key={d.title} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-bold text-accent-dark">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-semibold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{d.text}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-lg bg-navy p-5 text-white">
              <p className="text-sm leading-relaxed text-slate-200">
                Excel, SQL, Power BI and Python are the methods — the outcome
                is always a business answer you can act on.
              </p>
              <Link href="/services/" className="mt-4 text-sm font-semibold text-accent-light underline underline-offset-4 hover:text-white">
                How each service works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Services</p>
        <h2 className="mt-2 text-3xl font-bold text-navy">Analysis that supports decisions</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy">{s.title}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div><dt className="font-semibold text-accent-dark">Problem: </dt><dd className="inline text-charcoal">{s.problem}</dd></div>
                <div><dt className="font-semibold text-accent-dark">Analysis: </dt><dd className="inline text-charcoal">{s.analysis}</dd></div>
                <div><dt className="font-semibold text-accent-dark">Decision: </dt><dd className="inline text-charcoal">{s.decision}</dd></div>
              </dl>
              <Link href={`/services/#${s.id}`} className="mt-4 text-sm font-semibold text-navy underline underline-offset-4 hover:text-accent-dark">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">How we work</p>
              <h2 className="mt-2 text-3xl font-bold text-navy">Understand. Diagnose. Improve.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal">
                Every engagement follows the same discipline: establish the
                question, test the explanations against the evidence, then
                prioritise what to change.
              </p>
            </div>
            <figure className="md:justify-self-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/analyst-desk.jpg"
                alt="An analyst in a suit reviewing printed reports beside a laptop showing a trend chart in a glass-walled office above the city"
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
                width={1248}
                height={832}
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-slate-500">
                Illustrative image.
              </figcaption>
            </figure>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Understand", d: "Establish the business question, examine the available data, and understand the performance that needs investigation." },
              { n: "02", t: "Diagnose", d: "Decompose the results, identify root causes, test explanations against the evidence, and quantify the major drivers." },
              { n: "03", t: "Improve", d: "Prioritise practical actions, assign responsibility where appropriate, and define measures for tracking progress." },
            ].map((s) => (
              <li key={s.n} className="border-t-4 border-accent pt-4">
                <p className="text-sm font-bold text-accent-dark">{s.n}</p>
                <h3 className="mt-1 text-xl font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Case studies</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Evidence from simulated engagements</h2>
          <p className="mt-3 max-w-3xl rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
            Illustrative analytical results from simulated data — not verified
            client outcomes or guarantees. Modelled recovery amounts were not
            collected.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title} className="flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-bold text-accent-dark">{c.homeStat}</p>
                <h3 className="mt-1 text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{c.summary}</p>
                <Link href={`/case-studies/#${c.id}`} className="mt-4 text-sm font-semibold text-navy underline underline-offset-4 hover:text-accent-dark">
                  Read the case study
                </Link>
              </article>
            ))}
          </div>
          <Link href="/case-studies/" className="mt-6 inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light">
            View all case studies
          </Link>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-navy">Why Sting Analytics</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Accounting and financial understanding behind every number.",
            "Evidence-based root-cause analysis — not charts alone.",
            "Practical recommendations with owners and measures.",
            "Transparent assumptions and limitations, stated upfront.",
            "Repeatable, validated Excel / SQL / Power BI / Python workflows.",
            "Reporting that supports better management decisions.",
          ].map((t) => (
            <li key={t} className="flex gap-3 rounded-lg border border-slate-200 p-4 text-sm text-charcoal">
              <span aria-hidden className="font-bold text-accent-dark">✓</span> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Founder */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-12 text-center sm:flex-row sm:px-6 sm:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FOUNDER_PHOTO}
            alt="Portrait of a man in a dark suit and glasses against a dark background — placeholder, not the founder"
            className="h-20 w-20 shrink-0 rounded-xl"
            width={80}
            height={80}
          />
          <div>
            <p className="text-sm leading-relaxed text-charcoal">
              Sting Analytics was started by an accountant who kept seeing the
              same gap: reports that show the results but never explain the
              reasons. <Link href="/about/" className="font-semibold text-navy underline underline-offset-4 hover:text-accent-dark">More about the founder</Link>
            </p>
            <p className="mt-1 text-xs text-slate-500">Official portrait coming soon — placeholder image, not the founder.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Questions, answered</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Before you enquire</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-slate-200 bg-mist/50 p-4">
                <summary className="cursor-pointer font-semibold text-navy">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Find Sting Analytics on Google</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal">
              Our Google Business Profile is newly created and verification is
              pending. You can already find us on Google Maps at the link below —
              reviews and direct profile features unlock once Google completes
              verification.
            </p>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Find us on Google Maps
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Prefer email?</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal">
              Tell us what is happening in your business, what you are
              struggling to explain, or which decisions need better evidence.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                href="/contact/"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-navy hover:bg-accent-dark hover:text-white"
              >
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Your Reports Show the Results. Let&apos;s Understand the Reasons.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Tell us what is happening in your business, what you are struggling
            to explain, or which decisions you need better evidence to support.
          </p>
          <Link href="/contact/" className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-bold text-navy transition hover:bg-accent-dark hover:text-white">
            Discuss Your Business
          </Link>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <li>Free initial scoping discussion</li>
            <li>Validated analysis, assumptions in writing</li>
            <li>Direct reply by email</li>
          </ul>
          <p className="mt-6 text-sm text-slate-400">— Founder, Sting Analytics</p>
        </div>
      </section>
    </>
  );
}
