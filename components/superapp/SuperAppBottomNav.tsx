"use client";

import { Home, Utensils, Briefcase, MapPin } from "lucide-react";

interface SuperAppBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function SuperAppBottomNav({
  activeSection,
  onNavigate,
}: SuperAppBottomNavProps) {
  const tabs = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "investor", label: "Visi Misi", icon: Briefcase },
    { id: "location", label: "Lokasi", icon: MapPin },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-[#D8E500] border-t-2 border-[#084C3F] px-2 py-1.5 shadow-[0_-4px_16px_rgba(8,76,63,0.15)] max-w-xl mx-auto">
      <div className="grid grid-cols-4 items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all active:scale-90 ${
                isActive
                  ? "text-[#084C3F] font-black"
                  : "text-[#084C3F]/60 font-semibold hover:text-[#084C3F]"
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-all ${
                  isActive ? "bg-[#084C3F] text-[#D8E500]" : ""
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
