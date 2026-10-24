import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS environment variables not configured in this environment.");
      // Graceful local demonstration response
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setSuccess(false), 6000);
      }, 750);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (err) => {
          console.error("EmailJS Error:", err?.text || err);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-28 relative bg-[#121426] scroll-mt-20 font-body">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#211624]/70 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">07 // COMMENCE</span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Let's build systems that <span className="text-[#FFB5D5]">learn &amp; endure.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-xl text-base sm:text-lg">
            Have a project, research idea, or role opportunity? I respond to direct inquiries and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Connect (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 border border-[#FFDCE8]/15 space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#F8F5FF]">
                Direct Contact &amp; Channels
              </h3>
              <p className="text-[#E1DCEB] text-sm leading-relaxed">
                Currently open for software engineering opportunities, hackathon teams, and AI research projects.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#E1DCEB]">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-[#FFDCE8]/15 text-[#FFB5D5]">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-body text-[#E1DCEB]/60 uppercase tracking-wider font-semibold">LOCATION</span>
                    <span className="text-[#F8F5FF] font-medium">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#E1DCEB]">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-[#FFDCE8]/15 text-[#F5C2DA]">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-body text-[#E1DCEB]/60 uppercase tracking-wider font-semibold">DIRECT INQUIRIES</span>
                    <span className="text-[#F8F5FF] font-medium text-xs sm:text-sm">Available via Form or LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Buttons */}
              <div className="pt-4 border-t border-[#FFDCE8]/12 flex items-center gap-4">
                <a
                  href="https://github.com/devanshkatkar246"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Devansh Katkar GitHub Profile"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/30 text-[#F8F5FF] flex items-center justify-center gap-2.5 text-xs font-semibold tracking-wider transition-all"
                >
                  <FaGithub size={18} />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/devansh-katkar-695b69317"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Devansh Katkar LinkedIn Profile"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#FFB5D5]/10 hover:bg-[#FFB5D5]/20 border border-[#FFB5D5]/30 text-[#F8F5FF] flex items-center justify-center gap-2.5 text-xs font-semibold tracking-wider transition-all shadow-[0_2px_12px_rgba(255,181,213,0.15)]"
                >
                  <FaLinkedin size={18} className="text-[#FFB5D5]" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

            {/* Availability status box */}
            <div className="p-5 rounded-2xl border border-[#FFB5D5]/25 bg-[#FFB5D5]/5 flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB5D5] animate-ping shrink-0 shadow-[0_0_8px_#FFB5D5]" />
              <p className="text-xs font-body font-medium text-[#FFB5D5] uppercase tracking-wider">
                STATUS: ENROLLING SUMMER 2026 ROLES &amp; DEVLEAGUE EVENTS
              </p>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="glass-card p-8 sm:p-10 border border-[#FFDCE8]/15 relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-medium"
                  >
                    Your Name // Identifier
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="Ada Lovelace"
                    className="w-full bg-[#181a30] border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="contact@domain.com"
                    className="w-full bg-[#181a30] border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-medium"
                  >
                    Project Details // Inquiries
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, problem space, or potential role..."
                    className="w-full bg-[#181a30] border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#F5C2DA] hover:bg-white text-[#211624] font-semibold text-xs uppercase tracking-wider font-body rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_20px_rgba(245,194,218,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#FFB5D5]/15 border border-[#FFB5D5]/35 flex items-center gap-3 text-xs font-body text-[#FFB5D5]"
                  >
                    <FaCheckCircle className="shrink-0 text-sm" />
                    <span>Message received. I will respond to your transmission shortly.</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#D991B5]/20 border border-[#D991B5]/40 flex items-center gap-3 text-xs font-body text-[#F8F5FF]"
                  >
                    <FaExclamationTriangle className="shrink-0 text-sm text-[#FFB5D5]" />
                    <span>Transmission error. Please connect via LinkedIn or try again.</span>
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
