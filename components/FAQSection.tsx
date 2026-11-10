"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Kapan tanggal resmi peluncuran website & pemesanan online Warung Teh Hera?",
    a: "Sesuai hitung mundur (countdown timer) di atas, kami menargetkan perilisan sekitar 30 hingga 60 hari ke depan. Pendaftaran melalui kolom notifikasi di website ini akan menerima pemberitahuan paling pertama saat dapur digital resmi live!",
  },
  {
    q: "Apakah selama website dibangun, saya tetap bisa memesan makanan atau katering?",
    a: "Bisa banget! Tim dapur Warung Teh Hera tetap menerima pesanan offline, nasi kotak, prasmanan, dan paket katering kantor atau acara keluarga melalui WhatsApp resmi kami.",
  },
  {
    q: "Apakah seluruh sajian di Warung Teh Hera terjamin Halal dan Higienis?",
    a: "100% Halal dan Higienis. Kami hanya menggunakan bahan-bahan segar pilihan tanpa bahan pengawet berbahaya, disiapkan dengan standar kebersihan dapur yang terjaga.",
  },
  {
    q: "Apakah nanti bisa dipesan melalui GoFood, GrabFood, atau ShopeeFood?",
    a: "Ya! Bersamaan dengan peluncuran platform digital ini, kami juga mengintegrasikan layanan pesan antar online dan pemesanan mandiri via website dengan ongkir bersahabat.",
  },
  {
    q: "Saya tertarik membuka kemitraan atau titip jual produk UMKM, apakah bisa?",
    a: "Sangat terbuka! Warung Teh Hera tumbuh bersama ekosistem UMKM lokal. Silakan hubungi kami via WhatsApp untuk diskusi peluang kolaborasi.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-24 px-4 sm:px-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B2C] border border-[#E58AF1]/30 text-xs font-bold text-[#E58AF1] mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Tanya Jawab Seputar WTH</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#DCEDE2]/70">
          Semua hal yang perlu Anda ketahui selagi kami meracik website ini.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-[#E58AF1]/20 bg-[#002B19]/80 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#E58AF1] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#E58AF1] transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#DCEDE2]/80 leading-relaxed border-t border-[#E58AF1]/10 pt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
