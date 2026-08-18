import type { Metadata } from "next";
import React from "react";
import TentangContainer from "@/shared/tentang/container/TentangContainer";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Tentang Desa Senggreng | Profil, Sejarah, Visi & Misi",
  description:
    "Pelajari sejarah berdirinya Desa Senggreng, visi & misi pembangunan desa, letak geografis, serta kearifan lokal di Kecamatan Sumberpucung, Kabupaten Malang.",
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    type: "website",
    title: "Tentang Desa Senggreng | Profil, Sejarah, Visi & Misi",
    description:
      "Pelajari sejarah berdirinya Desa Senggreng, visi & misi pembangunan desa, letak geografis, serta kearifan lokal di Kecamatan Sumberpucung, Kabupaten Malang.",
    url: absoluteUrl("/tentang"),
    siteName: "Desa Senggreng",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Profil dan Sejarah Desa Senggreng, Sumberpucung, Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Desa Senggreng | Profil, Sejarah, Visi & Misi",
    description:
      "Pelajari sejarah, visi misi pembangunan desa, serta kearifan lokal Desa Senggreng, Sumberpucung, Malang.",
    images: [siteOgImage],
  },
};

const page = () => {
  return <TentangContainer/>
};

export default page;
