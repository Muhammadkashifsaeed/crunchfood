import type { MetadataRoute } from "next";

const SITE_URL = "https://crunchfood.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/breading`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/peri-peri`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/nashville`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/honey-spice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/dippings`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/chip-spice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/packaging`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/wholesale`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
