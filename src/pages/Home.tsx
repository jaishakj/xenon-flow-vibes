
import { Navbar } from "@/components/layout/Navbar";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { VideoSection } from "@/components/home/VideoSection";
import { categories } from "@/data/videos";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        {!isMobile && <FeaturedSection />}
        
        <div className="grid gap-6">
          {categories.map((category) => (
            <VideoSection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
