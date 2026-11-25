import Link from "next/link";
import { CONTACT_EMAIL, GBP_URL } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Sting Analytics — Understand. Diagnose. Improve."
            className="h-16 w-auto rounded bg-white p-1.5"
            width={260}
            height={64}
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Sales &amp; Financial Performance Analytics.
            <br />
            Understand. Diagnose. Improve.
          </p>
          <p className="mt-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent-light underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services/" className="hover:text-white">Services</Link></li>
            <li><Link href="/case-studies/" className="hover:text-white">Case Studies</Link></li>
            <li><Link href="/about/" className="hover:text-white">About</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Find us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Sting Analytics on Google Maps
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Business Profile verification pending — reviews unlock after Google approves it.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Working basis
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Portfolio figures on this site are illustrative analytical results
            from simulated data — not verified client outcomes or guarantees.
          </p>
          <Link
            href="/contact/"
            className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-bold text-navy transition hover:bg-accent-dark hover:text-white"
          >
            Discuss Your Business
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Sting Analytics. All rights reserved.</p>
          <p>stinganalytics.com</p>
        </div>
      </div>
    </footer>
  );
}
