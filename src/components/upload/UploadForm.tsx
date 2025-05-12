
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload, X } from "lucide-react";
import { popularTags } from "@/data/videos";
import { useToast } from "@/components/ui/use-toast";

export function UploadForm() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      // Limit to 5 tags
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        toast({
          title: "Tag limit reached",
          description: "You can select up to 5 tags",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        const url = URL.createObjectURL(file);
        setVideoPreview(url);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select a video file",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setThumbnailPreview(url);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = () => {
    setDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      if (files[0].type.startsWith('video/')) {
        const url = URL.createObjectURL(files[0]);
        setVideoPreview(url);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please drop a video file",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoPreview) {
      toast({
        title: "Missing video",
        description: "Please upload a video before submitting",
        variant: "destructive"
      });
      return;
    }
    
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please enter a title for your video",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate upload success
    toast({
      title: "Upload Successful!",
      description: "Your video has been uploaded and is now processing.",
    });
  };
  
  const removeVideo = () => {
    setVideoPreview(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };
  
  const removeThumbnail = () => {
    setThumbnailPreview(null);
    if (thumbnailInputRef.current) {
      thumbnailInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div 
        className={`glass-card rounded-xl p-6 text-center ${
          dragging ? 'border-neon-purple border-2' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!videoPreview ? (
          <>
            <div className="flex flex-col items-center justify-center py-10">
              <Upload size={48} className="text-xenon-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop your video</h3>
              <p className="text-sm text-xenon-400 mb-4">or click to browse files</p>
              <Button 
                type="button" 
                onClick={() => videoInputRef.current?.click()}
                className="bg-neon-purple hover:bg-neon-purple/80"
              >
                Select Video
              </Button>
              <input 
                ref={videoInputRef}
                type="file" 
                accept="video/*" 
                onChange={handleVideoChange} 
                className="hidden"
              />
              <p className="mt-4 text-xs text-xenon-500">
                Supported formats: MP4, WebM, MOV (max 100MB)
              </p>
            </div>
          </>
        ) : (
          <div className="relative">
            <video 
              src={videoPreview} 
              className="w-full h-64 object-contain rounded-lg" 
              controls
            />
            <Button 
              type="button"
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-xenon-900/80 text-white border-none hover:bg-xenon-900"
              onClick={removeVideo}
            >
              <X size={18} />
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter video title"
              className="bg-xenon-800/50 border-xenon-700"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your video..."
              className="bg-xenon-800/50 border-xenon-700"
              rows={4}
            />
          </div>
          
          <div>
            <Label className="block mb-2">Tags</Label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTags.includes(tag) 
                      ? 'bg-neon-purple text-white'
                      : 'bg-xenon-700/50 text-xenon-300 hover:bg-xenon-700'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="public" 
              checked={isPublic}
              onCheckedChange={setIsPublic}
            />
            <Label htmlFor="public">Make video public</Label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label className="block mb-2">Thumbnail</Label>
            {!thumbnailPreview ? (
              <div 
                className="glass-card rounded-lg p-4 flex flex-col items-center justify-center h-40 cursor-pointer"
                onClick={() => thumbnailInputRef.current?.click()}
              >
                <p className="text-sm text-xenon-400 mb-2">Upload a custom thumbnail</p>
                <Button 
                  type="button"
                  variant="outline"
                  size="sm"
                  className="bg-xenon-800 border-xenon-700"
                >
                  Select Image
                </Button>
                <input 
                  ref={thumbnailInputRef}
                  type="file" 
                  accept="image/*" 
                  onChange={handleThumbnailChange} 
                  className="hidden"
                />
              </div>
            ) : (
              <div className="relative">
                <img 
                  src={thumbnailPreview} 
                  alt="Thumbnail preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <Button 
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-xenon-900/80 text-white border-none hover:bg-xenon-900"
                  onClick={removeThumbnail}
                >
                  <X size={18} />
                </Button>
              </div>
            )}
            <p className="mt-2 text-xs text-xenon-500">
              Recommended: 1280x720 (16:9)
            </p>
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-neon-purple hover:bg-neon-purple/80"
            >
              Upload Video
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
