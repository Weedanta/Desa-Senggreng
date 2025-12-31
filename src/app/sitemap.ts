import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  staticRoutes,
  umkmDetails,
  wisataDetails,
} from "./seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified: generatedAt,
      changeFrequency,
      priority,
    })
  );

  const wisataEntries: MetadataRoute.Sitemap = wisataDetails.map((item) => ({
    url: absoluteUrl(`/wisata/${item.slug}`),
    lastModified: generatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const umkmEntries: MetadataRoute.Sitemap = umkmDetails.map((item) => ({
    url: absoluteUrl(`/umkm/${item.slug}`),
    lastModified: generatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...wisataEntries, ...umkmEntries];
}
