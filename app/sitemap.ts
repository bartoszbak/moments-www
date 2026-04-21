import type { MetadataRoute } from "next";

import { siteConfig } from "@/app/_lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
