"use client";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/tentang/hero-tentang.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-full"
      >
        <Image
          src={HeroImage || "/placeholder.svg"}
          alt="Hero Tentang"
          className="w-full h-90 object-cover"
          draggable={false}
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
