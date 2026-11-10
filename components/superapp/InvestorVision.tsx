"use client";

import { Sparkles, TrendingUp, ShieldCheck, Cpu, Briefcase, ArrowUpRight } from "lucide-react";

export default function InvestorVision() {
  const handleOpenInvestorChat = () => {
    const text = encodeURIComponent(
      "Halo Founder Warung Teh Hera! 🍵\nSaya tertarik untuk berdiskusi mengenai peluang kemitraan / investasi ekspansi Warung Teh Hera. Boleh minta info deck atau waktu diskusi santai? Terima kasih."
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  const pillars = [
    {
      icon: TrendingUp,
      title: "Mass Market & High Repeat Order",
      desc: "Nasi Bakar (10K) & Chicken Wings (15K) adalah staple comfort food harian dengan volume perputaran tinggi dan pasar tanpa batas.",
    },
    {
      icon: ShieldCheck,
      title: "Healthy Unit Economics",
      desc: "HPP terstandarisasi dengan rantai pasok lokal Cipanas-Cianjur, menghasilkan estimasi gross margin 55% - 65% yang sangat sehat.",
    },
    {
      icon: Sparkles,
      title: "Distinct Streetwear Branding",
      desc: "Identitas visual berani (Pine #084C3F dengan aksen Lime #D8E500) dan maskot ramah berhijab, mudah viral dan menempel di benak Gen-Z & keluarga.",
    },
    {
      icon: Cpu,
      title: "Tech-Enabled F&B Roadmap",
      desc: "Fondasi digital mobile-first yang disiapkan untuk ekspansi Order QR Meja, CRM Loyalitas, hingga model Cloud Kitchen multi-cabang.",
    },
  ];

  return (
    <section id="investor-section" className="px-4 py-6 w-full">
      <div className="relative overflow-hidden rounded-3xl bg-[#0C594A] text-white p-6 sm:p-8 border-2 border-[#D8E500]/50 shadow-2xl">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8E500]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8E500] text-[#084C3F] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Visi Misi & Investor Opportunity</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
          From Small Beginnings <br className="hidden sm:inline" />
          <span className="text-[#D8E500]">Come Great Things.</span>
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
          Warung Teh Hera (WTH) lahir dari tekad menghadirkan sajian teh otentik dan makanan rumahan berkualitas premium dengan harga yang merangkul semua kalangan. Kami membangun fondasi operasional dan ekosistem digital yang siap diskalakan ke berbagai kota di Indonesia.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#084C3F] border border-[#D8E500]/25 hover:border-[#D8E500] transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-[#D8E500] text-[#084C3F] flex items-center justify-center font-bold mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-black text-sm text-[#D8E500] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Investor CTA Box */}
        <div className="p-4 rounded-2xl bg-[#D8E500] text-[#084C3F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-black text-sm sm:text-base tracking-tight">
              Tertarik Bermitra atau Berinvestasi di WTH?
            </h4>
            <p className="text-[11px] sm:text-xs text-[#084C3F]/80 font-medium">
              Buka peluang kemitraan strategis, pendanaan tahap awal, atau ekspansi cabang bersama Founder.
            </p>
          </div>

          <button
            onClick={handleOpenInvestorChat}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#084C3F] hover:bg-[#0a5e4e] text-[#D8E500] font-black text-xs sm:text-sm whitespace-nowrap active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Hubungi Founder (WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
