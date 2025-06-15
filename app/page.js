import HeroSection from "@/components/HeroSection";
import Contact from "./contact/page";
import GalleryPage from "./gallary/page";
import AgricultureBlog from "./blogs/page";


export default function Home() {
  return (
    <>
      <HeroSection />
      <GalleryPage />
      <AgricultureBlog/>
      <Contact />
    </>
  );
}
