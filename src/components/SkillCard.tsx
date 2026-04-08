"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

interface SkillCardProps {
  emoji: string;
  label: string;
}

export function SkillCard({ emoji, label }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
  
  const glowStyle = useMotionTemplate`radial-gradient(circle at ${mouseXValue}px ${mouseYValue}px, rgba(255,255,255,0.15), transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    mouseXValue.set(mouseX);
    mouseYValue.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full h-full aspect-square overflow-hidden bg-foreground/3 backdrop-blur-md border border-foreground/6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[24px] flex flex-col items-center justify-center text-center gap-4 cursor-default transition-colors"
      >
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: glowStyle }}
        />
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="text-4xl md:text-5xl relative z-10"
        >
          {emoji}
        </div>
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="text-sm sm:text-base font-semibold text-foreground relative z-10 px-4 leading-tight"
        >
          {label}
        </div>
      </motion.div>
    </div>
  );
}
