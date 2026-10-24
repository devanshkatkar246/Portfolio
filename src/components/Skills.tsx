import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiLinux,
  SiVite,
  SiTailwindcss,
  SiVercel,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
  SiFastapi,
  SiOpencv,
  SiPydantic,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiAmazonwebservices,
  SiFramer,
  SiThreedotjs,
  SiShadcnui,
  SiDocker,
  SiGoogle,
  SiPerplexity,
  SiClaude,
  SiNotion,
  SiCanva,
  SiFigma,

}
  from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export interface TechNode {
  name: string;
  icon: IconType;
  tag?: string;
}

// Lane 1: Core Systems, Languages & Foundational Tooling
const lane1Technologies: TechNode[] = [
  { name: "C++", icon: SiCplusplus, tag: "DSA & Systems" },
  { name: "Python", icon: SiPython, tag: "AI & Scripting" },
  { name: "TypeScript", icon: SiTypescript, tag: "Full-Stack" },
  { name: "JavaScript", icon: SiJavascript, tag: "ES6+ Runtime" },
  { name: "HTML5", icon: SiHtml5, tag: "Semantic Web" },
  { name: "CSS3", icon: SiCss3, tag: "Modern Styling" },
  { name: "Tailwind CSS", icon: SiTailwindcss, tag: "Utility CSS" },
  { name: "Git", icon: SiGit, tag: "Version Control" },
  { name: "GitHub", icon: SiGithub, tag: "Collaboration" },
  { name: "Linux CLI", icon: SiLinux, tag: "Shell Operations" },
  { name: "VS Code", icon: TbBrandVscode, tag: "Editor" },
  { name: "Vercel", icon: SiVercel, tag: "Deployment" },
  { name: "Docker", icon: SiDocker, tag: "Containerization" },

];

// Lane 2: Artificial Intelligence, Machine Learning & Computational Data
const lane2Technologies: TechNode[] = [
  { name: "Machine Learning", icon: FaBrain, tag: "Core Models" },
  { name: "Scikit-Learn", icon: SiScikitlearn, tag: "Model Training" },
  { name: "NumPy", icon: SiNumpy, tag: "Array Compute" },
  { name: "Pandas", icon: SiPandas, tag: "Data Analysis" },
  { name: "Generative AI", icon: FaBrain, tag: "Prompt Architecture" },
  { name: "LangChain", icon: SiLangchain, tag: "Agentic Chains" },
  { name: "FastAPI", icon: SiFastapi, tag: "High-Perf API" },
  { name: "OpenCV", icon: SiOpencv, tag: "Computer Vision" },
  { name: "Pydantic", icon: SiPydantic, tag: "Data Validation" },
  { name: "Flask", icon: SiFlask, tag: "Microframework" },
];

// Lane 3: Web Architectures, Databases & Cloud Infrastructure
const lane3Technologies: TechNode[] = [
  { name: "React", icon: SiReact, tag: "UI Architecture" },
  { name: "Next.js", icon: SiNextdotjs, tag: "Full-Stack SSR" },
  { name: "Node.js", icon: SiNodedotjs, tag: "Backend Runtime" },
  { name: "Express.js", icon: SiExpress, tag: "REST Services" },
  { name: "MongoDB", icon: SiMongodb, tag: "Document NoSQL" },
  { name: "PostgreSQL", icon: SiPostgresql, tag: "Relational SQL" },
  { name: "Firebase", icon: SiFirebase, tag: "Real-time DB & Auth" },
  { name: "Supabase", icon: SiSupabase, tag: "Postgres Cloud" },
  { name: "AWS", icon: SiAmazonwebservices, tag: "Cloud Infrastructure" },
  { name: "Framer Motion", icon: SiFramer, tag: "Motion Design" },
];
// Lane 4 VIBE CODING
const lane4Technologies: TechNode[] = [
  { name: "OpenAI", icon: SiOpenai, tag: "API Integration" },
  { name: "Google Gemini", icon: SiGooglegemini, tag: "API Integration" },
  { name: "Antigravity", icon: SiGoogle, tag: "IDE" },
  { name: "Claude", icon: SiClaude, tag: "Research" },
  { name: "Perplexity", icon: SiPerplexity, tag: "Research" },
  { name: "Notion", icon: SiNotion, tag: "Documentation" },
  { name: "Figma", icon: SiFigma, tag: "UI Designing" },
  { name: "Canva", icon: SiCanva, tag: "Presentations and Posters" },

];

interface LeafNodeProps {
  tech: TechNode;
  flipped?: boolean;
}

function LeafNode({ tech, flipped = false }: LeafNodeProps) {
  const Icon = tech.icon;

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label={`${tech.name} technology node`}
      className={`group/leaf relative flex items-center gap-3.5 px-5 py-3 h-14 min-w-max select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A6CC] leaf-node ${flipped ? "!rounded-[8px_28px_8px_28px]" : ""
        }`}
    >
      {/* Decorative delicate botanical leaf vein SVG */}
      <svg
        className="absolute top-1.5 right-2 w-8 h-8 pointer-events-none opacity-20 group-hover/leaf:opacity-40 transition-opacity"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 28C10 20 18 12 28 4M28 4C23 7 19 12 18 18M28 4C22 10 16 13 10 14"
          stroke="#F5A6CC"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Technology Icon with glowing illumination */}
      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F5A6CC] group-hover/leaf:text-[#FFD0E5] group-hover/leaf:bg-[#F5A6CC]/15 group-hover/leaf:border-[#F5A6CC]/40 transition-all duration-300 shadow-[0_2px_8px_rgba(245,166,204,0.1)]">
        <Icon size={18} />
      </div>

      {/* Technology Name */}
      <div className="flex flex-col">
        <span className="font-body text-sm font-medium tracking-wide text-[#F7F5FF] group-hover/leaf:text-white transition-colors">
          {tech.name}
        </span>
      </div>

      {/* Ambient leaf tip blossom accent dot */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A6CC]/40 group-hover/leaf:bg-[#F5A6CC] group-hover/leaf:shadow-[0_0_8px_#F5A6CC] transition-all ml-1" />
    </div>
  );
}

interface BeltLaneProps {
  label: string;
  technologies: TechNode[];
  direction: "left" | "right";
  durationSeconds: number;
  flippedLeaf?: boolean;
}

function TechBeltLane({
  label,
  technologies,
  direction,
  durationSeconds,
  flippedLeaf = false,
}: BeltLaneProps) {
  const marqueeClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative mb-6 last:mb-0">
      {/* Category Lane Header Label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A6CC]/60" />
        <span className="text-[11px] font-semibold tracking-widest text-[#B7B6C7]/70 uppercase font-body">
          {label}
        </span>
      </div>

      {/* Overflow Container with Left & Right Atmospheric Gradient Vignettes */}
      <div className="relative w-full overflow-hidden pause-marquee py-2">
        {/* Left edge shadow vignette */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-[#111323] via-[#111323]/80 to-transparent"
          aria-hidden="true"
        />
        {/* Right edge shadow vignette */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-[#111323] via-[#111323]/80 to-transparent"
          aria-hidden="true"
        />

        {/* Continuous Infinite Marquee Track */}
        <div
          className={`${marqueeClass} gap-4 sm:gap-5 px-3`}
          style={{ "--speed": `${durationSeconds}s` } as React.CSSProperties}
        >
          {/* Primary Sequence (Accessible to screen readers and keyboard navigation) */}
          <div className="flex gap-4 sm:gap-5">
            {technologies.map((tech) => (
              <LeafNode
                key={`primary-${tech.name}`}
                tech={tech}
                flipped={flippedLeaf}
              />
            ))}
          </div>

          {/* Duplicated Sequence for seamless loop (hidden from assistive tech) */}
          <div className="flex gap-4 sm:gap-5" aria-hidden="true">
            {technologies.map((tech) => (
              <LeafNode
                key={`dup-${tech.name}`}
                tech={tech}
                flipped={flippedLeaf}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technologies & Skills"
      className="py-28 lg:py-32 relative bg-[#111323] scroll-mt-20 overflow-hidden font-body text-[#F7F5FF]"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-[#F5A6CC]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-[#17192B]/80 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-20">
        <motion.div
          className="flex items-center gap-2 mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-[#F5A6CC]">
            02 // CAPABILITIES
          </span>
          <div className="h-px w-12 bg-[#F5A6CC]/30" />
        </motion.div>

        <motion.h2
          className="font-display font-bold tracking-tight text-[#F7F5FF] leading-[1.14] text-3xl sm:text-4xl lg:text-[clamp(2.25rem,4vw,3.5rem)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The <span className="text-[#F5A6CC]">technologies</span> behind my work.
        </motion.h2>

        <motion.p
          className="text-[#B7B6C7] max-w-xl text-base sm:text-lg leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Languages, frameworks, and tools I use to turn ideas into working systems.
        </motion.p>
      </div>

      {/* Living Animated Tech Belts (3 Distinct Lanes with Multi-Directional Organic Flow) */}
      <div className="w-full relative space-y-4">
        {/* Lane 1: Systems & Languages (Flowing Left) */}
        <TechBeltLane
          label="Systems, Languages & Tooling"
          technologies={lane1Technologies}
          direction="left"
          durationSeconds={42}
          flippedLeaf={false}
        />

        {/* Lane 2: AI, Machine Learning & Intelligence (Flowing Right) */}
        <TechBeltLane
          label="Intelligence, AI & Machine Learning"
          technologies={lane2Technologies}
          direction="right"
          durationSeconds={48}
          flippedLeaf={true}
        />

        {/* Lane 3: Web Architectures & Cloud Infrastructure (Flowing Left) */}
        <TechBeltLane
          label="Web Architectures, Databases & Cloud"
          technologies={lane3Technologies}
          direction="left"
          durationSeconds={38}
          flippedLeaf={false}
        />
        {/* Lane 4: AI, Machine Learning & Intelligence (Flowing Right) */}
        <TechBeltLane
          label="Generative & Agentic AI Tools"
          technologies={lane4Technologies}
          direction="right"
          durationSeconds={48}
          flippedLeaf={true}
        />


      </div>
    </section>
  );
}
