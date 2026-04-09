"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "next-view-transitions";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  placeholderColor?: string;
  imageSrc?: string;
  href?: string;
  companyLogo?: string;
  companyName?: string;
}

export function ProjectCard({ title, slug, description, placeholderColor = "bg-foreground/5", imageSrc, href = "#", companyLogo, companyName }: ProjectCardProps) {
  return (
    <Link href={href} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 w-full px-4 md:px-8 xl:px-[4%] mb-32 md:mb-40"
      >
        {/* Thumbnail */}
        <div>
          <div
            style={{ viewTransitionName: `project-thumb-${slug}` }}
            className={`w-full relative overflow-hidden aspect-[3/2] sm:aspect-video rounded-[16px] md:rounded-[20px] ${placeholderColor} flex items-center justify-center border border-foreground/5`}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-foreground/20 font-semibold tracking-widest text-sm uppercase">Upload Image Here</span>
            )}
          </div>
        </div>

        {/* Meta row: text (max ~70% of thumb) + logo */}
        <div className="flex items-start justify-between gap-6">
          {/* Text — capped at 70% of the card width */}
          <div className="w-full md:w-[70%]">
            <h2 className="text-base md:text-xl leading-relaxed font-medium text-foreground/70">
              <span className="text-foreground font-bold">{title}</span>{" "}
              {description}
            </h2>
          </div>

          {/* Company logo */}
          {companyLogo && (
            <div className="hidden md:flex shrink-0 w-16 h-16 md:w-16 md:h-16 bg-[#0A0A0A] border border-transparent dark:border-foreground/10 rounded-xl md:rounded-[16px] items-center justify-center relative overflow-hidden">
              <Image
                src={companyLogo}
                alt={companyName ?? "Company logo"}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
