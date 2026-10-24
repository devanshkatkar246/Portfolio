import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 8;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121426] font-body"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="flex items-center gap-2 mb-8">
        <span className="font-display text-4xl font-black tracking-tight text-[#F8F5FF]">
          DK
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFB5D5] shadow-[0_0_8px_#FFB5D5] animate-pulse" />
      </div>

      <div className="w-64 h-1.5 bg-[#181a30] border border-[#FFDCE8]/15 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D991B5] via-[#FFB5D5] to-[#F5C2DA]"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
      </div>

      <div className="mt-4 font-body text-xs tracking-widest text-[#FFB5D5] font-medium uppercase">
        {Math.min(progress, 100)}% // INITIALIZING COMPUTATIONAL SYSTEMS...
      </div>
    </motion.div>
  );
}
