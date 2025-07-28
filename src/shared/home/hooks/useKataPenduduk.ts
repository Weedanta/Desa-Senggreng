"use client"

import { useState, useEffect, useCallback } from "react"
import type { Testimonial, UseKataPendudukReturn } from "../types/index"

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Desa Senggreng adalah tempat yang sangat nyaman untuk tinggal. Lingkungannya asri, warganya ramah, dan potensi wisatanya sangat menarik. Saya bangga bisa menjadi bagian dari desa ini.",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Sebagai pedagang di pasar desa, saya merasakan betul kehangatan dan dukungan dari sesama warga. Program-program desa juga sangat membantu perekonomian kami.",
  },
  {
    id: "3",
    name: "Ahmad Hidayat",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Fasilitas kesehatan dan pendidikan di Desa Senggreng semakin baik dari tahun ke tahun. Anak-anak bisa bersekolah dengan nyaman dan dekat dari rumah.",
  },
  {
    id: "4",
    name: "Dewi Lestari",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Program pertanian organik yang diluncurkan desa sangat membantu kami para petani. Hasil panen lebih berkualitas dan ramah lingkungan.",
  },
  {
    id: "5",
    name: "Rizki Pratama",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Sebagai pemuda desa, saya senang dengan berbagai kegiatan dan program yang disediakan. Ada wadah untuk mengembangkan kreativitas dan keterampilan.",
  },
  {
    id: "6",
    name: "Ibu Sumarni",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Kehidupan gotong royong di desa ini masih sangat kental. Ketika ada tetangga yang membutuhkan bantuan, pasti semua warga bahu-membahu membantu.",
  },
  {
    id: "7",
    name: "Pak Joko",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Potensi wisata Desa Senggreng luar biasa. Dengan pengelolaan yang baik, saya yakin desa ini bisa menjadi destinasi wisata unggulan di Kabupaten Malang.",
  },
  {
    id: "8",
    name: "Mbak Rina",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Usaha kecil saya di bidang kerajinan mendapat dukungan penuh dari perangkat desa. Ada pelatihan dan bantuan pemasaran yang sangat bermanfaat.",
  },
  {
    id: "9",
    name: "Pak Hasan",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Infrastruktur jalan dan jembatan di desa semakin baik. Ini memudahkan kami untuk transportasi dan membawa hasil pertanian ke pasar.",
  },
]

export const useKataPenduduk = (
  testimonials: Testimonial[] = defaultTestimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
) => {
  const safeTestimonials = testimonials && testimonials.length > 0 
    ? testimonials 
    : defaultTestimonials

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % safeTestimonials.length
    )
  }, [safeTestimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? safeTestimonials.length - 1 : prevIndex - 1
    )
  }, [safeTestimonials.length])

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < safeTestimonials.length) {
        setCurrentIndex(index)
      }
    },
    [safeTestimonials.length]
  )

  const visibleTestimonials = safeTestimonials.slice(0, 3)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)
    
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide])

  return {
    currentIndex,
    testimonials: safeTestimonials,
    nextSlide,
    prevSlide,
    goToSlide,
    visibleTestimonials,
  }
}