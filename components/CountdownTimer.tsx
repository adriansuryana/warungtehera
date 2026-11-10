"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, ChefHat, Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

export default function CountdownTimer() {
  // Pilihan range waktu: 30 hari (1 bulan) atau 60 hari (2 bulan)
  const [selectedRange, setSelectedRange] = useState<number>(45); // default 45 hari (antara 1-2 bulan)
  const [targetDate, setTargetDate] = useState<number>(() => {
    return Date.now() + 45 * 24 * 60 * 60 * 1000;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 45,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 45 * 86400,
  });

  const [mounted, setMounted] = useState(false);

  // Ubah range waktu
  const handleRangeChange = (days: number) => {
    setSelectedRange(days);
    const newTarget = Date.now() + days * 24 * 60 * 60 * 1000;
    setTargetDate(newTarget);
  };

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalSeconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        totalSeconds: Math.floor(difference / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeCards = [
    { label: "Hari", value: timeLeft.days, desc: "Pematangan Resep" },
    { label: "Jam", value: timeLeft.hours, desc: "Racikan Rempah" },
    { label: "Menit", value: timeLeft.minutes, desc: "Uji Rasa Dapur" },
    { label: "Detik", value: timeLeft.seconds, desc: "Menuju Sajian", highlight: true },
  ];

  // Hitung persentase progres (simulasi dari target range)
  const totalDurationSeconds = selectedRange * 86400;
  const elapsedSeconds = Math.max(0, totalDurationSeconds - timeLeft.totalSeconds);
  const progressPercent = Math.min(
    95,
    Math.max(15, Math.round((elapsedSeconds / totalDurationSeconds) * 100) || 68)
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Range Switcher Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#DCEDE2]/80 font-medium">
          <Calendar className="w-4 h-4 text-[#E58AF1]" />
          <span>Estimasi Waktu Perilisan:</span>
        </div>

        <div className="inline-flex p-1 rounded-xl bg-[#002B19]/90 border border-[#E58AF1]/30">
          <button
            onClick={() => handleRangeChange(30)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              selectedRange === 30
                ? "bg-[#E58AF1] text-[#003822] shadow-sm"
                : "text-[#DCEDE2]/70 hover:text-white"
            }`}
          >
            1 Bulan (30 Hari)
          </button>
          <button
            onClick={() => handleRangeChange(45)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              selectedRange === 45
                ? "bg-[#E58AF1] text-[#003822] shadow-sm"
                : "text-[#DCEDE2]/70 hover:text-white"
            }`}
          >
            Standar (45 Hari)
          </button>
          <button
            onClick={() => handleRangeChange(60)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              selectedRange === 60
                ? "bg-[#E58AF1] text-[#003822] shadow-sm"
                : "text-[#DCEDE2]/70 hover:text-white"
            }`}
          >
            2 Bulan (60 Hari)
          </button>
        </div>
      </div>

      {/* Countdown Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {timeCards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center transition-all duration-300 bg-gradient-to-b from-[#003822]/90 to-[#002415]/95 border border-[#E58AF1]/25 hover:border-[#E58AF1]/60 shadow-xl shadow-[#001A0E]/60 hover:shadow-[#E58AF1]/10 hover:-translate-y-1"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#E58AF1]/10 rounded-full blur-xl group-hover:bg-[#E58AF1]/20 transition-all duration-300"></div>

            {/* Value display */}
            <div className="relative">
              <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-mono drop-shadow-[0_2px_12px_rgba(229,138,241,0.3)]">
                {mounted ? String(card.value).padStart(2, "0") : "00"}
              </div>

              {/* Label */}
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004B2C] border border-[#E58AF1]/30 text-xs sm:text-sm font-bold text-[#E58AF1] tracking-wider uppercase">
                {card.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E58AF1] animate-ping" />
                )}
                {card.label}
              </div>

              {/* Subtitle */}
              <p className="mt-2 text-[11px] sm:text-xs text-[#DCEDE2]/60 font-medium">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Persiapan Dapur */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#002D1B]/80 border border-[#E58AF1]/25 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 text-xs sm:text-sm font-semibold">
          <span className="flex items-center gap-2 text-[#F3F6F4]">
            <ChefHat className="w-4 h-4 text-[#E58AF1]" />
            Kesiapan Dapur & Racikan Digital
          </span>
          <span className="text-[#E58AF1] font-mono font-bold bg-[#E58AF1]/10 px-2.5 py-0.5 rounded-full border border-[#E58AF1]/20">
            {progressPercent}% Siap Saji
          </span>
        </div>

        {/* Progress track */}
        <div className="w-full h-3 rounded-full bg-[#001E11] p-0.5 overflow-hidden border border-[#004B2C]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#004B2C] via-[#972BA9] to-[#E58AF1] transition-all duration-1000 relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] text-[#DCEDE2]/60">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#E58AF1]" />
            Tahap: Perapihan Menu & Sistem Pemesanan Cepat
          </span>
          <span>Target Peluncuran: {selectedRange} Hari</span>
        </div>
      </div>
    </div>
  );
}
