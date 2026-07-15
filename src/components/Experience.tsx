import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Founder & President",
    company: "DevLeague (DSA Campus Chapter PIEMR)",
    period: "Apr 2026 – Present",
    description: [
      "Founded DevLeague, a student developer community focused on DSA, software development, and hackathons.",
      "Built and managed a community of 100+ students across multiple academic branches.",
      "Led a core team responsible for planning events, managing outreach, and coordinated in technical workshops and community events.",
      "Mentored students in competitive programming, project development, and hackathon participation.",
    ],
    color: "from-neon-blue to-neon-purple",
  },
  {
    role: "AWS Student Builder Group Leader",
    company: "AWS - PIEMR",
    period: "Jun 2026 – Present",
    description: [
      "Selected as the AWS Student Builder Group Leader at PIEMR to promote cloud learning and technical community growth.",
      "Guided students in exploring AWS services, cloud fundamentals, and modern development practices.",
      "Collaborated with student leaders to build an active technical community and encourage peer learning.",
    ],
    color: "from-neon-purple to-pink-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership <span className="text-neon-blue">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-neon-blue font-medium mb-2 md:mb-0">
                    <FaBriefcase className="mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center text-gray-400 font-mono text-sm bg-dark-bg/50 px-3 py-1 rounded-full border border-glass-border">
                  <FaCalendarAlt className="mr-2" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-purple mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
