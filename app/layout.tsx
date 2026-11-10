import type { Metadata, Viewport } from "next";
import RestaurantJsonLd from "../components/RestaurantJsonLd";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#084C3F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://warungtehera.my.id"),
  title: {
    default: "Warung Teh Hera (WTH) | Street Comfort Food & Authentic Tea Cipanas",
    template: "%s | Warung Teh Hera",
  },
  description:
    "Website resmi Warung Teh Hera (WTH) Cipanas, Cianjur. Nikmati menu street comfort food otentik: Nasi Bakar, Chicken Wings, Sate Taichan, Mix Suke & Aneka Seduhan Teh segar. Buka di Jln. Jeprah, Kp. Padarincang.",
  keywords: [
    "Warung Teh Hera",
    "WTH",
    "Warung Teh Hera Cipanas",
    "WTH Cipanas",
    "Kuliner Cipanas",
    "Kuliner Cianjur",
    "Tempat Makan Cipanas",
    "Nasi Bakar Cipanas",
    "Chicken Wings Cipanas",
    "Sate Taichan Cipanas",
    "Mix Suke Cianjur",
    "Es Teh Cipanas",
    "Jalan Jeprah Palasari",
    "Food delivery Cipanas",
    "Kuliner Puncak Cipanas",
  ],
  authors: [{ name: "Warung Teh Hera", url: "https://warungtehera.my.id" }],
  creator: "Warung Teh Hera",
  publisher: "Warung Teh Hera",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "https://warungtehera.my.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://warungtehera.my.id",
    siteName: "Warung Teh Hera (WTH)",
    title: "Warung Teh Hera (WTH) | Street Comfort Food & Authentic Tea Cipanas",
    description:
      "Authentic Indonesian Street Comfort Food & Signature Tea di Cipanas, Cianjur. Sajian Nasi Bakar, Chicken Wings, Taichan & Aneka Teh pilihan.",
    images: [
      {
        url: "/wth-logo-01.svg",
        width: 1080,
        height: 1080,
        alt: "Logo Warung Teh Hera (WTH)",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Warung Teh Hera (WTH) | Cipanas, Cianjur",
    description:
      "Website resmi Warung Teh Hera (WTH). Authentic Indonesian Street Comfort Food & Signature Tea di Cipanas, Cianjur.",
    images: ["/wth-logo-01.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/wth-logo-01.svg",
    shortcut: "/wth-logo-01.svg",
    apple: "/wth-logo-01.svg",
  },
  category: "Food & Beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <RestaurantJsonLd />
      </head>
      <body className="min-h-screen bg-[#084C3F] text-white selection:bg-[#D8E500] selection:text-[#084C3F] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
