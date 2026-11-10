"use client";

import { Leaf, Award, Users, HeartHandshake, MapPin, Phone, Instagram } from "lucide-react";

export default function BrandStory() {
  const highlights = [
    {
      icon: Leaf,
      title: "100% Rempah & Bahan Segar",
      desc: "Diramu dari racikan daun teh pilihan dan bumbu rempah nusantara terbaik tanpa pengawet buatan.",
    },
    {
      icon: Award,
      title: "Rasa Warisan Autentik",
      desc: "Resep tradisional yang dijaga konsistensi kelezatannya sejak hari pertama warung berdiri.",
    },
    {
      icon: Users,
      title: "UMKM Lokal Menuju Besar",
      desc: "Berangkat dari usaha kuliner lokal dengan mimpi menghadirkan kelezatan teh & masakan rumahan ke lebih banyak meja.",
    },
    {
      icon: HeartHandshake,
      title: "Pelayanan Ramah & Hangat",
      desc: "Bagi kami, setiap pengunjung bukan sekadar pembeli, melainkan keluarga yang bertamu ke dapur Teh Hera.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto mt-24 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kolom Kiri: Narasi Brand */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E58AF1] bg-[#004B2C] px-3 py-1 rounded-full border border-[#E58AF1]/30">
            Perjalanan Cerita Kami
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Kelezatan yang Dimulai dari Hati, Diramu untuk Negeri
          </h2>
          <p className="mt-4 text-sm text-[#DCEDE2]/80 leading-relaxed">
            <strong className="text-[#E58AF1]">Warung Teh Hera (WTH)</strong> berawal dari kecintaan kami terhadap tradisi ngeteh dan kehangatan makan bersama. Di era digital ini, kami sedang membangun platform agar Anda bisa menikmati aneka teh seduh segar dan masakan lezat khas kami dengan lebih mudah, cepat, dan nyaman.
          </p>
          <p className="mt-3 text-sm text-[#DCEDE2]/70 leading-relaxed">
            Website ini sedang dipersiapkan sebagai gerbang utama pemesanan online, reservasi tempat, hingga katering acara Anda.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-[#DCEDE2]">
            <div className="flex items-center gap-2 bg-[#002D1B] px-3.5 py-2 rounded-xl border border-[#E58AF1]/20">
              <MapPin className="w-4 h-4 text-[#E58AF1]" />
              <span>Lokasi Strategis & Higienis</span>
            </div>
            <div className="flex items-center gap-2 bg-[#002D1B] px-3.5 py-2 rounded-xl border border-[#E58AF1]/20">
              <Phone className="w-4 h-4 text-[#E58AF1]" />
              <span>Siap Melayani Katering & Pesanan</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: 4 Kotak Fitur / Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#003822]/80 to-[#002415]/90 border border-[#E58AF1]/20 hover:border-[#E58AF1]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#004B2C] text-[#E58AF1] border border-[#E58AF1]/30 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs text-[#DCEDE2]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
