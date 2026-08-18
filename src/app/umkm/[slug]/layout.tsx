import type { Metadata } from "next";
import { absoluteUrl, siteOgImage, umkmDetails } from "../../seo-data";

type UMKMDetailLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = umkmDetails.find((item) => item.slug === slug);

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
    twitter: {
      card: "summary_large_image",
      title: `${detail.title} | UMKM Desa Senggreng`,
      description: detail.description,
      images: [siteOgImage],
    },
  };
}

export default async function UMKMDetailLayout({
  children,
}: UMKMDetailLayoutProps) {
  return <>{children}</>;
}
