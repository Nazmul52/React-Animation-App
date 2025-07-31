import { motion } from "motion/react";
import "../App.css";

export default function VideoCarousel() {
  return (
    <section className="video-carousel">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Demo Videos
      </motion.h2>
      <div className="carousel-list">
        {/* Example carousel items, replace with real videos/images as needed */}
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item * 0.2 }}
            className="carousel-item"
          >
            <img src="/vite.svg" alt={`Demo ${item}`} width={180} />
            <p>Demo Video {item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
