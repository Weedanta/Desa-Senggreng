import { GalleryImage } from "./GalleryImage"
import type { GalleryImage as GalleryImageType } from "../types"

interface ImageGridProps {
  images: GalleryImageType[]
}

export const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {images.map((image) => (
        <GalleryImage key={image.id} image={image} className="aspect-square w-full" />
      ))}
    </div>
  )
}
