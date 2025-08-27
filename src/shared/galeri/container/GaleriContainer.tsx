"use client"

import { motion } from "framer-motion"
import { useGalleryData } from "../hooks/useGalleryData"
import { FeaturedImage } from "../components/FeaturedImage"
import { ImageGrid } from "../components/ImageGrid"

export const GaleriContainer = () => {
  const { allImages } = useGalleryData()

  const renderAlternatingLayout = () => {
    const sections = []
    let imageIndex = 0
    let sectionIndex = 0

    while (imageIndex < allImages.length) {
      // Add large featured image
      if (imageIndex < allImages.length) {
        sections.push(
          <FeaturedImage key={`featured-${imageIndex}`} image={allImages[imageIndex]} index={sectionIndex} />,
        )
        imageIndex++
        sectionIndex++
      }

      // Add 4 small grid images
      if (imageIndex < allImages.length) {
        const gridImages = allImages.slice(imageIndex, imageIndex + 4)
        sections.push(<ImageGrid key={`grid-${imageIndex}`} images={gridImages} startIndex={sectionIndex} />)
        imageIndex += gridImages.length
        sectionIndex++
      }
    }

    return sections
  }

  return (
    <motion.div
      className="min-h-screen mycontainer bg-custom py-28 md:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-7xl mx-auto space-y-6"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {renderAlternatingLayout()}
      </motion.div>
    </motion.div>
  )
}
