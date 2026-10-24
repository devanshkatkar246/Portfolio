import { motion } from "framer-motion";
import { FaUsers, FaAws, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  badge: string;
  accent: "sakura" | "blossom";
  icon: typeof FaUsers;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Founder & President",
    organization: "DevLeague (DSA Campus Chapter PIEMR)",
    period: "Apr 2026 – Present",
    badge: "FOUNDER & COMMUNITY LEAD",
    accent: "sakura",
    icon: FaUsers,
    points: [
      "Founded DevLeague, a student developer community focused on DSA, algorithmic problem solving, and hackathons.",
      "Scaled the organization to 100+ active members across multiple engineering departments.",
      "Directed core leadership team executing technical bootcamps, competitive programming sessions, and hackathon sprints.",
      "Mentored peers in technical interview prep, Git workflows, and collaborative software architecture.",
    ],
  },
  {
    role: "AWS Student Builder Group Leader",
    organization: "AWS — PIEMR Campus Community",
    period: "Jun 2026 – Present",
    badge: "CLOUD INITIATIVE LEAD",
    accent: "blossom",
    icon: FaAws,
    points: [
      "Selected as AWS Student Builder Group Leader at PIEMR to drive cloud architecture education on campus.",
      "Facilitated hands-on workshops exploring AWS services (EC2, S3, Lambda), cloud security, and serverless concepts.",
      "Collaborated with academic faculty and student leaders to foster an active ecosystem of cloud practitioners.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#211624]/60 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFB5D5]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">03 // TRACK RECORD</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Leadership &amp; <span className="text-[#FFB5D5]">community impact.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            Establishing initiatives, mentoring peers, and cultivating collaborative developer cultures.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const isSakura = exp.accent === "sakura";
            const Icon = exp.icon;

            return (
              <motion.div
                key={exp.role}
                className="glass-card p-8 sm:p-10 relative overflow-hidden border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
              >
                {/* Left accent border line */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1 ${
                    isSakura ? "bg-[#FFB5D5]" : "bg-[#F5C2DA]"
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Role and Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className={`font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          isSakura
                            ? "bg-[#FFB5D5]/15 text-[#FFB5D5] border border-[#FFB5D5]/30"
                            : "bg-[#F5C2DA]/15 text-[#F5C2DA] border border-[#F5C2DA]/30"
                        }`}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F5FF] mb-2">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-[#E1DCEB] font-medium text-base">
                      <Icon className={isSakura ? "text-[#FFB5D5]" : "text-[#F5C2DA]"} />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  {/* Scannable Date Pill */}
                  <div className="inline-flex items-center gap-2 font-body text-xs text-[#E1DCEB]/80 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FFDCE8]/15 shrink-0 self-start">
                    <FaCalendarAlt className="text-[#FFB5D5]/70" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets with high readability */}
                <div className="pt-4 border-t border-[#FFDCE8]/10 space-y-3.5">
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-[#E1DCEB] text-sm sm:text-base leading-relaxed">
                      <FaCheckCircle
                        className={`text-xs mt-1.5 shrink-0 ${
                          isSakura ? "text-[#FFB5D5]" : "text-[#F5C2DA]"
                        }`}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
