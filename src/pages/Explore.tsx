
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SearchFilters } from "@/components/explore/SearchFilters";
import { VideoCard } from "@/components/ui/video-card";
import { mockVideos, Video } from "@/data/videos";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredVideos = mockVideos.filter((video) => {
    // Filter by tag if active
    if (activeFilter && !video.tags.includes(activeFilter)) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.creator.name.toLowerCase().includes(query) ||
        video.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-xenon-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold">Explore Videos</h1>
          
          <div className="relative w-full md:w-64">
            <Input
              type="search"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-8 bg-xenon-700/50 border-xenon-600"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-xenon-400" size={18} />
          </div>
        </div>
        
        <SearchFilters
          onFilterChange={setActiveFilter}
          activeFilter={activeFilter}
        />
        
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-xl text-xenon-400 mb-2">No videos found</p>
            <p className="text-sm text-xenon-500">Try changing your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
