import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "../../lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "https://stinganalytics.com/case-studies/" },
  title: "Case Studies",
  description:
    "Three simulated analytical case studies: revenue decline diagnostics, management performance pack, receivables and cash conversion.",
};

function Block({ id, title, stat, repoUrl, question, findings, approach, actions, limits }: CaseStudy) {
  return (
    <article id={id} className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-bold text-accent-dark">{stat}</p>
      <h2 className="mt-1 text-2xl font-bold text-navy">{title}</h2>
      <p className="mt-2 rounded-md border border-amber-300 bg-amber-50 p-2.5 text-xs text-amber-900">
        Simulated dataset — illustrative analytical results, not verified client outcomes or guarantees.
      </p>
      <h3 className="mt-4 font-semibold text-navy">Business question</h3>
      <p className="mt-1 text-sm text-charcoal">{question}</p>
      <h3 className="mt-4 font-semibold text-navy">Key findings</h3>
      <ul className="mt-1 list-disc pl-5 text-sm text-charcoal">{findings.map((f) => <li key={f}>{f}</li>)}</ul>
      <h3 className="mt-4 font-semibold text-navy">Analytical approach</h3>
      <ul className="mt-1 list-disc pl-5 text-sm text-charcoal">{approach.map((f) => <li key={f}>{f}</li>)}</ul>
      <h3 className="mt-4 font-semibold text-navy">Recommended actions</h3>
      <ul className="mt-1 list-disc pl-5 text-sm text-charcoal">{actions.map((f) => <li key={f}>{f}</li>)}</ul>
      <h3 className="mt-4 font-semibold text-navy">Limitations &amp; assumptions</h3>
      <p className="mt-1 text-sm text-charcoal">{limits}</p>
      <p className="mt-4 text-sm">
        <span className="font-semibold text-navy">Repository: </span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy underline underline-offset-4 hover:text-accent-dark"
        >
          {repoUrl.replace("https://github.com/", "github.com/")}
        </a>
      </p>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Portfolio</p>
      <h1 className="mt-2 text-4xl font-bold text-navy">Case studies from simulated data</h1>
      <p className="mt-4 max-w-3xl text-charcoal">
        These three studies demonstrate how we diagnose performance. Figures
        are illustrative results from simulated datasets. Actual client work
        will only appear here with written approval — synthetic data is never
        presented as company data.
      </p>
      <div className="mt-10 space-y-8">
        {caseStudies.map((c) => (
          <Block key={c.id} {...c} />
        ))}
      </div>
      <p className="mt-8 text-sm text-charcoal">
        Need this rigour on your numbers?{" "}
        <Link href="/contact/" className="font-semibold text-navy underline underline-offset-4">Discuss Your Business →</Link>
      </p>
    </div>
  );
}
