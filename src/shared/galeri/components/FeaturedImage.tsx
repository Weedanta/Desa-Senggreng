"use client"

import { motion } from "framer-motion"
import { GalleryImage } from "./GalleryImage"
import type { GalleryImage as GalleryImageType } from "../types"

interface FeaturedImageProps {
  image: GalleryImageType
  index?: number
}

export const FeaturedImage = ({ image, index = 0 }: FeaturedImageProps) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      <GalleryImage image={image} className="aspect-[16/9] md:aspect-[21/9] w-full" index={index} />
    </motion.div>
  )
}
