
import { motion } from "motion/react";
import { Search, Globe, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#14387f] text-white fixed top-0 left-0 shadow-md z-50"
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
        {/* Right: Icons */}
        <div className="flex gap-6 items-center">
          <Search className="w-6 h-6 cursor-pointer text-white" />
          <Globe className="w-6 h-6 cursor-pointer text-white" />
          <Bell className="w-6 h-6 cursor-pointer text-white" />
          <User className="w-6 h-6 cursor-pointer text-white" />
        </div>
      </div>
    </motion.nav>
  );
}