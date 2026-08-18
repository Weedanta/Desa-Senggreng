import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import StickyMobileCTA from "@/shared/components/layout/StickyMobileCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const metadataBaseUrl = "https://desa-senggreng.vercel.app";
const ogImage =
  "https://res.cloudinary.com/matic-malang/image/upload/v1691651913/z0x7gz6l9pgulxyc4mdv.jpg";

export const viewport: Viewport = {
  themeColor: "#007ee8",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Desa Senggreng",
  url: metadataBaseUrl,
  image: ogImage,
  description:
    "Profil Desa Senggreng, Sumberpucung, Malang. Pusat wisata, budaya, UMKM, kuliner, dan potensi lokal di Jawa Timur.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sumberpucung",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: [
    "https://desa-senggreng.vercel.app/",
    "https://maps.app.goo.gl/",
    "https://www.instagram.com/pemdessenggreng",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Profil Desa Senggreng | Wisata & UMKM",
    template: "%s | Desa Senggreng",
  },
  description:
    "Desa Senggreng, Sumberpucung, Malang. Pusat wisata, budaya, UMKM, kuliner, dan potensi lokal yang memikat di Jawa Timur.",
  keywords: [
    "Desa Senggreng",
    "Senggreng",
    "Desa Senggreng Malang",
    "Wisata Senggreng",
    "Wisata Desa",
    "UMKM Senggreng",
    "Kuliner Senggreng",
    "Sumberpucung",
    "Desa Sumberpucung",
    "Malang",
    "Wisata Malang",
    "UMKM Malang",
    "Kuliner Malang",
    "Tradisi Senggreng",
    "Kebudayaan Senggreng",
    "Potensi Desa Senggreng",
    "Wisata Alam Senggreng",
    "Wisata Budaya Senggreng",
    "Wisata Kuliner Senggreng",
    "Produk UMKM Senggreng",
    "Desa Wisata Malang",
    "Pariwisata Jawa Timur",
    "Desa Digital",
    "Desa Berdaya",
    "Profil Desa Senggreng",
    "Ekonomi Kreatif Senggreng",
    "Inovasi Desa Senggreng",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Profil Desa Senggreng | Wisata & UMKM",
    description:
      "Eksplorasi Desa Senggreng, Sumberpucung - Malang. Nikmati wisata alam, budaya, UMKM, dan potensi ekonomi lokal.",
    url: metadataBaseUrl,
    siteName: "Desa Senggreng",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Desa Senggreng - Wisata & UMKM",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased font-sans`}>
        <div className="flex flex-col min-h-screen bg-gray-50 pb-16 lg:pb-0">
          {children}
        </div>
        <StickyMobileCTA />
      </body>
    </html>
  );
}
