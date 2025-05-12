
import { VideoCard } from "@/components/ui/video-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Category } from "@/data/videos";

interface VideoSectionProps {
  category: Category;
}

export function VideoSection({ category }: VideoSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{category.name}</h2>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollLeft}
            className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollRight}
            className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-none pb-4 -mx-4 px-4"
      >
        {category.videos.map((video) => (
          <div key={video.id} className="flex-shrink-0">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </section>
  );
}
