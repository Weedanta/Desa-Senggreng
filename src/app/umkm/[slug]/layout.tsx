import type { Metadata } from "next";
import { absoluteUrl, siteOgImage, umkmDetails } from "../../seo-data";

type UMKMDetailLayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: UMKMDetailLayoutProps): Promise<Metadata> {
  const detail = umkmDetails.find((item) => item.slug === params.slug);

  if (!detail) {
    return {
      title: "UMKM Desa Senggreng",
      description: "UMKM Desa Senggreng tidak ditemukan.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const url = `/umkm/${detail.slug}`;

  return {
    title: `${detail.title} | UMKM Desa Senggreng`,
    description: detail.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${detail.title} | UMKM Desa Senggreng`,
      description: detail.description,
      url: absoluteUrl(url),
      type: "article",
      images: [
        {
          url: siteOgImage,
          alt: detail.title,
        },
      ],
    },
  };
}

export default function UMKMDetailLayout({
  children,
}: UMKMDetailLayoutProps) {
  return <>{children}</>;
}
