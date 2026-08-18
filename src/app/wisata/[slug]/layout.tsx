import type { Metadata } from "next";
import { absoluteUrl, siteOgImage, wisataDetails } from "../../seo-data";

type WisataDetailLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = wisataDetails.find((item) => item.slug === slug);

  if (!detail) {
    return {
      title: "Wisata Desa Senggreng",
      description: "Destinasi wisata Desa Senggreng tidak ditemukan.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const url = `/wisata/${detail.slug}`;

  return {
    title: `${detail.title} | Wisata Desa Senggreng`,
    description: detail.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${detail.title} | Wisata Desa Senggreng`,
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
      title: `${detail.title} | Wisata Desa Senggreng`,
      description: detail.description,
      images: [siteOgImage],
    },
  };
}

export default async function WisataDetailLayout({
  children,
}: WisataDetailLayoutProps) {
  return <>{children}</>;
}
