import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBrain, FaDatabase, FaTools, FaUsers } from "react-icons/fa";

interface SkillCategory {
  title: string;
  icon: typeof FaCode;
  accent: "sakura" | "blossom" | "rose";
  skills: { name: string; tag?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: FaCode,
    accent: "sakura",
    skills: [
      { name: "C++", tag: "DSA & Systems" },
      { name: "Python", tag: "AI & Scripting" },
      { name: "JavaScript / ES6+", tag: "Full-Stack" },
    ],
  },
  {
    title: "Web Development",
    icon: FaLaptopCode,
    accent: "blossom",
    skills: [
      { name: "React", tag: "Frontend" },
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "API Backend" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "HTML5 / Modern CSS", tag: "Foundation" },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: FaBrain,
    accent: "sakura",
    skills: [
      { name: "Machine Learning", tag: "Models & Algorithms" },
      { name: "Scikit-Learn", tag: "Model Training" },
      { name: "Pandas", tag: "Data Analysis" },
      { name: "NumPy", tag: "Numerical Matrix" },
      { name: "Gemini / OpenAI APIs", tag: "LLM Integration" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    accent: "rose",
    skills: [
      { name: "MongoDB", tag: "NoSQL" },
      { name: "Firebase", tag: "Real-time DB & Auth" },
      { name: "AWS Fundamentals", tag: "Cloud Infrastructure" },
    ],
  },
  {
    title: "Developer Tools",
    icon: FaTools,
    accent: "blossom",
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "VS Code", tag: "Environment" },
      { name: "Vite", tag: "Build Tooling" },
      { name: "Linux CLI", tag: "Shell Operations" },
    ],
  },
  {
    title: "Core Strengths",
    icon: FaUsers,
    accent: "sakura",
    skills: [
      { name: "Problem Solving", tag: "Algorithmic" },
      { name: "Leadership", tag: "DevLeague Founder" },
      { name: "Team Collaboration", tag: "Hackathons" },
      { name: "Creative Thinking", tag: "Product Ideation" },
      { name: "Fast Adaptability", tag: "Emerging Tech" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#211624]/60 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">02 // CAPABILITIES</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Technical stack &amp; <span className="text-[#FFB5D5]">engineering domains.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            Practical competencies tested through high-velocity hackathons, academic rigor, and production software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isSakura = category.accent === "sakura";
            const isBlossom = category.accent === "blossom";

            return (
              <motion.div
                key={category.title}
                className="glass-card p-7 flex flex-col justify-between border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                {/* Top subtle hover accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isSakura ? "bg-[#FFB5D5]" : isBlossom ? "bg-[#F5C2DA]" : "bg-[#D991B5]"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-white/5 border border-[#FFDCE8]/15 ${
                          isSakura
                            ? "text-[#FFB5D5]"
                            : isBlossom
                            ? "text-[#F5C2DA]"
                            : "text-[#D991B5]"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#F8F5FF] group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <span className="font-body text-xs text-[#E1DCEB]/50 font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills tags/chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181a30] border border-[#FFDCE8]/12 hover:border-[#FFB5D5]/30 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-[#F8F5FF]">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span
                            className={`text-[10px] font-body px-1.5 py-0.5 rounded ${
                              isSakura
                                ? "bg-[#FFB5D5]/10 text-[#FFB5D5]"
                                : isBlossom
                                ? "bg-[#F5C2DA]/10 text-[#F5C2DA]"
                                : "bg-[#D991B5]/10 text-[#D991B5]"
                            }`}
                          >
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-8 pt-4 border-t border-[#FFDCE8]/10 flex items-center justify-between text-[11px] font-body text-[#E1DCEB]/60">
                  <span>{category.skills.length} VERIFIED COMPETENCIES</span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSakura ? "bg-[#FFB5D5]" : isBlossom ? "bg-[#F5C2DA]" : "bg-[#D991B5]"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
