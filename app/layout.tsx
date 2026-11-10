import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#D8E500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Warung Teh Hera (WTH) | Street Comfort Food & Signature Tea",
  description:
    "Warung Teh Hera (WTH) - Dari Dapur Penuh Cinta. Nikmati Nasi Bakar, Chicken Wings, Sate Taichan, Mix Suke, dan Aneka Seduhan Teh Pilihan. Pesan online langsung via WhatsApp, GoFood, dan GrabFood.",
  icons: {
    icon: "/wth-logo-02.svg",
    shortcut: "/wth-logo-02.svg",
    apple: "/wth-logo-02.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#05332A] text-[#084C3F] selection:bg-[#084C3F] selection:text-[#D8E500] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
