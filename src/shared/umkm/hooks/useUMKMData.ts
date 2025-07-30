'use client';

import { useState, useEffect } from 'react';
import { UMKMItem } from '../types';

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
          image: require('@/assets/images/UMKM/FamilyChicken.png').default,
          location: "Dusun Ngrancah, Senggreng",
          detailLink: "/umkm/familychicken",
          category: "Kuliner",
          contact: "0812-3456-7890",
          priceRange: "Rp 10.000 - 25.000"
        },
        {
          id: 2,
          name: "Warung Biru",
          description: "Warung legendaris ini hanya menyediakan satu menu, yaitu ikan mujair, namun menjadi favorit warga. Butuh beberapa saat mengantri untuk menikmati lezatnya ikan mujair pedas ataupun goreng yang dipadukan dengan nasi putih dan nasi jagung, juga dilengkapi lalapan segar. Dengan porsi yang cukup untuk membuat kenyang, harga yang ditawarkan juga sangat bersahabat sehingga membuat warung ini menjadi salah satu yang harus dikunjungi oleh para pemburu kuliner.",
          image: require('@/assets/images/UMKM/WarungBiru.png').default,
          location: "Dusun Karajan, Senggreng",
          detailLink: "/umkm/warungbiru",
          category: "Kuliner",
          contact: "0813-4567-8901",
          priceRange: "Rp15.000 - 25.000"
        },
        {
          id: 3,
          name: "Kerajinan Anyaman",
          description: "Ibu Wasiah merupakan seorang pengrajin anyaman berbahan dasar plastik sintetis dan jali yang berkualitas. Usaha ini telah berjalan sejak sekitar tahun 2020, yang awalnya merupakan kegiatan sampingan dan kemudian berkembang dengan terlibatnya anggota PKK Desa Senggreng dan melibatkan lebih banyak warga desa sebagai pengrajin. Produk berkualitas ini menjadi favorit warga sebagai item pribadi maupun souvenir dalam acara-acara besar.",
          image: require('@/assets/images/UMKM/TasAnyaman.png').default,
          location: "Jl. Raya Senggreng",
          detailLink: "/umkm/kerajinananyaman",
          category: "Kerajinan Tangan",
          contact: "0814-5678-9012",
          priceRange: "Rp7.000 - Rp45.000"
        },
        {
          id: 4,
          name: "Kotak Makanan",
          description: "Usaha peternakan ikan lele yang menggunakan sistem budidaya modern dengan kualitas air terjaga. Menyediakan ikan lele segar untuk kebutuhan konsumsi lokal dan luar desa. Juga melayani pengolahan lele menjadi berbagai produk siap saji.",
          image: require('@/assets/images/UMKM/WadahKotak.png').default,
          location: "Dusun Kecopokan, Senggreng",
          detailLink: "/umkm/wadahkotak",
          category: "Kerajinan Tangan",
          contact: "0815-6789-0123",
          priceRange: "Rp3.000 - Rp250.000"
        }
      ];

      // Set data immediately without delay
      setUMKMData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { umkmData, loading };
};