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
const ogImage = "https://desa-senggreng.vercel.app/og-image.png";
const bannerImage =
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
    default: "Desa Senggreng | Profil, Wisata & UMKM Sumberpucung Malang",
    template: "%s | Desa Senggreng",
  },
  description:
    "Website resmi Desa Senggreng — jelajahi potensi wisata alam (Sumber Duren, Rowo Klampok), katalog produk UMKM lokal, sejarah, budaya, dan galeri kegiatan warga Desa Senggreng, Sumberpucung, Malang.",
  keywords: [
    "Desa Senggreng",
    "Senggreng",
    "Desa Senggreng Malang",
    "Wisata Senggreng",
    "Wisata Desa",
    "Wisata Sumber Duren",
    "Rowo Klampok",
    "Embung Sumberpucung",
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
    "Desa Wisata Malang",
    "Pariwisata Jawa Timur",
    "Desa Digital",
    "Profil Desa Senggreng",
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
    title: "Desa Senggreng | Profil, Wisata & UMKM Sumberpucung Malang",
    description:
      "Website resmi Desa Senggreng — jelajahi potensi wisata alam, katalog produk UMKM lokal, kebudayaan tradisional, dan pelayanan Desa Senggreng, Sumberpucung, Malang.",
    url: metadataBaseUrl,
    siteName: "Desa Senggreng",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Panorama dan Potensi Desa Senggreng, Sumberpucung, Malang",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Senggreng | Profil, Wisata & UMKM Sumberpucung Malang",
    description:
      "Website resmi Desa Senggreng: potensi wisata alam Sumber Duren, Rowo Klampok, katalog produk UMKM lokal, dan budaya desa.",
    images: [ogImage],
    creator: "@pemdessenggreng",
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
        <link rel="image_src" href={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
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
