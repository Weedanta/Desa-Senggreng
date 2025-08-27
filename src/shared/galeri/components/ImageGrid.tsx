"use client"

import { motion } from "framer-motion"
import { GalleryImage } from "./GalleryImage"
import type { GalleryImage as GalleryImageType } from "../types"

interface ImageGridProps {
  images: GalleryImageType[]
  startIndex?: number
}

export const ImageGrid = ({ images, startIndex = 0 }: ImageGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: startIndex * 0.1 }}
    >
      {images.map((image, index) => (
        <GalleryImage key={image.id} image={image} className="aspect-square w-full" index={startIndex + index} />
      ))}
    </motion.div>
  )
}
