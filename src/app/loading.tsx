import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/layout/logo.png";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        {/* Animated pulsing village logo */}
        <div className="relative w-24 h-28 flex items-center justify-center animate-bounce duration-1000">
          <Image
            src={Logo}
            alt="Memuat Portal Desa Senggreng"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>

        {/* Gradient spinner bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="w-full h-full gradient-1 animate-shimmer absolute inset-0 rounded-full" />
          </div>
          <p className="text-sm font-semibold text-primary-800 animate-pulse">
            Memuat Desa Senggreng...
          </p>
        </div>
      </div>
    </div>
  );
}
