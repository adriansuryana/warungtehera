"use client";

import { TrendingUp, ShieldCheck, Cpu, ArrowUpRight, Sparkles } from "lucide-react";

export default function InvestorVision() {
  const handleOpenInvestorChat = () => {
    const text = encodeURIComponent(
      "Halo Founder Warung Teh Hera! Saya tertarik untuk berdiskusi mengenai kemitraan strategis & peluang ekspansi Warung Teh Hera. Boleh minta info kemitraannya? Terima kasih."
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  const metrics = [
    { label: "Target Gross Margin", value: "55% - 65%" },
    { label: "Price Range", value: "Rp 5K - 20K" },
    { label: "Model", value: "Takeaway & Cloud Kitchen" },
    { label: "Repeat Order", value: "High Frequency Daily" },
  ];

  return (
    <section id="investor-section" className="px-4 py-6 w-full">
      <div className="rounded-3xl bg-[#0C594A] border border-[#D8E500]/30 p-5 sm:p-6 text-white space-y-4 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#D8E500] text-[#084C3F] text-[10px] font-black uppercase tracking-wider">
            Brand Vision & Investor Deck
          </span>
          <span className="text-[10px] text-[#D8E500] font-mono font-bold">
            WTH Roadmap 2026+
          </span>
        </div>

        <div>
          <h3 className="text-xl font-black text-white tracking-tight">
            From Small Beginnings, <span className="text-[#D8E500]">Great Things Grow.</span>
          </h3>
          <p className="mt-1 text-xs text-white/80 leading-relaxed font-medium">
            Warung Teh Hera scales Indonesian street comfort food and premium loose tea into a modern, standardized, tech-enabled F&B network.
          </p>
        </div>

        {/* 4 Key Business Metrics */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-[#084C3F] border border-[#D8E500]/25"
            >
              <span className="text-[10px] text-white/60 block font-medium">
                {m.label}
              </span>
              <span className="text-sm font-black text-[#D8E500]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleOpenInvestorChat}
          className="w-full py-3 px-4 rounded-2xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] font-black text-xs active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
        >
          <span>Connect with Founder (Partnership / Investment)</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
