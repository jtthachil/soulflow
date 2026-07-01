import type { MetadataRoute } from "next";

const base = "https://soulflow-xi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/gallery", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
