import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css";

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    // Animate title
    timeline.fromTo(titleRef.current, 
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    
    // Animate description
    timeline.fromTo(descriptionRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.2"
    );
    
    // Animate video container
    timeline.fromTo(videoRef.current, 
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7 },
      "-=0.2"
    );
  }, []);

  return (
    <section ref={heroRef} className="bg-white rounded-2xl px-18 py-12 flex flex-col items-center justify-center mb-10">
      <h1
        ref={titleRef}
        className="text-4xl md:text-7xl px-58 font-extrabold text-[#14387f] mb-4 text-center"
      >
        AI-powered customer service
      </h1>
      <p
        ref={descriptionRef}
        className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Our software optimizes workflows and interactions across the entire customer lifecycle
      </p>
      <div
        ref={videoRef}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow">
          <video className="w-full h-full object-cover rounded-xl" controls poster="/vite.svg">
            <source src="/public/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
