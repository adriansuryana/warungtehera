"use client";

import Image from "next/image";

interface UnderConstructionProps {
  onPreviewClick?: () => void;
}

export default function UnderConstruction({ onPreviewClick }: UnderConstructionProps) {
  const whatsappUrl = "https://wa.me/6282130704794?text=Halo%20Warung%20Teh%20Hera";
  const mapsUrl = "https://share.google/K7eRGvUQKXlRXPTGR";
  const instagramUrl = "https://instagram.com/warung_tehera";

  return (
    <div className="min-h-screen bg-[#084C3F] text-white flex flex-col justify-between items-center selection:bg-[#D8E500] selection:text-[#084C3F]">
      {/* Top Checkerboard Tape */}
      <div
        className="w-full h-4 flex-shrink-0"
        style={{
          backgroundImage: "url('/checkerboard.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main Content Container - Mobile First, Centered, Solid Flat Background */}
      <main className="w-full max-w-md px-6 py-10 my-auto flex flex-col items-center text-center">
        {/* 1. Logo Gede (Clean Vector, Prominent) */}
        <div
          onClick={onPreviewClick}
          className="w-56 h-56 sm:w-64 sm:h-64 relative flex-shrink-0 mb-6 cursor-pointer select-none"
        >
          <Image
            src="/wth-logo-01.svg"
            alt="Warung Teh Hera"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 2. Headline - Solid, Bold, Editorial */}
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-tight">
            Something Great <br />
            <span className="text-[#D8E500]">Is In The Works.</span>
          </h1>
          <p className="text-xs text-white/75 font-medium tracking-wide">
            From small beginnings come great things.
          </p>
        </div>

        {/* Thin Divider Line */}
        <div className="w-16 h-0.5 bg-[#D8E500] mb-8" />

        {/* 3. Offline Store & Hours Info - Pure Typography, No Box/Cards/Buttons */}
        <div className="w-full space-y-5 text-center">
          {/* Address */}
          <div className="space-y-1">
            <p className="text-[11px] font-black tracking-widest text-[#D8E500] uppercase">
              Offline Store
            </p>
            <p className="text-sm font-bold text-white leading-snug">
              Jln. Jeprah, Kp. Padarincang RT 004 / RW 004
            </p>
            <p className="text-xs text-white/80">
              Desa Palasari, Kec. Cipanas, Kabupaten Cianjur 43253
            </p>
          </div>

          {/* Operating Hours */}
          <div className="space-y-1 pt-1">
            <p className="text-[11px] font-black tracking-widest text-[#D8E500] uppercase">
              Jam Operasional
            </p>
            <div className="text-xs space-y-1 font-medium text-white/85">
              <p>
                Senin – Kamis : <span className="font-bold text-white">08.00 – 16.00 WIB</span>
              </p>
              <p>
                Jumat : <span className="font-bold text-red-300">Tutup (Libur)</span>
              </p>
              <p>
                Sabtu – Minggu : <span className="font-bold text-[#D8E500]">07.00 – 20.00 WIB</span>
              </p>
            </div>
          </div>

          {/* Simple Text Links (No buttons, no tacky styles) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-white/90">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8E500] hover:underline underline-offset-4 transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-white/30">•</span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Google Maps
            </a>
            <span className="text-white/30">•</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Checkerboard Tape */}
      <div
        className="w-full h-4 flex-shrink-0"
        style={{
          backgroundImage: "url('/checkerboard.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
