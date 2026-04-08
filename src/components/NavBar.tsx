"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastYRef = useRef(0);
  const accumulatorRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    const delta = latest - lastYRef.current;

    let newNavVisible = navVisible;

    // Scrolling Down
    if (delta > 0) {
      if (accumulatorRef.current < 0) accumulatorRef.current = 0;
      accumulatorRef.current += delta;

      // Keep on screen much longer before hiding: past 600px
      if (accumulatorRef.current > 40 && latest > 600) {
        if (!isOpen) newNavVisible = false;
      }
    }
    // Scrolling Up
    else if (delta < 0) {
      if (accumulatorRef.current > 0) accumulatorRef.current = 0;
      accumulatorRef.current += delta;

      if (accumulatorRef.current < -150 || latest <= 600) {
        newNavVisible = true;
      }
    }

    setNavVisible(newNavVisible);
    lastYRef.current = latest;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (newNavVisible && latest > 600 && !isOpen) {
      timeoutRef.current = setTimeout(() => {
        setNavVisible(false);
        accumulatorRef.current = 0;
      }, 4000);
    }
  });

  useEffect(() => {
    if (isOpen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setNavVisible(true);
    } else {
      if (scrollY.get() > 600) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setNavVisible(false);
          accumulatorRef.current = 0;
        }, 4000);
      }
    }
  }, [isOpen, scrollY]);

  useEffect(() => {
    setMounted(true);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Prevent scroll clipping logic targeting global boundaries explicitly!
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const ThemeSwitcher = () => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="flex items-center p-[4px] rounded-full border border-foreground/8 bg-transparent transition-colors hover:border-foreground/15 cursor-pointer"
    >
      <div className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-foreground/20' : 'opacity-30'}`}>
        <Moon className="w-4 h-4 md:w-5 md:h-5 text-foreground" strokeWidth={1.5} />
      </div>
      <div className={`p-2 rounded-full transition-colors duration-300 ${theme === 'light' ? 'bg-foreground/20' : 'opacity-30'}`}>
        <Sun className="w-4 h-4 md:w-5 md:h-5 text-foreground" strokeWidth={1.5} />
      </div>
    </button>
  );

  return (
    <>
      {/* Structural placeholder blocking any layout shifts natively! */}
      <div className="h-[120px] w-full shrink-0">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: navVisible ? 0 : "-150%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-[60] flex justify-center w-full transition-all duration-500 ease-out ${isScrolled ? "pt-4 px-4 sm:pt-6 sm:px-6 md:px-10 lg:px-[10%]" : "pt-0 px-0"}`}
        >
          <header className={`flex justify-between items-center transition-all duration-500 ease-out border ${isScrolled
            ? `w-full h-[72px] md:h-[80px] px-4 md:px-5 bg-background/80 backdrop-blur-xl rounded-full shadow-lg ${isOpen ? 'border-transparent' : 'border-foreground/8'}`
            : "w-full px-4 md:px-8 xl:px-[12%] py-10 h-[120px] bg-background border-transparent"
            }`}
          >
            {/* Left: Constant Logo Matrix */}
            <div className="flex flex-1 justify-start">
              <Link href="/" aria-label="Home" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src="/icons/icon-logo.png"
                    alt="Custom Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Center: Desktop Links (Physically Nullified Outside Breakpoint) */}
            <nav className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-semibold">
              <Link href="/" className="hover:text-foreground/70 transition-colors">
                Work
              </Link>
              <Link href="/about" className="hover:text-foreground/70 transition-colors">
                Info
              </Link>
              <a
                href="mailto:danrobertwood@gmail.com?subject=Portfolio%20Message"
                className="hover:text-foreground/70 transition-colors"
              >
                Say Hi 👋
              </a>
            </nav>

            {/* Center: Mobile Dark Mode Switcher (Physically Nullified Outside Breakpoint) */}
            <div className="flex md:hidden flex-1 justify-center">
              {mounted && <ThemeSwitcher />}
            </div>

            {/* Right: Desktop Switcher & Native Mobile Burger Hooks */}
            <div className="flex flex-1 justify-end items-center gap-4">
              <div className="hidden md:block">
                {mounted && <ThemeSwitcher />}
              </div>

              {/* Framer conditional loop actively syncing exact Menu vs Close hooks */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center p-3 rounded-full border border-foreground/8 bg-transparent text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </header>
        </motion.div>
      </div>

      {/* Extreme Full-Scale Mobile Layout Bounds! */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-background flex flex-col justify-between pt-[140px] pb-24 px-[20px]"
          >
            {/* Overtly massive explicit type-links tracking center rendering constraints cleanly! */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col items-center justify-center gap-10 flex-1"
            >
              <motion.div variants={itemVariants}>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-6xl font-semibold hover:text-foreground/70 transition-colors">
                  Work
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-6xl font-semibold hover:text-foreground/70 transition-colors">
                  Info
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a href="mailto:danrobertwood@gmail.com?subject=Portfolio%20Message" onClick={() => setIsOpen(false)} className="text-6xl font-semibold hover:text-foreground/70 transition-colors">
                  Say Hi 👋
                </a>
              </motion.div>
            </motion.div>

            {/* Native duplicate explicitly tracking independent icon loads purely for overlay matrix mappings! */}
            <div className="flex justify-center items-center w-full space-x-12">
              <a href="https://www.dribbble.com/danrobertwood" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" aria-label="Dribbble">
                <div className="relative w-8 h-8">
                  <Image src="/icons/icon-dribble.svg" alt="Dribbble" fill className="object-contain dark:brightness-100 brightness-0" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/danrobertwood" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <div className="relative w-8 h-8">
                  <Image src="/icons/icon-linkedin.svg" alt="LinkedIn" fill className="object-contain dark:brightness-100 brightness-0" />
                </div>
              </a>
              <a href="https://www.instagram.com/danrobertwood" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <div className="relative w-8 h-8">
                  <Image src="/icons/icon-instagram.svg" alt="Instagram" fill className="object-contain dark:brightness-100 brightness-0" />
                </div>
              </a>
              <a href="https://open.spotify.com/user/1241863181?si=36e3331fcb214a63" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" aria-label="Spotify">
                <div className="relative w-8 h-8">
                  <Image src="/icons/icon-spotify.svg" alt="Spotify" fill className="object-contain dark:brightness-100 brightness-0" />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
