import type { Metadata } from "next";
import React from "react";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
  title: "Fitur Segera Hadir | Desa Senggreng",
  description:
    "Halaman fitur yang akan segera hadir di Desa Senggreng. Nantikan informasi terbaru seputar desa, wisata, dan UMKM.",
  alternates: {
    canonical: "/coming-soon",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
