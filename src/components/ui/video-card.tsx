
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export function VideoCard({ video, featured = false }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  const timeAgo = formatDistanceToNow(new Date(video.createdAt), { addSuffix: true });

  return (
    <Link 
      to={`/watch/${video.id}`}
      className={`group relative rounded-xl overflow-hidden ${featured ? 'w-full aspect-[16/9]' : 'w-80 aspect-[16/9]'} transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
      
      <img 
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="rounded-full bg-neon-purple/80 p-3 animate-pulse-glow">
            <Play className="text-white" size={featured ? 36 : 24} fill="white" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
        <h3 className={`font-bold text-white mb-1 line-clamp-1 ${featured ? 'text-xl' : 'text-base'}`}>
          {video.title}
        </h3>
        
        <div className="flex items-center text-xs text-xenon-200">
          <span className="mr-2">{formatViews(video.views)}</span>
          <span className="mr-2">•</span>
          <span>{timeAgo}</span>
        </div>
        
        {featured && (
          <p className="mt-2 text-sm text-xenon-100 line-clamp-2">{video.description}</p>
        )}
        
        <div className="flex items-center mt-2">
          <img 
            src={video.creator.avatarUrl} 
            alt={video.creator.name}
            className="w-6 h-6 rounded-full mr-2 border border-white/20" 
          />
          <span className="text-xs text-xenon-200">{video.creator.name}</span>
        </div>
      </div>
    </Link>
  );
}
