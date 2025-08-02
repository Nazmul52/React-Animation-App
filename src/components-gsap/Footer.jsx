import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <p>© 2025 GSAP for React App. All rights reserved.</p>
    </footer>
  );
}
