import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import SakuraPetals from "./SakuraPetals";

export default function UnderConstruction() {
  return (
    <div className="w-full min-h-screen bg-[#121426] relative overflow-hidden flex flex-col items-center justify-center p-6 font-body">
      {/* Background Anime Landscape underlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assests/Moonlit%20Sakura%20Valley%20Waterfalls.png')",
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121426] via-[#121426]/80 to-[#121426] pointer-events-none" />

      {/* Ambient Sakura Petal Layer */}
      <SakuraPetals />

      {/* Subtle Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFB5D5]/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-20 text-center max-w-xl mx-auto glass-card p-10 sm:p-12 border border-[#FFDCE8]/20 shadow-[0_20px_50px_rgba(18,20,36,0.8)]"
      >
        {/* Monogram / Brand mark */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          <span className="font-display text-3xl font-black tracking-tight text-[#F8F5FF]">
            DK
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FFB5D5] shadow-[0_0_8px_#FFB5D5]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-[#FFB5D5] bg-[#FFB5D5]/10 border border-[#FFB5D5]/25 mb-6 uppercase tracking-wider">
          <span>WORK IN PROGRESS // ARCHITECTURE</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F5FF] mb-4 tracking-tight leading-tight">
          System Module <br />
          <span className="text-[#FFB5D5]">Under Construction</span>
        </h1>

        <p className="text-[#E1DCEB] mb-8 leading-relaxed text-sm sm:text-base font-normal">
          This feature is currently undergoing active engineering and algorithmic refinement. Check back shortly for deployment updates.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#F5C2DA] text-[#211624] hover:bg-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(245,194,218,0.3)] transition-all duration-300 group"
        >
          <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO PORTFOLIO</span>
        </Link>
      </motion.div>
    </div>
  );
}
