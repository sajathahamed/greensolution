import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // SEO: keep this list accurate to real pages so crawlers avoid soft-404 signals.
  return [
    {
      url: "https://greensolution.lk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
