import type { GalleryData } from "../types"

export const useGalleryData = (): GalleryData => {
  const featuredImages = [
    {
      id: "1",
      title: "Pesona Kirab Tumpeng",
      src: require('@/assets/images/Galeri/KirabTumpeng.jpg').default,
      alt: "Antusias warga memeriahkan kegiatan kirab tumpeng dalam rangkaian acara Bersih Desa dengan berbagai kostum budaya menarik.",
    },
    {
      id: "17",
      title: "Pertunjukan wayang",
      src: require('@/assets/images/Galeri/PertunjukanWayang.jpg').default,
      alt: "Pertunjukan wayang kulit di balai desa oleh para seniman diiringi musik tradisional.",
    },
  ]

  const gridImages = [
    {
      id: "2",
      title: "Sajian Kirab Tumpeng",
      src: require('@/assets/images/Galeri/SajianKirabTumpeng.jpg').default,
      alt: "Kreativitas warga dalam membuat dan menghias tumpeng untuk memeriahkan acara Kirab Tumpeng.",
    },
    {
      id: "3",
      title: "Pengrawit Wayang",
      src: require('@/assets/images/Galeri/PengrawitWayang.jpg').default,
      alt: "Para pengrawit wayang memainkan instrumen-instrumen tradisional yang harmonis sebagai pengiring pada pertunjukan wayang.",
    },
    {
      id: "4",
      title: "Pemain Gamelan",
      src: require('@/assets/images/Galeri/PemainGamelan.jpg').default,
      alt: "Pemain Gamelan yang siap mengiringi pertunjukan wayang dalam rangkaian acara besar Bersih Desa.",
    },
    {
      id: "5",
      title: "Danau Rawo Klampok",
      src: require('@/assets/images/Galeri/DanauRawoKlampok.jpg').default,
      alt: "Lokasi asri dengan air yang tenang menjadi tempat memancing ikan air tawar favorit warga.",
    },
  ]

  const allImages = [
    ...featuredImages,
    ...gridImages,
    {
      id: "6",
      title: "THR Sumber Duren",
      src: require('@/assets/images/Galeri/THRSumberDuren.jpg').default,
      alt: "Lokasi wisata alam yang cocok dikunjungi oleh keluarga untuk menikmati pemandangan danau dan pepohonan yang asri.",
    },
    {
      id: "7",
      title: "Aktivitas Memancing",
      src: require('@/assets/images/Galeri/AktivitasMemancing.jpg').default,
      alt: "Memancing menjadi kegemaran warga Desa Senggreng, mulai dari anak-anak hingga orang dewasa.",
    },
    {
      id: "8",
      title: "Danau Rajut Indah",
      src: require('@/assets/images/Galeri/DanauRajutIndah.jpg').default,
      alt: "Salah satu destinasi wisata alam yang memfasilitasi pengunjung untuk menikmati keindahan alam dengan perahu penyebrangan.",
    },
    {
      id: "9",
      title: "Pelajar SD Negeri 1 Senggreng",
      src: require('@/assets/images/Galeri/PelajarSDNegeri1Senggreng.jpg').default,
      alt: "Siswa-siswi SD Negeri 1 Senggreng yang siap belajar dengan antusias.",
    },
    {
      id: "10",
      title: "Masjid Raya Desa Senggreng",
      src: require('@/assets/images/Galeri/MasjidRayaDesaSenggreng.jpg').default,
      alt: "Masjid Raya Desa Senggreng sebagai tempat ibadah umat muslim yang teduh dan nyaman dengan kemegahannya.",
    },
    {
      id: "11",
      title: "Pertanian Desa Senggreng",
      src: require('@/assets/images/Galeri/PertanianDesaSenggreng.jpg').default,
      alt: "Bentangan sawah di tanah Desa Senggreng yang subur sehingga memberikan hasil pertanian berkualitas.",
    },
    {
      id: "12",
      title: "Sanggar Tari Bayu Candra Kirana",
      src: require('@/assets/images/Galeri/SanggarTariBayuCandraKirana.jpg').default,
      alt: "Pelestarian budaya oleh muda-mudi melalui Sanggar tari Topeng Bayu Candra Kirana.",
    },
    {
      id: "13",
      title: "Kelompok Asman Toga",
      src: require('@/assets/images/Galeri/KelompokAsmanToga.jpg').default,
      alt: "Dukungan pemerintah oleh Kepala Desa Senggreng pada kelompok Asuhan Tanaman Obat Keluarga (Asman Toga).",
    },
    {
      id: "14",
      title: "Pengrajin Anyaman",
      src: require('@/assets/images/Galeri/PengrajinAnyaman.jpeg').default,
      alt: "Para pengrajin sedang membuat berbagai produk anyaman sebagai salah satu usaha rumah tangga di Desa Senggreng.",
    },
    {
      id: "15",
      title: "Pertunjukan Kuda Lumping",
      src: require('@/assets/images/Galeri/PertunjukanKudaLumping.jpg').default,
      alt: "Antusias warga menyaksikan pertunjukan seni kuda lumping dalam rangkaian acara Bersih Desa Senggreng.",
    },
    {
      id: "16",
      title: "Aktivitas Jalan Sehat",
      src: require('@/assets/images/Galeri/AktivitasJalanSehat.jpg').default,
      alt: "Jalan sehat oleh Pemerintah Desa Senggreng bersama masyarakat untuk memeriahkan Rangkaian Acara Bersih Desa.",
    },
    {
      id: "18",
      title: "Persiapan Pertunjukan Mberot",
      src: require('@/assets/images/Galeri/PersiapanPertunjukanMberot.jpg').default,
      alt: "Para seniman bersiap untuk menampilkan kesenian Mberot di lapangan balai desa.",
    },
    {
      id: "19",
      title: "Kreasi Tumpeng oleh Warga Desa",
      src: require('@/assets/images/Galeri/KreasiTumpengolehWargaDesa.jpg').default,
      alt: "Antusias warga memeriahkan kegiatan kirab tumpeng dengan kreasi menghias tumpeng yang menarik.",
    },
    {
      id: "20",
      title: "MMD FILKOM UB",
      src: require('@/assets/images/Galeri/MMDFILKOMUB.jpg').default,
      alt: "Dukungan pemerintah desa terhadap pelaksanaan program kerja Mahasiswa Membangun Desa Fakultas Ilmu Komputer Universitas Brawijaya.",
    },
  ]

  return { featuredImages, gridImages, allImages }
}
