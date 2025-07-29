"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useMisi } from "../hooks/useMisi"
import type { MisiProps } from "../types/misi.types"
import SectionHeader from "@/shared/components/section/section"

const Misi: React.FC<MisiProps> = ({ items, className }) => {
  const { misiItems, loading } = useMisi()
  const displayItems = items || misiItems

  // Ref untuk viewport detection
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true, // Animasi hanya sekali
    margin: "-100px", // Trigger saat 100px sebelum masuk viewport
  })

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const skeletonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const numberVariants = {
    hover: {
      scale: 1.1,
      color: "#0052A3",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  if (loading && !items) {
    return (
      <div ref={ref}>
        <SectionHeader title="Misi">
          <motion.div
            className={`space-y-4 ${className || ""}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={skeletonVariants}
                className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-16 rounded-lg border"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
            ))}
          </motion.div>
          <style jsx>{`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
          `}</style>
        </SectionHeader>
      </div>
    )
  }

  return (
    <div ref={ref}>
      <SectionHeader title="Misi">
        <motion.div
          className={`space-y-4 w-full pb-12 ${className || ""}`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 99, 181, 0.15)",
                borderColor: "#0052A3",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start gap-3 py-4 md:py-6 px-6 md:px-8 lg:px-12 border border-[#0063B5] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
              // Mencegah layout shift dengan memberikan min-height
              style={{ minHeight: "80px" }}
            >
              <motion.span
                className="flex-shrink-0 text-primary-800 font-semibold text-lg md:text-2xl lg:text-3xl"
                variants={numberVariants}
                whileHover="hover"
              >
                {item.id}.
              </motion.span>
              <motion.p
                className="text-primary-800 font-medium text-left text-lg md:text-2xl lg:text-3xl"
                // Menghapus animasi individual yang menyebabkan gerakan tidak sinkron
                variants={itemVariants}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
      </SectionHeader>
    </div>
  )
}

export default Misi
