'use client';

import { useState, useEffect } from 'react';
import { DetailContent } from '@/shared/detail/types';

export const useWisataDetail = (id: string) => {
  const [detailData, setDetailData] = useState<DetailContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Mock data berdasarkan ID wisata
        const mockDetailData: Record<string, DetailContent> = {
          'sumber-duren': {
            id: 'sumber-duren',
            title: 'Sumber Duren',
            category: 'wisata',
            description: 'Sumber Duren merupakan salah satu tempat wisata yang berfokus pada konservasi alam dan berlatar belakang pemberdayaan masyarakat di bidang ekonomi, terutama pada sektor perikanan air tawar. Produk unggulan air tawar yang dihasilkan berupa ikan mujair, ikan tombro, dan bandeng tawar yang bisa dinikmati sambil bersantai. Tempat wisata ini dilengkapi dengan fasilitas camping ground, spot pemancingan, panggung utama, dan pujasera.',
            heroImage: require('@/assets/images/Wisata/SumberDuren.png').default,
            
            virtualTour: {
              type: 'iframe',
              url: 'https://www.google.com/maps/embed?pb=!4v1734581234567!6m8!1m7!1sCAoSLEFGMVFpcE9fSWhVUVJqeGRsdjNiVGhxVjBXcERYaWZZQU1wdFEtdlBOSE16!2m2!1d-8.1234567!2d112.6234567!3f180!4f0!5f0.7820865974627469',
              title: 'Virtual Tour Sumber Duren'
            },
            
            location: {
              title: 'Sumber Duren',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.175650893549!2d112.49630259999999!3d-8.185053800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a307eb46f091%3A0x3ef3c7c4ce79a86b!2sTHR%20SUMBERDUREN%20KECOPOKAN!5e0!3m2!1sid!2sid!4v1753834507651!5m2!1sid!2sid",
              address: 'Dusun Kecopokan, Senggreng, Kec. Sumberpucung'
            },
            
            facilities: [
              { id: 'camping', name: 'Camping ground', icon: 'tent' },
              { id: 'photo-spot', name: 'Spot foto', icon: 'camera' },
              { id: 'boat', name: 'Perahu', icon: 'boat' },
              { id: 'fishing', name: 'Pemancingan', icon: 'fishing' },
              { id: 'food-court', name: 'Pujasera', icon: 'restaurant' },
              { id: 'stage', name: 'Panggung Utama', icon: 'stage' }
            ],
            
            priceRange: {
              range: 'Rp11.000—25.000',
              currency: 'IDR'
            },
            
            rating: 4.4,
            reviews: 134
          },
          
          'rowo-klampok': {
            id: 'rowo-klampok',
            title: 'Rowo Klampok',
            category: 'wisata',
            description: 'Rowo Klampok merupakan destinasi wisata alam yang dikelola bersama oleh pemerintah desa dan masyarakat setempat. Tempat ini menyajikan panorama wisata yang luas dan tenang, memberikan suasana sejuk dan damai bagi para pengunjung. Dikelilingi pegunungan indah dan langit yang memukau, tempat ini cocok untuk melepas penat dari hiruk-pikuk kota.',
            heroImage: require('@/assets/images/Wisata/RowoKlampo.png').default,
            
            virtualTour: {
              type: 'iframe',
              url: 'https://www.google.com/maps/embed?pb=!4v1734581234567!6m8!1m7!1sCAoSLEFGMVFpcE9fSWhVUVJqeGRsdjNiVGhxVjBXcERYaWZZQU1wdFEtdlBOSE16!2m2!1d-8.1234567!2d112.6234567!3f180!4f0!5f0.7820865974627469',
              title: 'Virtual Tour Rowo Klampok'
            },
            
            location: {
              title: 'Rowo Klampok',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.389839107172!2d112.5105179!3d-8.1634209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7899cd163fee63%3A0x26748369438cbe2f!2sWisata%20Rowo%20Klampok!5e0!3m2!1sid!2sid!4v1753834841572!5m2!1sid!2sid",
              address: 'Desa Klampok, Kec. Sumberpucung'
            },
            
            facilities: [
              { id: 'photo-spot', name: 'Spot foto', icon: 'camera' },
              { id: 'gazebo', name: 'Gazebo', icon: 'umbrella' },
              { id: 'parking', name: 'Area Parkir', icon: 'car' },
              { id: 'toilet', name: 'Toilet', icon: 'toilet' },
              { id: 'bridge', name: 'Jembatan Kayu', icon: 'bridge' }
            ],
            
            priceRange: {
              range: 'Rp5.000—15.000',
              currency: 'IDR'
            },
            
            rating: 4.2,
            reviews: 87
          },
          
          'embung-sumberpucung': {
            id: 'embung-sumberpucung',
            title: 'Embung Sumberpucung',
            category: 'wisata',
            description: 'Wisata Embung Sumberpucung yang terletak di Dusun Kecepatan, Sengguruh, Kec. Sumberpucung merupakan destinasi wisata yang menggabungkan keindahan wisata air dari tempat yang menakjubkan. Tempat ini menawarkan pesona alam dan budaya nelayan dalam satu pengalaman yang menarik.',
            heroImage: require('@/assets/images/Wisata/EmbungSumberPucung.png').default,
            
            virtualTour: {
              type: 'iframe',
              url: 'https://www.google.com/maps/embed?pb=!4v1734581234567!6m8!1m7!1sCAoSLEFGMVFpcE9fSWhVUVJqeGRsdjNiVGhxVjBXcERYaWZZQU1wdFEtdlBOSE16!2m2!1d-8.1234567!2d112.6234567!3f180!4f0!5f0.7820865974627469',
              title: 'Virtual Tour Embung Sumberpucung'
            },
            
            location: {
              title: 'Embung Sumberpucung',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.266805304907!2d112.5127868!3d-8.1758542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a3cdacd4d5eb%3A0x12883796227233!2sEMBUNG%20SUMBERPUCUNG!5e0!3m2!1sid!2sid!4v1753834770239!5m2!1sid!2sid",
              address: 'Dusun Kecepatan, Sengguruh, Kec. Sumberpucung'
            },
            
            facilities: [
              { id: 'fishing', name: 'Pemancingan', icon: 'fishing' },
              { id: 'boat', name: 'Perahu', icon: 'boat' },
              { id: 'photo-spot', name: 'Spot foto', icon: 'camera' },
              { id: 'parking', name: 'Area Parkir', icon: 'car' },
              { id: 'gazebo', name: 'Gazebo', icon: 'umbrella' }
            ],
            
            priceRange: {
              range: 'Rp8.000—20.000',
              currency: 'IDR'
            },
            
            rating: 4.1,
            reviews: 56
          },
          
          'rajut-indah': {
            id: 'rajut-indah',
            title: 'Rajut Indah',
            category: 'wisata',
            description: 'Wisata Rajut Indah yang terletak di Dusun Kecepatan, Sengguruh, Kec. Sumberpucung merupakan destinasi wisata yang menggabungkan keindahan wisata kolam dari tempat yang menakjubkan. Tempat ini menawarkan pesona alam dan budaya nelayan dalam satu pengalaman yang menarik.',
            heroImage: require('@/assets/images/Wisata/RajutIndah.png').default,
            
            virtualTour: {
              type: 'iframe',
              url: 'https://www.google.com/maps/embed?pb=!4v1734581234567!6m8!1m7!1sCAoSLEFGMVFpcE9fSWhVUVJqeGRsdjNiVGhxVjBXcERYaWZZQU1wdFEtdlBOSE16!2m2!1d-8.1234567!2d112.6234567!3f180!4f0!5f0.7820865974627469',
              title: 'Virtual Tour Rajut Indah'
            },
            
            location: {
              title: 'Rajut Indah',
              mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7898.4363485495805!2d112.49522435204554!3d-8.180763480506103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a26a4c8a1199%3A0x872e7f67ead94993!2sWisata%20Rajut%20indah!5e0!3m2!1sid!2sid!4v1753834710412!5m2!1sid!2sid",
              address: 'Dusun Kecepatan, Sengguruh, Kec. Sumberpucung'
            },
            
            facilities: [
              { id: 'fishing', name: 'Pemancingan', icon: 'fishing' },
              { id: 'restaurant', name: 'Warung Makan', icon: 'restaurant' },
              { id: 'photo-spot', name: 'Spot foto', icon: 'camera' },
              { id: 'parking', name: 'Area Parkir', icon: 'car' },
              { id: 'toilet', name: 'Toilet', icon: 'toilet' }
            ],
            
            priceRange: {
              range: 'Rp10.000—30.000',
              currency: 'IDR'
            },
            
            rating: 4.3,
            reviews: 92
          }
        };

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const data = mockDetailData[id];
        if (data) {
          setDetailData(data);
        } else {
          setError('Data wisata tidak ditemukan');
        }
      } catch (err) {
        setError('Gagal memuat data wisata');
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