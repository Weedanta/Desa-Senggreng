import type { Metadata } from "next";
import React from "react";
import UMKMContainer from "@/shared/umkm/container/UMKMContainer";

export const metadata: Metadata = {
  title: "UMKM Desa Senggreng",
  description:
    "Temukan UMKM unggulan Desa Senggreng: kuliner, kerajinan tangan, dan produk kreatif dengan lokasi serta kontak lengkap.",
  alternates: {
    canonical: "/umkm",
  },
  openGraph: {
    type: "website",
    title: "UMKM Desa Senggreng",
    url: "/umkm",
  },
};

const page = () => {
  return (
    <UMKMContainer/>
  )
}

export default page
