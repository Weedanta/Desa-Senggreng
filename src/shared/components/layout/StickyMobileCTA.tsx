"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Compass, ShoppingBag, ChevronUp, X } from "lucide-react";

export const StickyMobileCTA: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show always, but close expanded drawer on scroll
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsExpanded(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const whatsappUrl =
    "https://wa.me/6285880530435?text=Halo%20Admin%20Pelayanan%20Desa%20Senggreng,%20saya%20ingin%20menanyakan%20informasi%20seputar%20Desa%20Senggreng.";
  const mapsUrl = "https://maps.google.com/?q=Kantor+Desa+Senggreng+Sumberpucung+Malang";

  return (
    <aside aria-label="Bilah Aksi Cepat Mobile" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-md mx-auto px-3 pb-3 pointer-events-auto">
        {/* Expandable Quick Links Drawer */}
        {isExpanded && (
          <div className="mb-2 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/80 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Akses Cepat Desa Senggreng
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                aria-label="Tutup menu cepat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <Link
                href="/wisata"
                onClick={() => setIsExpanded(false)}
                className="p-2.5 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-primary-700 flex flex-col items-center gap-1.5 transition-colors"
              >
                <Compass className="w-5 h-5 text-primary-600" />
                <span className="text-xs font-semibold">Wisata</span>
              </Link>

              <Link
                href="/umkm"
                onClick={() => setIsExpanded(false)}
                className="p-2.5 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 text-emerald-800 flex flex-col items-center gap-1.5 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-semibold">UMKM</span>
              </Link>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-amber-50/80 hover:bg-amber-100 text-amber-800 flex flex-col items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-semibold">Peta Desa</span>
              </a>
            </div>
          </div>
        )}

        {/* Main Floating Sticky Bar */}
        <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/80">
          {/* Quick Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2.5 rounded-xl flex items-center justify-center transition-colors ${
              isExpanded
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-50 hover:bg-gray-100 text-gray-700"
            }`}
            aria-label="Buka menu navigasi cepat"
            aria-expanded={isExpanded}
          >
            <ChevronUp
              className={`w-5 h-5 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Quick Maps Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 border border-gray-200/60 transition-colors"
          >
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
            <span className="truncate">Petunjuk Arah</span>
          </a>

          {/* Primary WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] py-2.5 px-3.5 rounded-xl gradient-1 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <div className="relative flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="truncate">Hubungi Desa</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default StickyMobileCTA;
