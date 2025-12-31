import type { Metadata } from "next";
import Footer from "@/shared/components/layout/footer/footer";
import { NavbarContainer } from "@/shared/components/layout/navbar/container";
import HomeContainer from "@/shared/home/container/HomeContainer";

export const metadata: Metadata = {
  title: "Beranda Desa Senggreng",
  description:
    "Lihat profil Desa Senggreng, wisata unggulan, UMKM, budaya, dan potensi lokal di Sumberpucung, Malang.",
  alternates: {
    canonical: "/",
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
