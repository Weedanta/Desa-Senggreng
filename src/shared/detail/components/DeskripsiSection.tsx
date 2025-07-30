"use client";

import SectionHeader from '@/shared/components/section/section'
import React from 'react'
import { motion } from 'framer-motion'

interface DeskripsiSectionProps {
  description?: string;
}

const DeskripsiSection: React.FC<DeskripsiSectionProps> = ({ 
  description = "Sumber Duren merupakan salah satu tempat wisata yang berfokus pada konservasi alam dan berlatar belakang pemberdayaan masyarakat di bidang ekonomi, terutama pada sektor perikanan air tawar. Produk unggulan air tawar yang dihasilkan berupa ikan mujair, ikan tombro, dan bandeng tawar yang bisa dinikmati sambil bersantai. Tempat wisata ini dilengkapi dengan fasilitas camping ground, spot pemancingan, panggung utama, dan pujasera."
}) => {
  return (
    <div className=" flex items-center justify-center">
      <SectionHeader title="Deskripsi">
        <motion.div 
          className="font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2 
          }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-justify font-medium text-primary-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.4 
            }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>
      </SectionHeader>
    </div>
  )
}

export default DeskripsiSection