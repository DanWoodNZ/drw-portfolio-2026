"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Optional mobile-specific sources, used on screens narrower than lg (1024px) */
  beforeMobileSrc?: string;
  afterMobileSrc?: string;
}

const AUTO_INTERVAL = 5000;

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeMobileSrc,
  afterMobileSrc,
}: BeforeAfterProps) {
  const [active, setActive] = useState<0 | 1>(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Detect lg breakpoint (1024px) client-side
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const resolvedBefore = isMobile && beforeMobileSrc ? beforeMobileSrc : beforeSrc;
  const resolvedAfter  = isMobile && afterMobileSrc  ? afterMobileSrc  : afterSrc;
  const labels = [beforeLabel, afterLabel];

  // ── Auto-advance ─────────────────────────────────────────────────────────────

  const advance = useCallback(() => {
    setActive((v) => (v === 0 ? 1 : 0));
    setProgress(0);
    startTimeRef.current = null;
  }, []);

  const tick = useCallback(
    (timestamp: number) => {
      if (paused) return;
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const p = Math.min(elapsed / AUTO_INTERVAL, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        advance();
      }
    },
    [paused, advance]
  );

  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    startTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, active, tick]);

  const handleSelect = (idx: 0 | 1) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setActive(idx);
    setProgress(0);
    startTimeRef.current = null;
    setPaused(true);
  };

  // ── Render ────────────────────────────────────────────────────────────────────

  return (
    <div className="relative w-full rounded-[16px] md:rounded-[20px] overflow-hidden bg-foreground/5">
      <div className="relative w-full">

        {/*
          Invisible spacer — sets the container height to the before image's
          natural aspect ratio. Both real images are absolutely positioned on top,
          so neither image ever clips.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedBefore}
          alt=""
          aria-hidden
          className="w-full h-auto block invisible pointer-events-none"
        />

        {/*
          Before image — always in the DOM. Framer animates opacity independently
          and simultaneously with the After image, producing a true crossfade.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          key={`before-${resolvedBefore}`}
          src={resolvedBefore}
          alt={beforeLabel}
          initial={false}
          animate={{ opacity: active === 0 ? 1 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* After image — crossfades in simultaneously as Before fades out */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          key={`after-${resolvedAfter}`}
          src={resolvedAfter}
          alt={afterLabel}
          initial={false}
          animate={{ opacity: active === 1 ? 1 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* ── Segmented controller ── */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-[10px] p-1">
            {labels.map((label, idx) => {
              const isActive = active === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx as 0 | 1)}
                  className="relative overflow-hidden rounded-[8px] px-4 py-1.5 text-sm font-semibold transition-colors duration-150 select-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="segment-bg"
                      className="absolute inset-0 bg-foreground/10 rounded-[8px]"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  {isActive && !paused && (
                    <motion.div
                      className="absolute inset-0 rounded-[8px] origin-left bg-foreground/[0.08]"
                      style={{ scaleX: progress }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-150 ${
                      isActive ? "text-foreground" : "text-foreground/40"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
