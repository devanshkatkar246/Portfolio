import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCodeBranch } from "react-icons/fa";

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
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
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
    { label: "Shipped Projects", value: 4, suffix: "+", color: "text-[#F8F5FF]" },
    { label: "Hackathons", value: 7, suffix: "x", color: "text-[#FFB5D5]" },
    { label: "Competition Wins", value: 3, suffix: "x", color: "text-[#F5C2DA]" },
    { label: "Technologies", value: 10, suffix: "+", color: "text-[#F8F5FF]" },
  ];

  return (
    <section id="about" className="py-28 relative bg-[#121426] scroll-mt-20 overflow-hidden font-body">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFB5D5]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#211624]/70 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">01 // IDENTITY</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF]">
            Driven by curiosity, <span className="text-[#FFB5D5]">engineered for impact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Refined Profile Photograph Frame (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm">
              {/* Subtle sakura ambient glow underlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB5D5]/20 to-[#211624]/40 rounded-2xl transform rotate-1 blur-md -z-10" />

              {/* Image container with subtle sakura border and shadow */}
              <div className="relative rounded-2xl overflow-hidden bg-[#181a30] border border-[#FFDCE8]/20 aspect-4/5 shadow-[0_20px_50px_rgba(18,20,36,0.7)] group">
                <img
                  src="/assets/dev.jpg"
                  alt="Devansh Katkar"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-[1.02] transition-all duration-700"
                />

                {/* Dark gradient vignette over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121426] via-transparent to-transparent opacity-75" />

                {/* Bottom Overlay Badge inside frame */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#121426]/80 backdrop-blur-md border border-[#FFDCE8]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-body text-[#F8F5FF]">
                    <FaMapMarkerAlt className="text-[#FFB5D5]" />
                    <span className="font-medium">INDORE, INDIA</span>
                  </div>
                  <span className="font-body text-[11px] text-[#FFB5D5] px-2.5 py-0.5 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/25 font-semibold">
                    CSE-IOT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education, and Visual Stats (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-6 text-[#E1DCEB] text-base sm:text-lg leading-relaxed mb-10 font-normal">
              <p>
                I am a <strong className="text-[#F8F5FF] font-semibold">B.Tech CSE–IoT & Cybersecurity</strong> student passionate about creating scalable, real-world tech systems. My focus centers on building intelligent web applications, exploring emerging architectures in <span className="text-[#FFB5D5] font-medium">AI & Machine Learning</span>, and crafting resilient software.
              </p>
              <p>
                As the founder of <span className="text-[#F5C2DA] font-semibold">DevLeague</span>, I actively lead peer-driven coding initiatives, organize hackathon bootcamps, and mentor 100+ students in algorithmic problem-solving. I thrive at the intersection of practical engineering and community leadership.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 sm:p-7 mb-10 border-l-4 border-l-[#FFB5D5] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-[#FFDCE8]/15 text-[#FFB5D5] shrink-0 mt-1">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-body text-xs uppercase text-[#FFB5D5] tracking-wider font-semibold">
                      ACADEMIC BACKGROUND
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="font-body text-xs text-[#E1DCEB]/70">2024 – 2028 (Currently 3rd Year)</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F5FF] mb-1">
                    Prestige Institute of Engineering Management &amp; Research (PIEMR)
                  </h3>
                  <p className="text-sm text-[#E1DCEB]">
                    B.Tech in Computer Science Engineering — IoT &amp; Cyber Security (Including Blockchain)
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid with Visual Hierarchy */}
            <div>
              <div className="font-body text-xs text-[#D991B5] tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold">
                <FaCodeBranch className="text-[#FFB5D5]" />
                <span>TRACK RECORD &amp; METRICS</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-5 text-center border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className={`font-display text-3xl sm:text-4xl font-bold mb-1 ${stat.color}`}>
                      <AnimatedCounter
                        from={0}
                        to={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-xs font-body text-[#E1DCEB]/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
