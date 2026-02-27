/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative selection:bg-neon-purple/30 selection:text-neon-blue">
          <CustomCursor />
          <ScrollProgressBar />
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Achievements />
                  <Contact />
                </main>
                <Footer />
                <BackToTop />
              </>
            } />
            <Route path="/under-construction" element={<UnderConstruction />} />
          </Routes>
        </div>
      )}
    </>
  );
}
