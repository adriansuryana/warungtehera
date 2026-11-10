"use client";

import Image from "next/image";
import { MapPin, Search, Sparkles } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full bg-[#D8E500] border-b-2 border-[#084C3F] px-4 pt-3 pb-3 shadow-md">
      {/* Top Row: Location & Brand Status */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        {/* Location Pill */}
        <button
          onClick={onLocationClick}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084C3F] text-[#D8E500] text-[11px] font-bold shadow-sm active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#D8E500]" />
          <span className="truncate max-w-[170px] sm:max-w-xs">Cipanas, Cianjur</span>
          <span className="text-[10px] opacity-75">▾</span>
        </button>

        {/* Brand Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#084C3F]/10 border border-[#084C3F]/30 text-[10px] font-black tracking-wider uppercase text-[#084C3F]">
          <span className="w-2 h-2 rounded-full bg-[#084C3F] animate-ping" />
          <span>NOW OPEN!</span>
        </div>
      </div>

      {/* Main Logo & Search Bar */}
      <div className="flex items-center gap-3">
        {/* Mascot Avatar */}
        <div className="w-10 h-10 rounded-xl bg-[#084C3F] border border-[#084C3F] p-1 flex items-center justify-center flex-shrink-0 shadow-inner">
          <Image
            src="/wth-logo-01.svg"
            alt="WTH Maskot"
            width={34}
            height={34}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#084C3F]/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari Nasi Bakar, Wings, Taichan, Teh..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#084C3F]/10 border border-[#084C3F]/30 text-xs font-semibold text-[#084C3F] placeholder-[#084C3F]/50 focus:outline-none focus:border-[#084C3F] focus:bg-white/80 transition-all"
          />
        </div>
      </div>
    </header>
  );
}
