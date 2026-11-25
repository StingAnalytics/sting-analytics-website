import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../../lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "https://stinganalytics.com/services/" },
  title: "Services",
  description:
    "Sales performance, profitability, financial performance, receivables and BI reporting automation — analysis that explains causes and supports decisions.",
  openGraph: {
    title: "Services",
    description:
      "Sales performance, profitability, financial performance, receivables and BI reporting automation — analysis that explains causes and supports decisions.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Sting Analytics services: sales, profitability, financial performance and receivables analysis" }],
  },
};


export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Services</p>
      <h1 className="mt-2 text-4xl font-bold text-navy">What we analyse — and what you decide with it</h1>
      <p className="mt-4 max-w-3xl text-charcoal">
        The first four services deliver business outcomes. Excel, SQL, Power BI
        and Python are the methods we use to deliver them. Every engagement is
        scoped — not every deliverable applies to every project — and fixed
        prices are agreed after scoping.
      </p>
      <figure className="mt-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/team-review.jpg"
          alt="Executives reviewing printed charts around a marble boardroom table with a city view at golden hour"
          className="aspect-[21/9] max-h-[360px] w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
          width={1568}
          height={672}
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs text-slate-500">
          Illustrative image.
        </figcaption>
      </figure>
      <div className="mt-10 space-y-8">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-navy">{i + 1}. {s.title}</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-dark">Challenges</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-charcoal">{s.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-accent-dark">Questions answered</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-charcoal">{s.questions.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <div className="space-y-3 text-sm text-charcoal">
                <p><strong className="text-navy">Typical deliverables: </strong>{s.deliverables}</p>
                <p><strong className="text-navy">Data you provide: </strong>{s.data}</p>
                <p><strong className="text-navy">Decision value: </strong>{s.value}</p>
                <Link href="/contact/" className="inline-block rounded-md bg-navy px-4 py-2 font-semibold text-white hover:bg-navy-light">
                  Enquire about this service
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-600">
        Related evidence: <Link className="underline" href="/case-studies/#revenue-decline">Revenue Decline Diagnostic</Link> ·{" "}
        <Link className="underline" href="/case-studies/#management-pack">Management Pack</Link> ·{" "}
        <Link className="underline" href="/case-studies/#receivables">Receivables &amp; Cash</Link>
      </p>
    </div>
  );
}
