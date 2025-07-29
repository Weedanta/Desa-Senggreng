"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import DekorLeft from "@/assets/images/section/dekor_left.svg";
import DekorRight from "@/assets/images/section/dekor_right.svg";

interface SectionHeaderProps {
  title: string;
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, children }) => {
  return (
    <motion.div 
      className="text-center flex flex-col gap-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
    >
      {/* Decorative elements with title */}
      <motion.div 
        className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 md:mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2 
        }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.3 
          }}
          viewport={{ once: true }}
        >
          <Image 
            src={DekorLeft} 
            alt="" 
            className="h-12 md:h-20" 
            draggable={false} 
          />
        </motion.div>

        <motion.h2 
          className="text-3xl py-2 md:text-5xl flex items-center font-bold bg-gradient-to-r from-[#007EE8] to-[#66E077] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.4 
          }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.3 
          }}
          viewport={{ once: true }}
        >
          <Image 
            src={DekorRight} 
            alt="" 
            className="h-12 md:h-20" 
            draggable={false} 
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.5 
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionHeader;