"use client"

import { useState, useEffect, useCallback } from "react"
import type { Testimonial, UseKataPendudukReturn } from "../types/index"

const defaultTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "1",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "2",
      name: "2",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "3",
      name: "3",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "4",
      name: "4",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "5",
      name: "5",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "6",
      name: "1",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "7",
      name: "2",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "8",
      name: "3",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "9",
      name: "4",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
    {
      id: "10",
      name: "5",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Desainnya sangat bangus woi, keren dan, walaupun juga aja aku boleh sering main kesini, tapi aku suka banget makanannya juga enak semua! Rekomendasi pisan dah pokonyah 😊",
    },
]

export const useKataPenduduk = (
  testimonials: Testimonial[] = defaultTestimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
): UseKataPendudukReturn => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1))
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1))
  }, [testimonials.length])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, testimonials.length - 3)))
    },
    [testimonials.length],
  )

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide])

  return {
    currentIndex,
    testimonials,
    nextSlide,
    prevSlide,
    goToSlide,
    visibleTestimonials,
  }
}
