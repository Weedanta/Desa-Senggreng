import type { Metadata } from "next";
import React from "react";
import UMKMContainer from "@/shared/umkm/container/UMKMContainer";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Katalog UMKM Desa Senggreng | Kuliner & Kerajinan Lokal",
  description:
    "Dukung produk usaha warga Desa Senggreng: kuliner khas Family Chicken, Warung Biru Mujair, kerajinan anyaman tradisional, dan aneka produk olahan lokal lainnya.",
  alternates: {
    canonical: "/umkm",
  },
  openGraph: {
    type: "website",
    title: "Katalog UMKM Desa Senggreng | Kuliner & Kerajinan Lokal",
    description:
      "Dukung produk usaha warga Desa Senggreng: kuliner khas Family Chicken, Warung Biru Mujair, kerajinan anyaman tradisional, dan aneka produk olahan lokal lainnya.",
    url: absoluteUrl("/umkm"),
    siteName: "Desa Senggreng",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Katalog Produk UMKM Desa Senggreng, Sumberpucung, Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog UMKM Desa Senggreng | Kuliner & Kerajinan Lokal",
    description:
      "Dukung produk usaha warga Desa Senggreng: kuliner khas, kerajinan anyaman, dan aneka produk olahan lokal.",
    images: [siteOgImage],
  },
};

const page = () => {
  return (
    <UMKMContainer/>
  )
}

export default page
