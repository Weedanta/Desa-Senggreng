'use client';

import { useState, useEffect } from 'react';
import { WisataItem } from '../types';

export const useWisataData = () => {
  const [wisataData, setWisataData] = useState<WisataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const mockData: WisataItem[] = [
        {
          id: 1,
          name: "Sumber Duren",
          description: "Wisata Sumber Duren adalah sebuah destinasi yang memukau yang terletak di dusun Kecopokan, Senggreng, Kecamatan Sumberpucung. Tempat ini terletak berdekatan dengan Waduk Rajut Indah, sehingga pengunjung dapat menikmati pemandangan indah dan ketenangan air waduk sambil mengeksplorasi kuliner khas daerah ini.",
          image: require('@/assets/images/Wisata/SumberDuren.png').default,
          location: "Dusun Kecepatan, Sengguruh, Kec. Sumberpucung",
          detailLink: "/wisata/sumber-duren"
        },
        {
          id: 2,
          name: "Rowo Klampok",
          description: "Rowo Klampok merupakan destinasi wisata alam yang dikejala bersama oleh pemerintah desa dan masyarakat setempat. Tempat ini menyajikan panorama wisata yang luas dan tenang, memberikan suasana sejuk dan damai bagi para pengunjung. Dikelilingi pegunungan indah dan langit yang memukau, tempat ini cocok untuk melepas penat dari hiruk-pikuk kota.",
          image: require('@/assets/images/Wisata/RowoKlampo.png').default,
          location: "Desa Klampok, Kec. Sumberpucung",
          detailLink: "/wisata/rowo-klampok"
        },
        {
          id: 3,
          name: "Embung Sumberpucung",
          description: "Wisata Kolam Indah yang terletak di Dusun Kecepatan, Sengguruh, Kec. Sumberpucung merupakan destinasi wisata yang menggabungkan keindahan wisata kolam dari tempat ikma yang menakjubkan. Tempat ini menawarkan pesona alam dan budaya nelayan dalam satu pengalaman yang menarik.",
          image: require('@/assets/images/Wisata/EmbungSumberPucung.png').default,
          location: "Dusun Kecepatan, Sengguruh, Kec. Sumberpucung",
          detailLink: "/wisata/embung-sumberpucung"
        },
        {
          id: 4,
          name: "Rajut Indah",
          description: "Wisata Kolam Indah yang terletak di Dusun Kecepatan, Sengguruh, Kec. Sumberpucung merupakan destinasi wisata yang menggabungkan keindahan wisata kolam dari tempat ikma yang menakjubkan. Tempat ini menawarkan pesona alam dan budaya nelayan dalam satu pengalaman yang menarik.",
          image: require('@/assets/images/Wisata/RajutIndah.png').default,
          location: "Dusun Kecepatan, Sengguruh, Kec. Sumberpucung",
          detailLink: "/wisata/rajut-indah"
        }
      ];


      // Simulate loading delay
      setTimeout(() => {
        setWisataData(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return { wisataData, loading };
};