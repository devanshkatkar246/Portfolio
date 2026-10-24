import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.name.toLowerCase());
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-body ${
        scrolled
          ? "bg-[#121426]/85 backdrop-blur-xl border-b border-[#FFDCE8]/15 py-3 shadow-[0_4px_30px_rgba(18,20,36,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Monogram Brand */}
        <motion.a
          href="#home"
          aria-label="Devansh Katkar Home"
          className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5] rounded-lg p-1"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-2xl font-black tracking-tight text-[#F8F5FF] group-hover:text-[#FFB5D5] transition-colors">
            DK
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FFB5D5] group-hover:bg-[#F5C2DA] transition-colors shadow-[0_0_8px_rgba(255,181,213,0.7)]" />
        </motion.a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5] ${
                  isActive
                    ? "text-[#FFB5D5] font-semibold"
                    : "text-[#E1DCEB]/80 hover:text-[#F8F5FF]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#FFB5D5]/15 border border-[#FFB5D5]/30 rounded-full -z-10 shadow-[0_0_12px_rgba(255,181,213,0.2)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </motion.a>
            );
          })}

          <a
            href="#contact"
            className="ml-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#F5C2DA] text-[#211624] hover:bg-white hover:shadow-[0_0_16px_rgba(245,194,218,0.5)] transition-all duration-200 shadow-[0_2px_12px_rgba(245,194,218,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5]"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 text-xl text-[#F8F5FF] hover:text-[#FFB5D5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5] rounded-lg transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121426]/95 backdrop-blur-2xl border-b border-[#FFDCE8]/15 overflow-hidden font-body"
          >
            <div className="flex flex-col px-6 py-6 space-y-2.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide uppercase transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#FFB5D5]/15 text-[#FFB5D5] font-semibold border border-[#FFB5D5]/30"
                        : "text-[#E1DCEB] hover:text-[#F8F5FF] hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB5D5] shadow-[0_0_6px_#FFB5D5]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[#FFDCE8]/15 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block py-3 rounded-full bg-[#F5C2DA] text-[#211624] text-xs uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(245,194,218,0.3)] hover:bg-white transition-all"
                >
                  LET'S TALK
                </a>
                <a
                  href="/assets/DevanshResume.pdf"
                  download="Devansh_Katkar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block py-3 rounded-full bg-[#181a30] border border-[#D991B5]/40 text-[#F8F5FF] text-xs uppercase tracking-wider font-medium hover:bg-[#FFB5D5]/10 transition-all"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
