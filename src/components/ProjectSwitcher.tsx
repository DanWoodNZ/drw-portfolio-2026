"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectSwitcherProps {
  currentSlug: string;
}

export function ProjectSwitcher({ currentSlug }: ProjectSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const current = projects.find((p) => p.slug === currentSlug);
  const others = projects.filter((p) => p.slug !== currentSlug);

  // Close on outside click / escape
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Fade-out the page, then navigate (bypasses view transitions for a clean fade)
  const handleNavigate = (slug: string) => {
    setOpen(false);
    const main = document.querySelector("main");
    if (main) {
      main.style.transition = "opacity 180ms ease";
      main.style.opacity = "0";
    }
    setTimeout(() => router.push(`/projects/${slug}`), 190);
  };

  if (!current) return null;

  return (
    <div ref={ref} className="relative inline-flex">
      {/* ── Trigger ── */}
      <button
        className={`flex items-center gap-4 cursor-pointer select-none px-3 py-2.5 -mx-3 -my-2.5 rounded-[18px]  transition-colors duration-150 ${open || hovered ? "bg-foreground/[0.06]" : "bg-transparent"
          }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {/* Company icon */}
        <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-[#0A0A0A] border border-transparent dark:border-foreground/10 rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden">
          {current.companyLogo && (
            <Image
              src={current.companyLogo}
              alt={current.companyName ?? current.slug}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Name + subtitle */}
        <div className="flex flex-col justify-center text-left">
          <h4 className="text-lg md:text-xl font-extrabold text-foreground tracking-small leading-tight">
            {current.companyName}
          </h4>
          {current.companySubtitle && (
            <p className="text-foreground/50 text- font-medium tracking-small mt-0.5">
              {current.companySubtitle}
            </p>
          )}
        </div>

        {/* Chevron — bare icon, no container pill */}
        <AnimatePresence>
          {(hovered || open) && (
            <motion.div
              key="chevron"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ChevronDown className="w-5 h-5 text-foreground/40" strokeWidth={2} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-3 z-50 w-[300px] md:w-[340px] bg-background/90 backdrop-blur-2xl border border-foreground/8 rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.14)] py-2"
          >
            {others.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.22,
                  delay: i * 0.025,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="px-2"
              >
                <button
                  role="option"
                  onClick={() => handleNavigate(project.slug)}
                  className="group/item w-full flex items-center gap-3 px-3 py-2.5 rounded-[12px] hover:bg-foreground/[0.06] transition-colors duration-150 text-left"
                >
                  {/* Logo */}
                  <div className="w-9 h-9 shrink-0 bg-[#0A0A0A] border border-transparent dark:border-foreground/10 rounded-xl relative overflow-hidden">
                    {project.companyLogo && (
                      <Image
                        src={project.companyLogo}
                        alt={project.companyName ?? project.slug}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Text — company name + optional short project name */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-foreground leading-tight truncate">
                      {project.companyName}
                      {project.projectShortName && (
                        <span className="text-foreground/40 font-medium"> · {project.projectShortName}</span>
                      )}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
