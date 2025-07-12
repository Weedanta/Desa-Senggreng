"use client";

import Image from "next/image";
import ComingSoonText from "@/assets/images/comingsoon.svg";
import BackgroundComingSoon from "@/assets/images/bg-home.svg";
import logo from "@/assets/images/logo.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center min-h-screen item-background">
        <Image
          alt="Background"
          src={BackgroundComingSoon}
          className="absolute inset-0 object-cover w-full h-full z-0"
          priority
          draggable={false}
          fill
        />
        <div className="absolute flex flex-col justify-center gap-4 items-center pb-20">
          <motion.div
            className="z-20 w-[16%] mt-4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={logo}
              alt="Logo"
              className="w-full h-auto"
              width={200}
              height={200}
              priority
            />
          </motion.div>

          {/* COMING SOON TEXT BERNAFAS */}
          <motion.div
            className="z-20 w-[75%]"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              alt="Coming Soon"
              src={ComingSoonText}
              className="w-full h-auto"
              width={800} 
              height={200}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}