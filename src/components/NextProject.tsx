"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

interface NextProjectProps {
  slug: string;
  imageSrc?: string;
  title: string;
  companyName?: string;
}

export function NextProject({ slug, imageSrc, title, companyName }: NextProjectProps) {
  return (
    <div className="w-full px-4 md:px-8 xl:px-[4%] pt-10 pb-20">
      <Link
        href={`/projects/${slug}`}
        className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-6 lg:py-8 lg:pl-8 lg:pr-16 rounded-[16px] md:rounded-[20px] overflow-hidden transition-colors duration-500 bg-transparent hover:bg-foreground/5 border border-foreground/10 gap-10 lg:gap-24"
      >
        <div className="flex items-center w-full lg:w-auto shrink-0">
          <div
            style={{ viewTransitionName: `project-thumb-${slug}` }}
            className="w-full lg:w-[400px] xl:w-[480px] aspect-video rounded-[16px] md:rounded-[20px] overflow-hidden relative bg-[#0A0A0A] shrink-0"
          >
            {imageSrc ? (
              <Image src={imageSrc} alt="Preview" fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-foreground/10 flex items-center justify-center">
                <span className="text-foreground/20 text-xs uppercase tracking-widest">Preview</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between lg:justify-end w-full min-w-0 gap-6 lg:gap-12 pr-2 sm:pr-4">
          <div className="flex flex-col lg:items-end justify-center w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Next project
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base md:text-lg leading-relaxed mt-2 lg:mt-4 lg:text-right max-w-sm lg:max-w-md">
              {title}
            </p>
          </div>

          <div className="flex shrink-0">
            <ArrowRight
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] text-foreground font-normal transition-transform duration-300 ease-out group-hover:translate-x-4 lg:-translate-y-2"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
