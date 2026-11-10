"use client";

import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Navbar() {
  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo MinHera! Saya lihat website Warung Teh Hera lagi dibangun nih, mau tanya-tanya menu atau info katering yaa kak 😊"
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#002B19]/80 border-b border-[#E58AF1]/20 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 rounded-2xl bg-[#004B2C] border border-[#E58AF1]/40 p-1.5 shadow-lg shadow-[#004B2C]/50 flex items-center justify-center group-hover:border-[#E58AF1] transition-all duration-300">
            <Image
              src="/logo.svg"
              alt="Logo Warung Teh Hera"
              width={42}
              height={42}
              className="object-contain drop-shadow"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#E58AF1] transition-colors">
                WARUNG TEH HERA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-[#E58AF1]/20 text-[#E58AF1] border border-[#E58AF1]/30">
                WTH
              </span>
            </div>
            <p className="text-xs text-[#DCEDE2]/70 font-medium tracking-wide">
              Sajian Rasa Penuh Cinta • UMKM Juara
            </p>
          </div>
        </div>

        {/* Live Status Badge & Action */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B2C]/70 border border-[#E58AF1]/30 text-xs text-[#DCEDE2]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58AF1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58AF1]"></span>
            </span>
            <span className="font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E58AF1]" />
              Dapur Digital Sedang Diracik
            </span>
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E58AF1] to-[#F1B5FA] text-[#003822] font-bold text-xs sm:text-sm hover:from-[#F1B5FA] hover:to-[#E58AF1] active:scale-95 shadow-md shadow-[#E58AF1]/20 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-[#003822]" />
            <span>Hubungi MinHera</span>
          </button>
        </div>
      </div>
    </header>
  );
}
