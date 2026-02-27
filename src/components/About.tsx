import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
function AnimatedCounter({
  from,
  to,
  suffix,
}: {
  from: number;
  to: number;
  suffix: string;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2 });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, rounded]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export default function About() {
  const stats = [
    { label: "Projects", value: 4, suffix: "+" },
    { label: "Hackathons", value: 4, suffix: "x" },
    { label: "Wins", value: 2, suffix: "x" },
    { label: "Technologies", value: 5, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-r from-neon-blue to-neon-purple glow-purple">
              <div className="w-full h-full rounded-full bg-dark-bg overflow-hidden flex items-center justify-center">
                <div className="text-6xl text-gray-600 font-bold"><img src="/assets/dev.jpg"></img></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I am a B.Tech CSE–IoT student passionate about building real-world
              tech solutions. I enjoy working on innovative ideas, participating
              in hackathons, and exploring emerging technologies like AI,
              Blockchain, and IoT. My goal is to grow as a developer, lead
              impactful projects, and build meaningful technology-driven
              solutions.
            </p>

            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-bold text-neon-blue mb-2">
                Education
              </h3>
              <p className="font-semibold">
                Prestige Institute of Engineering Management & Research (PIEMR),
                Indore
              </p>
              <p className="text-gray-400 text-sm mt-1">
                B.Tech CSE – IoT & Cyber Security (Including Blockchain)
              </p>
              <p className="text-neon-purple text-sm mt-2 font-mono">
                2024 – 2028 (Currently 2nd Year)
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 text-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)",
                  }}
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple mb-1">
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
