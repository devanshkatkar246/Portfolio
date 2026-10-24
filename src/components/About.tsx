import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Honor prefers-reduced-motion for accessibility
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats: StatItem[] = [
    { label: "Projects", value: 4, suffix: "+" },
    { label: "Hackathons", value: 7, suffix: "+" },
    { label: "Competition Wins", value: 3, suffix: "+" },
    { label: "Technologies", value: 10, suffix: "+" },
  ];

  return (
    <section
      id="about"
      aria-label="About Devansh Katkar"
      className="py-28 lg:py-32 relative bg-[#111323] scroll-mt-20 overflow-hidden font-body text-[#F7F5FF]"
    >
      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F5A6CC]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-[#17192B]/90 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FFD0E5]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F5A6CC]">
              01 // IDENTITY
            </span>
            <div className="h-px w-12 bg-[#F5A6CC]/30" />
          </motion.div>

          <motion.h2
            className="font-display font-bold tracking-tight text-[#F7F5FF] leading-[1.14] text-3xl sm:text-4xl lg:text-[clamp(2.25rem,4vw,3.5rem)] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Driven by curiosity,{" "}
            <span className="text-[#F5A6CC]">engineered for impact.</span>
          </motion.h2>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">

          {/* Left Column — Personal Identity & Photograph (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md group">
              {/* Soft ambient Sakura-blush glow underlay */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#F5A6CC]/20 via-[#17192B] to-[#FFD0E5]/15 rounded-3xl blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Profile Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#17192B] border border-[#FFD0E5]/20 aspect-[4/5] shadow-[0_20px_50px_rgba(17,19,35,0.7)]">
                <img
                  src="/assets/dev.jpg"
                  alt="Devansh Katkar — AI Engineer & Full-Stack Builder"
                  className="w-full h-full object-cover object-center contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Cinematic bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111323] via-[#111323]/25 to-transparent opacity-85 pointer-events-none" />

                {/* Overlaid Badges */}
              </div>
            </div>
          </motion.div>

          {/* Right Column — My Story & Education (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Story Paragraphs */}
            <div className="space-y-6 text-[#B7B6C7] text-base sm:text-lg leading-relaxed mb-10 font-normal">
              <p>
                I am an engineering undergraduate pursuing my <strong className="text-[#F7F5FF] font-semibold">B.Tech in Computer Science Engineering</strong> at Prestige Institute of Engineering Management &amp; Research, Indore, specializing in <span className="text-[#F5A6CC] font-medium">IoT &amp; Cybersecurity</span>. My technical exploration centers on <strong className="text-[#F7F5FF] font-semibold">AI, Machine Learning</strong>, and modern full-stack development—turning conceptual architectures into practical, deployable software.
              </p>
              <p>
                Beyond independent building, I lead <span className="text-[#FFD0E5] font-semibold">DevLeague</span> and direct the <span className="text-[#F5A6CC] font-semibold">AWS Student Builder Group</span> on campus. I organize hackathons, technical workshops, and collaborative problem-solving sessions, dedicated to cultivating an environment where peers build velocity and ship real projects together.
              </p>
            </div>

            {/* Refined Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#17192B]/75 backdrop-blur-md border border-[#FFD0E5]/15 border-l-4 border-l-[#F5A6CC] relative overflow-hidden shadow-[0_12px_32px_rgba(17,19,35,0.5)]">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#F5A6CC] shrink-0 mt-0.5 shadow-[0_2px_10px_rgba(245,166,204,0.15)]">
                  <FaGraduationCap size={22} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs uppercase text-[#F5A6CC] tracking-wider font-semibold">
                      EDUCATION
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#B7B6C7]/80 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      <FaCalendarAlt size={10} className="text-[#F5A6CC]" />
                      <span>2024 – 2028</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F7F5FF] mb-1">
                    Prestige Institute of Engineering Management &amp; Research (PIEMR)
                  </h3>

                  <p className="text-sm text-[#F7F5FF]/90 font-medium">
                    B.Tech — Computer Science Engineering
                  </p>
                  <p className="text-xs text-[#B7B6C7] mt-0.5">
                    Specialization: IoT &amp; Cybersecurity
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Metrics Section: 4 Responsive Cards Beneath Main Content */}
        <motion.div
          className="pt-10 border-t border-white/10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-[#17192B]/70 backdrop-blur-md border border-[#FFD0E5]/15 hover:border-[#F5A6CC]/40 transition-all duration-300 text-center flex flex-col justify-center items-center shadow-[0_8px_24px_rgba(17,19,35,0.4)] hover:shadow-[0_12px_32px_rgba(245,166,204,0.12)] group"
                whileHover={{ y: -4 }}
              >
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5A6CC] mb-2 tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#B7B6C7] group-hover:text-[#F7F5FF] transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
