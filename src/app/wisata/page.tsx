import type { Metadata } from "next";
import React from "react";
import WisataContainer from "@/shared/wisata/container/WisataContainer";

export const metadata: Metadata = {
  title: "Wisata Desa Senggreng",
  description:
    "Jelajahi wisata alam dan budaya Desa Senggreng di Sumberpucung, Malang: Sumber Duren, Rowo Klampok, Embung Sumberpucung, dan Rajut Indah.",
  alternates: {
    canonical: "/wisata",
  },
  openGraph: {
    type: "website",
    title: "Wisata Desa Senggreng",
    url: "/wisata",
  },
};

const page = () => {
  return (
    <WisataContainer />
  )
}

export default page
