import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Performance detection for animations
    const isLowPerformance =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isLowPerformance) {
      // Disable ScrollTrigger for low-performance devices
      ScrollTrigger.disable();

      // Add class to body for CSS fallbacks
      document.body.classList.add("animations-disabled");
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
