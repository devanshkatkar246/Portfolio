import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes, FaSearchPlus } from "react-icons/fa";

const certifications = [
  {
    title: "AI Fundamentals",
    issuer: "OpenAI",
    image: "/assets/Screenshot 2026-07-15 155220.png",
    color: "from-neon-blue to-cyan-400",
  },
  {
    title: "Machine Learning & AI Foundation Course",
    issuer: "Data Science Academy, School of AI",
    image: "/assets/Screenshot 2026-07-15 155427.png",
    color: "from-neon-purple to-pink-500",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "TATA",
    image: "/assets/Screenshot 2026-07-15 155031.png",
    color: "from-green-400 to-emerald-600",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-blue">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedImage(cert.image)}
            >
              <div
                className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${cert.color}`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-6 relative z-10 w-full">
                <div className={`p-4 rounded-full bg-gradient-to-br ${cert.color} text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0`}>
                  <FaCertificate size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Certificate Image Thumbnail Preview */}
              {cert.image && (
                <div className="relative shrink-0 w-full sm:w-32 h-20 rounded-lg overflow-hidden border border-glass-border group-hover:border-neon-blue/50 transition-colors z-10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaSearchPlus className="text-white text-lg" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-neon-blue transition-colors bg-dark-bg/80 p-2 rounded-full border border-glass-border"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate Fullscreen"
                className="max-w-full max-h-[80vh] rounded-lg border border-glass-border object-contain shadow-[0_0_30px_rgba(0,240,255,0.2)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
