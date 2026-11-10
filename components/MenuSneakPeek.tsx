"use client";

import { useState } from "react";
import { Utensils, Coffee, Flame, Heart, Star, Sparkles } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "minuman" | "makanan" | "camilan";
  tag: string;
  desc: string;
  priceEst: string;
  likes: number;
}

const MENU_LIST: MenuItem[] = [
  {
    id: "teh-1",
    name: "Es Teh Racik Melati Hera",
    category: "minuman",
    tag: "Signature WTH",
    desc: "Perpaduan seduhan teh daun pilihan dengan aroma wangi melati alami yang sejuk melegakan dahaga.",
    priceEst: "Rp 5.000 - Rp 8.000",
    likes: 142,
  },
  {
    id: "makan-1",
    name: "Nasi Ayam Rempah Hera",
    category: "makanan",
    tag: "Juara Dapur",
    desc: "Ayam ungkep bumbu rempah warisan, digoreng garing di luar juicy di dalam, lengkap lalapan & sambal korek.",
    priceEst: "Rp 18.000 - Rp 23.000",
    likes: 189,
  },
  {
    id: "camilan-1",
    name: "Dimsum Kukus Chili Oil",
    category: "camilan",
    tag: "Favorit Warga",
    desc: "Olahan daging ayam & udang padat gurih dibalut kulit tipis, disiram racikan chili oil harum menggugah selera.",
    priceEst: "Rp 15.000",
    likes: 165,
  },
  {
    id: "teh-2",
    name: "Wedang Rempah Hangat Hera",
    category: "minuman",
    tag: "Khasiat Alami",
    desc: "Racikan jahe merah, serai wangi, kapulaga, dan gula aren murni. Hangat di tenggorokan, nyaman di badan.",
    priceEst: "Rp 10.000",
    likes: 98,
  },
  {
    id: "makan-2",
    name: "Nasi Goreng Kampung Spesial",
    category: "makanan",
    tag: "Paling Ngangenin",
    desc: "Nasi goreng aroma smokey khas wajan besi, racikan bumbu terasi udang dan telur orak-arik melimpah.",
    priceEst: "Rp 16.000",
    likes: 134,
  },
  {
    id: "camilan-2",
    name: "Pisang Goreng Wijen Madu",
    category: "camilan",
    tag: "Teman Ngeteh",
    desc: "Pisang kepok manis renyah dibalut adonan krispi bertabur wijen sangrai dan lelehan madu gurih.",
    priceEst: "Rp 12.000",
    likes: 121,
  },
];

export default function MenuSneakPeek() {
  const [activeCategory, setActiveCategory] = useState<"all" | "minuman" | "makanan" | "camilan">("all");
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredMenu = activeCategory === "all"
    ? MENU_LIST
    : MENU_LIST.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full max-w-5xl mx-auto mt-20 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003822] border border-[#E58AF1]/30 text-xs font-bold text-[#E58AF1] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bocoran Menu Segera Hadir</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Apa Saja yang Sedang Diramu di <span className="text-[#E58AF1]">Warung Teh Hera</span>?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#DCEDE2]/70 max-w-2xl mx-auto">
          Intip sebagian sajian andalan kami yang siap memanjakan lidah Anda saat website dan layanan online resmi dibuka!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { key: "all", label: "Semua Sajian", icon: Star },
          { key: "minuman", label: "Aneka Teh & Minuman", icon: Coffee },
          { key: "makanan", label: "Makanan Berat", icon: Utensils },
          { key: "camilan", label: "Kudapan & Snack", icon: Flame },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#004B2C] text-[#E58AF1] border border-[#E58AF1] shadow-lg shadow-[#004B2C]/40 scale-105"
                  : "bg-[#002415] text-[#DCEDE2]/70 border border-[#E58AF1]/20 hover:border-[#E58AF1]/40 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Menus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMenu.map((item) => {
          const isLiked = !!likedItems[item.id];
          return (
            <div
              key={item.id}
              className="relative rounded-2xl p-5 bg-gradient-to-b from-[#003822]/70 to-[#002415]/90 border border-[#E58AF1]/20 hover:border-[#E58AF1]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header card: Tag & Heart */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#004B2C] text-[#E58AF1] border border-[#E58AF1]/30">
                    {item.tag}
                  </span>

                  <button
                    onClick={() => toggleLike(item.id)}
                    className="p-1.5 rounded-full hover:bg-white/10 active:scale-90 transition-all text-[#E58AF1]"
                    title="Suka menu ini"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isLiked ? "fill-[#E58AF1] text-[#E58AF1]" : "text-[#E58AF1]/60"
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#E58AF1] transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs text-[#DCEDE2]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer info: estimasi harga */}
              <div className="mt-5 pt-3 border-t border-[#E58AF1]/15 flex items-center justify-between text-xs">
                <span className="text-[#DCEDE2]/60">Estimasi Harga:</span>
                <span className="font-mono font-bold text-[#E58AF1] bg-[#004B2C]/70 px-2.5 py-0.5 rounded-lg border border-[#E58AF1]/25">
                  {item.priceEst}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
