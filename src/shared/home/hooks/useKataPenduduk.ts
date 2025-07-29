"use client"

import { useState, useEffect, useCallback } from "react"
import type { Testimonial, UseKataPendudukReturn } from "../types/index"

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Pak Slamet Riyadi",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Wah, desa kita iki pancen apik tenan! Sejak ada program wisata desa, ekonomi warga jadi luwih membaik. Anak-anak juga seneng, soale bisa belajar sambil main di alam. Sukses terus Desa Senggreng!",
  },
  {
    id: "2",
    name: "Bu Tri Wahyuni",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Alhamdulillah, desa kita makin maju aja. Fasilitas kesehatan komplit, sekolah bagus, terus hasil pertanian juga laris manis. Seneng rasane iso urip ning kene. Matur suwun ibu lurah!",
  },
  {
    id: "3",
    name: "Mas Budi Santoso",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Desa Senggreng itu juara banget sih! Program UMKM-nya keren, pemandangan alamnya adem ayem, plus warganya ramah-ramah. Cocok banget buat yang mau hidup tenang tapi tetap produktif.",
  },
  {
    id: "4",
    name: "Mbak Sari Indah",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Dari dulu tinggal di sini, tapi baru sekarang berasa banget perubahannya. Jalan udah bagus, air bersih lancar, terus banyak kegiatan positif. Anak-anak jadi punya banyak pilihan buat masa depan.",
  },
  {
    id: "5",
    name: "Pak Agus Hermawan",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Mantap jiwa desa kita! Hasil panen makin bagus, ada pelatihan modern, terus pasar tradisional tetap hidup. Keseimbangan antara tradisi sama kemajuan itu yang bikin Senggreng istimewa.",
  },
  {
    id: "6",
    name: "Bu Dewi Lestari",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Seneng banget jadi bagian keluarga besar Desa Senggreng. Gotong royong masih kental, ibu-ibu PKK aktif, plus program pemberdayaan perempuan sangat mendukung. Desa yang bener-bener hidup!",
  },
  {
    id: "7",
    name: "Mas Rizki Pratama",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Sebagai anak muda, aku bangga sama desa sendiri. Ada wadah kreativitas, program digital marketing, terus potensi wisatanya luar biasa. Gak perlu ke kota buat sukses, di desa juga bisa!",
  },
  {
    id: "8",
    name: "Pak Hendra Wijaya",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Desa Senggreng itu hidden gem banget! Pertaniannya organik, alamnya masih asri, plus masyakatnya solid. Cocok buat yang pengen hidup sehat dan bermakna. Pokoknya top markotop lah!",
  },
  {
    id: "9",
    name: "Bu Nina Rahayu",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Dari segi pendidikan, kesehatan, ekonomi, semuanya berkembang pesat. Yang paling aku suka, budaya lokalnya tetap terjaga. Anak-anak bisa belajar teknologi tapi tetap menghormati tradisi nenek moyang.",
  },
]

export const useKataPenduduk = (
  testimonials: Testimonial[] = defaultTestimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
): UseKataPendudukReturn => {
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