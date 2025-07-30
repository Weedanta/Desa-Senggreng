"use client";

import SectionHeader from "@/shared/components/section/section";
import React from "react";
import { motion } from "framer-motion";

interface MediaContent {
  type: 'video' | 'iframe' | 'image';
  url: string;
  title?: string;
}

interface VirtualTourSectionProps {
  title?: string;
  media?: MediaContent;
}

const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ 
  title = "Virtual Tour",
  media = {
    type: "iframe",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0!2d112.6!3d-7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJTIDExMsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
    title: "Virtual Tour"
  }
}) => {
  const renderMedia = () => {
    if (media.type === 'iframe') {
      return (
        <iframe
          src={media.url}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title={media.title || title}
        />
      );
    }
    
    if (media.type === 'video') {
      return (
        <video
          src={media.url}
          controls
          className="w-full h-full rounded-lg"
          title={media.title || title}
        />
      );
    }
    
    return (
      <img
        src={media.url}
        alt={media.title || title}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <section className=" flex items-center justify-center">
      <SectionHeader title={title}>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-video border-gradient overflow-hidden shadow-lg">
            {renderMedia()}
          </div>
        </motion.div>
      </SectionHeader>
    </section>
  );
};

export default VirtualTourSection;