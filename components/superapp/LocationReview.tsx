"use client";

import { MapPin, Clock, Star, ExternalLink, Navigation } from "lucide-react";

export default function LocationReview() {
  const handleOpenMaps = () => {
    const address = encodeURIComponent(
      "Jln Jeprah, Kp Padarincang 004/004, Palasari, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253"
    );
    window.open(`https://maps.google.com/?q=${address}`, "_blank");
  };

  const handleOpenReview = () => {
    window.open(
      "https://maps.google.com/?q=Warung+Teh+Hera+Cipanas",
      "_blank"
    );
  };

  return (
    <section id="location-section" className="px-4 py-5 w-full space-y-4">
      {/* Store Location Card */}
      <div className="p-5 rounded-3xl bg-[#0C594A] border-2 border-[#D8E500]/30 text-white shadow-md">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D8E500] text-[#084C3F] text-[10px] font-black uppercase tracking-wider inline-block mb-1">
              Store Offline
            </span>
            <h3 className="text-lg font-black text-white tracking-tight">
              Warung Teh Hera (Base Store)
            </h3>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#084C3F] border border-[#D8E500]/40 flex items-center justify-center text-[#D8E500] flex-shrink-0">
            <MapPin className="w-5 h-5 text-[#D8E500]" />
          </div>
        </div>

        <p className="text-xs text-white/80 leading-relaxed font-medium mb-3">
          Jln Jeprah, Kp Padarincang 004/004, Palasari, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253
        </p>

        <div className="flex items-center gap-2 text-xs font-bold text-[#D8E500] mb-4 bg-[#084C3F] p-2.5 rounded-xl border border-[#D8E500]/25">
          <Clock className="w-4 h-4 text-[#D8E500] flex-shrink-0" />
          <span>Buka Setiap Hari: 09.00 - 22.00 WIB</span>
        </div>

        <button
          onClick={handleOpenMaps}
          className="w-full py-2.5 px-4 rounded-xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] font-black text-xs active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <Navigation className="w-4 h-4" />
          <span>Petunjuk Arah Google Maps</span>
        </button>
      </div>

      {/* Google Review Box */}
      <div className="p-5 rounded-3xl bg-[#05332A] text-white border-2 border-[#D8E500]/40 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D8E500] text-[#D8E500]" />
            ))}
            <span className="font-black text-sm text-[#D8E500] ml-1">4.9 / 5.0</span>
          </div>
          <h4 className="font-black text-base text-white tracking-tight">
            Yuk, Bagikan Pengalamanmu!
          </h4>
          <p className="text-xs text-white/70">
            Bantu Warung Teh Hera berkembang dengan memberikan ulasan di Google Review.
          </p>
        </div>

        <button
          onClick={handleOpenReview}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] font-black text-xs whitespace-nowrap active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
        >
          <span>Rate Us on Google</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
