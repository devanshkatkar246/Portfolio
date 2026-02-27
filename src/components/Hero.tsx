import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] -z-10" />

      <div className="text-center z-10 px-6">
        <motion.h2
          className="text-neon-blue font-mono text-lg md:text-xl mb-4 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HELLO, I AM
        </motion.h2>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Devansh{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">
            Katkar
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl text-gray-300 mb-10 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              2000,
              "AI & IoT Enthusiast",
              2000,
              "Hackathon Builder",
              2000,
              "Future Tech Founder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono text-neon-blue"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border border-neon-blue text-neon-blue rounded-full font-bold tracking-widest uppercase hover:bg-neon-blue hover:text-black transition-all duration-300 glow-blue"
          >
            View Projects
          </a>
          <a
            href="/assets/DevResume.pdf"
            download="Devansh_Katkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-linear-to-r from-neon-blue to-neon-purple text-white rounded-full font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 glow-purple"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
