import Link from "next/link";
import { NavbarContainer } from "@/shared/components/layout/navbar/container";
import { Home, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan di portal resmi Desa Senggreng, Sumberpucung, Malang.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col h-screen w-full bg-custom overflow-hidden">
      <NavbarContainer />

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="mycontainer w-full">
          <div className="max-w-2xl mx-auto text-center">
            {/* Giant 404 Text */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-gradient-1 tracking-tight select-none mb-2">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Waduh! Halaman Tidak Ditemukan
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
              Halaman yang Anda tuju mungkin telah dipindahkan, diubah namanya, atau tautan yang dimasukkan keliru. Jangan khawatir, mari kembali ke jalan yang benar!
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 gradient-1 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span>Kembali ke Beranda</span>
              </Link>

              <Link
                href="/wisata"
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Compass className="w-5 h-5 text-primary-600" />
                <span>Eksplor Wisata</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
