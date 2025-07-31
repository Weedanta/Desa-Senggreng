"use client";

import React from "react";
import HeroSection from "@/shared/detail/components/HeroSection";
import WisataList from "../components/WisataList";
import WisataHero from '@/assets/images/Wisata/WisataHero.png'

import { useWisataData } from "../hooks/useWisataData";

const WisataContainer: React.FC = () => {
  const { wisataData } = useWisataData();

  return (
    <section className="w-full min-h-screen bg-custom">
      <HeroSection imageSrc={WisataHero}/>

      <div className="w-full py-12 mycontainer">
        <div className="">
          <WisataList items={wisataData} />
        </div>
      </div>
    </section>
  );
};

export default WisataContainer;
