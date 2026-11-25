import type { Metadata } from "next";
import Link from "next/link";
import { FOUNDER_PHOTO } from "../../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://stinganalytics.com/about/" },
  title: "About",
  description:
    "Sting Analytics combines financial understanding with business analytics to explain results and support better decisions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">About</p>
      <h1 className="mt-2 text-4xl font-bold text-navy">A business problem-solving consultancy</h1>
      <p className="mt-6 border-l-4 border-accent bg-mist p-5 text-lg leading-relaxed text-navy">
        “Sting Analytics combines financial understanding with business
        analytics to help organisations understand their results, identify the
        causes behind their performance, and make better-informed decisions.”
      </p>
      <figure className="mt-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/reports-desk.jpg"
          alt="Printed financial statements and a bar chart on a desk with a pen, calculator and notebook"
          className="aspect-[3/2] w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
          width={1200}
          height={800}
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs text-slate-500">
          Illustrative image.
        </figcaption>
      </figure>
      <div className="mt-8 space-y-4 text-charcoal">
        <p>
          We are not a dashboard vendor or a generic data shop. We investigate
          sales trends, gross profit, margins, expenses, receivables, cash
          conversion, and product, customer and branch performance to find the
          causes behind the figures — then recommend practical next steps.
        </p>
        <p>
          The founder has an accounting background and works with Excel, SQL,
          Power BI and Python to deliver validated, repeatable analysis that
          management can trust.
        </p>
        <div className="flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOUNDER_PHOTO}
          alt="Portrait placeholder — official founder photo coming soon"
          className="h-40 w-40 shrink-0 rounded-2xl"
          width={160}
          height={160}
        />
        <div>
          <h2 className="text-xl font-bold text-navy">The founder</h2>
          <p className="mt-2 text-sm leading-relaxed text-charcoal">
            Sting Analytics is led by its founder — an accountant working with
            Excel, SQL, Power BI and Python. Advisory portraits aside, the work
            is the credential: every engagement states its assumptions and
            limits in writing.
          </p>
          <p className="mt-2 text-xs text-slate-500">Official portrait coming soon — placeholder image, not the founder.</p>
        </div>
      </div>
      <h2 className="pt-2 text-xl font-bold text-navy">What we will not claim</h2>
        <p className="text-sm leading-relaxed">
          No invented team, offices, awards or certifications. No client
          numbers, years of experience or performance guarantees. Portfolio
          figures on this site are simulated and clearly labelled as such.
        </p>
      </div>
      <Link href="/contact/" className="mt-8 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light">
        Discuss Your Business
      </Link>
    </div>
  );
}
