
import { VideoCard } from "@/components/ui/video-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Category } from "@/data/videos";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoSectionProps {
  category: Category;
}

export function VideoSection({ category }: VideoSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };
  
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-white">{category.name}</h2>
        
        {!isMobile && (
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white h-8 w-8"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="bg-xenon-800/50 border-xenon-700 hover:bg-xenon-700 text-white h-8 w-8"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        )}
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-3 overflow-x-auto scrollbar-none pb-3 -mx-4 px-4"
      >
        {category.videos.map((video) => (
          <div key={video.id} className="flex-shrink-0 w-auto">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </section>
  );
}
