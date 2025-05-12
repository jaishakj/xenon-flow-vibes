
import { VideoCard } from "@/components/ui/video-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Video } from "@/data/videos";
import { useState } from "react";

interface FeaturedSectionProps {
  videos: Video[];
}

export function FeaturedSection({ videos }: FeaturedSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredVideo = videos[currentIndex];
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };
  
  return (
    <section className="relative w-full mt-16 mb-8">
      <div className="absolute top-0 right-0 flex space-x-2 z-20">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev}
          className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
      
      <div className="overflow-hidden rounded-xl">
        <VideoCard video={featuredVideo} featured={true} />
      </div>

      <div className="mt-4 flex justify-center">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-colors ${
              index === currentIndex ? 'bg-neon-purple' : 'bg-xenon-600'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
