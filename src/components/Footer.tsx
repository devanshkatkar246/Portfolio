export default function Footer() {
  return (
    <footer className="py-8 border-t border-glass-border bg-dark-bg text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
          DK
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Devansh Katkar. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2 font-mono">
          Designed & Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
