import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#084C3F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Warung Teh Hera (WTH) | Street Comfort Food & Signature Tea",
  description:
    "Warung Teh Hera (WTH) - Dari Dapur Penuh Cinta. Nikmati Nasi Bakar, Chicken Wings, Sate Taichan, Mix Suke, dan Aneka Seduhan Teh Pilihan. Pesan online langsung via WhatsApp, GoFood, dan GrabFood.",
  icons: {
    icon: "/wth-logo-01.svg",
    shortcut: "/wth-logo-01.svg",
    apple: "/wth-logo-01.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#05332A] text-white selection:bg-[#D8E500] selection:text-[#084C3F] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
