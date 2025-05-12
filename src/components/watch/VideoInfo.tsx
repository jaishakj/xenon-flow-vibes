
import { Video } from "@/data/videos";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share, User } from "lucide-react";

interface VideoInfoProps {
  video: Video;
}

export function VideoInfo({ video }: VideoInfoProps) {
  return (
    <div className="p-4 bg-xenon-800/50 glass-card rounded-xl">
      <h1 className="text-xl font-bold text-white mb-2">{video.title}</h1>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img 
            src={video.creator.avatarUrl} 
            alt={video.creator.name}
            className="w-10 h-10 rounded-full mr-3 border border-white/20" 
          />
          <div>
            <h3 className="text-white font-medium">{video.creator.name}</h3>
            <p className="text-xs text-xenon-300">{video.creator.followers.toLocaleString()} followers</p>
          </div>
        </div>
        
        <Button 
          variant="outline"
          className="bg-neon-purple text-white border-none hover:bg-neon-purple/80"
        >
          Follow
        </Button>
      </div>
      
      <p className="text-xenon-200 text-sm mb-4">{video.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {video.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-xenon-700/50 text-xenon-200"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center border-t border-xenon-700/50 pt-4">
        <div className="flex space-x-6">
          <Button variant="ghost" className="text-xenon-200 hover:text-white space-x-2">
            <Heart size={18} />
            <span>{video.likes.toLocaleString()}</span>
          </Button>
          
          <Button variant="ghost" className="text-xenon-200 hover:text-white space-x-2">
            <MessageSquare size={18} />
            <span>{video.comments.toLocaleString()}</span>
          </Button>
          
          <Button variant="ghost" className="text-xenon-200 hover:text-white space-x-2">
            <Share size={18} />
            <span>Share</span>
          </Button>
        </div>
        
        <div>
          <span className="text-xenon-300 text-sm">{video.views.toLocaleString()} views</span>
        </div>
      </div>
    </div>
  );
}
