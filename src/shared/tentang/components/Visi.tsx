"use client";

import SectionHeader from '@/shared/components/section/section'
import React from 'react'
import { motion } from 'framer-motion'

const Visi = () => {
  return (
    <div className="h-96 lg:h-screen flex items-center justify-center">
      <SectionHeader title="Visi">
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
            className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#0063B5] to-[#5DCC6C] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.4 
            }}
            viewport={{ once: true }}
          >
            Terwujudnya Masyarakat Desa <br className='hidden lg:flex'/> Senggreng Sejahtera dan <br className='hidden lg:flex'/>{" "}
            Mandiri
          </motion.p>
        </motion.div>
      </SectionHeader>
    </div>
  )
}

export default Visi