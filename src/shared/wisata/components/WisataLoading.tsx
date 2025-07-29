// src/shared/wisata/components/WisataLoading.tsx

'use client';

import React from 'react';

const WisataLoading: React.FC = () => {
  return (
    <div className="space-y-8 lg:space-y-12">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`
            relative w-full mx-auto 
            bg-gradient-to-br from-gray-100 to-gray-200 
            rounded-3xl overflow-hidden animate-pulse
            ${index % 2 === 1 ? 'lg:ml-0' : 'lg:mr-0'}
          `}
        >
          {/* Desktop Layout */}
          <div className={`
            hidden lg:flex items-center min-h-[300px]
            ${index % 2 === 1 ? 'flex-row' : 'flex-row-reverse'}
          `}>
            {/* Image Skeleton */}
            <div className="w-1/2 h-full relative">
              <div className={`
                absolute inset-4 rounded-2xl bg-gray-300
                ${index % 2 === 1 ? 'mr-2' : 'ml-2'}
              `} />
            </div>

            {/* Content Skeleton */}
            <div className={`
              w-1/2 p-8 
              ${index % 2 === 1 ? 'pl-4' : 'pr-4'}
            `}>
              <div className={`
                space-y-4
                ${index % 2 === 1 ? 'items-start' : 'items-end'}
              `}>
                {/* Title Skeleton */}
                <div className={`
                  h-8 bg-gray-300 rounded-md
                  ${index % 2 === 1 ? 'w-48' : 'w-48 ml-auto'}
                `} />
                
                {/* Description Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-4/6" />
                </div>

                {/* Button Skeleton */}
                <div className={`
                  h-10 w-40 bg-gray-300 rounded-full
                  ${index % 2 === 1 ? '' : 'ml-auto'}
                `} />
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-col min-h-[400px]">
            {/* Image Skeleton */}
            <div className="w-full h-48 relative">
              <div className="absolute inset-4 rounded-2xl bg-gray-300" />
            </div>

            {/* Content Skeleton */}
            <div className="p-6 flex-1 flex flex-col items-center space-y-4">
              <div className="h-6 bg-gray-300 rounded-md w-40" />
              <div className="space-y-2 w-full">
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto" />
                <div className="h-4 bg-gray-300 rounded w-4/6 mx-auto" />
              </div>
              <div className="h-10 w-40 bg-gray-300 rounded-full" />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col min-h-[350px]">
            {/* Image Skeleton */}
            <div className="w-full h-40 relative">
              <div className="absolute inset-3 rounded-xl bg-gray-300" />
            </div>

            {/* Content Skeleton */}
            <div className="p-4 flex-1 flex flex-col items-center space-y-3">
              <div className="h-5 bg-gray-300 rounded-md w-32" />
              <div className="space-y-2 w-full">
                <div className="h-3 bg-gray-300 rounded w-full" />
                <div className="h-3 bg-gray-300 rounded w-4/5 mx-auto" />
                <div className="h-3 bg-gray-300 rounded w-3/5 mx-auto" />
              </div>
              <div className="h-8 w-32 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WisataLoading;