
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { VideoPlayer } from "@/components/watch/VideoPlayer";
import { VideoInfo } from "@/components/watch/VideoInfo";
import { VideoCard } from "@/components/ui/video-card";
import { mockVideos } from "@/data/videos";
import { useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find the video by ID or use the first video if not found
  const initialVideoIndex = mockVideos.findIndex(v => v.id === id);
  const startIndex = initialVideoIndex >= 0 ? initialVideoIndex : 0;
  
  // For a TikTok-style feed, we'll use a vertical scroll approach
  const handleScroll = (direction: 'up' | 'down') => {
    let newIndex;
    if (direction === 'up') {
      newIndex = Math.max(0, currentVideoIndex - 1);
    } else {
      newIndex = Math.min(mockVideos.length - 1, currentVideoIndex + 1);
    }
    
    setCurrentVideoIndex(newIndex);
    
    // Scroll to the video
    if (containerRef.current) {
      const videoElement = containerRef.current.children[newIndex];
      videoElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTop = () => {
    setCurrentVideoIndex(0);
    if (containerRef.current) {
      const videoElement = containerRef.current.children[0];
      videoElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-xenon-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-xl overflow-hidden"
          >
            <VideoPlayer video={mockVideos[currentVideoIndex]} />
          </div>
          
          <div className="mt-6">
            <VideoInfo video={mockVideos[currentVideoIndex]} />
          </div>
          
          <div className="fixed bottom-6 right-6 z-10">
            <Button
              onClick={scrollToTop}
              className="rounded-full bg-neon-purple hover:bg-neon-purple/80 shadow-lg"
              size="icon"
            >
              <ChevronUp size={20} />
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Up Next</h2>
          
          <div className="space-y-4">
            {mockVideos.map((video, index) => (
              <div
                key={video.id}
                className={`cursor-pointer ${index === currentVideoIndex ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  if (containerRef.current) {
                    const videoElement = containerRef.current.children[0];
                    videoElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="flex gap-3">
                  <div className="w-40 aspect-video rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2 text-sm">{video.title}</h3>
                    <p className="text-xenon-400 text-xs mt-1">{video.creator.name}</p>
                    <p className="text-xenon-500 text-xs">{video.views.toLocaleString()} views</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
