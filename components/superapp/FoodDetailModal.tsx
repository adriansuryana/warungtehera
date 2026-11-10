"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "../../types/menu";
import { ArrowLeft, Heart, Star, Clock, Flame, Plus, Minus, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FoodDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export default function FoodDetailModal({
  item,
  onClose,
  onAddToCart,
}: FoodDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  const handleDirectWA = () => {
    const text = encodeURIComponent(
      `Halo Warung Teh Hera! 🍵\nSaya mau pesan langsung: ${quantity}x ${item.name} (${item.priceDisplay})\nTotal: Rp ${(item.price * quantity).toLocaleString("id-ID")}\nMohon info ketersediaannya yaa kak 😊`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Sheet with Spring Physics */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="w-full max-w-md bg-[#084C3F] text-white rounded-t-3xl sm:rounded-3xl border-t-2 sm:border-2 border-[#D8E500]/40 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative z-10"
        >
          {/* Top Header Actions */}
          <div className="p-4 flex items-center justify-between relative z-20">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            <span className="text-xs font-black uppercase tracking-wider text-[#D8E500]">
              Food Details
            </span>

            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-white"
                }`}
              />
            </motion.button>
          </div>

          {/* Big Food Dish Image with Smooth Scale */}
          <div className="flex justify-center py-3 relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.4 }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-white/10 backdrop-blur-md border border-[#D8E500]/40 shadow-[0_15px_35px_rgba(0,0,0,0.5)] relative"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* White / Dark Sheet Card Info */}
          <div className="bg-[#0C594A] rounded-t-3xl p-5 sm:p-6 space-y-4 flex-1 overflow-y-auto border-t border-[#D8E500]/25">
            {/* Title & Counter */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-white tracking-tight">
                  {item.name}
                </h2>
                <span className="text-lg font-black text-[#D8E500]">
                  {item.priceDisplay}
                </span>
              </div>

              {/* Stepper Counter */}
              <div className="flex items-center gap-2.5 bg-[#05332A] border border-[#D8E500]/50 text-[#D8E500] px-3 py-1.5 rounded-full shadow-sm">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-white/10 rounded-full"
                >
                  <Minus className="w-3.5 h-3.5" />
                </motion.button>
                <span className="font-mono font-black text-sm min-w-[20px] text-center text-white">
                  {quantity}
                </span>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-white/10 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Meta Badges */}
            <div className="flex items-center gap-4 text-xs text-white/80 border-y border-[#D8E500]/20 py-2.5">
              <div className="flex items-center gap-1 font-bold">
                <Star className="w-4 h-4 fill-[#D8E500] text-[#D8E500]" />
                <span>{item.rating}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 font-medium">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>{item.calories}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 font-medium">
                <Clock className="w-4 h-4 text-[#D8E500]" />
                <span>{item.prepTime}</span>
              </div>
            </div>

            {/* About Food */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#D8E500] mb-1">
                About Food
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-2xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Add to Cart • Rp {(item.price * quantity).toLocaleString("id-ID")}</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleDirectWA}
                className="py-3 px-4 rounded-2xl bg-[#05332A] hover:bg-black/30 text-white border border-[#D8E500]/40 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D8E500]" />
                <span>Order via WA</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
