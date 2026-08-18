"use client";

import type React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./kataPendudukComponents/Card";
import { useKataPenduduk } from "../hooks/useKataPenduduk";
import type { KataPendudukProps, Testimonial } from "../types/index";
import SectionHeader from "@/shared/components/section/section";

const KataPenduduk: React.FC<KataPendudukProps> = ({
  testimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    visibleTestimonials,
    totalPages,
  } = useKataPenduduk(testimonials, autoPlay, autoPlayInterval);

  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="h-full"
    >
      <Card className="h-full">
        <CardContent>
          <div className="flex flex-col items-center text-left space-y-4">
            <div className="flex gap-4 w-full">
              <div className="w-16 h-16 rounded-full gradient-1 flex items-center justify-center shadow-lg shrink-0">
                <span className="text-2xl font-bold text-white">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-base text-white-700">
                  Penduduk
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed italic text-justify">
              &ldquo;{testimonial.content}&rdquo;
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-12 lg:py-24 w-full">
      <div className="mycontainer">
        <SectionHeader title="Kata Penduduk">
          <div className="relative w-full mx-auto">
            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                aria-label="Previous Testimonials"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -ml-6 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                aria-label="Next Testimonials"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -mr-6 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation Buttons - Mobile & Tablet */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                aria-label="Previous Testimonials"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -ml-3 md:-ml-5 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                aria-label="Next Testimonials"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -mr-3 md:-mr-5 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Cards Container */}
            <div className="px-0 lg:px-8">
              <div className="relative px-4 md:px-6 lg:px-0 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`page-${currentIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {visibleTestimonials.map((testimonial, index) =>
                      renderTestimonialCard(testimonial, index)
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to page ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "bg-cyan-600 scale-125 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </SectionHeader>
      </div>
    </section>
  );
};

export default KataPenduduk;