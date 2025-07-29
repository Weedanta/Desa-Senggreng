'use client';

import React from 'react';
import WisataCard from './WisataCard';
import { WisataListProps } from '../types';

const WisataList: React.FC<WisataListProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Tidak ada data wisata
          </h3>
          <p className="text-gray-500 text-sm">
            Belum ada destinasi wisata yang tersedia saat ini.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 lg:space-y-12" role="region" aria-label="Daftar destinasi wisata">
      {items.map((item, index) => (
        <WisataCard 
          key={item.id} 
          item={item} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default WisataList;