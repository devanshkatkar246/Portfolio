import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Dream2Reality AI",
    tech: ["React", "Tailwind CSS", "Python", "AI APIs", "Git"],
    description: "AI-powered career simulation platform",
    longDescription:
      "Developed an AI-powered career simulation platform that helps students explore career paths through personalized recommendations. Built a responsive web application with an intuitive interface and AI-driven recommendation workflow.",
    github: "https://github.com/devanshkatkar246/Dream2Reality-AI",
    liveDemo: "https://dream2reality-opal.vercel.app/",
  },
  {
    id: 2,
    title: "Trees & Graph Visualizer",
    tech: ["HTML", "CSS", "JavaScript", "DSA"],
    description:
      "Visualizes AVL Trees, BST, and Graph operations interactively.",
    longDescription:
      "Designed an interactive visualization tool for AVL Trees, Binary Search Trees, and Graph algorithms. Implemented insertion, deletion, traversal, and visualization to simplify DSA concepts. Built as an educational platform for students preparing for coding interviews.",
    github: "https://github.com/devanshkatkar246/Trees-Graph---Visualization-Platform",
    liveDemo: "/under-construction",
  },
  {
    id: 3,
    title: "Developer Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    description: "Fully responsive developer portfolio.",
    longDescription:
      "Developed a fully responsive developer portfolio showcasing projects, leadership experience, and achievements. Implemented a modern UI with mobile-first responsive design. Optimized website performance and accessibility across desktop and mobile devices.",
    github: "https://github.com/devanshkatkar246/devansh-katkar-portfolio",
    liveDemo: "/",
  },
  {
    id: 4,
    title: "3D Shapes Calculator",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    description: "Calculates area and volume of various 3D shapes.",
    longDescription:
      "Developed a web application to calculate area and volume of multiple 3D geometric shapes. Designed a simple and intuitive interface for quick mathematical computations. Applied modular programming principles for maintainable and scalable code.",
    github: "/under-construction",
    liveDemo: "/under-construction",
  },
  {
    id: 5,
    title: "DigiTwin",
    tech: ["React", "Firebase", "GeminiAI"],
    description: "A Digital Replica of a Student",
    longDescription: "DigiTwin is a virtual digital replica of a student.It models academic behaviour using daily habit inputs . Predicts academic performance trends for 7,15 & 30 Days. Also allows what-if simulation to test habit changes.",
    github: "https://github.com/devanshkatkar246/DigiTwin",
    liveDemo: "https://digitwin-1b46b.web.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-linear-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 bg-dark-bg border border-glass-border rounded-full text-neon-purple"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <button className="text-sm font-bold text-neon-blue uppercase tracking-wider group-hover:underline">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card w-full max-w-2xl p-8 relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={24} />
              </button>

              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 bg-dark-bg border border-neon-purple/30 rounded-full text-neon-purple"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {selectedProject.longDescription}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-neon-blue text-neon-blue font-bold rounded-full hover:bg-neon-blue hover:text-black transition-colors glow-blue"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
