import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VideoCarousel from "./components/VideoCarousel";
import Footer from "./components/Footer";
import AccordionSection from "./components/AccordionSection";
import PerformanceMonitor from "./components/PerformanceMonitor";

export default function MotionApp() {
  return (
    <>
      <Navbar />
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
      <PerformanceMonitor library="Framer Motion" />
    </>
  );
}
