import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

export default function VideoCarousel() {
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Animate title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate carousel items
    itemRefs.current.forEach((item, idx) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: idx * 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, []);

  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el;
  };

  return (
    <section className="video-carousel">
      <h2 ref={titleRef}>Demo Videos</h2>
      <div className="carousel-list">
        {/* Example carousel items, replace with real videos/images as needed */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            ref={setItemRef(item - 1)}
            className="carousel-item"
          >
            <img src="/vite.svg" alt={`Demo ${item}`} width={180} />
            <p>Demo Video {item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
