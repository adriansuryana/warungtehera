"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Bell, Send, CheckCircle2, MessageSquare, Gift, ShieldCheck } from "lucide-react";

export default function NotificationSection() {
  const [contactInput, setContactInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;

    setLoading(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      // Trigger Confetti dengan palet warna brand: Hijau #004B2C & Pink #E58AF1
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#004B2C", "#E58AF1", "#F1B5FA", "#FFFFFF", "#185B36"],
      });
    }, 600);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Warung Teh Hera! Saya ingin didaftarkan ke daftar VIP promo launching yaa. Kontak saya: ${contactInput || "Calon Pelanggan Setia"}`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-20 px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#003C23] via-[#002B19] to-[#011C11] border-2 border-[#E58AF1]/35 shadow-2xl shadow-[#00140A]">
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#E58AF1]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#004B2C]/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B2C] border border-[#E58AF1]/40 text-xs font-bold text-[#E58AF1] mb-4">
            <Gift className="w-4 h-4" />
            <span>Voucher Diskon Opening 25% Untuk 100 Pendaftar Pertama</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Jadilah yang Pertama Tahu Saat Dapur Resmi Dibuka!
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#DCEDE2]/80 leading-relaxed">
            Tinggalkan WhatsApp atau Email Anda. Kami akan mengirimkan undangan eksklusif dan voucher potongan harga langsung ke gadget Anda saat website rilis.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    placeholder="Masukkan Nomor WhatsApp atau Email..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#001D11]/90 border border-[#E58AF1]/40 text-white placeholder-[#DCEDE2]/50 text-sm focus:outline-none focus:border-[#E58AF1] focus:ring-2 focus:ring-[#E58AF1]/20 transition-all shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E58AF1] via-[#F1B5FA] to-[#E58AF1] hover:brightness-105 active:scale-95 text-[#003822] font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#E58AF1]/25 whitespace-nowrap cursor-pointer"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-[#003822] border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Bell className="w-4 h-4 fill-[#003822]" />
                      <span>Kabari Saya!</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#DCEDE2]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E58AF1]" />
                <span>Privasi aman 100%. Kami tidak akan mengirimkan spam.</span>
              </div>
            </form>
          ) : (
            <div className="mt-8 p-6 rounded-2xl bg-[#002616] border border-[#E58AF1]/40 animate-fadeIn">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E58AF1]/20 text-[#E58AF1] mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Terima Kasih! Anda Sudah Terdaftar 🎉
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#DCEDE2]/80">
                Kontak <span className="text-[#E58AF1] font-semibold">{contactInput}</span> telah kami catat dalam daftar pelanggan prioritas Warung Teh Hera.
              </p>

              <button
                type="button"
                onClick={handleOpenWhatsAppDirect}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004B2C] hover:bg-[#005B35] text-[#E58AF1] border border-[#E58AF1]/40 text-xs font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Klaim Kupon Langsung ke WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
