"use client";

import React from "react";
import HeroSection from "@/shared/detail/components/HeroSection";
import WisataList from "../components/WisataList";

import { useWisataData } from "../hooks/useWisataData";

const WisataContainer: React.FC = () => {
  const { wisataData, loading } = useWisataData();

  return (
    <section className="w-full min-h-screen">
      <HeroSection />

      <div className="w-full py-12 mycontainer">
        <div className="">
          <WisataList items={wisataData} />
        </div>
      </div>
    </section>
  );
};

export default WisataContainer;
