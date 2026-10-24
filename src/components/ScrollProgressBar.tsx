import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FFB5D5] via-[#F5C2DA] to-[#FFB5D5] origin-left z-50 shadow-[0_0_8px_rgba(255,181,213,0.5)]"
      style={{ scaleX }}
    />
  );
}
