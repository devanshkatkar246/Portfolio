import { motion } from "framer-motion";

const achievements = [
  {
    title: "Wire Wars",
    description: "1st Position (Circuit completion competition organized by Dept of Electrical Engineering, PIEMR)",
    year: "2025",
    color: "from-neon-blue to-cyan-400",
  },
  {
    title: "Creovate",
    description: "2nd Position (National Mathematics Day software development competition at PIEMR)",
    year: "2026",
    color: "from-neon-purple to-pink-500",
  },
  {
    title: "CodeStorm",
    description: "3rd Position (Programming and software development competition organized by AI Club PIEMR)",
    year: "2026",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "TechSprint Hackathon",
    description: "Top 10 Finalist (Hackathon organized by GDG PIEMR)",
    year: "2026",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Smart India Hackathon",
    description: "Participated Twice",
    year: "2024",
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Internal SIH",
    description: "Cleared Internal SIH",
    year: "2025",
    color: "from-emerald-400 to-blue-600",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-purple">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-glass-border ml-4 md:ml-1/2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
              />

              <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="text-xs font-mono text-gray-400 mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-neon-blue">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
