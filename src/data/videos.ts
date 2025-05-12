
export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  comments: number;
  creator: {
    id: string;
    name: string;
    avatarUrl: string;
    followers: number;
  };
  tags: string[];
  duration: number;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
  videos: Video[];
};

export const mockVideos: Video[] = [
  {
    id: "v1",
    title: "Night City Timelapse",
    description: "Breathtaking city views at night with neon lights and urban landscapes.",
    thumbnailUrl: "https://images.unsplash.com/photo-1635942173611-7ad8321bfd34",
    videoUrl: "https://example.com/videos/v1.mp4",
    views: 1243000,
    likes: 87600,
    comments: 3200,
    creator: {
      id: "c1",
      name: "NeonVisions",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      followers: 124000
    },
    tags: ["cityscape", "night", "timelapse", "aesthetic"],
    duration: 58,
    createdAt: "2023-11-15T14:48:00.000Z"
  },
  {
    id: "v2",
    title: "Cyberpunk Dance Moves",
    description: "Futuristic dance choreography in a neon-lit underground club.",
    thumbnailUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16",
    videoUrl: "https://example.com/videos/v2.mp4",
    views: 892000,
    likes: 63400,
    comments: 1850,
    creator: {
      id: "c2",
      name: "CyberDancer",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      followers: 980000
    },
    tags: ["dance", "cyberpunk", "neon", "club"],
    duration: 42,
    createdAt: "2023-11-02T09:23:00.000Z"
  },
  {
    id: "v3",
    title: "Holographic Tech Review",
    description: "Reviewing the latest holographic display technology with detailed demos.",
    thumbnailUrl: "https://images.unsplash.com/photo-1563089145-599997674d42",
    videoUrl: "https://example.com/videos/v3.mp4",
    views: 567000,
    likes: 48200,
    comments: 2340,
    creator: {
      id: "c3",
      name: "TechFuturia",
      avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
      followers: 742000
    },
    tags: ["tech", "review", "holographic", "futuristic"],
    duration: 72,
    createdAt: "2023-10-28T16:51:00.000Z"
  },
  {
    id: "v4",
    title: "Sunset Drone Flight",
    description: "Cinematic drone footage capturing a stunning sunset over the ocean.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518544801976-3e159b50328c",
    videoUrl: "https://example.com/videos/v4.mp4",
    views: 1897000,
    likes: 165000,
    comments: 4320,
    creator: {
      id: "c4",
      name: "SkyVisions",
      avatarUrl: "https://randomuser.me/api/portraits/men/62.jpg",
      followers: 1240000
    },
    tags: ["drone", "sunset", "cinematic", "ocean"],
    duration: 64,
    createdAt: "2023-10-15T11:27:00.000Z"
  },
  {
    id: "v5",
    title: "Gaming PC Build Guide",
    description: "Step-by-step guide to building a high-performance gaming PC with RGB setup.",
    thumbnailUrl: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35",
    videoUrl: "https://example.com/videos/v5.mp4",
    views: 723000,
    likes: 53600,
    comments: 2910,
    creator: {
      id: "c5",
      name: "TechBuilder",
      avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg",
      followers: 896000
    },
    tags: ["tech", "gaming", "PC", "build"],
    duration: 86,
    createdAt: "2023-10-05T08:12:00.000Z"
  },
  {
    id: "v6",
    title: "Digital Art Process",
    description: "Watch the creation of a cyberpunk-themed digital illustration from start to finish.",
    thumbnailUrl: "https://images.unsplash.com/photo-1558174685-56bba2a09841",
    videoUrl: "https://example.com/videos/v6.mp4",
    views: 492000,
    likes: 41700,
    comments: 1820,
    creator: {
      id: "c6",
      name: "DigitalArtist",
      avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      followers: 612000
    },
    tags: ["art", "digital", "process", "cyberpunk"],
    duration: 93,
    createdAt: "2023-09-28T14:39:00.000Z"
  },
  {
    id: "v7",
    title: "Neon Parkour Challenge",
    description: "Extreme parkour stunts performed in a neon-lit urban environment at night.",
    thumbnailUrl: "https://images.unsplash.com/photo-1580501170888-80668882ca0c",
    videoUrl: "https://example.com/videos/v7.mp4",
    views: 1483000,
    likes: 122000,
    comments: 5640,
    creator: {
      id: "c7",
      name: "UrbanFlyer",
      avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      followers: 1680000
    },
    tags: ["parkour", "stunts", "neon", "urban"],
    duration: 67,
    createdAt: "2023-09-20T16:42:00.000Z"
  },
  {
    id: "v8",
    title: "Ambient Music Production",
    description: "Behind the scenes of creating an ambient electronic music track with synthesizers.",
    thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    videoUrl: "https://example.com/videos/v8.mp4",
    views: 368000,
    likes: 28400,
    comments: 1240,
    creator: {
      id: "c8",
      name: "SynthWave",
      avatarUrl: "https://randomuser.me/api/portraits/women/52.jpg",
      followers: 429000
    },
    tags: ["music", "ambient", "electronic", "production"],
    duration: 78,
    createdAt: "2023-09-12T10:17:00.000Z"
  }
];

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Trending Now",
    videos: mockVideos.slice(0, 6)
  },
  {
    id: "cat2",
    name: "Continue Watching",
    videos: mockVideos.slice(2, 5)
  },
  {
    id: "cat3",
    name: "New Releases",
    videos: mockVideos.slice(3, 8)
  },
  {
    id: "cat4",
    name: "Tech & Gaming",
    videos: mockVideos.filter(v => v.tags.some(tag => ['tech', 'gaming', 'PC'].includes(tag)))
  },
  {
    id: "cat5",
    name: "Art & Creativity",
    videos: mockVideos.filter(v => v.tags.some(tag => ['art', 'digital'].includes(tag)))
  }
];

export const featuredVideo = mockVideos[0];

export const popularTags = [
  "tech", "comedy", "daily", "aesthetic", "gaming", "cyberpunk", "music", "dance", "art", "urban"
];

export const mockUser = {
  id: "u1",
  name: "Alex Morgan",
  username: "alexmorgan",
  email: "alex@example.com",
  avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  followers: 12400,
  following: 352,
  videos: mockVideos.slice(0, 3),
  likedVideos: mockVideos.slice(3, 6),
  bio: "Digital creator | Tech enthusiast | Exploring the digital frontier",
};
