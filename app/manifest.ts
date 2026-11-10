import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Warung Teh Hera (WTH)",
    short_name: "WTH",
    description: "Authentic Indonesian Street Comfort Food & Signature Tea Cipanas, Cianjur.",
    start_url: "/",
    display: "standalone",
    background_color: "#084C3F",
    theme_color: "#084C3F",
    icons: [
      {
        src: "/wth-logo-01.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
