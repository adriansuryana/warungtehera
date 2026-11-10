"use client";

import { useState, useEffect } from "react";
import UnderConstruction from "../components/UnderConstruction";
import SuperAppMain from "../components/superapp/SuperAppMain";

export default function Home() {
  const [showSuperApp, setShowSuperApp] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "true" || params.get("app") === "true") {
        setShowSuperApp(true);
      }
    }
  }, []);

  if (showSuperApp) {
    return <SuperAppMain onBackToConstruction={() => setShowSuperApp(false)} />;
  }

  return <UnderConstruction onPreviewClick={() => setShowSuperApp(true)} />;
}
