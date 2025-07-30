export interface Facility {
  id: string;
  name: string;
  icon: string;
}

export interface LocationInfo {
  title: string;
  mapEmbedUrl: string;
  address?: string;
}

export interface PriceInfo {
  range: string;
  currency?: string;
}

export interface MediaContent {
  type: "video" | "iframe" | "image";
  url: string;
  title?: string;
}

export interface DetailContent {
  id: string;
  title: string;
  description: string;
  category: "wisata" | "umkm";
  heroImage: string;

  // Sections
  virtualTour?: MediaContent;
  videoReview?: MediaContent;
  location: LocationInfo;

  // Category specific content
  facilities?: Facility[];
  priceRange?: PriceInfo;
  contact?: string;
  operatingHours?: string;

  // Additional metadata
  rating?: number;
  reviews?: number;
}

export interface DetailContainerProps {
  content: DetailContent;
  className?: string;
}
