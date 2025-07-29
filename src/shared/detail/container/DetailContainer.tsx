import SectionDetailHeader from "@/shared/components/section/SectionDetail";
import DeskripsiSection from "../components/DeskripsiSection";
import LokasiSection from "../components/LokasiSection";
import VirtualTourSection from "../components/VirtualTourSection";
import HeroSection from "../components/HeroSection";

const DetailContainer = () => {
  return (
    <section className="w-full">
      <HeroSection />
      <div className="w-full py-12 mycontainer">
        <SectionDetailHeader title="Sumber Duren">
          <div className="space-y-20">
            <DeskripsiSection />
            <VirtualTourSection />
            <LokasiSection />
          </div>
        </SectionDetailHeader>
      </div>
    </section>
  );
};

export default DetailContainer;
