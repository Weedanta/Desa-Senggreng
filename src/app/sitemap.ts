import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  staticRoutes,
  umkmDetails,
  wisataDetails,
} from "./seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency,
      priority,
    })
  );

  const wisataEntries: MetadataRoute.Sitemap = wisataDetails.map((item) => ({
    url: absoluteUrl(`/wisata/${item.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const umkmEntries: MetadataRoute.Sitemap = umkmDetails.map((item) => ({
    url: absoluteUrl(`/umkm/${item.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...wisataEntries, ...umkmEntries];
}
