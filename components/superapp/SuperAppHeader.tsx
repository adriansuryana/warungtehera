"use client";

import Image from "next/image";
import { MapPin, Search } from "lucide-react";

interface SuperAppHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLocationClick: () => void;
}

export default function SuperAppHeader({
  searchQuery,
  setSearchQuery,
  onLocationClick,
}: SuperAppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#084C3F]/95 backdrop-blur-md border-b-2 border-[#D8E500]/30 px-4 pt-3 pb-3 shadow-md">
      {/* Top Row: Location & Brand Status */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        {/* Location Pill */}
        <button
          onClick={onLocationClick}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8E500] text-[#084C3F] text-[11px] font-black shadow-sm active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#084C3F]" />
          <span className="truncate max-w-[170px] sm:max-w-xs">Cipanas, Cianjur</span>
          <span className="text-[10px] opacity-75">▾</span>
        </button>

        {/* Brand Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D8E500]/15 border border-[#D8E500]/40 text-[10px] font-black tracking-wider uppercase text-[#D8E500]">
          <span className="w-2 h-2 rounded-full bg-[#D8E500] animate-ping" />
          <span>NOW OPEN!</span>
        </div>
      </div>

      {/* Main Logo & Search Bar */}
      <div className="flex items-center gap-3">
        {/* Mascot Vector - Clean without container box or border */}
        <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center">
          <Image
            src="/wth-logo-01.svg"
            alt="WTH"
            fill
            className="object-contain"
          />
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D8E500]/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari Nasi Bakar, Wings, Taichan, Teh..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#05332A] border border-[#D8E500]/30 text-xs font-semibold text-white placeholder-white/50 focus:outline-none focus:border-[#D8E500] focus:ring-1 focus:ring-[#D8E500] transition-all"
          />
        </div>
      </div>
    </header>
  );
}
