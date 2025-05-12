
import { Button } from "@/components/ui/button";
import { popularTags } from "@/data/videos";
import { useState } from "react";

interface SearchFiltersProps {
  onFilterChange: (tag: string | null) => void;
  activeFilter: string | null;
}

export function SearchFilters({ onFilterChange, activeFilter }: SearchFiltersProps) {
  return (
    <div className="mb-8 overflow-x-auto scrollbar-none">
      <div className="flex space-x-2 pb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onFilterChange(null)}
          className={`whitespace-nowrap ${
            activeFilter === null
              ? 'bg-neon-purple text-white border-neon-purple'
              : 'bg-xenon-800 border-xenon-700 text-xenon-300'
          }`}
        >
          All Videos
        </Button>
        
        {popularTags.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            size="sm"
            onClick={() => onFilterChange(tag)}
            className={`whitespace-nowrap ${
              activeFilter === tag
                ? 'bg-neon-purple text-white border-neon-purple'
                : 'bg-xenon-800 border-xenon-700 text-xenon-300'
            }`}
          >
            #{tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
