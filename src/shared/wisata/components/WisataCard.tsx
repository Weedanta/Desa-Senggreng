// src/shared/wisata/components/WisataCard.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WisataCardProps } from '../types';

const WisataCard: React.FC<WisataCardProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const isOdd = !isEven;

  return (
    <div className={`
      relative w-full mx-auto mb-12 
      bg-gradient-to-br from-cyan-50 to-blue-50 
      rounded-3xl overflow-hidden shadow-lg
      ${isOdd ? 'lg:ml-0' : 'lg:mr-0'}
    `}>
      {/* Desktop Layout */}
      <div className={`
        hidden lg:flex items-center min-h-[300px]
        ${isOdd ? 'flex-row' : 'flex-row-reverse'}
      `}>
        {/* Image Section */}
        <div className="w-1/2 h-full relative">
          <div className={`
            absolute inset-4 rounded-2xl overflow-hidden
            ${isOdd ? 'mr-2' : 'ml-2'}
          `}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className={`
          w-1/2 p-8 
          ${isOdd ? 'pl-4' : 'pr-4'}
        `}>
          <div className="relative">
            {/* Decorative Elements */}
            <div className={`
              absolute -top-4 w-8 h-8 
              ${isOdd ? '-left-4' : '-right-4'}
            `}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 opacity-60" aria-hidden="true">
                <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20" fill="currentColor"/>
              </svg>
            </div>

            <h2 className={`
              text-2xl font-bold text-cyan-600 mb-4
              ${isOdd ? 'text-left' : 'text-right'}
            `}>
              {item.name}
            </h2>

            <p className={`
              text-gray-700 text-sm leading-relaxed mb-4
              ${isOdd ? 'text-left' : 'text-right'}
            `}>
              {item.description}
            </p>

            <div className={`
              flex items-center
              ${isOdd ? 'justify-start' : 'justify-end'}
            `}>
              <Link
                href={item.detailLink}
                className="
                  inline-flex items-center px-6 py-2 
                  bg-cyan-500 hover:bg-cyan-600 
                  text-white text-sm font-medium 
                  rounded-full transition-all duration-300
                  hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                "
              >
                Lihat Selengkapnya
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden flex-col min-h-[400px]">
        {/* Image Section */}
        <div className="w-full h-48 relative">
          <div className="absolute inset-4 rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1">
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-8 h-8">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 opacity-60" aria-hidden="true">
                <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-xl font-bold text-cyan-600 mb-3 text-center">
              {item.name}
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
              {item.description}
            </p>

            <div className="flex justify-center">
              <Link
                href={item.detailLink}
                className="
                  inline-flex items-center px-6 py-2 
                  bg-cyan-500 hover:bg-cyan-600 
                  text-white text-sm font-medium 
                  rounded-full transition-all duration-300
                  hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                "
              >
                Lihat Selengkapnya
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col min-h-[350px]">
        {/* Image Section */}
        <div className="w-full h-40 relative">
          <div className="absolute inset-3 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1">
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-2 -left-2 w-6 h-6">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 opacity-60" aria-hidden="true">
                <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-lg font-bold text-cyan-600 mb-2 text-center">
              {item.name}
            </h2>

            <p className="text-gray-700 text-xs leading-relaxed mb-3 text-center line-clamp-4">
              {item.description}
            </p>

            <div className="flex justify-center">
              <Link
                href={item.detailLink}
                className="
                  inline-flex items-center px-4 py-2 
                  bg-cyan-500 hover:bg-cyan-600 
                  text-white text-xs font-medium 
                  rounded-full transition-all duration-300
                  hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                "
              >
                Lihat Selengkapnya
                <svg 
                  className="ml-1 w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave pattern */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-16 opacity-10
        ${isOdd ? '' : 'transform scale-x-[-1]'}
      `}>
        <svg viewBox="0 0 1200 120" className="w-full h-full text-cyan-300" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

export default WisataCard;