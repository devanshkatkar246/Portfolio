import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple mb-8">
        DK
      </div>
      <div className="w-64 h-2 bg-glass rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-neon-blue to-neon-purple"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </div>
      <div className="mt-4 text-neon-blue font-mono text-sm">
        {progress}% INITIALIZING...
      </div>
    </motion.div>
  );
}
