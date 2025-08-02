import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiggyBank, Sparkles, Users } from "lucide-react";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Drive down cost-to-serve",
    icon: PiggyBank,
  },
  {
    title: "Work smarter, not harder",
    icon: Sparkles,
  },
  {
    title: "Boost loyalty and retention",
    icon: Users,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    if (cards.length > 0) {
      // Ensure cards start from a clean state
      gsap.set(cards, { opacity: 0, y: 40 });
      
      // Create a single ScrollTrigger for the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true, // Only trigger once
          onComplete: () => {
            // Ensure cards are fully visible and positioned correctly after animation
            gsap.set(cards, { opacity: 1, y: 0 });
          }
        }
      });
      
      // Animate cards with smooth stagger
      tl.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8, // Slightly shorter duration for smoother feel
        stagger: 0.2, // Reduced stagger for quicker completion
        ease: "power2.out"
      });
    }
  }, []);

  const setCardRef = (index) => (el) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="features-section">
      <div className="features-list">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              ref={setCardRef(idx)}
              className="feature-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Icon size={32} strokeWidth={2} color="#1e293b" />
                <h3 style={{ margin: 0 }}>{feature.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
