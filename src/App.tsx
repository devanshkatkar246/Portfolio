/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import { Routes, Route } from "react-router-dom";

const UnderConstruction = lazy(() => import("./components/UnderConstruction"));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative bg-[#121426] text-[#F8F5FF] selection:bg-[#FFB5D5]/30 selection:text-[#F8F5FF] min-h-screen font-body">
          <CustomCursor />
          <ScrollProgressBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main id="main-content">
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Achievements />
                    <Certifications />
                    <Contact />
                  </main>
                  <Footer />
                  <BackToTop />
                </>
              }
            />
            <Route
              path="/under-construction"
              element={
                <Suspense
                  fallback={
                    <div className="w-full h-screen bg-[#121426] flex items-center justify-center font-body text-xs text-[#E1DCEB]/60">
                      [ LOADING SANCTUARY MODULE... ]
                    </div>
                  }
                >
                  <UnderConstruction />
                </Suspense>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}
