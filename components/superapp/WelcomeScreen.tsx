"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onExplore: () => void;
}

export default function WelcomeScreen({ onExplore }: WelcomeScreenProps) {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[85vh] flex flex-col justify-between items-center text-center px-6 py-8 bg-[#084C3F] text-white overflow-hidden rounded-b-3xl shadow-xl">
      {/* Top Brand Logo - Clean Vector, No Circle Container, No Redundant Text */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-2 flex justify-center"
      >
        <div className="w-20 h-20 relative">
          <Image
            src="/wth-logo-01.svg"
            alt="WTH"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
      </motion.div>

      {/* Center Floating Food Dish Visual */}
      <div className="my-auto py-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
          onClick={onExplore}
        >
          {/* Subtle Glow Behind Dish */}
          <div className="absolute inset-0 rounded-full bg-[#D8E500]/15 blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

          {/* Smooth Continuous Floating Dish */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-white/10 backdrop-blur-md border-2 border-[#D8E500]/40 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=85"
                alt="Signature Dish"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Clean Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-sm mx-auto space-y-2"
        >
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Fast Delivery at <br />
            <span className="text-[#D8E500]">Your Doorstep</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
            Home delivery and online order system for authentic street comfort food & tea.
          </p>
        </motion.div>
      </div>

      {/* Bottom Button "Let's Explore" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="w-full max-w-xs pt-4 pb-2"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={onExplore}
          className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-[#084C3F] font-black text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Let&apos;s Explore</span>
          <ArrowRight className="w-4 h-4 text-[#084C3F] group-hover:translate-x-1.5 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}
