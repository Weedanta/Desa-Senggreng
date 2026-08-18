import type { Metadata } from "next";
import { GaleriContainer } from "@/shared/galeri/container/GaleriContainer";
import React from "react";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Galeri Dokumentasi & Kegiatan | Desa Senggreng",
  description:
    "Kumpulan dokumentasi foto dan video kegiatan masyarakat, tradisi kirab tumpeng, keindahan panorama alam, dan aktivitas ekonomi Desa Senggreng, Sumberpucung, Malang.",
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    type: "website",
    title: "Galeri Dokumentasi & Kegiatan | Desa Senggreng",
    description:
      "Kumpulan dokumentasi foto dan video kegiatan masyarakat, tradisi kirab tumpeng, keindahan panorama alam, dan aktivitas ekonomi Desa Senggreng, Sumberpucung, Malang.",
    url: absoluteUrl("/galeri"),
    siteName: "Desa Senggreng",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Galeri Dokumentasi Desa Senggreng, Sumberpucung, Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri Dokumentasi & Kegiatan | Desa Senggreng",
    description:
      "Kumpulan dokumentasi foto dan video kegiatan masyarakat, tradisi kirab tumpeng, dan panorama alam Desa Senggreng.",
    images: [siteOgImage],
  },
};

const page = () => {
  return (
    <div className='bg-custom'>
      <GaleriContainer />
    </div>
  )
}

export default page
