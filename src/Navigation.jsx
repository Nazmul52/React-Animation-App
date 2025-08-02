import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Motion vs GSAP Demo</h1>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === "/"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              Framer Motion
            </Link>
            <Link
              to="/gsap"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === "/gsap"
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              GSAP
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
