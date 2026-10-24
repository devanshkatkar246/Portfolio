import { useEffect, useRef } from "react";

/**
 * Ambient Sakura Petals Floating Canvas Component
 * 
 * Features:
 * - Organic cherry blossom petal rendering via Bezier curves
 * - Soft cinematic anime palette: #FFB5D5 (Sakura Pink), #F5C2DA (Blossom), #D991B5 (Muted Rose)
 * - 3D tumbling & flutter simulation (oscillation in 2D scale and rotation)
 * - Gentle sinusoidal breeze wind drift
 * - DPR capping (max 2) & mobile-aware density
 * - Auto-pauses on visibilitychange and respects prefers-reduced-motion
 * - Lightweight zero-allocation loop for optimal battery & GPU efficiency
 */

interface SakuraPetalsProps {
  className?: string;
  petalCountOverride?: number;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  flip: number;
  flipSpeed: number;
  swayOffset: number;
  swaySpeed: number;
  opacity: number;
  colorType: number; // 0 = soft blossom, 1 = sakura pink, 2 = muted rose/white tip
}

export default function SakuraPetals({ className = "", petalCountOverride }: SakuraPetalsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse coordinates for gentle interactive flutter
    const mouse = { x: -9999, y: -9999 };

    let petals: Petal[] = [];

    const colors = [
      { fill: "rgba(245, 194, 218, 0.75)", stroke: "rgba(255, 220, 240, 0.45)" }, // Blossom pink
      { fill: "rgba(255, 181, 213, 0.65)", stroke: "rgba(255, 200, 225, 0.35)" }, // Sakura pink
      { fill: "rgba(217, 145, 181, 0.60)", stroke: "rgba(235, 175, 205, 0.3)" },  // Muted rose
    ];

    const initPetals = (count: number) => {
      petals = [];
      for (let i = 0; i < count; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 6 + Math.random() * 8, // 6px to 14px
          speedY: 0.6 + Math.random() * 1.0,
          speedX: 0.2 + Math.random() * 0.7,
          angle: Math.random() * Math.PI * 2,
          angularSpeed: (Math.random() - 0.5) * 0.02,
          flip: Math.random() * Math.PI * 2,
          flipSpeed: 0.015 + Math.random() * 0.03,
          swayOffset: Math.random() * Math.PI * 2,
          swaySpeed: 0.012 + Math.random() * 0.018,
          opacity: 0.35 + Math.random() * 0.5,
          colorType: Math.floor(Math.random() * 3),
        });
      }
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      const targetCount = petalCountOverride ?? (width < 640 ? 24 : width < 1024 ? 38 : 55);
      if (petals.length !== targetCount) {
        initPetals(targetCount);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    handleResize();

    // Helper to draw a single organic cherry blossom petal
    const drawPetal = (x: number, y: number, size: number, angle: number, flipScale: number, colorType: number, alpha: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(1, flipScale);

      const c = colors[colorType];
      ctx.fillStyle = c.fill;
      ctx.strokeStyle = c.stroke;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = alpha;

      ctx.beginPath();
      // Start at base of petal
      ctx.moveTo(0, size * 0.9);
      // Left curve
      ctx.bezierCurveTo(-size * 0.7, size * 0.3, -size * 0.65, -size * 0.5, -size * 0.2, -size * 0.9);
      // Petal top notch
      ctx.quadraticCurveTo(0, -size * 0.75, size * 0.2, -size * 0.9);
      // Right curve
      ctx.bezierCurveTo(size * 0.65, -size * 0.5, size * 0.7, size * 0.3, 0, size * 0.9);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    let tick = 0;

    const render = () => {
      animFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      tick++;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        if (!prefersReducedMotion) {
          // Downward motion with slight wind rightward
          p.y += p.speedY;
          p.x += Math.sin(tick * p.swaySpeed + p.swayOffset) * 0.75 + p.speedX;

          // Rotations
          p.angle += p.angularSpeed;
          p.flip += p.flipSpeed;

          // Interactive wind displacement from mouse
          if (mouse.x > -1000) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 14400) { // 120px radius
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / 120) * 1.5;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          // Wrap around edges gracefully
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) {
            p.x = -20;
          } else if (p.x < -20) {
            p.x = width + 20;
          }
        }

        const flipScale = Math.sin(p.flip);
        drawPetal(p.x, p.y, p.size, p.angle, flipScale, p.colorType, p.opacity);
      }
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [petalCountOverride]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
