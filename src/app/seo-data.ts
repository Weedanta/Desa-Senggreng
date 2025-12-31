export const siteUrl = "https://desa-senggreng.vercel.app";
export const siteOgImage =
  "https://res.cloudinary.com/matic-malang/image/upload/v1691651913/z0x7gz6l9pgulxyc4mdv.jpg";

export const staticRoutes = [
  {
    path: "/",
    title: "Beranda Desa Senggreng",
    description:
      "Beranda resmi Desa Senggreng yang menampilkan profil desa, wisata, UMKM, dan budaya lokal.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/tentang",
    title: "Tentang Desa Senggreng",
    description:
      "Sejarah, visi misi, dan profil Desa Senggreng di Kecamatan Sumberpucung, Kabupaten Malang.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/wisata",
    title: "Wisata Desa Senggreng",
    description:
      "Daftar destinasi wisata alam dan budaya di Desa Senggreng, Sumberpucung, Malang.",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/umkm",
    title: "UMKM Desa Senggreng",
    description:
      "Katalog UMKM unggulan Desa Senggreng beserta produk, lokasi, dan kontak pelaku usaha.",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/galeri",
    title: "Galeri Desa Senggreng",
    description:
      "Kumpulan foto kegiatan, wisata, dan UMKM di Desa Senggreng, Sumberpucung, Malang.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export const wisataDetails = [
  {
    slug: "sumber-duren",
    title: "Sumber Duren",
    description:
      "Wisata air tawar dengan pemancingan, camping ground, dan pujasera di Dusun Kecopokan.",
  },
  {
    slug: "rowo-klampok",
    title: "Rowo Klampok",
    description:
      "Rowo Klampok, destinasi alam tenang dengan panorama pegunungan di Desa Klampok.",
  },
  {
    slug: "embung-sumberpucung",
    title: "Embung Sumberpucung",
    description:
      "Embung Sumberpucung menawarkan wisata air dan budaya nelayan di Dusun Kecepatan.",
  },
  {
    slug: "rajut-indah",
    title: "Rajut Indah",
    description:
      "Wisata kolam dan kuliner ikan air tawar Rajut Indah di Sengguruh, Sumberpucung.",
  },
];

export const umkmDetails = [
  {
    slug: "family-chicken",
    title: "Family Chicken Senggreng",
    description:
      "Restoran ayam crispy dan geprek favorit warga dengan beragam pilihan sambal.",
  },
  {
    slug: "warung-biru",
    title: "Warung Biru Mujair",
    description:
      "Warung legendaris dengan menu utama mujair pedas dan goreng khas Senggreng.",
  },
  {
    slug: "kerajinan-anyaman",
    title: "Kerajinan Anyaman",
    description:
      "Anyaman plastik sintetis dan pandan dari pengrajin Desa Senggreng untuk souvenir dan kebutuhan harian.",
  },
  {
    slug: "kotak-makanan",
    title: "Kerajinan Kotak Makanan",
    description:
      "Wadah kotak makanan tradisional ramah lingkungan dengan bahan berkualitas.",
  },
];

export const absoluteUrl = (path: string) =>
  new URL(path, siteUrl).toString();
