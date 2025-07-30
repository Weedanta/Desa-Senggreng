"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WisataCardProps } from "../types";

const WisataCard: React.FC<WisataCardProps> = ({ item, index }) => {
  const isOdd = index % 2 === 0;

  // Create slug from item name for detail link
  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const detailSlug = createSlug(item.name);

  return (
    <div
      className={`
      relative w-full mx-auto mb-12 
      bg-gradient-to-br from-cyan-50 to-blue-50 
      rounded-3xl overflow-hidden shadow-lg
      p-3 md:p-6 lg:p-14 border border-primary-500
      ${isOdd ? "lg:ml-0" : "lg:mr-0"}
    `}
    >
      {/* Unified Responsive Layout */}
      <div
        className={`
        flex flex-col md:flex-col lg:flex
        items-center min-h-[350px] md:min-h-[400px] lg:h-[60vh]
        ${isOdd ? "lg:flex-row" : "lg:flex-row-reverse"}
      `}
      >
        {/* Image Section */}
        <div
          className="
          w-full h-76 md:h-96 lg:w-1/2 lg:h-full 
          relative mb-4 md:mb-6 lg:mb-0
          lg:border-gradient
        "
        >
          <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              draggable={false}
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`
          w-full lg:w-1/2 lg:h-full 
          flex items-center justify-center
          p-1 md:p-2 lg:p-8
          ${isOdd ? "lg:pl-12" : "lg:pr-12"}
        `}
        >
          <div className="relative text-center lg:text-left w-full">
            <h2
              className={`
              text-2xl md:text-3xl lg:text-5xl 
              font-semibold text-gradient-1 
              pb-2 md:pb-3 lg:pb-4
              ${isOdd ? "lg:text-left" : "lg:text-right"}
            `}
            >
              {item.name}
            </h2>

            <p
              className={`
              text-white-900 
              text-sm md:text-base lg:text-lg 
              leading-relaxed mb-3 md:mb-4 lg:mb-4 text-justify
              line-clamp-4 md:line-clamp-none
            `}
            >
              {item.description}
            </p>

            <div
              className={`
              flex items-center justify-center
              ${isOdd ? "lg:justify-start" : "lg:justify-end"}
            `}
            >
              <Link
                href={`/wisata/${detailSlug}`}
                className="
                  inline-flex items-center 
                  px-4 py-2 md:px-6 md:py-2 lg:px-4 lg:py-2
                 gradient-1
                  text-white 
                  text-xs md:text-sm lg:text-sm 
                  font-semibold
                  rounded-xl
                  transition-all duration-300 
                  hover:shadow-lg hover:scale-105 active:scale-95 lg:active:scale-105
                  focus:outline-none
                "
              >
                Lihat Selengkapnya
                <svg
                  className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WisataCard;