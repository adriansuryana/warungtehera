"use client";

import Image from "next/image";
import { MessageCircle, ExternalLink, Sparkles } from "lucide-react";

export default function HeroBanner() {
  const handleOpenWA = () => {
    const text = encodeURIComponent(
      "Halo Warung Teh Hera! Saya mau pesan menu makanan & minuman via online yaa kak 😊"
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section className="px-4 py-3 w-full">
      <div className="relative overflow-hidden rounded-3xl bg-[#084C3F] text-[#D8E500] border-2 border-[#084C3F] shadow-xl">
        {/* Top Checkerboard Tape */}
        <div
          className="w-full h-4"
          style={{
            backgroundImage: "url('/checkerboard.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="p-5 sm:p-6 relative z-10">
          {/* Tagline Sesuai Branding Kit */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8E500] text-[#084C3F] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>From Small Beginnings Come Great Things</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Left Content */}
            <div className="sm:col-span-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Kelezatan Street Food Rasa Juara di{" "}
                <span className="text-[#D8E500]">Warung Teh Hera!</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#D8E500]/85 font-medium leading-relaxed">
                Nasi Bakar wangi, Chicken Wings renyah gurih, Sate Taichan pedas segar, hingga Es Teh Melati pekat siap temani harimu!
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={handleOpenWA}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D8E500] text-[#084C3F] font-black text-xs hover:brightness-105 active:scale-95 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#084C3F]" />
                  <span>Pesan Sekarang (WA)</span>
                </button>

                <a
                  href="#menu-section"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#084C3F] text-[#D8E500] border border-[#D8E500]/40 font-bold text-xs hover:border-[#D8E500] active:scale-95 transition-all"
                >
                  <span>Lihat Semua Menu</span>
                </a>
              </div>
            </div>

            {/* Right Mascot Visual */}
            <div className="sm:col-span-4 flex justify-center sm:justify-end">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#D8E500] p-2 flex items-center justify-center shadow-lg border-2 border-[#D8E500]">
                <Image
                  src="/wth-logo-02.svg"
                  alt="Maskot WTH"
                  width={130}
                  height={130}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Delivery Channels Badge (Sesuai Banner) */}
          <div className="mt-5 pt-3 border-t border-[#D8E500]/20 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#D8E500]/80">
            <span className="font-bold">Also Available On:</span>
            <div className="flex items-center gap-3 font-black text-[#D8E500]">
              <span className="px-2.5 py-0.5 rounded-md bg-[#D8E500]/15 border border-[#D8E500]/30">
                GoFood
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#D8E500]/15 border border-[#D8E500]/30">
                GrabFood
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Checkerboard Tape */}
        <div
          className="w-full h-4"
          style={{
            backgroundImage: "url('/checkerboard.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </section>
  );
}
