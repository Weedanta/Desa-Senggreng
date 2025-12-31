import type { Metadata } from "next";
import React from "react";
import DetailContainer from "@/shared/detail/container/DetailContainer";

export const metadata: Metadata = {
  title: "Detail Konten Desa Senggreng",
  description:
    "Detail konten wisata dan UMKM Desa Senggreng. Gunakan tautan resmi untuk melihat halaman lengkap.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/detail",
  },
};

const page = () => {
  return <DetailContainer />;
};

export default page;
