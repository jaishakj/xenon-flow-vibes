
import { Navbar } from "@/components/layout/Navbar";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { VideoSection } from "@/components/home/VideoSection";
import { categories } from "@/data/videos";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <FeaturedSection />
        
        {categories.map((category) => (
          <VideoSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
