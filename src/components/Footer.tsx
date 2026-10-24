export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#FFDCE8]/10 bg-[#121426] text-center relative z-10 font-body">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Monogram */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="font-display text-2xl font-black tracking-tight text-[#F8F5FF]">
            DK
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FFB5D5] shadow-[0_0_6px_#FFB5D5]" />
        </div>

        {/* Quick Nav Anchor links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 mb-6 font-body text-xs text-[#E1DCEB]/70 font-medium">
          <a href="#home" className="hover:text-[#FFB5D5] transition-colors">HOME</a>
          <span className="text-white/20">•</span>
          <a href="#about" className="hover:text-[#FFB5D5] transition-colors">ABOUT</a>
          <span className="text-white/20">•</span>
          <a href="#skills" className="hover:text-[#FFB5D5] transition-colors">SKILLS</a>
          <span className="text-white/20">•</span>
          <a href="#experience" className="hover:text-[#FFB5D5] transition-colors">EXPERIENCE</a>
          <span className="text-white/20">•</span>
          <a href="#projects" className="hover:text-[#FFB5D5] transition-colors">PROJECTS</a>
          <span className="text-white/20">•</span>
          <a href="#achievements" className="hover:text-[#FFB5D5] transition-colors">ACHIEVEMENTS</a>
          <span className="text-white/20">•</span>
          <a href="#certifications" className="hover:text-[#FFB5D5] transition-colors">CERTIFICATIONS</a>
          <span className="text-white/20">•</span>
          <a href="#contact" className="hover:text-[#FFB5D5] transition-colors">CONTACT</a>
        </div>

        <p className="text-[#E1DCEB]/60 font-body text-xs">
          &copy; {new Date().getFullYear()} DEVANSH KATKAR. ALL RIGHTS RESERVED.
        </p>

        <p className="text-[#E1DCEB]/40 text-[11px] font-body mt-2">
          COMPUTATIONAL PRACTICE // CINEMATIC SAKURA HARMONY • REACT • TAILWIND CSS
        </p>
      </div>
    </footer>
  );
}
