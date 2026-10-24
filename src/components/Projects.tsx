import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight, FaLayerGroup } from "react-icons/fa";

interface Project {
  id: number;
  index: string;
  category: string;
  title: string;
  tech: string[];
  description: string;
  longDescription: string;
  github: string;
  liveDemo: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    index: "01",
    category: "AI & Cybersecurity",
    title: "KEKAI : Autonomous Brand Intelligence & Impersonation Engine",
    tech: ["Python, React, AI/ML, Computer Vision, NLP, APIs, Git"],
    description: "An autonomous cybersecurity platform that detects and analyzes brand impersonation across suspicious domains, webpages, and digital assets.",
    longDescription:
      "KEKAI is an AI-driven cybersecurity platform designed to identify potential brand impersonation threats across digital environments. It combines domain intelligence, visual and logo similarity detection, and contextual analysis to distinguish legitimate brand assets from suspicious ones. The platform generates explainable risk assessments and evidence-based reports, helping investigators understand potential threats and prioritize security investigations.",
    github: "#",
    liveDemo: "/under-construction",
    featured: true,
  },
  {
    id: 2,
    index: "02",
    category: "DIGITAL TWIN & LLM",
    title: "DigiTwin",
    tech: ["React", "Firebase", "Gemini AI"],
    description: "Virtual digital replica of a student modeling academic habits and predicting performance trends.",
    longDescription:
      "DigiTwin is a virtual digital replica of a student. It models academic behaviour using daily habit inputs, predicts academic performance trends for 7, 15 & 30 days, and enables what-if simulation to test habit optimization.",
    github: "https://github.com/devanshkatkar246/DigiTwin",
    liveDemo: "https://digitwin-1b46b.web.app/",
    featured: true,
  },
  {
    id: 3,
    index: "03",
    category: "Artificial Intelligence and Machine Learning",
    title: "CineMind: AI-Powered Movie Recommendation System",
    tech: ["Python, Scikit-learn, Pandas, NumPy, Streamlit, Machine Learning"],
    description: "An AI-powered movie recommendation platform that delivers personalized suggestions using collaborative and content-based filtering.",
    longDescription:
      "CineMind is a machine learning-based movie recommendation system designed to help users discover movies tailored to their preferences. It combines collaborative and content-based filtering to generate personalized recommendations based on genres, ratings, and similarity analysis. The project features an interactive Streamlit interface and an end-to-end ML pipeline encompassing data preprocessing, feature engineering, model training, evaluation, and deployment.",
    github: "https://github.com/devanshkatkar246/CineMind-AI-Movie-Recommendation-System",
    liveDemo: "/under-construction",
  },
  {
    id: 4,
    index: "04",
    category: "FRONTEND ENGINEERING",
    title: "Developer Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    description: "High-performance portfolio highlighting software products, leadership trajectory, and visual identity.",
    longDescription:
      "Developed a fully responsive developer portfolio showcasing projects, leadership experience, and achievements. Implemented a modern UI with mobile-first responsive design. Optimized website performance and accessibility across desktop and mobile devices.",
    github: "https://github.com/devanshkatkar246/devansh-katkar-portfolio",
    liveDemo: "/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#211624]/70 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">04 // PORTFOLIO</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Featured projects &amp; <span className="text-[#FFB5D5]">applied systems.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            A selection of software platforms, algorithm visualizers, and AI tools built from conceptualization to deployment.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={project.id}
                className={`glass-card p-8 flex flex-col justify-between border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/40 transition-all duration-300 relative group cursor-pointer ${isFirst ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs font-semibold text-[#FFB5D5] px-2.5 py-0.5 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/25">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-body text-[11px] text-[#F5C2DA] px-2.5 py-0.5 rounded-full bg-[#F5C2DA]/10 border border-[#F5C2DA]/25 hidden sm:inline-block font-medium">
                        FEATURED BUILD
                      </span>
                    )}
                  </div>
                  <span className="font-display text-xl font-bold text-white/30 group-hover:text-[#FFB5D5] transition-colors">
                    {project.index}
                  </span>
                </div>

                {/* Project Title and Description */}
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F5FF] mb-3 group-hover:text-[#FFB5D5] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FFB5D5]" />
                  </h3>
                  <p className="text-[#E1DCEB] text-sm sm:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Card Actions */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-body px-2.5 py-1 rounded-lg bg-[#181a30] border border-[#FFDCE8]/12 text-[#E1DCEB]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#FFDCE8]/10 flex items-center justify-between">
                    <button
                      type="button"
                      className="text-xs font-body tracking-wider uppercase font-semibold text-[#FFB5D5] group-hover:underline flex items-center gap-1.5 focus:outline-none"
                    >
                      <FaLayerGroup size={12} />
                      <span>VIEW SPECS &amp; DETAILS</span>
                    </button>

                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.github !== "/under-construction" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-2 rounded-lg bg-white/5 text-[#F8F5FF] hover:text-[#FFB5D5] hover:bg-white/10 transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.liveDemo !== "/under-construction" && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          className="p-2 rounded-lg bg-white/5 text-[#F8F5FF] hover:text-[#FFB5D5] hover:bg-white/10 transition-colors"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121426]/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="glass-card w-full max-w-2xl p-8 sm:p-10 relative border border-[#FFDCE8]/20 shadow-[0_25px_60px_rgba(18,20,36,0.9)]"
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close project modal"
                className="absolute top-6 right-6 p-2 rounded-full text-[#E1DCEB]/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5]"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={18} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-body text-xs text-[#FFB5D5] uppercase tracking-wider font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-body text-xs text-[#E1DCEB]/70">PROJECT {selectedProject.index}</span>
              </div>

              <h3 id="modal-title" className="font-display text-3xl sm:text-4xl font-bold text-[#F8F5FF] mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-body px-3 py-1 bg-[#181a30] border border-[#FFDCE8]/15 rounded-full text-[#FFB5D5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-[#E1DCEB] text-base leading-relaxed mb-8 space-y-4 font-normal">
                <p>{selectedProject.longDescription}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#FFDCE8]/15">
                {selectedProject.github !== "/under-construction" ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#121426] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#F5C2DA] transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>VIEW SOURCE REPO</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-[#E1DCEB]/60 font-body text-xs uppercase tracking-wider rounded-full border border-white/10">
                    CODEBASE IN PROGRESS
                  </span>
                )}

                {selectedProject.liveDemo !== "/under-construction" ? (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#FFB5D5] text-[#211624] bg-[#F5C2DA] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_2px_15px_rgba(245,194,218,0.3)]"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>LAUNCH LIVE SYSTEM</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-[#E1DCEB]/60 font-body text-xs uppercase tracking-wider rounded-full border border-white/10">
                    DEPLOYMENT SCHEDULED
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
