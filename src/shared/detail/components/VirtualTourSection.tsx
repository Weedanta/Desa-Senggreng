"use client";

import SectionHeader from "@/shared/components/section/section";
import React from "react";
import { motion } from "framer-motion";

const VirtualTourSection = () => {
  return (
    <section className=" flex items-center justify-center">
      <SectionHeader title="Virtual Tour">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0!2d112.6!3d-7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJTIDExMsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </SectionHeader>
    </section>
  );
};

export default VirtualTourSection;
