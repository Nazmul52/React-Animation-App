import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VideoCarousel from "./components/VideoCarousel";
import Footer from "./components/Footer";
import AccordionSection from "./components/AccordionSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4">
          <HeroSection />
          <FeaturesSection />
          {/* <VideoCarousel /> */}

        </div>
          <AccordionSection />

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;