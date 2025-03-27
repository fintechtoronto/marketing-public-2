"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme/theme-provider";

export function MobileResponsivenessCheck() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // This is just a client-side check to ensure viewport meta tag is working
    console.log("Mobile responsiveness check running");
    console.log(`Current theme: ${theme}`);
    console.log(`Viewport width: ${window.innerWidth}px`);
  }, [theme]);
  
  return null; // This component doesn't render anything
}
