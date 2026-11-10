"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Coffee, Droplets, Flame, Share2, Check, RefreshCw } from "lucide-react";

interface TeaBase {
  id: string;
  name: string;
  desc: string;
  color: string;
}

interface Topping {
  id: string;
  name: string;
  desc: string;
}

const TEA_BASES: TeaBase[] = [
  { id: "melati", name: "Teh Wangi Melati", desc: "Aroma floral klasik yang lembut dan menenangkan", color: "#004B2C" },
  { id: "hitam", name: "Teh Hitam Nusantara", desc: "Rasa sepat pekat khas seduhan daun teh tua", color: "#4A2810" },
  { id: "hijau", name: "Teh Hijau Segar", desc: "Ringan, segar, kaya antioksidan alami", color: "#2E8F58" },
  { id: "rempah", name: "Seduhan Rempah Hera", desc: "Hangat jahe merah, serai, dan kapulaga", color: "#802590" },
];

const TOPPINGS: Topping[] = [
  { id: "gula_aren", name: "Gula Aren Organik", desc: "Manis legit khas nusantara" },
  { id: "susu_kental", name: "Susu Lembut (Teh Tarik)", desc: "Creamy gurih dan nikmat" },
  { id: "lemon_sereh", name: "Perasan Lemon & Sereh", desc: "Asam segar penghilang dahaga" },
  { id: "madu_hutan", name: "Madu Murni", desc: "Manis alami berkhasiat" },
  { id: "selasih", name: "Biji Selasih Segar", desc: "Sensasi kenyal renyah di mulut" },
  { id: "chili_spiced", name: "Sentuhan Kayu Manis", desc: "Aroma rempah wangi nan mewah" },
];

export default function TeaMixer() {
  const [selectedBase, setSelectedBase] = useState<TeaBase>(TEA_BASES[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>(["gula_aren"]);
  const [sweetness, setSweetness] = useState<string>("Normal (100%)");
  const [iceLevel, setIceLevel] = useState<string>("Dingin Segar (Batu Es)");
  const [isCopied, setIsCopied] = useState(false);

  const toggleTopping = (id: string) => {
    if (selectedToppings.includes(id)) {
      if (selectedToppings.length > 1) {
        setSelectedToppings(selectedToppings.filter((t) => t !== id));
      }
    } else {
      if (selectedToppings.length < 3) {
        setSelectedToppings([...selectedToppings, id]);
      }
    }
  };

  const getCustomName = () => {
    const toppingNames = selectedToppings
      .map((id) => TOPPINGS.find((t) => t.id === id)?.name)
      .filter(Boolean)
      .join(" + ");
    return `${selectedBase.name} Racikan Khusus (${toppingNames})`;
  };

  const handleOrderCustomTea = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ["#004B2C", "#E58AF1", "#F1B5FA"],
    });

    const toppingText = selectedToppings
      .map((id) => TOPPINGS.find((t) => t.id === id)?.name)
      .join(", ");

    const text = encodeURIComponent(
      `Halo MinHera! Saya habis coba racik teh di website nih:\n` +
      `🍵 Base: ${selectedBase.name}\n` +
      `✨ Campuran: ${toppingText}\n` +
      `🍬 Kemanisan: ${sweetness}\n` +
      `❄️ Suhu: ${iceLevel}\n\n` +
      `Nanti pas grand opening, tolong buatin racikan spesial saya ini yaa kak! 😊`
    );

    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-24 px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#003822] via-[#002717] to-[#01170E] border-2 border-[#E58AF1]/30 shadow-2xl">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#E58AF1]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B2C] border border-[#E58AF1]/30 text-xs font-bold text-[#E58AF1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mini-App Interaktif Pelanggan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Racik Teh Impianmu Sendiri!
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#DCEDE2]/70 leading-relaxed">
            Sambil nunggu dapur kami selesai dibangun, yuk coba mix & match rasa teh favoritmu. Resep ini bisa langsung kamu kunci untuk dipesan pas hari launching!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Tea */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#E58AF1] flex items-center gap-1.5 mb-2.5">
                <Coffee className="w-4 h-4" />
                1. Pilih Bahan Dasar Teh
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {TEA_BASES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      selectedBase.id === b.id
                        ? "bg-[#004B2C] border-[#E58AF1] text-white shadow-md shadow-[#004B2C]/50"
                        : "bg-[#002213] border-[#E58AF1]/15 text-[#DCEDE2]/70 hover:border-[#E58AF1]/40"
                    }`}
                  >
                    <div className="font-bold">{b.name}</div>
                    <div className="text-[10px] text-[#DCEDE2]/60 mt-0.5 line-clamp-1">{b.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Toppings / Campuran */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#E58AF1] flex items-center gap-1.5">
                  <Droplets className="w-4 h-4" />
                  2. Tambah Racikan Rempah & Rasa (Maks. 3)
                </label>
                <span className="text-[10px] text-[#DCEDE2]/60 font-mono">
                  {selectedToppings.length}/3 Dipilih
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TOPPINGS.map((top) => {
                  const isChecked = selectedToppings.includes(top.id);
                  return (
                    <button
                      key={top.id}
                      onClick={() => toggleTopping(top.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                        isChecked
                          ? "bg-[#E58AF1]/20 border-[#E58AF1] text-white"
                          : "bg-[#002213] border-[#E58AF1]/15 text-[#DCEDE2]/70 hover:border-[#E58AF1]/30"
                      }`}
                    >
                      <div className="font-bold text-[11px] flex items-center justify-between">
                        <span>{top.name}</span>
                        {isChecked && <Check className="w-3 h-3 text-[#E58AF1]" />}
                      </div>
                      <div className="text-[9px] text-[#DCEDE2]/50 mt-0.5">{top.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Kemanisan & Suhu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#E58AF1] block mb-2">Tingkat Manis</label>
                <select
                  value={sweetness}
                  onChange={(e) => setSweetness(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#001E11] border border-[#E58AF1]/30 text-white text-xs focus:outline-none focus:border-[#E58AF1]"
                >
                  <option value="Sedikit Manis (50%)">Sedikit Manis (50%)</option>
                  <option value="Normal (100%)">Normal Pas (100%)</option>
                  <option value="Manis Legit (120%)">Manis Legit (120%)</option>
                  <option value="Tanpa Gula (0%)">Murni Tanpa Gula (0%)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#E58AF1] block mb-2">Suhu Sajian</label>
                <select
                  value={iceLevel}
                  onChange={(e) => setIceLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#001E11] border border-[#E58AF1]/30 text-white text-xs focus:outline-none focus:border-[#E58AF1]"
                >
                  <option value="Dingin Segar (Batu Es)">Dingin Segar (Batu Es)</option>
                  <option value="Hangat Nikmat">Hangat Nikmat</option>
                  <option value="Panas Mendidih">Panas Seduh Mendidih</option>
                </select>
              </div>
            </div>
          </div>

          {/* Result Card: Right Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#002B19] to-[#001A0E] border-2 border-[#E58AF1]/40 shadow-xl relative">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E58AF1] bg-[#004B2C] px-2.5 py-0.5 rounded-full border border-[#E58AF1]/30">
                Kupon Resep Rahasia
              </span>

              {/* Cup Visualizer */}
              <div className="my-5 flex flex-col items-center justify-center">
                <div className="w-20 h-24 rounded-b-2xl rounded-t-sm border-2 border-[#E58AF1] bg-gradient-to-b from-[#E58AF1]/20 to-[#004B2C] p-2 flex flex-col justify-end items-center relative overflow-hidden shadow-inner">
                  {/* Ice cubes animation */}
                  <div className="w-4 h-4 bg-white/40 rounded-sm mb-1 rotate-12"></div>
                  <div className="w-5 h-5 bg-white/30 rounded-sm -rotate-6"></div>
                  {/* Liquid fill */}
                  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#004B2C]/70"></div>
                </div>
                <span className="mt-2 text-xs font-extrabold text-white text-center">
                  {selectedBase.name}
                </span>
              </div>

              {/* Summary Details */}
              <div className="space-y-1.5 text-xs border-t border-[#E58AF1]/20 pt-3">
                <div className="flex justify-between text-[#DCEDE2]/70">
                  <span>Topping:</span>
                  <span className="font-semibold text-white text-right max-w-[160px] truncate">
                    {selectedToppings
                      .map((id) => TOPPINGS.find((t) => t.id === id)?.name)
                      .join(", ")}
                  </span>
                </div>
                <div className="flex justify-between text-[#DCEDE2]/70">
                  <span>Manis:</span>
                  <span className="font-semibold text-white">{sweetness}</span>
                </div>
                <div className="flex justify-between text-[#DCEDE2]/70">
                  <span>Sajian:</span>
                  <span className="font-semibold text-white">{iceLevel}</span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleOrderCustomTea}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E58AF1] to-[#F1B5FA] hover:from-[#F1B5FA] hover:to-[#E58AF1] text-[#003822] font-extrabold text-xs sm:text-sm active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Kirim Resep ke WhatsApp MinHera</span>
              </button>

              <p className="mt-2 text-center text-[10px] text-[#DCEDE2]/50">
                *Dapatkan diskon spesial saat memesan resep ini pas grand opening!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
