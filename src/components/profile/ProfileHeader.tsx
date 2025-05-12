
import { Button } from "@/components/ui/button";
import { mockUser } from "@/data/videos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProfileHeader() {
  const { name, username, avatarUrl, bio, followers, following } = mockUser;
  
  return (
    <div className="glass-card rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-24 h-24 rounded-full border-2 border-neon-purple/50"
          />
          <div className="absolute -bottom-1 -right-1 bg-neon-purple text-white text-xs font-bold px-2 py-0.5 rounded-full">
            PRO
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
          <p className="text-xenon-300 text-sm mb-2">@{username}</p>
          <p className="text-white/80 text-sm mb-4">{bio}</p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            <div className="text-center">
              <p className="text-white font-bold">{mockUser.videos.length}</p>
              <p className="text-xs text-xenon-300">Videos</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{followers.toLocaleString()}</p>
              <p className="text-xs text-xenon-300">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{following.toLocaleString()}</p>
              <p className="text-xs text-xenon-300">Following</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button 
            variant="default" 
            className="bg-neon-purple hover:bg-neon-purple/80"
          >
            Edit Profile
          </Button>
          <Button 
            variant="outline" 
            className="border-xenon-600 text-white hover:bg-xenon-700"
          >
            Share Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProfileTabs() {
  return (
    <Tabs defaultValue="videos" className="w-full">
      <TabsList className="w-full mb-6 bg-xenon-800">
        <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
        <TabsTrigger value="liked" className="flex-1">Liked</TabsTrigger>
        <TabsTrigger value="playlists" className="flex-1">Playlists</TabsTrigger>
      </TabsList>
      
      <TabsContent value="videos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockUser.videos.map((video) => (
            <div key={video.id} className="aspect-video rounded-lg overflow-hidden relative group">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <h3 className="text-white text-sm font-medium line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="liked">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockUser.likedVideos.map((video) => (
            <div key={video.id} className="aspect-video rounded-lg overflow-hidden relative group">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <h3 className="text-white text-sm font-medium line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="playlists">
        <div className="flex items-center justify-center h-40">
          <p className="text-xenon-300">No playlists yet</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
