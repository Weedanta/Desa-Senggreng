import type { Metadata } from "next";
import React from "react";
import TentangContainer from "@/shared/tentang/container/TentangContainer";

export const metadata: Metadata = {
  title: "Tentang Desa Senggreng",
  description:
    "Profil lengkap Desa Senggreng: sejarah, visi misi, budaya, dan potensi lokal di Kecamatan Sumberpucung, Malang.",
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    type: "website",
    title: "Tentang Desa Senggreng",
    url: "/tentang",
  },
};

const page = () => {
  return <TentangContainer/>
};

export default page;
