import { useGalleryData } from "../hooks/useGalleryData"
import { FeaturedImage } from "../components/FeaturedImage"
import { ImageGrid } from "../components/ImageGrid"

export const GaleriContainer = () => {
  const { allImages } = useGalleryData()

  const renderAlternatingLayout = () => {
    const sections = []
    let imageIndex = 0

    while (imageIndex < allImages.length) {
      // Add large featured image
      if (imageIndex < allImages.length) {
        sections.push(<FeaturedImage key={`featured-${imageIndex}`} image={allImages[imageIndex]} />)
        imageIndex++
      }

      // Add 4 small grid images
      if (imageIndex < allImages.length) {
        const gridImages = allImages.slice(imageIndex, imageIndex + 4)
        sections.push(<ImageGrid key={`grid-${imageIndex}`} images={gridImages} />)
        imageIndex += gridImages.length
      }
    }

    return sections
  }

  return (
    <div className="min-h-screen mycontainer bg-custom py-28 md:py-32">
      <div className="max-w-7xl mx-auto space-y-6">{renderAlternatingLayout()}</div>
    </div>
  )
}
