import SectionDetailHeader from "@/shared/components/section/SectionDetail";
import DeskripsiSection from "../components/DeskripsiSection";
import LokasiSection from "../components/LokasiSection";
import VirtualTourSection from "../components/VirtualTourSection";
import HeroSection from "../components/HeroSection";
import { DetailContent } from "../types";

interface DetailContainerProps {
  content?: DetailContent;
  className?: string;
}

const DetailContainer: React.FC<DetailContainerProps> = ({ 
  content,
  className = "" 
}) => {
  // Default content jika tidak ada data
  const defaultContent: DetailContent = {
    id: "default",
    title: "Sumber Duren",
    category: "wisata",
    description: "Sumber Duren merupakan salah satu tempat wisata yang berfokus pada konservasi alam dan berlatar belakang pemberdayaan masyarakat di bidang ekonomi, terutama pada sektor perikanan air tawar. Produk unggulan air tawar yang dihasilkan berupa ikan mujair, ikan tombro, dan bandeng tawar yang bisa dinikmati sambil bersantai. Tempat wisata ini dilengkapi dengan fasilitas camping ground, spot pemancingan, panggung utama, dan pujasera.",
    heroImage: require("@/assets/images/coming-soon.jpg").default,
    location: {
      title: "Sumber Duren",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0!2d112.6!3d-7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJTIDExMsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
    },
    facilities: [
      { id: "camping", name: "Camping ground", icon: "tent" },
      { id: "fishing", name: "Spot foto", icon: "camera" },
      { id: "parking", name: "Parkir Gratis", icon: "car" },
      { id: "toilet", name: "Toilet", icon: "toilet" }
    ],
    priceRange: {
      range: "Rp11.000—25.000",
      currency: "IDR"
    }
  };

  const finalContent = content || defaultContent;

  return (
    <section className={`w-full bg-custom ${className}`}>
      <HeroSection 
        imageSrc={finalContent.heroImage} 
        title={finalContent.title}
      />
      
      <div className="w-full py-12 mycontainer">
        <SectionDetailHeader title={finalContent.title}>
          <div className="space-y-20">
            <DeskripsiSection description={finalContent.description} />
            
            {/* Virtual Tour Section */}
            {finalContent.virtualTour && (
              <VirtualTourSection 
                title="Virtual Tour" 
                media={finalContent.virtualTour} 
              />
            )}
            
            {/* Video Review Section */}
            {finalContent.videoReview && (
              <VirtualTourSection 
                title="Video Review" 
                media={finalContent.videoReview} 
              />
            )}
            
            <LokasiSection 
              location={finalContent.location}
              facilities={finalContent.facilities} 
              contact={finalContent.contact}
              category={finalContent.category}
            />
          </div>
        </SectionDetailHeader>
      </div>
    </section>
  );
};

export default DetailContainer;