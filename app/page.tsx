"use client";

import { useState } from "react";
import WelcomeScreen from "../components/superapp/WelcomeScreen";
import SuperAppHeader from "../components/superapp/SuperAppHeader";
import ModernAppDashboard from "../components/superapp/ModernAppDashboard";
import FoodDetailModal from "../components/superapp/FoodDetailModal";
import CartDrawer from "../components/superapp/CartDrawer";
import InvestorVision from "../components/superapp/InvestorVision";
import LocationReview from "../components/superapp/LocationReview";
import SuperAppBottomNav from "../components/superapp/SuperAppBottomNav";
import { MenuItem } from "../types/menu";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState("home");
  const [selectedFoodDetail, setSelectedFoodDetail] = useState<MenuItem | null>(null);

  const handleAddToCart = (item: MenuItem, qty = 1) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + qty,
    }));
  };

  const handleClearCart = () => {
    setCart({});
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return {
        ...prev,
        [id]: updated,
      };
    });
  };

  const scrollToExplore = () => {
    document.getElementById("app-dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "menu") {
      document.getElementById("app-dashboard")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "investor") {
      document.getElementById("investor-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "location") {
      document.getElementById("location-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#05332A] flex justify-center selection:bg-[#D8E500] selection:text-[#084C3F]">
      {/* SuperApp Mobile Container Wrapper */}
      <div className="w-full max-w-xl min-h-screen bg-[#084C3F] text-white flex flex-col relative shadow-2xl pb-24">
        {/* Top Checkerboard Tape */}
        <div
          className="w-full h-4 flex-shrink-0"
          style={{
            backgroundImage: "url('/checkerboard.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
          }}
        />

        {/* 1. Onboarding / Welcome Splash Hero (Layar Kiri Mockup Referensi) */}
        <WelcomeScreen onExplore={scrollToExplore} />

        {/* 2. SuperApp Header */}
        <div id="app-dashboard" className="scroll-mt-4">
          <SuperAppHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onLocationClick={() => handleNavigate("location")}
          />
        </div>

        {/* 3. Modern App Dashboard with 2-Column Food Grid (Layar Tengah Mockup Referensi) */}
        <ModernAppDashboard
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cart={cart}
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onSelectItem={(item) => setSelectedFoodDetail(item)}
        />

        {/* 4. Brand Vision & Investor Deck (Professional & Concise) */}
        <InvestorVision />

        {/* 5. Offline Store Location & Google Reviews */}
        <LocationReview />

        {/* Brand Footer Info */}
        <footer className="px-4 py-8 text-center text-xs text-white/70 space-y-2 border-t border-[#D8E500]/20 mt-4">
          <p className="font-black text-sm uppercase tracking-wider text-[#D8E500]">
            WARUNG TEH HERA (WTH)
          </p>
          <p className="font-medium text-[11px] text-white/80">
            From Small Beginnings Come Great Things.
          </p>
          <p className="text-[10px] text-white/50">
            Cipanas, Cianjur • Instagram: @warung_tehera • Website: warungtehera.my.id
          </p>
          <p className="text-[10px] text-white/40 pt-1">
            © {new Date().getFullYear()} Warung Teh Hera. All rights reserved.
          </p>

          {/* Bottom Checkerboard Accent */}
          <div
            className="w-full h-4 mt-4"
            style={{
              backgroundImage: "url('/checkerboard.svg')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "20px 20px",
            }}
          />
        </footer>

        {/* Food Detail Modal Sheet (Layar Kanan Mockup Referensi) */}
        <FoodDetailModal
          item={selectedFoodDetail}
          onClose={() => setSelectedFoodDetail(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Floating Cart Drawer Bar */}
        <CartDrawer
          cart={cart}
          onClearCart={handleClearCart}
          onUpdateQty={handleUpdateQty}
        />

        {/* Bottom SuperApp Navigation Bar */}
        <SuperAppBottomNav
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
