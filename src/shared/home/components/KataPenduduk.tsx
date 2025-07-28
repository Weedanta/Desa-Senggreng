"use client";

import type React from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
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

  const getVisibleTestimonials = (index: number) => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const testimonialIndex = (index + i) % allTestimonials.length;
      result.push({
        ...allTestimonials[testimonialIndex],
        displayIndex: i
      });
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials(currentIndex);

  return (
    <section className="py-12 lg:py-24 bg-gray-50 w-full">
      <div className="mycontainer">
        <SectionHeader title="Kata Penduduk">
          <div className="relative w-full mx-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-lg flex items-center justify-center transition-all duration-200 -ml-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-lg flex items-center justify-center transition-all duration-200 -mr-6"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>

            <div className="px-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-white border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg"
                          >
                            <User className="h-8 w-8 text-white" />
                          </motion.div>
                          
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed italic">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {allTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-600 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
};

export default KataPenduduk;