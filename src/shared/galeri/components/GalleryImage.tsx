"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { GalleryImage as GalleryImageType } from "../types"

interface GalleryImageProps {
  image: GalleryImageType
  className?: string
  index?: number
}

export const GalleryImage = ({ image, className = "", index = 0 }: GalleryImageProps) => {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Hover overlay with title */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="text-white font-semibold text-lg md:text-xl text-balance">{image.title}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
