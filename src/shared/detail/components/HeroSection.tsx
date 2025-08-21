"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import DefaultHeroImage from "@/assets/images/tentang/hero-tentang.png";

interface HeroSectionProps {
  imageSrc?: string | StaticImageData;
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageSrc, 
  title = "Detail"
}) => {
  const heroImage = imageSrc || DefaultHeroImage;

  return (
    <section className="w-full flex items-center justify-center ">
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
          src={heroImage}
          alt={`Hero ${title}`}
          className="w-full h-[60vh] object-cover"
          draggable={false}
          priority
          width={1920}
          height={1080}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;