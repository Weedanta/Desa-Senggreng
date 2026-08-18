import React from "react";
import SectionHeader from "@/shared/components/section/section";

const ProfileDesa = () => {
  // Embed URL profil video resmi desa
  const embedUrl = `https://www.youtube.com/embed/hcSTEswNit8`;

  return (
    <section className="mycontainer py-24 lg:min-h-screen flex justify-center items-center">
      <SectionHeader title="Profil Desa">
        <div className="w-full aspect-video rounded-2xl overflow-hidden relative group shadow-2xl">
          {/* YouTube Embed */}
          <iframe
            src={embedUrl}
            title="Profil Desa Video"
            className="w-full h-full border-gradient"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Optional overlay for styling */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </SectionHeader>
    </section>
  );
};

export default ProfileDesa;
