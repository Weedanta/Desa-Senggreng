import Image from "next/image"
import type { GalleryImage as GalleryImageType } from "../types"

interface GalleryImageProps {
  image: GalleryImageType
  className?: string
}

export const GalleryImage = ({ image, className = "" }: GalleryImageProps) => {
  return (
    <div className={`relative group overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Hover overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <h3 className="text-white font-semibold text-lg md:text-xl text-balance">{image.title}</h3>
        </div>
      </div>
    </div>
  )
}
