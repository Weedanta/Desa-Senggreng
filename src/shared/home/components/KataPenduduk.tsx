"use client";

import type React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./kataPendudukComponents/Card";
import { useKataPenduduk } from "../hooks/useKataPenduduk";
import type { KataPendudukProps } from "../types/index";
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
    testimonials: allTestimonials,
  } = useKataPenduduk(testimonials, autoPlay, autoPlayInterval);

  const getVisibleTestimonials = (index: number, itemsToShow: number) => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      const testimonialIndex = (index + i) % allTestimonials.length;
      result.push({
        ...allTestimonials[testimonialIndex],
        displayIndex: i,
      });
    }
    return result;
  };

  // Generate unique keys for each breakpoint
  const mobileTestimonials = getVisibleTestimonials(currentIndex, 1);
  const tabletTestimonials = getVisibleTestimonials(currentIndex, 2);
  const desktopTestimonials = getVisibleTestimonials(currentIndex, 3);

  const renderTestimonialCard = (testimonial: any, index: number) => (
    <motion.div
      key={`${testimonial.id}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="h-full"
    >
      <Card className="h-full">
        <CardContent>
          <div className="flex flex-col items-center text-left space-y-4">
            <div className="flex gap-4 w-full">
              <div className="w-16 h-16 rounded-full gradient-1 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-base text-white-700">
                  Penduduk
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed italic text-justify">
              "{testimonial.content}"
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-12 lg:py-24 bg-gray-50 w-full">
      <div className="mycontainer">
        <SectionHeader title="Kata Penduduk">
          <div className="relative w-full mx-auto">
            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -ml-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -mr-6"
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -ml-3 md:-ml-5"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full gradient-1 text-white shadow-lg flex items-center justify-center transition-all duration-200 -mr-3 md:-mr-5"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Cards Container */}
            <div className="px-0 lg:px-8">
              <div className="relative px-4 md:px-6 lg:px-0">
                {/* Mobile - 1 Card */}
                <div className="block md:hidden">
                  <motion.div
                    key={`mobile-${currentIndex}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.6,
                    }}
                    className="w-full max-w-sm mx-auto"
                  >
                    {renderTestimonialCard(mobileTestimonials[0], 0)}
                  </motion.div>
                </div>

                {/* Tablet - 2 Cards */}
                <div className="hidden md:block lg:hidden">
                  <motion.div
                    key={`tablet-${currentIndex}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.6,
                    }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {tabletTestimonials.map((testimonial, index) =>
                      renderTestimonialCard(testimonial, index)
                    )}
                  </motion.div>
                </div>

                {/* Desktop - 3 Cards */}
                <div className="hidden lg:block">
                  <motion.div
                    key={`desktop-${currentIndex}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.6,
                    }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {desktopTestimonials.map((testimonial, index) =>
                      renderTestimonialCard(testimonial, index)
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: allTestimonials.length }).map(
                (_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-cyan-600 scale-110 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
};

export default KataPenduduk;