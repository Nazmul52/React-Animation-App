import { motion } from "motion/react";
import "../App.css";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="footer"
    >
      <p>© 2025 Motion for React App. All rights reserved.</p>
    </motion.footer>
  );
}
