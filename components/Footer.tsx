"use client";

import Image from "next/image";
import { MessageCircle, Instagram, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  const handleOpenWhatsApp = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Warung%20Teh%20Hera!%20Saya%20tertarik%20dengan%20produk%20dan%20layanannya.",
      "_blank"
    );
  };

  return (
    <footer className="w-full mt-28 border-t border-[#E58AF1]/20 bg-[#001E11] text-[#DCEDE2] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-[#E58AF1]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Kolom 1: Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#004B2C] border border-[#E58AF1]/40 p-1.5 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Warung Teh Hera"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-wide">
                  WARUNG TEH HERA
                </span>
                <p className="text-xs text-[#E58AF1] font-medium">
                  Rasa Otentik Kuliner Nusantara & Teh Seduh Istimewa
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DCEDE2]/70 max-w-md leading-relaxed">
              Sebuah usaha mikro, kecil, dan menengah (UMKM) yang didedikasikan untuk menghadirkan kehangatan cita rasa nusantara. Pantau terus domain ini untuk kejutan peluncuran platform digital kami!
            </p>
          </div>

          {/* Kolom 2: Jam Operasional */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E58AF1] mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Jam Operasional
            </h4>
            <ul className="text-xs text-[#DCEDE2]/70 space-y-2">
              <li className="flex justify-between border-b border-[#004B2C] pb-1">
                <span>Senin - Jumat</span>
                <span className="font-semibold text-white">09.00 - 21.00 WIB</span>
              </li>
              <li className="flex justify-between border-b border-[#004B2C] pb-1">
                <span>Sabtu - Minggu</span>
                <span className="font-semibold text-white">08.00 - 22.00 WIB</span>
              </li>
              <li className="text-[11px] text-[#E58AF1] pt-1">
                *Pesanan katering dapat dijadwalkan fleksibel.
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Sosmed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E58AF1] mb-3 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" />
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-xs text-[#DCEDE2]/80">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full flex items-center gap-2 p-2 rounded-xl bg-[#002D1B] border border-[#E58AF1]/25 hover:border-[#E58AF1] transition-all text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-[#004B2C] text-[#E58AF1] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-[11px]">WhatsApp Resmi</div>
                  <div className="text-[10px] text-[#DCEDE2]/60">+62 812-3456-7890</div>
                </div>
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center gap-2 p-2 rounded-xl bg-[#002D1B] border border-[#E58AF1]/25 hover:border-[#E58AF1] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#004B2C] text-[#E58AF1] flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-[11px]">Instagram</div>
                  <div className="text-[10px] text-[#DCEDE2]/60">@warungtehhera</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#004B2C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCEDE2]/60">
          <p>© {new Date().getFullYear()} Warung Teh Hera. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Diracik dengan <Heart className="w-3.5 h-3.5 text-[#E58AF1] fill-[#E58AF1]" /> untuk penikmat kuliner nusantara.
          </p>
        </div>
      </div>
    </footer>
  );
}
