import { GalleryImage } from "./GalleryImage"
import type { GalleryImage as GalleryImageType } from "../types"

interface FeaturedImageProps {
  image: GalleryImageType
}

export const FeaturedImage = ({ image }: FeaturedImageProps) => {
  return (
    <div className="w-full">
      <GalleryImage image={image} className="aspect-[16/9] md:aspect-[21/9] w-full" />
    </div>
  )
}
