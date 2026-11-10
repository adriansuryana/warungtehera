"use client";

import { useState } from "react";
import { MenuItem } from "../../types/menu";
import { CATEGORIES, MENU_ITEMS } from "../../data/menuData";
import { Plus, Minus, Flame } from "lucide-react";

interface MenuCatalogProps {
  searchQuery: string;
  cart: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (item: MenuItem) => void;
}

export default function MenuCatalog({
  searchQuery,
  cart,
  onAddToCart,
  onRemoveFromCart,
}: MenuCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="menu-section" className="px-4 py-5 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-1.5">
            <span>Daftar Menu Favorit</span>
            <Flame className="w-5 h-5 text-[#D8E500] fill-[#D8E500]" />
          </h3>
          <p className="text-[11px] sm:text-xs text-white/70 font-medium">
            Pilih menu kesukaanmu & pesan langsung via WhatsApp
          </p>
        </div>
      </div>

      {/* Category Tabs (Scrollable Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-3">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                isActive
                  ? "bg-[#D8E500] text-[#084C3F] shadow-md"
                  : "bg-[#0C594A] text-white/80 border border-[#D8E500]/25 hover:border-[#D8E500]"
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredItems.map((item) => {
          const qty = cart[item.id] || 0;
          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-[#0C594A] border-2 border-[#D8E500]/25 hover:border-[#D8E500] shadow-md flex flex-col justify-between transition-all"
            >
              <div>
                {/* Tag & Category */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#D8E500] text-[#084C3F] text-[10px] font-black uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-bold text-white/60">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-base font-black text-white tracking-tight">
                  {item.name}
                </h4>

                {/* Description */}
                <p className="mt-1 text-xs text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="mt-4 pt-3 border-t border-[#D8E500]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/60 block font-bold">
                    Harga per porsi
                  </span>
                  <span className="text-lg font-black text-[#D8E500]">
                    {item.priceDisplay}
                  </span>
                </div>

                {/* Counter / Add Button */}
                {qty === 0 ? (
                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] text-xs font-black active:scale-95 transition-all shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-[#05332A] border border-[#D8E500] text-[#D8E500] px-2 py-1 rounded-xl shadow-sm">
                    <button
                      onClick={() => onRemoveFromCart(item)}
                      className="p-1 hover:bg-white/10 rounded-md active:scale-90 transition-transform"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-black text-xs min-w-[16px] text-center text-white">
                      {qty}
                    </span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="p-1 hover:bg-white/10 rounded-md active:scale-90 transition-transform"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center text-white/70">
            <p className="text-sm font-bold">Menu tidak ditemukan</p>
            <p className="text-xs mt-1">Coba cari dengan kata kunci lain yaa</p>
          </div>
        )}
      </div>
    </section>
  );
}
