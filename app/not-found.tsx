import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-accent-dark">404</p>
      <h1 className="mt-2 text-4xl font-bold text-navy">Page not found</h1>
      <p className="mt-4 text-charcoal">The page you asked for does not exist or was moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white">Go home</Link>
        <Link href="/contact/" className="rounded-md border border-navy px-5 py-2.5 text-sm font-semibold text-navy">Contact us</Link>
      </div>
    </div>
  );
}
