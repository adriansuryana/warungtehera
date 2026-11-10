"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  // Target peluncuran ~35 hari ke depan
  const [targetDate] = useState<number>(() => {
    return Date.now() + 35 * 24 * 60 * 60 * 1000;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 35,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen min-h-[100dvh] h-[100dvh] w-full bg-[#D8E500] text-[#084C3F] flex flex-col justify-between items-center relative overflow-x-hidden overflow-y-auto sm:overflow-hidden select-none">
      {/* Top Checkerboard Accent (WTH Colors: #084C3F & #D8E500) */}
      <div
        className="w-full h-5 sm:h-6 flex-shrink-0"
        style={{
          backgroundImage: "url('/checkerboard.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-xl mx-auto py-3 sm:py-5">
        {/* Brand Tagline Sesuai Store Branding Kit */}
        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#084C3F]/75 mb-3">
          FROM SMALL BEGINNINGS COME GREAT THINGS.
        </span>

        {/* Logo Baru WTH! (Maskot Karakter Berhijab + Teks WTH Warung Teh Hera) */}
        <div className="mb-4 sm:mb-5 transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/wth-logo-02.svg"
            alt="Logo Warung Teh Hera"
            width={190}
            height={190}
            className="w-28 sm:w-36 md:w-40 h-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(8,76,63,0.18)]"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#084C3F] tracking-tight mb-2 sm:mb-2.5">
          Website Sedang Dalam Pengembangan
        </h1>

        {/* Subtitle - 2 Baris Presisi */}
        <div className="text-xs sm:text-sm text-[#084C3F]/90 font-medium leading-relaxed mb-5 sm:mb-6">
          <p>Kami sedang memasak pengalaman terbaik untukmu.</p>
          <p className="font-bold text-[#084C3F]">Tunggu ya, Sahabat Teh Hera!</p>
        </div>

        {/* Countdown Timer - Box Warna Hijau Tua #084C3F dengan Angka Lime #D8E500 */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-5 sm:mb-6">
          {[
            { label: "Hari", val: timeLeft.days },
            { label: "Jam", val: timeLeft.hours },
            { label: "Menit", val: timeLeft.minutes },
            { label: "Detik", val: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-xl bg-[#084C3F] flex items-center justify-center shadow-md">
                  <span className="font-mono text-base sm:text-xl font-black text-[#D8E500]">
                    {mounted ? String(item.val).padStart(2, "0") : "00"}
                  </span>
                </div>
                <span className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#084C3F]">
                  {item.label}
                </span>
              </div>
              {idx < 3 && (
                <span className="text-[#084C3F] font-mono font-black text-sm sm:text-lg px-0.5 sm:px-1.5 -mt-3.5">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Loading Spinner Minimal */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#084C3F] border-t-transparent animate-spin"></div>
          <span className="text-[11px] sm:text-xs text-[#084C3F] font-bold tracking-wide">
            Sedang Mempersiapkan Dapur...
          </span>
        </div>

        {/* Base Store Pill - Rapi & Responsive */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#084C3F]/10 border border-[#084C3F]/25 text-[10px] sm:text-xs text-[#084C3F] font-semibold max-w-sm sm:max-w-md mx-auto leading-tight">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-[#084C3F]" />
          <span>Jln Jeprah, Kp Padarincang, Cipanas, Cianjur 43253</span>
        </div>
      </main>

      {/* Footer Minimal & Bottom Checkerboard Accent */}
      <footer className="w-full flex flex-col items-center flex-shrink-0">
        <p className="text-[10px] sm:text-[11px] font-bold text-[#084C3F]/75 mb-2 px-2 text-center">
          © {new Date().getFullYear()} Warung Teh Hera. All rights reserved.
        </p>

        <div
          className="w-full h-5 sm:h-6"
          style={{
            backgroundImage: "url('/checkerboard.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "24px 24px",
          }}
        />
      </footer>
    </div>
  );
}
