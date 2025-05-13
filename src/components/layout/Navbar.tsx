
import { Link } from "react-router-dom";
import { Search, Bell, Upload, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm">
      <nav className="container flex items-center justify-between py-3 mx-auto px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/90b58f92-97c1-424c-99a5-280b8429f589.png" 
              alt="XENOMAS" 
              className={`${isMobile ? 'h-6' : 'h-8'} w-auto transition-all duration-300 hover:opacity-80 hover:neon-glow`}
            />
          </Link>
          
          {!isMobile && (
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
          )}
        </div>

        <div className="flex items-center space-x-3">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <Input
                type="search"
                placeholder="Search..."
                className={`${isMobile ? 'w-36' : 'w-64'} pr-8 bg-xenon-800/50 border-xenon-600 focus-visible:ring-neon-purple text-sm`}
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2" 
                onClick={() => setIsSearchOpen(false)}
              >
                <Search size={16} className="text-xenon-300" />
              </button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-neon-purple hover:bg-xenon-800/30"
            >
              <Search size={isMobile ? 18 : 20} />
            </Button>
          )}
          
          {!isMobile && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-neon-purple hover:bg-xenon-800/30"
              >
                <Bell size={20} />
              </Button>
              
              <Link to="/upload">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-neon-purple hover:bg-xenon-800/30"
                >
                  <Upload size={20} />
                </Button>
              </Link>
            </>
          )}
          
          <Link to="/profile">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-neon-purple hover:bg-xenon-800/30 rounded-full"
            >
              <User size={isMobile ? 18 : 20} />
            </Button>
          </Link>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-neon-purple hover:bg-xenon-800/30"
            >
              <Menu size={20} />
            </Button>
          )}
        </div>
      </nav>
      
      {isMobile && isMenuOpen && (
        <div className="bg-xenon-900/95 backdrop-blur-sm animate-slide-down">
          <div className="container py-3 px-4 flex flex-col space-y-3">
            <Link to="/" className="text-sm font-medium text-white hover:text-neon-purple transition-colors py-2">
              Home
            </Link>
            <Link to="/explore" className="text-sm font-medium text-white hover:text-neon-purple transition-colors py-2">
              Explore
            </Link>
            <Link to="/following" className="text-sm font-medium text-white hover:text-neon-purple transition-colors py-2">
              Following
            </Link>
            <Link to="/upload" className="text-sm font-medium text-white hover:text-neon-purple transition-colors py-2 flex items-center gap-2">
              <Upload size={16} />
              Upload
            </Link>
            <Link to="/notifications" className="text-sm font-medium text-white hover:text-neon-purple transition-colors py-2 flex items-center gap-2">
              <Bell size={16} />
              Notifications
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
