import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Sting Analytics logo"
            className="h-11 w-auto"
            width={180}
            height={44}
          />
          <span className="sr-only">Sting Analytics — home</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal hover:text-navy hover:underline hover:underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            Discuss Your Business
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary
            aria-label="Open menu"
            className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-navy"
          >
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded px-3 py-2 text-sm font-medium text-charcoal hover:bg-mist"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="mt-1 block rounded bg-navy px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Discuss Your Business
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
