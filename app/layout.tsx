import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#E58AF1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Warung Teh Hera | Website Sedang Dalam Pengembangan",
  description:
    "Website Warung Teh Hera sedang dalam pengembangan. Kami sedang meracik pengalaman terbaik untukmu. Tunggu ya, Sahabat Teh Hera!",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#E58AF1] text-[#004B2C] selection:bg-[#004B2C] selection:text-[#E58AF1] antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
