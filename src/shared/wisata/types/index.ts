export interface WisataItem {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  detailLink: string;
}

export interface WisataCardProps {
  item: WisataItem;
  index: number;
}

export interface WisataListProps {
  items: WisataItem[];
}