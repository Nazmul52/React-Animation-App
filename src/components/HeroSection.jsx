import { motion } from "motion/react";
import "../App.css";

export default function HeroSection() {
  return (
    <section className="bg-white rounded-2xl px-18 py-12 flex flex-col items-center justify-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-7xl px-58 font-extrabold text-[#14387f] mb-4 text-center"
      >
        AI-powered customer service
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Our software optimizes workflows and interactions across the entire customer lifecycle
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow">
          <video className="w-full h-full object-cover rounded-xl" controls poster="/vite.svg">
            <source src="/public/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
