import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profil Desa Senggreng | Wisata & UMKM",
  description:
    "Desa Senggreng, Sumberpucung, Malang. Pusat wisata, budaya, UMKM, kuliner, dan potensi lokal yang memikat di Jawa Timur.",
  openGraph: {
    title: "Profil Desa Senggreng | Wisata & UMKM",
    description:
      "Eksplorasi Desa Senggreng, Sumberpucung - Malang. Nikmati wisata alam, budaya, UMKM, dan potensi ekonomi lokal.",
    url: "https://desa-senggreng.vercel.app/",
    siteName: "Desa Senggreng",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/matic-malang/image/upload/v1691651913/z0x7gz6l9pgulxyc4mdv.jpg",
        width: 1200,
        height: 630,
        alt: "Desa Senggreng - Wisata & UMKM",
      },
    ],
  },
  other: {
    keywords:
      "Desa Senggreng, Senggreng, Desa Senggreng Malang, Wisata Senggreng, Wisata Desa, UMKM Senggreng, Kuliner Senggreng, Sumberpucung, Desa Sumberpucung, Malang, Wisata Malang, UMKM Malang, Kuliner Malang, Tradisi Senggreng, Kebudayaan Senggreng, Potensi Desa Senggreng, Wisata Alam Senggreng, Wisata Budaya Senggreng, Wisata Kuliner Senggreng, Produk UMKM Senggreng, Desa Wisata Malang, Pariwisata Jawa Timur, Desa Digital, Desa Berdaya, Profil Desa Senggreng, Ekonomi Kreatif Senggreng, Inovasi Desa Senggreng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased font-sans`}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
