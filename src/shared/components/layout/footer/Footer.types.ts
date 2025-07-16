export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  instagram: string;
  phone: string;
  email: string;
}

export interface FooterProps {
  navigation?: NavigationItem[];
  contact?: ContactInfo;
  logoSrc?: string;
  desaName?: string;
  websiteSubtitle?: string;
  className?: string;
}

export interface FooterSectionProps {
  children: React.ReactNode;
  className?: string;
}
