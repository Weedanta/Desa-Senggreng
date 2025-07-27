"use client"

import { useState, useEffect } from "react"
import type { MisiItem } from "../types/misi.types"

export const useMisi = () => {
  const [misiItems, setMisiItems] = useState<MisiItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching
    const fetchMisiData = async () => {
      setLoading(true)

      // Mock data that matches the design
      const data: MisiItem[] = [
        {
          id: 1,
          text: "Mewujudkan Kesejahteraan Rakyat",
        },
        {
          id: 2,
          text: "Mewujudkan Inovasi Pelayanan Publik",
        },
        {
          id: 3,
          text: "Mewujudkan Keluarga Bahagia, Mandiri, dan Sejahtera",
        },
        {
          id: 4,
          text: "Mewujudkan Keterlibatan Perempuan Dalam Pembangunan dan Pengambilan Kebijakan",
        },
        {
          id: 5,
          text: "Menggali Potensi Desa Dalam Rangka Peningkatan PAD",
        },
        {
          id: 6,
          text: "Mewujudkan Kualitas Sumber Daya Manusia Aparatur Desa",
        },
      ]

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      setMisiItems(data)
      setLoading(false)
    }

    fetchMisiData()
  }, [])

  return {
    misiItems,
    loading,
    setMisiItems,
  }
}
