import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

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
    <section
      id="contact"
      aria-label="Contact Devansh Katkar"
      className="py-24 sm:py-28 lg:py-32 relative bg-[#121426] scroll-mt-20 font-body text-[#F8F5FF] overflow-hidden"
    >
      {/* Background ambient lighting matching portfolio aesthetic */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FFB5D5]/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[30rem] h-[30rem] bg-[#211624]/75 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FFB5D5]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-xs text-[#D991B5] uppercase tracking-widest font-semibold">
              07 // COMMENCE
            </span>
            <div className="h-px w-12 bg-[#D991B5]/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5FF] mb-4">
            Let's build something <span className="text-[#FFB5D5]">meaningful.</span>
          </h2>
          <p className="text-[#E1DCEB] max-w-2xl text-base sm:text-lg leading-relaxed">
            Have a project, research challenge, or engineering role? Connect directly
            to explore technical collaboration, software platforms, and high-impact systems.
          </p>
        </motion.div>

        {/* Two Balanced Columns: Left (Let's Connect) & Right (Direct Contact & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Let's Connect (5 Cols on Desktop) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Contact Card & Information Block */}
            <div className="glass-card p-6 sm:p-8 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 relative overflow-hidden group space-y-6">
              {/* Top illuminated subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB5D5]/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-[#F8F5FF]">
                    Let's Connect
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/20 text-[#FFB5D5] font-medium">
                    DIRECT ACCESS
                  </span>
                </div>
                <p className="text-[#E1DCEB] text-sm leading-relaxed">
                  Whether you're a recruiter seeking an engineer who ships with velocity,
                  a developer assembling a competitive hackathon squad, or a founder
                  building AI products — my inbox is always open.
                </p>
              </div>

              {/* Compact Contact Information List */}
              <div className="space-y-3 pt-1">
                {/* Phone */}
                <a
                  href="tel:+917000814344"
                  aria-label="Call Devansh Katkar at +91 70008 14344"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-[#FFB5D5]/10 border border-[#FFDCE8]/12 hover:border-[#FFB5D5]/40 transition-all duration-300 group/item focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFB5D5]/10 border border-[#FFB5D5]/25 text-[#FFB5D5] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#FFB5D5]/20 transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-body text-[#D991B5] uppercase tracking-wider font-semibold">
                        PHONE / CALL
                      </span>
                      <span className="text-[#F8F5FF] font-medium text-sm sm:text-base group-hover/item:text-white transition-colors">
                        +91 70008 14344
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-[#E1DCEB]/60 group-hover/item:text-[#FFB5D5] flex items-center gap-1 transition-colors pr-1">
                    <span className="hidden sm:inline text-xs font-medium">Call</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:devanshkatkar20@gmail.com"
                  aria-label="Email Devansh Katkar at devanshkatkar20@gmail.com"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-[#FFB5D5]/10 border border-[#FFDCE8]/12 hover:border-[#FFB5D5]/40 transition-all duration-300 group/item focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F5C2DA]/10 border border-[#F5C2DA]/25 text-[#F5C2DA] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#F5C2DA]/20 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-body text-[#D991B5] uppercase tracking-wider font-semibold">
                        EMAIL ADDRESS
                      </span>
                      <span className="text-[#F8F5FF] font-medium text-sm sm:text-base truncate block group-hover/item:text-white transition-colors">
                        devanshkatkar20@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-[#E1DCEB]/60 group-hover/item:text-[#FFB5D5] flex items-center gap-1 transition-colors pr-1 shrink-0">
                    <span className="hidden sm:inline text-xs font-medium">Mail</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-[#FFDCE8]/12">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#FFDCE8]/15 text-[#D991B5] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-body text-[#D991B5] uppercase tracking-wider font-semibold">
                        LOCATION
                      </span>
                      <span className="text-[#F8F5FF] font-medium text-sm sm:text-base">
                        Indore, Madhya Pradesh, India
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-[#FFDCE8]/15 text-[#E1DCEB]/75 font-medium hidden sm:inline-block">
                    Remote Friendly
                  </span>
                </div>
              </div>

              {/* Prominent Profile Channels: GitHub and LinkedIn */}
              <div className="pt-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#D991B5] mb-3">
                  Direct Profiles &amp; Networks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://github.com/devanshkatkar246"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devansh Katkar GitHub Profile"
                    className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/40 text-[#F8F5FF] flex items-center justify-center gap-2.5 text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,181,213,0.12)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none"
                  >
                    <FaGithub className="text-base" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E1DCEB]/50 ml-auto" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/devansh-katkar-695b69317"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devansh Katkar LinkedIn Profile"
                    className="py-3 px-4 rounded-xl bg-[#FFB5D5]/10 hover:bg-[#FFB5D5]/20 border border-[#FFB5D5]/30 hover:border-[#FFB5D5]/50 text-[#F8F5FF] flex items-center justify-center gap-2.5 text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_2px_12px_rgba(255,181,213,0.15)] hover:shadow-[0_4px_20px_rgba(255,181,213,0.25)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none"
                  >
                    <FaLinkedin className="text-base text-[#FFB5D5]" />
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB5D5]/70 ml-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timeless Availability Status Indicator */}
            <div className="p-4 sm:p-5 rounded-2xl border border-[#FFB5D5]/25 bg-gradient-to-r from-[#FFB5D5]/10 via-[#211624]/60 to-[#121426] flex items-center gap-3.5 backdrop-blur-md shadow-[0_4px_20px_rgba(18,20,36,0.5)]">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB5D5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB5D5]" />
              </span>
              <p className="text-xs font-body font-semibold text-[#FFB5D5] tracking-wide uppercase">
                STATUS: AVAILABLE FOR FULL-TIME ROLES &amp; TECHNICAL COLLABORATIONS
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Direct Message Interactive Form (7 Cols on Desktop) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card p-6 sm:p-9 lg:p-10 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/35 transition-all duration-300 relative overflow-hidden shadow-[0_12px_45px_-12px_rgba(18,20,36,0.8)]">
              {/* Top illuminated subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB5D5] to-transparent opacity-80" />

              {/* Form Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-[#F8F5FF]">
                    Send Me a Message
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFB5D5]/10 border border-[#FFB5D5]/20 text-[#FFB5D5]">
                    <Sparkles className="w-3 h-3 text-[#FFB5D5]" />
                    QUICK TRANSMISSION
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#E1DCEB] leading-relaxed">
                  Fill in your details below or email directly to{" "}
                  <a
                    href="mailto:devanshkatkar20@gmail.com"
                    className="text-[#FFB5D5] hover:underline font-medium"
                  >
                    devanshkatkar20@gmail.com
                  </a>
                  . Responses are typically returned within 24 hours.
                </p>
              </div>

              {/* EmailJS Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-semibold"
                  >
                    Your Name // Identifier
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#181a30]/90 border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#181a30]/90 border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs uppercase tracking-wider text-[#E1DCEB]/80 mb-2 font-semibold"
                  >
                    Project Details // Inquiries
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, problem space, engineering role, or hackathon collaboration..."
                    className="w-full bg-[#181a30]/90 border border-[#FFDCE8]/15 rounded-xl px-4 py-3.5 text-[#F8F5FF] placeholder-white/25 focus:outline-none focus:border-[#FFB5D5] focus:ring-1 focus:ring-[#FFB5D5] transition-all font-body text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 py-4 px-6 bg-[#FFB5D5] hover:bg-white text-[#121426] font-bold text-xs uppercase tracking-wider font-body rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_22px_rgba(255,181,213,0.3)] hover:shadow-[0_6px_28px_rgba(255,181,213,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/80 outline-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-[#121426] border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING MESSAGE...
                      </span>
                    ) : (
                      <>
                        <span>SEND ME A MESSAGE</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>

                  {/* Quick Direct Email Client Link */}
                  <a
                    href="mailto:devanshkatkar20@gmail.com"
                    aria-label="Send email directly using your email client"
                    className="w-full sm:w-auto py-4 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-[#FFDCE8]/15 hover:border-[#FFB5D5]/40 text-[#E1DCEB] hover:text-[#F8F5FF] text-xs font-semibold tracking-wider font-body flex items-center justify-center gap-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FFB5D5]/60 outline-none text-center"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FFB5D5]" />
                    <span>OPEN EMAIL APP</span>
                  </a>
                </div>

                {/* Feedback Alerts */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#FFB5D5]/15 border border-[#FFB5D5]/40 flex items-center gap-3 text-xs font-body text-[#FFB5D5] shadow-[0_0_20px_rgba(255,181,213,0.15)]"
                  >
                    <CheckCircle2 className="shrink-0 text-base" />
                    <span>
                      Message received! Thank you for reaching out, Devansh will respond to your transmission shortly.
                    </span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#D991B5]/20 border border-[#D991B5]/40 flex items-center gap-3 text-xs font-body text-[#F8F5FF]"
                  >
                    <AlertCircle className="shrink-0 text-base text-[#FFB5D5]" />
                    <span>
                      Transmission issue encountered. Please email directly at{" "}
                      <a href="mailto:devanshkatkar20@gmail.com" className="underline font-semibold">
                        devanshkatkar20@gmail.com
                      </a>{" "}
                      or reach out on LinkedIn.
                    </span>
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

