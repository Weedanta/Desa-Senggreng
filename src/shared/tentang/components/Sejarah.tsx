import SectionHeader from "@/shared/components/section/section";
import Image from "next/image";
import React from "react";
import Line from "@/assets/images/tentang/line.svg";

const Sejarah = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SectionHeader title="Sejarah">
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-col gap-6 text-justify text-primary-800 pb-12 lg:pb-4 w-full">
          <p>
            Jauh sebelum desa ini ramai, awalnya Senggreng adalah hutan lebat
            yang belum terjamah manusia. Dalam istilah Jawa, kawasan ini disebut
            sebagai “alas gung lewang-lewang, jalmo moro jelmo mati” artinya
            tempat yang begitu sunyi dan liar. Sekitar tahun 1830, setelah
            berakhirnya Perang Diponegoro, banyak pasukan Mataram yang berpencar
            ke berbagai daerah, termasuk wilayah timur Pulau Jawa. Sebagian dari
            mereka menemukan tempat baru di wilayah Malang, membuka hutan untuk
            dijadikan ladang dan tempat tinggal. Dari sinilah cikal bakal
            berbagai kampung Mentaraman bermula, termasuk yang kini menjadi
            bagian dari Desa Senggreng.
          </p>
          <p>
            Pembukaan wilayah ini dipelopori oleh empat tokoh penting, yaitu
            Regunung, Trunowongso, Malangjoyo, dan Kromodikoro. Mereka membagi
            daerah menjadi dua bagian, timur dan barat dengan tugu batu sebagai
            penanda wilayah yang masih bisa ditemukan hingga kini, di batas Desa
            Senggreng dan Ngebruk. Tempat istirahat mereka perlahan berkembang
            menjadi pusat pertemuan warga, dan kini menjadi pusat aktivitas jual
            beli, yaitu Pasar Ngebruk.
          </p>
          <p>
            Saat membuka hutan, konon ditemukan sebuah gentong besar yang berada
            di atas pohon. Ketika gentong tersebut tertiup angin, terdengar
            suara mendengung yang dalam istilah bahasa Jawa, disebut
            “gembrengan.” Dari peristiwa itu, desa dengan tiga dusun ini kini
            dikenal masyarakat sebagai Desa Senggreng. Tiga dusun, yaitu
            Ngrancah, Karajan, dan Kecopokan tidak lepas dari kepercayaan
            masyarakat tentang Mbah Bajing. Mbah Bajing dan Dyah Ayu Compo,
            istrinya menjadi tokoh yang membuka hutan belantara di dekat aliran
            Sungai Brantas. Kini, makam Mbah Bajing diyakini membawa berkah bagi
            warga yang tinggal di dusun dan bagi siapa saja yang ingin mencari
            keberkahan.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={Line}
            alt="Line"
            className="h-auto object-cover"
            draggable={false}
          />
        </div>
      </SectionHeader>
    </div>
  );
};

export default Sejarah;
