import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes, FaSearchPlus } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "AI Fundamentals",
    issuer: "OpenAI",
    date: "Certified 2026",
    image: "/assets/Screenshot 2026-07-15 155220.png",
  },
  {
    title: "Machine Learning & AI Foundation Course",
    issuer: "Data Science Academy, School of AI",
    date: "Certified 2026",
    image: "/assets/Screenshot 2026-07-15 155427.png",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "TATA (via Forage)",
    date: "Certified 2026",
    image: "/assets/Screenshot 2026-07-15 155031.png",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="certifications" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#211624]/60 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">06 // CREDENTIALS</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Professional certifications &amp; <span className="text-[#FFB5D5]">verifications.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            Rigorous programs and foundational assessments validating AI engineering and cybersecurity depth.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              className="glass-card p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedImage(cert.image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(cert.image);
                }
              }}
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-[#FFDCE8]/15 text-[#FFB5D5] shrink-0 mt-0.5 group-hover:bg-[#FFB5D5]/10 group-hover:border-[#FFB5D5]/30 transition-colors">
                  <FaCertificate size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-body text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/20 text-[#FFB5D5]">
                      {cert.issuer}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="font-body text-xs text-[#E1DCEB]/70">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F5FF] group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Certificate Image Thumbnail Preview */}
              <div className="relative shrink-0 w-full sm:w-36 h-20 rounded-xl overflow-hidden border border-[#FFDCE8]/15 group-hover:border-[#FFB5D5]/50 transition-colors bg-[#181a30]">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate thumbnail`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#121426]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121426]/90 text-[#FFB5D5] text-[10px] font-body font-semibold border border-[#FFB5D5]/30">
                    <FaSearchPlus size={10} />
                    <span>ENLARGE</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Certificate lightbox image"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121426]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center mb-3 px-1">
                <span className="font-body text-xs text-[#FFB5D5] uppercase tracking-wider font-semibold">
                  VERIFIED CREDENTIAL ARCHIVE
                </span>
                <button
                  type="button"
                  aria-label="Close certificate lightbox"
                  className="text-[#E1DCEB] hover:text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB5D5]"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#FFDCE8]/20 shadow-[0_0_50px_rgba(18,20,36,0.9)] bg-[#181a30]">
                <img
                  src={selectedImage}
                  alt="Verified Certificate"
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
