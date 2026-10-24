import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Sparkles,
  ShieldCheck,
  Globe,
  Zap,
  Code2,
  Terminal,
} from "lucide-react";

interface FeaturedAchievement {
  title: string;
  track: string;
  event: string;
  badge: string;
  year: string;
  description: string;
  highlights: string[];
}

interface GalleryAchievement {
  id: string;
  title: string;
  position: string;
  competition: string;
  organization: string;
  year: string;
  description: string;
  rankType: "gold" | "silver" | "bronze" | "finalist";
  icon: typeof Trophy;
  tags: string[];
}

const featuredAchievement: FeaturedAchievement = {
  title: "Special Mentor’s Choice Award",
  track: "Cybersecurity Track",
  event: "IKIGAI — 36-Hour National Hackathon",
  badge: "Special Recognition",
  year: "2026",
  description:
    "Award received at a 36-hour national-level hackathon for developing an advanced cybersecurity solution.",
  highlights: [
    "36-Hour National Sprint",
    "Advanced Cybersecurity Solution",
    "Special Mentor’s Choice Selection",
  ],
};

const galleryAchievements: GalleryAchievement[] = [
  {
    id: "muj-hackx",
    title: "Top 13 Finalist",
    position: "Finalist",
    competition: "MUJ HackX",
    organization:
      "36-Hour International Hackathon • Manipal University Jaipur",
    year: "2026",
    description:
      "Selected among the top finalists out of 1,000+ competing teams in an international hackathon conducted by Manipal University Jaipur.",
    rankType: "finalist",
    icon: Globe,
    tags: ["Top 1.3% of 1,000+ Teams", "36-Hour International Sprint"],
  },
  {
    id: "wire-wars",
    title: "Wire Wars",
    position: "1st Position — Champion",
    competition: "Wire Wars Challenge",
    organization: "Dept of Electrical Engineering, PIEMR",
    year: "2025",
    description:
      "Circuit completion & embedded systems challenge by Dept of Electrical Engineering, PIEMR.",
    rankType: "gold",
    icon: Zap,
    tags: ["1st Place Champion", "Embedded Systems & Hardware"],
  },
  {
    id: "creovate",
    title: "Creovate",
    position: "2nd Position — Runner Up",
    competition: "Creovate Competition",
    organization: "National Mathematics Day • PIEMR",
    year: "2026",
    description:
      "National Mathematics Day software development & computational algorithm competition, PIEMR.",
    rankType: "silver",
    icon: Code2,
    tags: ["2nd Position Runner-Up", "Computational Algorithms"],
  },
  {
    id: "codestorm",
    title: "CodeStorm",
    position: "3rd Position — Podium Finish",
    competition: "CodeStorm Sprint",
    organization: "AI Club, PIEMR",
    year: "2026",
    description:
      "Programming & algorithmic software development sprint hosted by AI Club PIEMR.",
    rankType: "bronze",
    icon: Terminal,
    tags: ["3rd Position Podium", "Algorithmic Speed & Programming"],
  },
];

// Aesthetic configurations matching dark navy & pink identity with rank-specific metallic accents
const rankStyles = {
  gold: {
    accentText: "text-amber-300",
    badgeBg: "bg-amber-400/10",
    badgeBorder: "border-amber-400/30",
    badgeText: "text-amber-300",
    iconBg: "bg-gradient-to-br from-amber-400/15 via-amber-500/5 to-transparent",
    iconBorder: "border-amber-400/35",
    iconColor: "text-amber-400",
    cardBorder: "border-amber-400/20 hover:border-amber-400/55",
    glowColor: "rgba(245, 158, 11, 0.15)",
    topGradient: "from-transparent via-amber-400/60 to-transparent",
    tagBg: "bg-amber-400/5 border-amber-400/20 text-amber-200/90",
  },
  silver: {
    accentText: "text-slate-200",
    badgeBg: "bg-slate-300/10",
    badgeBorder: "border-slate-300/30",
    badgeText: "text-slate-200",
    iconBg: "bg-gradient-to-br from-slate-300/15 via-slate-400/5 to-transparent",
    iconBorder: "border-slate-300/35",
    iconColor: "text-slate-200",
    cardBorder: "border-slate-300/20 hover:border-slate-200/50",
    glowColor: "rgba(203, 213, 225, 0.12)",
    topGradient: "from-transparent via-slate-300/60 to-transparent",
    tagBg: "bg-slate-300/5 border-slate-300/20 text-slate-200/90",
  },
  bronze: {
    accentText: "text-orange-200",
    badgeBg: "bg-orange-400/10",
    badgeBorder: "border-orange-400/30",
    badgeText: "text-orange-200",
    iconBg: "bg-gradient-to-br from-orange-400/15 via-orange-500/5 to-transparent",
    iconBorder: "border-orange-400/35",
    iconColor: "text-orange-300",
    cardBorder: "border-orange-400/20 hover:border-orange-400/50",
    glowColor: "rgba(251, 146, 60, 0.12)",
    topGradient: "from-transparent via-orange-400/60 to-transparent",
    tagBg: "bg-orange-400/5 border-orange-400/20 text-orange-200/90",
  },
  finalist: {
    accentText: "text-[#FFB5D5]",
    badgeBg: "bg-[#FFB5D5]/10",
    badgeBorder: "border-[#FFB5D5]/30",
    badgeText: "text-[#FFB5D5]",
    iconBg: "bg-gradient-to-br from-[#FFB5D5]/15 via-[#F5C2DA]/5 to-transparent",
    iconBorder: "border-[#FFB5D5]/35",
    iconColor: "text-[#FFB5D5]",
    cardBorder: "border-[#FFB5D5]/20 hover:border-[#FFB5D5]/55",
    glowColor: "rgba(255, 181, 213, 0.15)",
    topGradient: "from-transparent via-[#FFB5D5]/60 to-transparent",
    tagBg: "bg-[#FFB5D5]/5 border-[#FFB5D5]/20 text-[#FFB5D5]/90",
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Recognition & Achievements"
      className="py-24 sm:py-28 lg:py-32 relative bg-[#121426] scroll-mt-20 font-body text-[#F8F5FF] overflow-hidden"
    >
      {/* Background ambient lighting matching portfolio atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#FFB5D5]/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#211624]/70 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FFB5D5]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">
              05 // RECOGNITION
            </span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Recognition &amp;{" "}
            <span className="text-[#FFB5D5]">Achievements.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-2xl text-base sm:text-lg leading-relaxed">
            Milestones earned through competitive programming, hackathons, and
            building under pressure.
          </p>
        </motion.div>

        {/* 1. FEATURED ACHIEVEMENT: Special Mentor's Choice Award */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12"
        >
          <div
            tabIndex={0}
            role="region"
            aria-label={`${featuredAchievement.title} - ${featuredAchievement.track}`}
            className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-9 lg:p-11 bg-gradient-to-br from-[#16182e]/95 via-[#131527]/90 to-[#101221]/95 backdrop-blur-xl border border-[#FFB5D5]/25 hover:border-[#FFB5D5]/50 transition-all duration-500 shadow-[0_12px_45px_-12px_rgba(255,181,213,0.12),_0_0_2px_rgba(255,220,240,0.2)] hover:shadow-[0_20px_55px_-10px_rgba(255,181,213,0.22),_0_0_25px_rgba(255,181,213,0.15)] focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none overflow-hidden"
          >
            {/* Top illuminated accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB5D5] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Subtle animated pink spotlight / aura in corner */}
            <div className="absolute -top-28 -right-28 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-[#FFB5D5]/15 via-[#D991B5]/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-1/4 w-72 h-32 bg-[#FFB5D5]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Corner Editorial Crosshairs for Championship Showcase Feel */}
            <div className="absolute top-4 right-4 text-[#FFB5D5]/20 font-mono text-[10px] select-none tracking-widest hidden sm:block">
              + // CHOSEN
            </div>

            {/* Top Metadata Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB5D5]/15 border border-[#FFB5D5]/35 text-[#FFB5D5] text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(255,181,213,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB5D5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB5D5]" />
                </span>
                {featuredAchievement.badge}
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-[#FFDCE8]/15 text-[#E1DCEB]/90 font-medium">
                  {featuredAchievement.year}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/20 text-[#FFB5D5] font-medium hidden sm:inline-block">
                  National Hackathon
                </span>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
              {/* Left Column: Trophy & Title Showcase */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Large Elegant Trophy Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FFB5D5]/20 via-[#211624] to-[#121426] border border-[#FFB5D5]/40 flex items-center justify-center text-[#FFB5D5] shadow-[0_0_30px_rgba(255,181,213,0.22)] shrink-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFB5D5] drop-shadow-[0_0_12px_rgba(255,181,213,0.4)]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#D991B5]">
                      {featuredAchievement.event}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold text-[#F8F5FF] tracking-tight leading-tight mb-2 group-hover:text-white transition-colors">
                    {featuredAchievement.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#FFB5D5] mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#FFB5D5] shrink-0" />
                    <span>{featuredAchievement.track}</span>
                  </div>

                  <p className="text-sm sm:text-base text-[#E1DCEB] leading-relaxed max-w-xl">
                    {featuredAchievement.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Editorial Highlight Chips & Recognition Inset */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 pt-2 lg:pt-0 lg:border-l lg:border-[#FFDCE8]/10 lg:pl-8">
                <div className="rounded-xl p-4 sm:p-5 bg-white/[0.02] border border-[#FFDCE8]/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#FFB5D5] tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Evaluation Highlights</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E1DCEB]/90 leading-relaxed">
                    Recognized during the 36-hour sprint for building an
                    innovative cybersecurity architecture, rapid technical
                    execution, and high-impact threat response modeling.
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredAchievement.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#FFB5D5]/5 border border-[#FFB5D5]/20 text-[#FFB5D5]/90 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. ACHIEVEMENT GALLERY: 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {galleryAchievements.map((item, index) => {
            const styles = rankStyles[item.rankType];
            const IconComponent = item.icon;

            return (
              <motion.article
                key={item.id}
                tabIndex={0}
                aria-label={`${item.title} - ${item.position}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-[#14162a]/85 backdrop-blur-xl border ${styles.cardBorder} transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/50 outline-none flex flex-col justify-between overflow-hidden`}
                style={{
                  boxShadow: `0 8px 30px -10px ${styles.glowColor}`,
                }}
              >
                {/* Top subtle color gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${styles.topGradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Ambient glow in background on hover */}
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: styles.glowColor }}
                />

                <div>
                  {/* Top Header Row: Placement Badge & Year */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${styles.badgeBg} border ${styles.badgeBorder} ${styles.badgeText}`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      {item.position}
                    </span>

                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-[#FFDCE8]/10 text-[#E1DCEB]/80 font-medium">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Event Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${styles.iconBg} border ${styles.iconBorder} flex items-center justify-center ${styles.iconColor} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      {item.rankType === "gold" ? (
                        <Trophy className="w-6 h-6" />
                      ) : item.rankType === "silver" ? (
                        <Medal className="w-6 h-6" />
                      ) : item.rankType === "bronze" ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <Globe className="w-6 h-6" />
                      )}
                    </div>

                    <div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8F5FF] group-hover:text-white transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#D991B5] font-medium tracking-wide mt-1">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Accomplishment Narrative */}
                  <p className="text-sm text-[#E1DCEB] leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#FFDCE8]/10">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md ${styles.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

