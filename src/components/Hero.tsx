import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SakuraPetals from "./SakuraPetals";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction Hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#121426]"
    >
      {/* Background layer: Anime landscape background image with cinematic composition */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: "url('/assests/Moonlit%20Sakura%20Valley%20Waterfalls.png')",
          backgroundPosition: "center right",
        }}
      />

      {/* Atmospheric Overlays:
          1. Left-to-right gradient: dark quiet midnight-blue on the left for text contrast, fading out to reveal the moon and sakura tree on the right
          2. Top & bottom feather: smooth blend with header and seamless transition into the About section below
          3. Subtle deep plum atmospheric vignette
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(18, 20, 36, 0.95) 0%, rgba(18, 20, 36, 0.85) 38%, rgba(18, 20, 36, 0.5) 68%, rgba(18, 20, 36, 0.2) 100%), linear-gradient(to bottom, rgba(18, 20, 36, 0.6) 0%, transparent 18%, transparent 72%, rgba(18, 20, 36, 1) 100%)",
        }}
      />

      {/* Soft plum & sakura ambient atmospheric glow */}
      <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] bg-[#211624]/60 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-[#FFB5D5]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Ambient Sakura Petal Layer */}
      <SakuraPetals />

      {/* Foreground content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-12rem)]">

          {/* Left Column: Editorial Headline & Actions (spacious 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">

            {/* Outlined metadata badge */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-body tracking-wider uppercase bg-[#121426]/80 border border-[#FFDCE8]/20 text-[#FFB5D5] shadow-[0_2px_10px_rgba(255,181,213,0.12)] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB5D5] mr-2.5 animate-pulse shadow-[0_0_6px_#FFB5D5]" />
                DEVELOPER / BUILDER / FOUNDER / LEADER
              </span>
            </motion.div>

            {/* Oversized, Editorial Headline in Sora */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-bold tracking-tight leading-[1.08] mb-8 select-none"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[#F8F5FF] block">Hey, I'm</span>
              <span className="text-[#FFB5D5] block">Devansh Katkar</span>
              <span className="text-[#F8F5FF] text-6xl">Beyond Ordinary.</span>
            </motion.h1>

            {/* Comfortable Supporting Description in DM Sans */}
            <motion.p
              className="font-body text-base sm:text-lg text-[#E1DCEB] max-w-xl leading-relaxed mb-10 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              I turn complex challenges into thoughtful solutions, experiment with emerging technologies, and build products that push beyond the ordinary.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Primary button: Soft blossom-pink with deep-plum text */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F5C2DA] text-[#211624] font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-white hover:text-[#121426] transition-all duration-300 shadow-[0_4px_20px_rgba(245,194,218,0.35)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.4)] group"
              >
                <span>EXPLORE PROJECTS</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary button: Transparent midnight surface with thin muted-rose border */}
              <a
                href="/assets/DevanshResume.pdf"
                download="Devansh_Katkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121426]/75 backdrop-blur-md text-[#F8F5FF] border border-[#D991B5]/50 font-medium text-xs tracking-wider uppercase rounded-full hover:border-[#FFB5D5] hover:bg-[#FFB5D5]/10 transition-all duration-300 shadow-[0_4px_16px_rgba(18,20,36,0.6)] group"
              >
                <FaDownload className="text-xs text-[#FFB5D5] group-hover:-translate-y-0.5 transition-transform" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Metadata / Credentials Strip */}
            <motion.div
              className="pt-8 border-t border-[#FFDCE8]/15 flex flex-wrap gap-y-3 gap-x-8 text-xs font-body text-[#E1DCEB]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#FFB5D5] font-semibold">01</span>
                <span>AI/ML & Full Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F5C2DA] font-semibold">02</span>
                <span>President Devleague & AWS Student Builder Group at PIEMR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F8F5FF] font-semibold">03</span>
                <span>Cybersecurity & DSA Enthusiast</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Space to let the Moonlit Waterfall & Cherry Blossom shine */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end justify-end pointer-events-none h-full pb-4">
            {/* Subtle editorial landscape title plaque */}
            <motion.div
              className="p-4 rounded-2xl border border-[#FFDCE8]/15 bg-[#121426]/60 backdrop-blur-md font-body text-xs text-[#E1DCEB] space-y-1 self-end shadow-[0_8px_30px_rgba(18,20,36,0.5)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
            </motion.div>
          </div>

        </div>
      </div>

      {/* Restrained, elegant scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none z-20 font-body"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest text-[#E1DCEB]/70 uppercase">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-[#FFDCE8]/30 flex justify-center pt-1.5 bg-[#121426]/80 backdrop-blur-sm">
          <div className="w-1 h-1.5 rounded-full bg-[#FFB5D5] shadow-[0_0_4px_#FFB5D5]" />
        </div>
      </motion.div>
    </section>
  );
}
