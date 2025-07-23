import Image from "next/image";
import React from "react";
import DekorLeft from "@/assets/images/section/dekor_left.svg";
import DekorRight from "@/assets/images/section/dekor_right.svg";

interface SectionHeaderProps {
  title: string;
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, children }) => {
  return (
    <div className="text-center flex flex-col gap-4">
      {/* Decorative elements with title */}
      <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 mb-6">
        <Image src={DekorLeft} alt="" className="h-12 md:h-20" draggable="false" />
        <h2 className="text-3xl md:text-5xl h-12 md:h-20 flex items-center font-bold bg-gradient-to-r from-[#007EE8] to-[#66E077] bg-clip-text text-transparent">
          {title}
        </h2>
        <Image src={DekorRight} alt="" className="h-12 md:h-20" draggable="false" />
      </div>

      {children}
    </div>
  );
};

export default SectionHeader;
