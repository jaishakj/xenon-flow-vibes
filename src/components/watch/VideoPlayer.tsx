
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Heart } from "lucide-react";
import { Video } from "@/data/videos";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  video: Video;
  autoPlay?: boolean;
}

export function VideoPlayer({ video, autoPlay = true }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // For demo, we'll use the thumbnail as a placeholder since we don't have real videos
  const videoUrl = video.thumbnailUrl;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleVolumeChange = (newVolume: number[]) => {
    const vol = newVolume[0];
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setIsMuted(vol === 0);
    }
  };
  
  const handleProgress = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const target = e.target as HTMLVideoElement;
    const percent = (target.currentTime / target.duration) * 100;
    setProgress(percent);
  };
  
  const handleProgressChange = (newProgress: number[]) => {
    const value = newProgress[0];
    if (videoRef.current) {
      const newTime = (value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(value);
    }
  };
  
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play()
        .catch(e => console.log("Auto-play prevented:", e));
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [autoPlay]);
  
  return (
    <div 
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={video.thumbnailUrl}
        loop
        playsInline
        onTimeUpdate={handleProgress}
        onClick={(e) => e.stopPropagation()}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center space-x-4">
          <button onClick={(e) => { e.stopPropagation(); togglePlay(); }}>
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white" />
            )}
          </button>
          
          <div className="flex-1">
            <Slider 
              value={[progress]} 
              max={100} 
              step={0.1}
              onValueChange={handleProgressChange}
              className="cursor-pointer"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <button onClick={(e) => { e.stopPropagation(); toggleMute(); }}>
              {isMuted ? (
                <VolumeX size={20} className="text-white" />
              ) : (
                <Volume2 size={20} className="text-white" />
              )}
            </button>
            
            <div className="w-20">
              <Slider 
                value={[volume * 100]} 
                max={100} 
                onValueChange={(val) => handleVolumeChange([val[0] / 100])}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Actions */}
      <div className="absolute right-4 bottom-20 flex flex-col space-y-6">
        <button 
          className={`flex flex-col items-center ${isLiked ? 'text-neon-purple' : 'text-white'}`}
          onClick={(e) => { e.stopPropagation(); toggleLike(); }}
        >
          <div className={`p-3 rounded-full ${isLiked ? 'bg-neon-purple/20' : 'bg-black/20'}`}>
            <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
          </div>
          <span className="text-xs mt-1">{isLiked ? video.likes + 1 : video.likes}</span>
        </button>
      </div>
    </div>
  );
}
