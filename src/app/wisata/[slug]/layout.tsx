import type { Metadata } from "next";
import { absoluteUrl, siteOgImage, wisataDetails } from "../../seo-data";

type WisataDetailLayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: WisataDetailLayoutProps): Promise<Metadata> {
  const detail = wisataDetails.find((item) => item.slug === params.slug);

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
  };
}

export default function WisataDetailLayout({
  children,
}: WisataDetailLayoutProps) {
  return <>{children}</>;
}
