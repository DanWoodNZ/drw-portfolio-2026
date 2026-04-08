"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const TITLE_MAPPING: Record<string, string> = {
  "wing": "Wing Bikes",
  "current-direct-deposit": "Current: Direct Deposit",
  "current-ia": "Current: Information Architecture",
  "kismet": "Kismet",
  "tmrw": "TMRW",
  "mbw": "Michael Brody-Waite",
  "simply-nootropics": "Simply Nootropics",
  "quimbee": "Quimbee",
  "quimbee-app": "Quimbee App"
};

interface FloatingNextProjectProps {
  slug: string;
  title: string;
  imageSrc?: string;
}

export function FloatingNextProject({ slug, title, imageSrc }: FloatingNextProjectProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const lastYRef = useRef(0);
  const accumulatorRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastYRef.current;
    let newVisible = visible;
    
    // Scrolling Down
    if (delta > 0) {
      if (accumulatorRef.current < 0) accumulatorRef.current = 0;
      accumulatorRef.current += delta;
      
      if (accumulatorRef.current > 40 || latest <= 300) {
        newVisible = false;
      }
    } 
    // Scrolling Up
    else if (delta < 0) {
      if (accumulatorRef.current > 0) accumulatorRef.current = 0;
      accumulatorRef.current += delta;
      
      if (accumulatorRef.current < -150 && latest > 300) {
        newVisible = true;
      }
    }
    
    if (latest <= 300) newVisible = false;
    
    setVisible(newVisible);
    lastYRef.current = latest;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (newVisible) {
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        accumulatorRef.current = 0;
      }, 4000);
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const displayTitle = TITLE_MAPPING[slug] || title;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 50, scale: 0.9 }}
           transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40"
        >
          <Link 
            href={`/projects/${slug}`} 
            className="group flex items-center bg-background/90 backdrop-blur-xl border border-foreground/8 rounded-full p-4 pr-10 md:pr-12 shadow-2xl hover:border-foreground/15 transition-all hover:scale-105 active:scale-95"
          >
            <div 
              style={{ viewTransitionName: `project-thumb-${slug}` }}
              className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden bg-foreground/5 mr-4 md:mr-6 shrink-0 shadow-inner"
            >
               {imageSrc && <Image src={imageSrc} fill className="object-cover" alt="Next Project" priority />}
            </div>
            <div className="flex flex-col justify-center mr-6">
              <span className="text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest font-bold">Next Project</span>
              <span className="text-base md:text-lg font-semibold text-foreground whitespace-nowrap mt-[2px]">{displayTitle}</span>
            </div>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-foreground/70 transition-transform group-hover:translate-x-2" strokeWidth={2} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
