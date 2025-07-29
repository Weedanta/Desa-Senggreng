export interface UMKMItem {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  detailLink: string;
  category: string;
  contact: string;
  priceRange: string;
}

export interface UMKMCardProps {
  item: UMKMItem;
  index: number;
}