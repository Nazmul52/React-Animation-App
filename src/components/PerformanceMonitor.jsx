import { useState, useEffect } from "react";

export default function PerformanceMonitor({ library }) {
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - startTime >= 1000) {
        setFps(Math.round(frameCount));
        frameCount = 0;
        startTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    // Measure memory usage if available
    const measureMemory = () => {
      if (performance.memory) {
        setMemory(Math.round(performance.memory.usedJSHeapSize / 1048576)); // Convert to MB
      }
    };

    const memoryInterval = setInterval(measureMemory, 1000);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(memoryInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-sm font-mono z-50">
      <div className="flex flex-col gap-1">
        <div className="text-xs text-gray-300">{library} Performance</div>
        <div>FPS: {fps}</div>
        {memory > 0 && <div>Memory: {memory}MB</div>}
      </div>
    </div>
  );
}
