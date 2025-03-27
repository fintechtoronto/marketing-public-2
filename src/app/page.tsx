"use client";

import { HeroSection } from "@/components/hero-section";
import { EventsSection } from "@/components/events-section";
import { BlogSection } from "@/components/blog-section";
import { MobileResponsivenessCheck } from "@/components/mobile-responsiveness-check";

export default function Home() {
  return (
    <div>
      <MobileResponsivenessCheck />
      <HeroSection />
      <EventsSection />
      <BlogSection />
    </div>
  );
}
