import type { Metadata } from "next";
import React from "react";
import ComingSoonClient from "./ComingSoonClient";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Fitur Segera Hadir | Desa Senggreng",
  description:
    "Halaman fitur yang akan segera hadir di Desa Senggreng. Nantikan informasi terbaru seputar desa, wisata, dan UMKM.",
  alternates: {
    canonical: "/coming-soon",
  },
  openGraph: {
    type: "website",
    title: "Fitur Segera Hadir | Desa Senggreng",
    description:
      "Halaman fitur yang akan segera hadir di Desa Senggreng. Nantikan informasi terbaru seputar desa, wisata, dan UMKM.",
    url: absoluteUrl("/coming-soon"),
    siteName: "Desa Senggreng",
    images: [
      {
        url: siteOgImage,
        alt: "Fitur Segera Hadir - Desa Senggreng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitur Segera Hadir | Desa Senggreng",
    description:
      "Halaman fitur yang akan segera hadir di Desa Senggreng. Nantikan pembaruan layanan dan informasi desa terbaru.",
    images: [siteOgImage],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
