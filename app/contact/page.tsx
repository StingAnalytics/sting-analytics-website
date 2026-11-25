import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { CONTACT_EMAIL, GBP_URL } from "../../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://stinganalytics.com/contact/" },
  title: "Contact",
  description: "Discuss your business with Sting Analytics — sales, profitability and cash performance enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Contact</p>
      <h1 className="mt-2 text-4xl font-bold text-navy">Discuss Your Business</h1>
      <p className="mt-4 text-charcoal">
        Tell us what is happening in your business, what you are struggling to
        explain, or which decisions you need better evidence to support. We
        reply by email — or reach us directly at{" "}
        <a className="font-semibold text-navy underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>.
      </p>
      <ContactForm />
      <div className="mt-8 rounded-xl border border-slate-200 bg-mist p-6 text-sm leading-relaxed text-charcoal">
        <h2 className="font-bold text-navy">Find Sting Analytics on Google</h2>
        <p className="mt-2">
          Our Google Business Profile is newly created and verification is
          pending. Find us on Google Maps here — reviews unlock once Google
          approves the profile.
        </p>
        <a
          href={GBP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-semibold text-navy underline underline-offset-4 hover:text-accent-dark"
        >
          Sting Analytics on Google Maps
        </a>
      </div>
    </div>
  );
}
