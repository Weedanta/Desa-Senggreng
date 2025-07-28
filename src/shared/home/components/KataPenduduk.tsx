"use client"

import type React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./kataPendudukComponents/Card"
import { useKataPenduduk } from "../hooks/useKataPenduduk"
import type { KataPendudukProps } from "../types/index"

const KataPenduduk: React.FC<KataPendudukProps> = ({ testimonials, autoPlay = false, autoPlayInterval = 5000 }) => {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    visibleTestimonials,
    testimonials: allTestimonials,
  } = useKataPenduduk(testimonials, autoPlay, autoPlayInterval)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 py-8"
    >
      <div className="relative flex items-center justify-center gap-4">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white border-2 border-teal-400 text-teal-600 hover:bg-teal-50 hover:border-teal-500 shadow-lg flex items-center justify-center transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>

        {/* Testimonials Container */}
        <div className="flex gap-4 overflow-hidden w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex gap-4 w-full"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex-1 min-w-0"
                >
                  <Card className="border-2 border-teal-400 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {/* Avatar */}
                        <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={`${testimonial.name} avatar`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="font-semibold text-gray-900 text-sm mb-2"
                          >
                            {testimonial.name}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-700 text-xs leading-relaxed"
                          >
                            {testimonial.content}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white border-2 border-teal-400 text-teal-600 hover:bg-teal-50 hover:border-teal-500 shadow-lg flex items-center justify-center transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mt-6 gap-2"
      >
        {Array.from({ length: Math.max(1, allTestimonials.length - 2) }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {}}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-teal-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default KataPenduduk
