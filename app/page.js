"use client";
import HeroSection from "@/components/HeroSection";
import Contact from "./contact/page";
import AgricultureBlog from "./blogs/page";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
  
      <AgricultureBlog />
      <Testimonials/>
      <Contact />
    </>
  );
}
