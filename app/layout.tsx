import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { SITE_URL } from "../lib/site";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://stinganalytics.com/" },
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sting Analytics | Sales & Financial Performance Analytics",
    template: "%s | Sting Analytics",
  },
  description:
    "Sting Analytics helps SMEs and corporate teams understand sales, profitability and cash performance — root-cause analysis with practical recommendations.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sting Analytics",
    title: "Sting Analytics | Understand. Diagnose. Improve.",
    description:
      "Sales, profitability, financial performance and receivables analysis that explains causes — not just figures.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Sting Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sting Analytics",
    description: "Understand Your Numbers. Improve Your Business Performance.",
    images: [{ url: "/og-cover.png", alt: "Sting Analytics — Understand. Diagnose. Improve." }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
