"use client";
import SectionHeader from "@/shared/components/section/section";
import { motion } from "framer-motion";

const LokasiSection = () => {
  return (
    <div className="flex items-center justify-center">
      <SectionHeader title="Lokasi">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {/* Left Side - Map */}

            <div className="relative w-full h-64 md:h-80 lg:h-96 border-gradient overflow-hidden shadow-lg">
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

            {/* Right Side - Information */}
            <div className="flex flex-col gap-4">
              {/* Price Range Card */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-md border-gradient"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gradient-1 text-left">
                  Range Harga: Rp11.000—25.000
                </h3>
              </motion.div>

              {/* Facilities Card */}
              <motion.div
                className="h-full bg-white rounded-3xl p-6 shadow-md border-4 border-gradient"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.6,
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gradient-1 text-left mb-6">
                  Fasilitas :
                </h3>

                <div className="space-y-4">
                  {/* Digital Payment */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                    <span className="text-teal-600 font-medium text-sm md:text-base">
                      Pembayaran Digital
                    </span>
                  </div>

                  {/* Free Parking */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                    <span className="text-teal-600 font-medium text-sm md:text-base">
                      Parkir Gratis
                    </span>
                  </div>

                  {/* Toilet */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                    <span className="text-teal-600 font-medium text-sm md:text-base">
                      Toilet
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionHeader>
    </div>
  );
};

export default LokasiSection;
