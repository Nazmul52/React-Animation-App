
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Search, Globe, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: showNavbar ? "auto" : "none" }}
      className="w-full bg-[#14387f] text-white shadow-md fixed top-0 left-0 right-0 z-50"
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
        </ul>
        {/* Right: Motion/GSAP Links & Icons */}
        <div className="flex gap-6 items-center">
          {/* Motion/GSAP Navigation */}
          <div className="flex space-x-3">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                location.pathname === "/"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-blue-300 hover:bg-blue-900"
              }`}
            >
              Motion
            </Link>
            <Link
              to="/gsap"
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                location.pathname === "/gsap"
                  ? "bg-green-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-green-300 hover:bg-green-900"
              }`}
            >
              GSAP
            </Link>
          </div>
          
          {/* Icons */}
          <div className="flex gap-6 items-center">
            <Search className="w-6 h-6 cursor-pointer text-white" />
            <Globe className="w-6 h-6 cursor-pointer text-white" />
            <Bell className="w-6 h-6 cursor-pointer text-white" />
            <User className="w-6 h-6 cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}