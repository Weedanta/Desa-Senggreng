import type { Metadata } from "next";
import Footer from "@/shared/components/layout/footer/footer";
import { NavbarContainer } from "@/shared/components/layout/navbar/container";
import HomeContainer from "@/shared/home/container/HomeContainer";

import { siteOgImage, absoluteUrl } from "@/app/seo-data";

export const metadata: Metadata = {
  title: "Beranda | Portal Resmi Desa Senggreng",
  description:
    "Selamat datang di portal resmi Desa Senggreng, Sumberpucung, Malang. Eksplorasi keindahan wisata alam, keunikan budaya lokal, dan produk unggulan UMKM desa kami.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beranda | Portal Resmi Desa Senggreng",
    description:
      "Selamat datang di portal resmi Desa Senggreng, Sumberpucung, Malang. Eksplorasi keindahan wisata alam, keunikan budaya lokal, dan produk unggulan UMKM desa kami.",
    url: absoluteUrl("/"),
    siteName: "Desa Senggreng",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Portal Resmi Desa Senggreng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beranda | Portal Resmi Desa Senggreng",
    description:
      "Selamat datang di portal resmi Desa Senggreng, Sumberpucung, Malang. Eksplorasi keindahan wisata alam, budaya, dan UMKM desa kami.",
    images: [siteOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavbarContainer />
      <main>
        <HomeContainer />
      </main>
      <Footer />
    </div>
  );
}
