import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isPointerFine || isReducedMotion) {
      return;
    }

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner Dot in Soft Sakura Pink */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FFB5D5] rounded-full pointer-events-none z-50 shadow-[0_0_8px_#FFB5D5]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.3 }}
      />
      {/* Outer Delicate Ring in Muted Rose */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-[#D991B5]/50 rounded-full pointer-events-none z-50 shadow-[0_0_12px_rgba(255,181,213,0.2)]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "#FFB5D5" : "rgba(217, 145, 181, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.6 }}
      />
    </div>
  );
}
