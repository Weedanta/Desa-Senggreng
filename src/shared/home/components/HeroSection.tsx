"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroImage from "@/assets/images/home/hero.png"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="mycontainer py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-1 pb-2 md:pb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Desa Senggreng
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl border-l-4 md:border-l-8 pl-3 md:pl-4 border-primary-700 text-white-800 leading-relaxed max-w-full lg:max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Jelajahi keindahan alam, kearifan lokal, dan potensi ekonomi desa yang menakjubkan
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="inline-flex items-center gap-2 gradient-1 text-base sm:text-lg text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Selengkapnya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-auto h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] object-cover rounded-lg shadow-lg"
                draggable={false}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
