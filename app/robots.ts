import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // SEO: allow full crawling and point bots to the generated sitemap.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://greensolution.lk/sitemap.xml",
    host: "https://greensolution.lk",
  };
}
