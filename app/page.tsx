"use client";

import { useState } from "react";
import SuperAppHeader from "../components/superapp/SuperAppHeader";
import StoriesBar from "../components/superapp/StoriesBar";
import HeroBanner from "../components/superapp/HeroBanner";
import MenuCatalog from "../components/superapp/MenuCatalog";
import CartDrawer from "../components/superapp/CartDrawer";
import InvestorVision from "../components/superapp/InvestorVision";
import LocationReview from "../components/superapp/LocationReview";
import SuperAppBottomNav from "../components/superapp/SuperAppBottomNav";
import { MenuItem } from "../types/menu";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState("home");

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (item: MenuItem) => {
    setCart((prev) => {
      const current = prev[item.id] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return {
        ...prev,
        [item.id]: current - 1,
      };
    });
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "menu") {
      document.getElementById("menu-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "investor") {
      document.getElementById("investor-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "location") {
      document.getElementById("location-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectStory = (storyId: string) => {
    if (storyId === "investor") {
      scrollToSection("investor");
    } else {
      scrollToSection("menu");
    }
  };

  return (
    <div className="min-h-screen bg-[#05332A] flex justify-center selection:bg-[#D8E500] selection:text-[#084C3F]">
      {/* SuperApp Mobile Container Wrapper - Deep Pine Green Background */}
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

        {/* 1. SuperApp Header */}
        <SuperAppHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onLocationClick={() => scrollToSection("location")}
        />

        {/* 2. Stories Highlights Bar */}
        <StoriesBar onSelectStory={handleSelectStory} />

        {/* 3. Hero Streetwear Banner */}
        <HeroBanner />

        {/* 4. Menu Catalog Section */}
        <MenuCatalog
          searchQuery={searchQuery}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />

        {/* 5. Visi Misi & Investor Section */}
        <InvestorVision />

        {/* 6. Offline Store Location & Google Reviews */}
        <LocationReview />

        {/* Brand Footer Info */}
        <footer className="px-4 py-8 text-center text-xs text-white/75 space-y-2 border-t-2 border-[#D8E500]/20 mt-4">
          <p className="font-black text-sm uppercase tracking-wider text-[#D8E500]">
            WARUNG TEH HERA (WTH)
          </p>
          <p className="font-semibold text-[11px] text-white/90">
            From Small Beginnings Come Great Things.
          </p>
          <p className="text-[10px] text-white/60">
            Instagram: @warung_tehera • Website: warungtehera.my.id
          </p>
          <p className="text-[10px] text-white/40 pt-2">
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

        {/* Floating Cart Drawer */}
        <CartDrawer
          cart={cart}
          onClearCart={handleClearCart}
          onUpdateQty={handleUpdateQty}
        />

        {/* Bottom SuperApp Navigation Bar */}
        <SuperAppBottomNav
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      </div>
    </div>
  );
}
