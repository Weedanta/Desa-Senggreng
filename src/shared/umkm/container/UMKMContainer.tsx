"use client";

import React from "react";
import HeroSection from "@/shared/detail/components/HeroSection";
import UMKMCard from "../components/UMKMCard";
import { useUMKMData } from "../hooks/useUMKMData";
import UMKMHero from "@/assets/images/UMKM/UMKMHero.png"

const UMKMContainer: React.FC = () => {
  const { umkmData, loading } = useUMKMData();

  if (loading) {
    return (
      <section className="w-full min-h-screen">
        <HeroSection imageSrc={UMKMHero}/>
        <div className="w-full py-12 mycontainer">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Memuat data UMKM...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen">
      <HeroSection imageSrc={UMKMHero}/>

      <div className="w-full py-12 mycontainer">
        <div className="space-y-8 lg:space-y-12">
          {umkmData.map((item, index) => (
            <UMKMCard 
              key={item.id} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UMKMContainer;