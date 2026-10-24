import { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaUsers,
  FaCalendarAlt,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { SiAmazonwebservices } from "react-icons/si";

export interface TimelineExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  icon: IconType;
}

const experiences: TimelineExperience[] = [
  {
    id: "eventdhara",
    role: "Software Engineer Intern",
    organization: "EventDhara",
    period: "Feb 2026 – May 2026",
    badge: "Internship",
    icon: FaLaptopCode,
  },
  {
    id: "inamigos",
    role: "AI Web Development Intern",
    organization: "InAmigos Foundation",
    period: "Jun 2026 – Jul 2026",
    badge: "Internship",
    icon: FaBrain,
  },
  {
    id: "devleague",
    role: "Founder & President",
    organization: "DevLeague (DSA Campus Chapter, PIEMR)",
    period: "Apr 2026 – Present",
    badge: "Leadership",
    icon: FaUsers,
  },
  {
    id: "aws-group",
    role: "AWS Student Builder Group Leader",
    organization: "AWS Student Builder Group, PIEMR",
    period: "Jun 2026 – Present",
    badge: "Cloud Lead",
    icon: SiAmazonwebservices,
  },
];

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="experience"
      aria-label="Experience & Leadership"
      className="py-24 lg:py-28 relative bg-[#111323] scroll-mt-20 font-body text-[#F7F5FF] overflow-hidden"
    >
      {/* Background ambient atmospheric glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#F5A6CC]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#17192B]/80 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F5A6CC]">
              03 // CAREER &amp; LEADERSHIP
            </span>
            <div className="h-px w-10 bg-[#F5A6CC]/40" />
          </motion.div>

          <motion.h2
            className="font-display font-bold tracking-tight text-[#F7F5FF] leading-[1.14] text-3xl sm:text-4xl lg:text-[clamp(2.25rem,4vw,3.25rem)] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience &amp; <span className="text-[#F5A6CC]">Leadership.</span>
          </motion.h2>

          <motion.p
            className="text-[#B7B6C7] text-sm sm:text-base leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building real-world experience through engineering, community leadership, and collaborative innovation.
          </motion.p>
        </div>

        {/* Botanical Vertical Timeline */}
        <div className="relative py-4">
          
          {/* Continuous Glowing Botanical Stem (Center on Desktop, Left on Mobile) */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#F5A6CC]/25 via-[#F5A6CC]/60 to-[#F5A6CC]/25 pointer-events-none"
            aria-hidden="true"
          />

          {/* Timeline Nodes & Leaf Panels */}
          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;
              const isHovered = hoveredId === exp.id;

              return (
                <div
                  key={exp.id}
                  className="relative flex items-center md:justify-between group"
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Central Botanical Leaf-Bud Node on Timeline Stem */}
                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#111323] border-2 transition-all duration-300 z-20 flex items-center justify-center ${
                      isHovered
                        ? "border-[#F5A6CC] scale-125 shadow-[0_0_12px_rgba(245,166,204,0.85)]"
                        : "border-[#F5A6CC]/50 shadow-[0_0_6px_rgba(245,166,204,0.3)]"
                    }`}
                    aria-hidden="true"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        isHovered ? "bg-[#FFD0E5]" : "bg-[#F5A6CC]"
                      }`}
                    />
                  </div>

                  {/* Horizontal Stem Connector Branch */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1.5px] transition-colors duration-300 pointer-events-none ${
                      isEven
                        ? "right-1/2 w-10 lg:w-14"
                        : "left-1/2 w-10 lg:w-14"
                    } ${
                      isHovered ? "bg-[#F5A6CC]" : "bg-[#F5A6CC]/30"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Mobile Connecting Branch */}
                  <div
                    className={`md:hidden absolute left-6 top-1/2 -translate-y-1/2 w-8 h-[1.5px] transition-colors duration-300 pointer-events-none ${
                      isHovered ? "bg-[#F5A6CC]" : "bg-[#F5A6CC]/30"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Desktop Layout: Left-Side Item */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto md:hidden"
                    }`}
                  >
                    <motion.div
                      tabIndex={0}
                      role="article"
                      aria-label={`${exp.role} at ${exp.organization}`}
                      className={`ml-14 md:ml-0 p-5 sm:p-6 rounded-[28px_8px_28px_8px] bg-gradient-to-br from-[#F5A6CC]/10 via-[#17192B]/85 to-[#111323]/95 border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(17,19,35,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A6CC] relative overflow-hidden ${
                        isHovered
                          ? "border-[#F5A6CC]/50 shadow-[0_0_25px_rgba(245,166,204,0.3),0_8px_25px_rgba(17,19,35,0.7)] -translate-y-1"
                          : "border-[#FFD0E5]/15"
                      }`}
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      {/* Faint Botanical Leaf Vein SVG */}
                      <svg
                        className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 28C10 20 18 12 28 4M28 4C23 7 19 12 18 18M28 4C22 10 16 13 10 14"
                          stroke="#F5A6CC"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Content Row: Icon, Titles, and Duration */}
                      <div className="flex items-center gap-4">
                        {/* Logo/Icon */}
                        <div
                          className={`p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 transition-all duration-300 ${
                            isHovered
                              ? "text-[#FFD0E5] bg-[#F5A6CC]/15 border-[#F5A6CC]/40 shadow-[0_0_10px_rgba(245,166,204,0.25)]"
                              : "text-[#F5A6CC]"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        {/* Title, Organization, and Duration */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-0.5">
                            <h3 className="font-display font-bold text-base sm:text-lg text-[#F7F5FF] group-hover:text-white transition-colors truncate">
                              {exp.role}
                            </h3>
                            <span className="text-[10px] uppercase font-semibold text-[#F5A6CC] px-2 py-0.5 rounded-full bg-[#F5A6CC]/10 border border-[#F5A6CC]/25">
                              {exp.badge}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm font-medium text-[#F5A6CC] truncate mb-1">
                            {exp.organization}
                          </p>

                          <div className="flex items-center gap-1.5 text-[11px] text-[#B7B6C7]/80">
                            <FaCalendarAlt size={10} className="text-[#F5A6CC]/80" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Layout: Right-Side Item */}
                  {!isEven && (
                    <div className="hidden md:block w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] ml-auto">
                      <motion.div
                        tabIndex={0}
                        role="article"
                        aria-label={`${exp.role} at ${exp.organization}`}
                        className={`p-5 sm:p-6 rounded-[8px_28px_8px_28px] bg-gradient-to-br from-[#F5A6CC]/10 via-[#17192B]/85 to-[#111323]/95 border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(17,19,35,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A6CC] relative overflow-hidden ${
                          isHovered
                            ? "border-[#F5A6CC]/50 shadow-[0_0_25px_rgba(245,166,204,0.3),0_8px_25px_rgba(17,19,35,0.7)] -translate-y-1"
                            : "border-[#FFD0E5]/15"
                        }`}
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        {/* Faint Botanical Leaf Vein SVG */}
                        <svg
                          className="absolute -bottom-2 -left-2 w-16 h-16 pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity -scale-x-100"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 28C10 20 18 12 28 4M28 4C23 7 19 12 18 18M28 4C22 10 16 13 10 14"
                            stroke="#F5A6CC"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Content Row: Icon, Titles, and Duration */}
                        <div className="flex items-center gap-4">
                          {/* Logo/Icon */}
                          <div
                            className={`p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 transition-all duration-300 ${
                              isHovered
                                ? "text-[#FFD0E5] bg-[#F5A6CC]/15 border-[#F5A6CC]/40 shadow-[0_0_10px_rgba(245,166,204,0.25)]"
                                : "text-[#F5A6CC]"
                            }`}
                          >
                            <Icon size={20} />
                          </div>

                          {/* Title, Organization, and Duration */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-0.5">
                              <h3 className="font-display font-bold text-base sm:text-lg text-[#F7F5FF] group-hover:text-white transition-colors truncate">
                                {exp.role}
                              </h3>
                              <span className="text-[10px] uppercase font-semibold text-[#F5A6CC] px-2 py-0.5 rounded-full bg-[#F5A6CC]/10 border border-[#F5A6CC]/25">
                                {exp.badge}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-[#F5A6CC] truncate mb-1">
                              {exp.organization}
                            </p>

                            <div className="flex items-center gap-1.5 text-[11px] text-[#B7B6C7]/80">
                              <FaCalendarAlt size={10} className="text-[#F5A6CC]/80" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
