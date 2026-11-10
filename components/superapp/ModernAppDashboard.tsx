"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "../../types/menu";
import { CATEGORIES, MENU_ITEMS } from "../../data/menuData";
import { Search, SlidersHorizontal, Heart, Plus, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface ModernAppDashboardProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cart: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export default function ModernAppDashboard({
  searchQuery,
  setSearchQuery,
  cart,
  onAddToCart,
  onSelectItem,
}: ModernAppDashboardProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="px-4 py-4 w-full space-y-4">
      {/* Greeting & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-2"
      >
        <span className="text-xs text-[#D8E500] font-bold tracking-wide">
          Hi Foodies,
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Find your food
        </h2>
      </motion.div>

      {/* Search Bar with SVG Filter Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-2.5"
      >
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search food or beverages..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0C594A] border border-[#D8E500]/30 text-xs font-semibold text-white placeholder-white/50 focus:outline-none focus:border-[#D8E500] shadow-sm transition-all"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setActiveCategory("all")}
          className="w-10 h-10 rounded-2xl bg-[#D8E500] text-[#084C3F] flex items-center justify-center flex-shrink-0 shadow-sm cursor-pointer"
          title="Filter Menu"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Category Chips Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#D8E500] text-[#084C3F] shadow-sm"
                  : "bg-[#0C594A] text-white/80 hover:text-white border border-[#D8E500]/20"
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Modern 2-Column Food Grid with Smooth Staggered Scroll Animation */}
      <div className="grid grid-cols-2 gap-3.5 pt-1">
        {filteredItems.map((item, idx) => {
          const isFav = !!favorites[item.id];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectItem(item)}
              className="p-3 sm:p-3.5 rounded-3xl bg-[#0C594A] border border-[#D8E500]/25 hover:border-[#D8E500] shadow-md flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-colors"
            >
              {/* Heart Favorite Button */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={(e) => toggleFavorite(e, item.id)}
                className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white transition-transform"
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-colors ${
                    isFav ? "fill-red-500 text-red-500" : "text-white"
                  }`}
                />
              </motion.button>

              {/* Round Food Dish Top View with Hover Animation */}
              <div className="flex justify-center my-1">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white/10 backdrop-blur-sm border border-[#D8E500]/30 shadow-md group-hover:scale-106 group-hover:rotate-3 transition-transform duration-300 relative">
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Food Info */}
              <div className="mt-2 text-left space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-white tracking-tight line-clamp-1 group-hover:text-[#D8E500] transition-colors">
                  {item.name}
                </h4>

                {/* PrepTime & Rating */}
                <div className="flex items-center gap-2 text-[10px] text-white/75 font-medium">
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-3 h-3 text-[#D8E500]" />
                    {item.prepTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5 font-bold text-[#D8E500]">
                    <Star className="w-3 h-3 fill-[#D8E500] text-[#D8E500]" />
                    {item.rating}
                  </span>
                </div>

                {/* Price & Plus Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-black text-[#D8E500]">
                    {item.priceDisplay}
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(item);
                    }}
                    className="w-7 h-7 rounded-full bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] flex items-center justify-center font-black shadow-sm cursor-pointer"
                    title="Add to order"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
