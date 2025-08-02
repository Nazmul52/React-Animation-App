import Navbar from "./components-gsap/Navbar";
import HeroSection from "./components-gsap/HeroSection";
import FeaturesSection from "./components-gsap/FeaturesSection";
import VideoCarousel from "./components-gsap/VideoCarousel";
import Footer from "./components-gsap/Footer";
import AccordionSection from "./components-gsap/AccordionSection";
import PerformanceMonitor from "./components/PerformanceMonitor";

export default function GsapApp() {
  return (
    <>
      <main className="pt-20 bg-white min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4">
          <HeroSection />
          <FeaturesSection />
          {/* <VideoCarousel /> */}
        </div>
        {/* Add spacing between Features and Accordion */}
        <div className="h-32"></div>
        <AccordionSection />
        {/* <Footer /> */}
      </main>
      <PerformanceMonitor library="GSAP" />
    </>
  );
}
