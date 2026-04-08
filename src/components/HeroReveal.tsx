"use client";

import { motion } from "framer-motion";
import React from "react";

export function HeroReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
