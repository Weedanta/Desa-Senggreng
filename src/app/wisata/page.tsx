import type { Metadata } from "next";
import React from "react";
import WisataContainer from "@/shared/wisata/container/WisataContainer";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Destinasi Wisata Desa Senggreng | Sumber Duren, Rowo Klampok",
  description:
    "Jelajahi wisata alam dan rekreasi keluarga Desa Senggreng: Wisata Sumber Duren dengan camping ground, panorama Rowo Klampok, Embung Sumberpucung, dan Waduk Rajut Indah.",
  alternates: {
    canonical: "/wisata",
  },
  openGraph: {
    type: "website",
    title: "Destinasi Wisata Desa Senggreng | Sumber Duren, Rowo Klampok",
    description:
      "Jelajahi wisata alam dan rekreasi keluarga Desa Senggreng: Wisata Sumber Duren dengan camping ground, panorama Rowo Klampok, Embung Sumberpucung, dan Waduk Rajut Indah.",
    url: absoluteUrl("/wisata"),
    siteName: "Desa Senggreng",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Destinasi Wisata Alam Desa Senggreng, Sumberpucung, Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinasi Wisata Desa Senggreng | Sumber Duren, Rowo Klampok",
    description:
      "Jelajahi wisata alam dan rekreasi keluarga Desa Senggreng: Sumber Duren, Rowo Klampok, Embung Sumberpucung, dan Rajut Indah.",
    images: [siteOgImage],
  },
};

const page = () => {
  return (
    <WisataContainer />
  )
}

export default page
