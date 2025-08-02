import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Info, X } from "lucide-react";

export default function ComparisonInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isGsap = location.pathname === "/gsap";

  const currentLibrary = isGsap ? "GSAP" : "Framer Motion";
  const otherLibrary = isGsap ? "Framer Motion" : "GSAP";

  return (
    <>
      {/* Info Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <Info size={20} />
      </button>

      {/* Info Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Currently Viewing: {currentLibrary}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isGsap ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'}`}>
                  <h3 className="font-bold text-lg mb-2">{currentLibrary} Features:</h3>
                  {isGsap ? (
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Superior performance for complex animations</li>
                      <li>Timeline-based animation control</li>
                      <li>ScrollTrigger plugin for scroll-based animations</li>
                      <li>Imperative API with precise control</li>
                      <li>Excellent cross-browser compatibility</li>
                      <li>Professional-grade animation capabilities</li>
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Declarative React-native approach</li>
                      <li>Layout animations with `layout` prop</li>
                      <li>Easy gesture and interaction handling</li>
                      <li>Built-in scroll and viewport triggers</li>
                      <li>Smaller bundle size for basic animations</li>
                      <li>React-first design philosophy</li>
                    </ul>
                  )}
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Key Implementation Differences:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-600">Framer Motion</h4>
                      <pre className="bg-white p-2 rounded mt-1 text-xs overflow-x-auto">
{`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">GSAP</h4>
                      <pre className="bg-white p-2 rounded mt-1 text-xs overflow-x-auto">
{`useEffect(() => {
  gsap.fromTo(ref.current, 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.4 }
  );
}, []);`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">👀 What to Look For:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Accordion System:</strong> Auto-opening and auto-advancing behavior</li>
                    <li><strong>Scroll Animations:</strong> Elements animate as they enter viewport</li>
                    <li><strong>Performance:</strong> Check the performance monitor in bottom-right</li>
                    <li><strong>Smoothness:</strong> Compare animation fluidity between versions</li>
                    <li><strong>Interaction:</strong> Click accordion headers and observe transitions</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Switch to {otherLibrary} version to compare the same functionality implemented differently.
                  </p>
                  <div className="text-xs text-gray-500">
                    Check the performance monitor (bottom-right) to see real-time FPS and memory usage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
