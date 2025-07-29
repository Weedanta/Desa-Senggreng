'use client';

import React from "react";
import HeroSection from "@/shared/detail/components/HeroSection";
import WisataList from "../components/WisataList";
import WisataLoading from "../components/WisataLoading";
import { useWisataData } from "../hooks/useWisataData";

const WisataContainer: React.FC = () => {
  const { wisataData, loading } = useWisataData();

  return (
    <section className="w-full min-h-screen">
      <HeroSection />
      
      <div className="w-full py-12 mycontainer">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Destinasi Wisata
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi keindahan alam dan budaya di berbagai destinasi wisata menarik 
              yang siap memberikan pengalaman tak terlupakan untuk Anda.
            </p>
          </div>

          {/* Content */}
          {loading ? (
            <WisataLoading />
          ) : (
            <WisataList items={wisataData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default WisataContainer;