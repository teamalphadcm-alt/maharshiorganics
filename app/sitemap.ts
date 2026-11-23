import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((n) => ({
    url: `${SITE.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: n.href === "/" || n.href === "/products" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : n.href === "/products" || n.href === "/contact" ? 0.9 : 0.7,
  }));
}
