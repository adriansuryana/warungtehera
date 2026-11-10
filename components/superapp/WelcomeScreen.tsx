"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onExplore: () => void;
}

export default function WelcomeScreen({ onExplore }: WelcomeScreenProps) {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[85vh] flex flex-col justify-between items-center text-center px-6 py-8 bg-[#084C3F] text-white overflow-hidden rounded-b-3xl shadow-xl">
      {/* Top Branding Badge */}
      <div className="flex items-center gap-2 pt-2">
        <div className="w-8 h-8 rounded-full bg-[#05332A] border border-[#D8E500] p-1 flex items-center justify-center shadow-md">
          <Image
            src="/wth-logo-01.svg"
            alt="WTH Logo"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[11px] font-black uppercase tracking-widest text-[#D8E500]">
          WARUNG TEH HERA
        </span>
      </div>

      {/* Center Floating Food Dish Visual (Sesuai Referensi Layar 1) */}
      <div className="my-auto py-6 flex flex-col items-center">
        <div className="relative group cursor-pointer" onClick={onExplore}>
          {/* Subtle Glow Behind Dish */}
          <div className="absolute inset-0 rounded-full bg-[#D8E500]/15 blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

          {/* Circular Food Plate with Realistic Shadow */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-white/10 backdrop-blur-md border-2 border-[#D8E500]/40 shadow-[0_20px_40px_rgba(0,0,0,0.45)] transform group-hover:rotate-6 transition-transform duration-500 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=85"
                alt="Signature Dish"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Clean Headline & Subtitle (No Jargon / No Medok) */}
        <div className="mt-8 max-w-sm mx-auto space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Fast Delivery at <br />
            <span className="text-[#D8E500]">Your Doorstep</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
            Home delivery and online order system for authentic street comfort food & tea.
          </p>
        </div>
      </div>

      {/* Bottom Button "Let's Explore" (Sesuai Mockup Referensi) */}
      <div className="w-full max-w-xs pt-4 pb-2">
        <button
          onClick={onExplore}
          className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-[#084C3F] font-black text-sm tracking-wide shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Let&apos;s Explore</span>
          <ArrowRight className="w-4 h-4 text-[#084C3F] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
