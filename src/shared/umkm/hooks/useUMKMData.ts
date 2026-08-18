'use client';

import { useState, useEffect } from 'react';
import { UMKMItem } from '../types';
import FamilyChickenImg from '@/assets/images/UMKM/FamilyChicken.png';
import WarungBiruImg from '@/assets/images/UMKM/WarungBiru.png';
import TasAnyamanImg from '@/assets/images/UMKM/TasAnyaman.png';
import WadahKotakImg from '@/assets/images/UMKM/WadahKotak.png';

export const useUMKMData = () => {
  const [umkmData, setUMKMData] = useState<UMKMItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const mockData: UMKMItem[] = [
        {
          id: 1,
          name: "Family Chicken",
          description: "Family Chicken adalah restoran ayam yang menyediakan berbagai menu seperti ayam crispy, ayam geprek, dengan berbagai varian sambal nikmat. Dengan fasilitas yang nyaman dan harga bersahabat, restoran ini menjadi favorit warga untuk makan bersama, atau sekedar makan siang.",
          image: FamilyChickenImg,
          location: "Dusun Ngrancah, Senggreng",
          detailLink: "/umkm/family-chicken",
          category: "Kuliner",
          contact: "0812-3456-7890",
          priceRange: "Rp 10.000 - 25.000"
        },
        {
          id: 2,
          name: "Warung Biru",
          description: "Warung legendaris ini hanya menyediakan satu menu, yaitu ikan mujair, namun menjadi favorit warga. Butuh beberapa saat mengantri untuk menikmati lezatnya ikan mujair pedas ataupun goreng yang dipadukan dengan nasi putih dan nasi jagung, juga dilengkapi lalapan segar. Dengan porsi yang cukup untuk membuat kenyang, harga yang ditawarkan juga sangat bersahabat sehingga membuat warung ini menjadi salah satu yang harus dikunjungi oleh para pemburu kuliner.",
          image: WarungBiruImg,
          location: "Dusun Karajan, Senggreng",
          detailLink: "/umkm/warung-biru",
          category: "Kuliner",
          contact: "0813-4567-8901",
          priceRange: "Rp15.000 - 25.000"
        },
        {
          id: 3,
          name: "Kerajinan Anyaman",
          description: "Ibu Wasiah merupakan seorang pengrajin anyaman berbahan dasar plastik sintetis dan jali yang berkualitas. Usaha ini telah berjalan sejak sekitar tahun 2020, yang awalnya merupakan kegiatan sampingan dan kemudian berkembang dengan terlibatnya anggota PKK Desa Senggreng dan melibatkan lebih banyak warga desa sebagai pengrajin. Produk berkualitas ini menjadi favorit warga sebagai item pribadi maupun souvenir dalam acara-acara besar.",
          image: TasAnyamanImg,
          location: "Jl. Raya Senggreng",
          detailLink: "/umkm/kerajinan-anyaman",
          category: "Kerajinan Tangan",
          contact: "0814-5678-9012",
          priceRange: "Rp7.000 - Rp45.000"
        },
        {
          id: 4,
          name: "Kotak Makanan",
          description: "Usaha pembuatan wadah kotak makanan tradisional yang menggunakan bahan-bahan alami berkualitas tinggi. Produk ini cocok untuk berbagai kebutuhan seperti kemasan makanan tradisional, souvenir, dan kebutuhan rumah tangga. Dikerjakan dengan teknik tradisional yang dipadukan dengan sentuhan modern.",
          image: WadahKotakImg,
          location: "Dusun Kecopokan, Senggreng",
          detailLink: "/umkm/kotak-makanan",
          category: "Kerajinan Tangan",
          contact: "0815-6789-0123",
          priceRange: "Rp3.000 - Rp250.000"
        }
      ];

      setUMKMData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { umkmData, loading };
};