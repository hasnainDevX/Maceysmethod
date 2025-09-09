import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./pages/Home";
import NotFound from "./pages/not-found";

// ✅ Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Example GSAP animation
    gsap.from("body", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
