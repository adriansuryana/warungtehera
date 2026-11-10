"use client";

import Image from "next/image";
import { MessageCircle, MapPin, Instagram, Sparkles, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface UnderConstructionProps {
  onPreviewClick?: () => void;
}

export default function UnderConstruction({ onPreviewClick }: UnderConstructionProps) {
  const whatsappUrl =
    "https://wa.me/6282130704794?text=Halo%20Warung%20Teh%20Hera,%20saya%20mau%20order";
  const mapsUrl = "https://share.google/K7eRGvUQKXlRXPTGR";
  const instagramUrl = "https://instagram.com/warung_tehera";

  return (
    <div className="min-h-screen bg-[#05332A] flex justify-center selection:bg-[#D8E500] selection:text-[#084C3F]">
      <main className="w-full max-w-xl min-h-screen bg-[#084C3F] text-white flex flex-col justify-between relative shadow-2xl overflow-hidden">
        {/* Top Checkerboard Tape */}
        <div
          className="w-full h-4 flex-shrink-0"
          style={{
            backgroundImage: "url('/checkerboard.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D8E500]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="px-6 py-8 flex flex-col items-center text-center my-auto space-y-6 relative z-10">
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8E500]/15 border border-[#D8E500]/40 text-[#D8E500] text-xs font-black tracking-wider uppercase shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#D8E500] animate-ping" />
            <span>WEBSITE UNDER CONSTRUCTION</span>
          </motion.div>

          {/* Clean Pure Vector Logo (No circle wrapper, no extra text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="py-2"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-36 h-36 sm:w-44 sm:h-44 relative drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer"
              onClick={onPreviewClick}
              title="Warung Teh Hera"
            >
              <Image
                src="/wth-logo-01.svg"
                alt="Warung Teh Hera"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Typography / Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 max-w-md mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Something Great <br />
              <span className="text-[#D8E500]">Is In The Works.</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
              Website resmi Warung Teh Hera sedang dalam tahap peningkatan sistem untuk menghadirkan
              pengalaman pemesanan online &amp; SuperApp street comfort food yang modern dan seamless.
            </p>
          </motion.div>

          {/* Offline Store Information Card (Sesuai Google Business Profile) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-sm p-4 rounded-2xl bg-[#05332A]/85 border border-[#D8E500]/30 backdrop-blur-md text-left space-y-2.5 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#D8E500] font-black text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Offline Store WTH</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#D8E500]/15 text-[#D8E500] text-[10px] font-bold border border-[#D8E500]/30">
                ★ 5.0 Google Maps
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#D8E500] mt-0.5 flex-shrink-0" />
              <span className="leading-snug">
                Jln. Jeprah, Kp. Padarincang RT 004/004, Palasari, Kec. Cipanas, Kabupaten Cianjur 43253
              </span>
            </div>

            {/* Operating Hours Table */}
            <div className="pt-1 border-t border-[#D8E500]/15 space-y-1 text-[11px] text-white/80">
              <div className="flex items-center gap-1.5 font-bold text-[#D8E500]">
                <Clock className="w-3 h-3" />
                <span>Jam Operasional:</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 pl-4 text-[10.5px]">
                <span className="text-white/70">Senin – Kamis:</span>
                <span className="font-semibold text-white">08.00 – 16.00 WIB</span>
                <span className="text-white/70">Jumat:</span>
                <span className="font-bold text-red-400">Tutup (Libur)</span>
                <span className="text-white/70">Sabtu – Minggu:</span>
                <span className="font-semibold text-[#D8E500]">07.00 – 20.00 WIB</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-sm space-y-2.5 pt-1"
          >
            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-[#D8E500] hover:bg-[#c6d200] text-[#084C3F] font-black text-xs sm:text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#084C3F] text-[#084C3F]" />
              <span>Pesan Sekarang via WhatsApp</span>
            </a>

            {/* Grid 2 Buttons: Maps & Instagram */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#0C594A] hover:bg-[#0f6b59] border border-[#D8E500]/30 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D8E500]" />
                <span>Maps Lokasi</span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#0C594A] hover:bg-[#0f6b59] border border-[#D8E500]/30 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D8E500]" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Delivery Services Available */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 text-center text-[11px] text-white/60 space-y-1.5"
          >
            <p className="font-semibold text-white/75">
              Juga dapat dipesan melalui:
            </p>
            <div className="flex items-center justify-center gap-2 font-black text-xs text-[#D8E500]">
              <span className="px-3 py-1 rounded-lg bg-[#05332A] border border-[#D8E500]/30">
                GoFood
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#05332A] border border-[#D8E500]/30">
                GrabFood
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="px-4 py-4 text-center text-[10px] text-white/50 space-y-2 border-t border-[#D8E500]/20 bg-[#05332A]/50">
          <p className="font-black text-xs text-[#D8E500] uppercase tracking-wider">
            WARUNG TEH HERA (WTH)
          </p>
          <p className="text-[11px] text-white/70">
            From Small Beginnings Come Great Things.
          </p>
          <p className="text-[10px] text-white/40">
            Cipanas, Cianjur • warungtehera.my.id
          </p>

          {onPreviewClick && (
            <button
              onClick={onPreviewClick}
              className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#D8E500]/60 hover:text-[#D8E500] transition-colors underline underline-offset-2"
            >
              <Compass className="w-3 h-3" />
              <span>Pratinjau SuperApp Dev Prototype</span>
            </button>
          )}

          {/* Bottom Checkerboard */}
          <div
            className="w-full h-4 mt-3"
            style={{
              backgroundImage: "url('/checkerboard.svg')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "20px 20px",
            }}
          />
        </footer>
      </main>
    </div>
  );
}
