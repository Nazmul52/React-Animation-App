import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Search, Globe, Bell, User } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  useEffect(() => {
    // Animate navbar visibility based on scroll
    if (navRef.current) {
      gsap.to(navRef.current, {
        opacity: showNavbar ? 1 : 0,
        y: showNavbar ? 0 : -40,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [showNavbar]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 50) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      ref={navRef}
      style={{ pointerEvents: showNavbar ? "auto" : "none" }}
      className="w-full bg-[#14387f] text-white shadow-md z-50"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 py-4">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-3">
          <img src="/vite.svg" alt="PEGA Logo" className="h-8 w-8" />
          <span className="font-bold text-xl tracking-wide text-white">PEGA</span>
        </div>
        {/* Center: Nav Links */}
        <ul className="flex gap-8 text-base font-medium text-white list-none m-0 p-0">
          <li className="cursor-pointer">Platform</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Learning</li>
          <li className="cursor-pointer">Customers</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Company</li>
        </ul>
        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <Search size={20} className="text-white cursor-pointer" />
          <Globe size={20} className="text-white cursor-pointer" />
          <Bell size={20} className="text-white cursor-pointer" />
          <User size={20} className="text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
