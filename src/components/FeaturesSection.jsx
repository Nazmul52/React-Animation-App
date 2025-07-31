import { motion } from "motion/react";
import { PiggyBank, Sparkles, Users } from "lucide-react";
import "../App.css";

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
  return (
    <section className="features-section">
      <div className="features-list">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, transform: "translateY(40px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{
                duration: 1.0,
                delay: idx * 0.3,
                easing: "ease-out",
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="feature-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Icon size={32} strokeWidth={2} color="#1e293b" />
                <h3 style={{ margin: 0 }}>{feature.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
