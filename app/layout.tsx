import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#D8E500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Warung Teh Hera | Website Sedang Dalam Pengembangan",
  description:
    "Website Warung Teh Hera sedang dalam pengembangan. Kami sedang meracik pengalaman terbaik untukmu. Tunggu ya, Sahabat Teh Hera!",
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
    <html lang="id">
      <body className="min-h-screen bg-[#D8E500] text-[#084C3F] selection:bg-[#084C3F] selection:text-[#D8E500] antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
