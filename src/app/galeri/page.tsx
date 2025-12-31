import type { Metadata } from "next";
import { GaleriContainer } from "@/shared/galeri/container/GaleriContainer";
import React from "react";

export const metadata: Metadata = {
  title: "Galeri Desa Senggreng",
  description:
    "Galeri foto wisata, UMKM, dan kegiatan warga Desa Senggreng, Kecamatan Sumberpucung, Malang.",
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    type: "website",
    title: "Galeri Desa Senggreng",
    url: "/galeri",
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
