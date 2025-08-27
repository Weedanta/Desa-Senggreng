export interface GalleryImage {
  id: string
  title: string
  src: string
  alt: string
  featured?: boolean
}

export type GalleryData = {
  featuredImages: GalleryImage[]
  gridImages: GalleryImage[]
  allImages: GalleryImage[]
}
