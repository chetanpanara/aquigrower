"use client";
import HeroSection from "@/components/HeroSection";
import Contact from "./contact/page";
import AgricultureBlog from "./blogs/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AgricultureBlog />
      <Contact />
    </>
  );
}
