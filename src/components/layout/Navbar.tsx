
import { Link } from "react-router-dom";
import { Search, Bell, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-xenon-900 via-xenon-900/95 to-transparent backdrop-blur-sm">
      <nav className="container flex items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-glow text-white">
              XENO<span className="text-neon-purple">MAS</span>
            </h1>
          </Link>
          
          <div className="hidden space-x-6 md:flex">
            <Link to="/" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">
              Explore
            </Link>
            <Link to="/following" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">
              Following
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <Input
                type="search"
                placeholder="Search videos..."
                className="w-full md:w-64 pr-8 bg-xenon-700/80 border-xenon-600 focus-visible:ring-neon-purple text-sm"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2" 
                onClick={() => setIsSearchOpen(false)}
              >
                <Search size={18} className="text-xenon-300" />
              </button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-neon-purple hover:bg-xenon-800"
            >
              <Search size={20} />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-neon-purple hover:bg-xenon-800"
          >
            <Bell size={20} />
          </Button>
          
          <Link to="/upload">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-neon-purple hover:bg-xenon-800"
            >
              <Upload size={20} />
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-neon-purple hover:bg-xenon-800 rounded-full"
            >
              <User size={20} />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
