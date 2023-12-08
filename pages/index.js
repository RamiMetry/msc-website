import Hero from "@/sections/landing/hero";
import AppHead from "@/components/app-head";
import LandingBanner from "@/sections/landing/landing-banner";
import AboutUsSection from "@/sections/landing/about-us";
import ServicesSection from "@/sections/landing/services";
import OurCommitment from "@/sections/landing/our-commitment";
import Blog from "@/sections/landing/blog";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <AppHead />

      <main
        style={{
          backgroundColor: "var(--whiteBackground)",
          paddingBottom: "48px",
        }}
      >
        <Hero />
        <LandingBanner />
        <AboutUsSection />
        <ServicesSection />
        <OurCommitment />
        <Blog />
      </main>
    </>
  );
}
