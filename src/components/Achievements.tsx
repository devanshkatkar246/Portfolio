import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

interface Achievement {
  title: string;
  position: string;
  organization: string;
  year: string;
  rank: "gold" | "silver" | "bronze";
}

const achievements: Achievement[] = [
  {
    title: "Special Mentor’s Choice Award – Cybersecurity Track, IKIGAI",
    position: "Special Award",
    organization: "Award received at a 36-hour national-level hackathon for developing an advanced cybersecurity solution.",
    year: "2026",
    rank: "gold",
  },
  {
    title: "Top 13 Finalist – MUJ HackX - 36 Hour International Hackathon",
    position: "Finalist",
    organization: "Selected among the top finalists out of 1,000+ competing teams in an international hackathon conducted by Manipal University Jaipur.",
    year: "2026",
    rank: "gold",
  },
  {
    title: "Wire Wars",
    position: "1st Position — Champion",
    organization: "Circuit completion & embedded systems challenge by Dept of Electrical Engineering, PIEMR",
    year: "2025",
    rank: "gold",
  },
  {
    title: "Creovate",
    position: "2nd Position — Runner Up",
    organization: "National Mathematics Day software development & computational algorithm competition, PIEMR",
    year: "2026",
    rank: "silver",
  },
  {
    title: "CodeStorm",
    position: "3rd Position — Podium Finish",
    organization: "Programming & algorithmic software development sprint hosted by AI Club PIEMR",
    year: "2026",
    rank: "bronze",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#211624]/60 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">05 // HONORS</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Awards, hackathons &amp; <span className="text-[#FFB5D5]">podium finishes.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            Competitive programming tournaments and national hackathons demonstrating velocity and problem-solving under pressure.
          </p>
        </div>

        {/* Editorial Timeline List */}
        <div className="space-y-4">
          {achievements.map((item, index) => {
            const isGold = item.rank === "gold";

            return (
              <motion.div
                key={index}
                className="glass-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ x: 4 }}
              >
                {/* Left accent marker on hover */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#FFB5D5]"
                />

                <div className="flex items-start sm:items-center gap-4">
                  {/* Icon Badge */}
                  <div
                    className={`p-3 rounded-xl border shrink-0 ${
                      isGold
                        ? "bg-[#FFB5D5]/10 border-[#FFB5D5]/30 text-[#FFB5D5]"
                        : "bg-[#F5C2DA]/10 border-[#F5C2DA]/30 text-[#F5C2DA]"
                    }`}
                  >
                    {isGold ? (
                      <FaTrophy size={20} />
                    ) : item.rank === "silver" ? (
                      <FaMedal size={20} />
                    ) : (
                      <FaAward size={20} />
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F5FF] group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <span
                        className="font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FFB5D5]/15 text-[#FFB5D5] border border-[#FFB5D5]/30"
                      >
                        {item.position}
                      </span>
                    </div>

                    <p className="text-sm text-[#E1DCEB] leading-relaxed max-w-2xl font-normal">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Year Pill */}
                <div className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-[#FFDCE8]/15 text-[#E1DCEB]/80 shrink-0 self-start sm:self-center">
                  {item.year}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
