import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const pages = ["", "/services/", "/case-studies/", "/about/", "/contact/"];
  return pages.map((p) => ({
    url: `${base}${p === "" ? "/" : p}`,
    lastModified: new Date("2026-10-29"),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
