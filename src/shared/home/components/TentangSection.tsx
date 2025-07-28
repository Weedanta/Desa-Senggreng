"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TentangImage from "@/assets/images/home/tentang.png";
import Image from "next/image";

function TentangSection() {
  return (
    <section className="relative overflow-auto min-h-[80vh] flex justify-center items-center">
      <div className="mycontainer flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-32 items-center">
        <motion.div
          className="relative w-full lg:w-4/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full min-h-0 max-h-[73vh] flex items-center justify-center shadow-lg rounded-4xl">
            <Image
              src={TentangImage}
              alt="Kantor Pelayanan Desa Senggreng"
              width={0}
              height={0}
              className="w-full h-auto object-contain"
              draggable={false}
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 lg:space-y-8 w-full "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="w-fit text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-[#1491D1] to-[#65DF79] bg-clip-text text-transparent md:pb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tentang
          </motion.h2>

          <motion.p
            className="text-white-900 text-lg md:text-xl lg:text-2xl leading-relaxed text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Desa Senggreng merupakan desa yang terletak di Kecamatan
            Sumberpucung, Kapubapen Malang. Pada tahun 2022, jumlah penduduk
            Desa Senggreng sebanyak 10.583 jiwa dengan jumlah kartu keluarga
            sebanyak 3.099. Penduduk ini dikelompokkan menjadi 34 RT dan 10 RW.
            Potensi desa terletaik pada sektor pertanian, peternakan dan
            pariwisata. Mayoritas pekerjaan warga Desa Senggreng adalah petani,
            peternak ikan dan pedagang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/tentang"
              className="inline-flex items-center gap-2 text-primary-800 hover:text-primary-900 font-medium text-lg group transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Baca Lebih Lanjut
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TentangSection;
