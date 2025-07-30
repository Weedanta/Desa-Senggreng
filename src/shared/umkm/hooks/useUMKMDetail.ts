'use client';

import { useState, useEffect } from 'react';
import { DetailContent } from '@/shared/detail/types';

export const useUMKMDetail = (id: string) => {
  const [detailData, setDetailData] = useState<DetailContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Mock data berdasarkan ID UMKM
        const mockDetailData: Record<string, DetailContent> = {
          'family-chicken': {
            id: 'family-chicken',
            title: 'Family Chicken Senggreng',
            category: 'umkm',
            description: 'Family Chicken adalah restoran ayam yang menyediakan berbagai menu seperti ayam crispy, ayam geprek, dengan berbagai varian sambal nikmat. Dengan fasilitas yang nyaman dan harga bersahabat, restoran ini menjadi favorit warga untuk makan bersama, atau sekedar makan siang.',
            heroImage: require('@/assets/images/UMKM/FamilyChicken.png').default,
            
            videoReview: {
              type: 'iframe',
              url: 'https://www.youtube.com/embed/3hej0KGlJIU',
              title: 'Review Family Chicken Senggreng'
            },
            
            location: {
              title: 'Family Chicken Senggreng',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.338838466273!2d112.5149936!3d-8.1685771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78994a49db2e2b%3A0xde4b1182fdb91fd4!2sFAMILY%20CHICKEN%20%7Bayam%20geprek%7D!5e0!3m2!1sid!2sid!4v1753833952552!5m2!1sid!2sid",
              address: 'Dusun Ngrancah, Senggreng'
            },
            
            facilities: [
              { id: 'digital-payment', name: 'Pembayaran Digital', icon: 'credit-card' },
              { id: 'parking', name: 'Parkir Gratis', icon: 'car' },
              { id: 'toilet', name: 'Toilet', icon: 'toilet' },
              { id: 'wifi', name: 'WiFi Gratis', icon: 'wifi' },
            //   { id: 'ac', name: 'AC', icon: 'air-conditioner' }
            ],
            
            contact: '0812-3456-7890',
            operatingHours: '08:00 - 22:00',
            
            priceRange: {
              range: 'Rp10.000—25.000',
              currency: 'IDR'
            },
            
            rating: 4.2,
            reviews: 188
          },
          
          'warung-biru': {
            id: 'warung-biru',
            title: 'Warung Biru',
            category: 'umkm',
            description: 'Warung legendaris ini hanya menyediakan satu menu, yaitu ikan mujair, namun menjadi favorit warga. Butuh beberapa saat mengantri untuk menikmati lezatnya ikan mujair pedas ataupun goreng yang dipadukan dengan nasi putih dan nasi jagung, juga dilengkapi lalapan segar. Dengan porsi yang cukup untuk membuat kenyang, harga yang ditawarkan juga sangat bersahabat sehingga membuat warung ini menjadi salah satu yang harus dikunjungi oleh para pemburu kuliner.',
            heroImage: require('@/assets/images/UMKM/WarungBiru.png').default,
            
            videoReview: {
              type: 'iframe',
              url: 'https://www.youtube.com/embed/X-EK60rmcQs?rel=0&modestbranding=1&showinfo=0',
              title: 'Review Warung Biru'
            },
            
            location: {
              title: 'Warung Biru',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.338838466273!2d112.5149936!3d-8.1685771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78990063c2d349%3A0x650148429f00ef21!2sWarung%20Biru%20Bu%20Kambali%20(%20MUJAER%20PEDAS%20)!5e0!3m2!1sid!2sid!4v1753834070866!5m2!1sid!2sid",
              address: 'Dusun Karajan, Senggreng'
            },
            
            facilities: [
              { id: 'cash-only', name: 'Pembayaran Tunai', icon: 'cash' },
              { id: 'outdoor-seating', name: 'Tempat Duduk Outdoor', icon: 'chair' },
              { id: 'parking', name: 'Parkir Motor', icon: 'motorcycle' },
              { id: 'takeaway', name: 'Bisa Dibawa Pulang', icon: 'takeaway' }
            ],
            
            contact: '0813-4567-8901',
            operatingHours: '10:00 - 20:00',
            
            priceRange: {
              range: 'Rp15.000—25.000',
              currency: 'IDR'
            },
            
            rating: 4.5,
            reviews: 156
          },
          
          'kerajinan-anyaman': {
            id: 'kerajinan-anyaman',
            title: 'Kerajinan Anyaman',
            category: 'umkm',
            description: 'Ibu Wasiah merupakan seorang pengrajin anyaman berbahan dasar plastik sintetis dan pandan yang berkualitas. Usaha ini telah berjalan sejak sekitar tahun 2020, yang awalnya merupakan kegiatan sampingan dan kemudian berkembang dengan terlibatnya anggota PKK Desa Senggreng dan melibatkan lebih banyak warga desa sebagai pengrajin. Produk berkualitas ini menjadi favorit warga sebagai item pribadi maupun souvenir dalam acara-acara besar.',
            heroImage: require('@/assets/images/UMKM/TasAnyaman.png').default,
            
            videoReview: {
              type: 'iframe',
              url: 'https://www.youtube.com/embed/X-EK60rmcQs?rel=0&modestbranding=1&showinfo=0',
              title: 'Proses Pembuatan Anyaman'
            },
            
            location: {
              title: 'Kerajinan Anyaman',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.579415176695!2d112.49867432025795!3d-8.186750261563319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a300289e295d%3A0xdd72e45f857a0d9c!2sTas%20Anyaman%20Bu%20Wasiah!5e0!3m2!1sid!2sid!4v1753834277048!5m2!1sid!2sid",
              address: 'Jl. Raya Senggreng'
            },
            
            facilities: [
              { id: 'custom-order', name: 'Pesanan Custom', icon: 'custom' },
              { id: 'workshop', name: 'Workshop Tersedia', icon: 'workshop' },
              { id: 'home-delivery', name: 'Antar ke Rumah', icon: 'delivery' },
              { id: 'bulk-order', name: 'Pesanan Grosir', icon: 'bulk' }
            ],
            
            contact: '0814-5678-9012',
            operatingHours: '08:00 - 17:00',
            
            priceRange: {
              range: 'Rp7.000—45.000',
              currency: 'IDR'
            },
            
            rating: 4.6,
            reviews: 73
          },
          
          'kotak-makanan': {
            id: 'kotak-makanan',
            title: 'Kotak Makanan',
            category: 'umkm',
            description: 'Usaha pembuatan wadah kotak makanan tradisional yang menggunakan bahan-bahan alami berkualitas tinggi. Produk ini cocok untuk berbagai kebutuhan seperti kemasan makanan tradisional, souvenir, dan kebutuhan rumah tangga. Dikerjakan dengan teknik tradisional yang dipadukan dengan sentuhan modern.',
            heroImage: require('@/assets/images/UMKM/WadahKotak.png').default,
            
            videoReview: {
              type: 'iframe',
              url: 'https://www.youtube.com/embed/X-EK60rmcQs?rel=0&modestbranding=1&showinfo=0',
              title: 'Proses Pembuatan Kotak Makanan'
            },
            
            location: {
              title: 'Kotak Makanan',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1974.6751185900414!2d112.51336549327338!3d-8.167424962715678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl%20Panjaitan%20Dusun%20Krajan%20Desa%20Senggreng%20Kec%20Sumberpucung%20Kabupaten%20Malang%20Jawa%20Timur%2065165!5e0!3m2!1sid!2sid!4v1753834378216!5m2!1sid!2sid",
              address: 'Dusun Kecopokan, Senggreng'
            },
            
            facilities: [
              { id: 'eco-friendly', name: 'Ramah Lingkungan', icon: 'eco' },
              { id: 'food-grade', name: 'Food Grade', icon: 'food-safe' },
              { id: 'custom-size', name: 'Ukuran Custom', icon: 'ruler' },
              { id: 'bulk-order', name: 'Pesanan Grosir', icon: 'bulk' }
            ],
            
            contact: '0815-6789-0123',
            operatingHours: '07:00 - 16:00',
            
            priceRange: {
              range: 'Rp3.000—250.000',
              currency: 'IDR'
            },
            
            rating: 4.4,
            reviews: 45
          }
        };

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const data = mockDetailData[id];
        if (data) {
          setDetailData(data);
        } else {
          setError('Data UMKM tidak ditemukan');
        }
      } catch (err) {
        setError('Gagal memuat data UMKM');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDetailData();
    }
  }, [id]);

  return {
    detailData,
    loading,
    error
  };
};