import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "React (JSX)", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Core Strengths",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Leadership", level: 85 },
      { name: "Team Collaboration", level: 95 },
      { name: "Creative Thinking", level: 85 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-purple">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(176, 38, 255, 0.2)",
              }}
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-neon-purple font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-neon-blue to-neon-purple"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
