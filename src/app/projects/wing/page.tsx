import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";
import { BeforeAfter } from "@/components/BeforeAfter";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="wing">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[4%] pt-16 lg:pt-24 pb-20 lg:pb-64 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="wing" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I reimagined the digital storefront for Wing, with the aim of optimizing for aesthetic edge, education, and conversion.
        </h1>
        <div className="text-md font-medium text-foreground/70">
          Completed in 2022
        </div>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] mb-10">
        <img
          src="/pt-wing.webp"
          alt="Elevating cognitive wellness."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-wing" }}
        />
      </ScrollReveal>

      {/* Case Study Block
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Design direction</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Bringing a premium feel to the digital experience
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Wing Bikes have a sleek, premium look and feel. The existing digital experience did not deliver the same level of quality users felt when test riding or viewing in person. Seth wanted the digital experience to match the design and experience of the real thing.
          </p>
        </div>
      </ScrollReveal> */}

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <BeforeAfter
          beforeSrc="/projects/wing/wing-before.webp"
          afterSrc="/projects/wing/wing-after.webp"
          beforeMobileSrc="/projects/wing/wing-before.webp"
          afterMobileSrc="/projects/wing/wing-after.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        {/* Full-width image */}
        <ProjectImage src="/projects/wing/wing-3.webp" alt="Wing storefront" />
        <ProjectImage src="/projects/wing/wing-4.webp" alt="Wing storefront" />
        <ProjectImage src="/projects/wing/wing-5.webp" alt="Wing storefront" />
        <ProjectImage src="/projects/wing/wing-6.webp" alt="Wing storefront" />
      </ScrollReveal>

      {/* Case Study Block
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Mobile experience</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Optimizing for mobile
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Our research found that 72% of all Wing customers were experiencing the website from a mobile device. We paid extra attention to the flow and usability of the mobile experience to ensure the visual hierarchy made sense and invited users to explore and learn.
          </p>
        </div>
      </ScrollReveal> */}

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        {/* Full-width image */}
        <ProjectImage src="/projects/wing/wing-7.webp" alt="Wing storefront" />
        <ProjectImage src="/projects/wing/wing-8.webp" alt="Wing storefront" />
      </ScrollReveal>


      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Web Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Seth Miller</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
