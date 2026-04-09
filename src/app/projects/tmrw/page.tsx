import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="tmrw">

      {/* Editable Top Hero Layout */}
      <div className="w-full px-4 md:px-8 xl:px-[4%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="tmrw" />
          <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-medium text-foreground/70">
            2025
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          Defined the complete visual identity and marketing presence from day zero to launch.
        </h1>
      </div>

      {/* Editable Primary Hero Image */}
      <div className="w-full px-4 md:px-8 xl:px-[4%] mb-10">
        <img
          src="/pt-tmrw.webp"
          alt="Defining TMRW from day zero."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-tmrw" }}
        />
      </div>

      {/* Editable Title & Description side by side 
      <div className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row gap-16 lg:gap-32 mb-16 md:mb-24">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            TLDR
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-xl lg:text-2xl leading-relaxed max-w-3xl">
            TMRW needed a distinct, professional identity to launch their service. As the lead designer, I was tasked with building a brand from the ground up that could feel both innovative and trustworthy, ensuring consistency across every digital touchpoint.
          </p>
          <p className="text-foreground/70 text-xl lg:text-2xl leading-relaxed max-w-3xl">
            In a category often cluttered with aggressive "bio-hacking" aesthetics, I designed the TMRW brand to feel intentionally sharp, precise, and sophisticated. We moved away from the generic conventions of the health supplement space, opting instead for a minimalist, editorial-inspired look that mirrors the scientific rigor of the product.
          </p>
        </div>
      </div>*/}

      {/* Editable Content Images */}
      <div className="w-full px-4 md:px-8 xl:px-[4%]">
        <ProjectImage src="/projects/tmrw/tmrw-ad-1.webm" />
        <ProjectImage src="/projects/tmrw/tmrw-1.webp" />
        <ProjectImage src="/projects/tmrw/tmrw-2.webp" />
        <ProjectImagePair left="/projects/tmrw/tmrw-ad-3.webm" right="/projects/tmrw/tmrw-ad-4.webm" />
        <ProjectImage src="/projects/tmrw/tmrw-3.webp" />
        <ProjectImage src="/projects/tmrw/tmrw-ad-2.webm" />
        <ProjectImage src="/projects/tmrw/tmrw-4.webp" />
        <ProjectImagePair left="/projects/tmrw/tmrw-5.webp" right="/projects/tmrw/tmrw-6.webp" />
        <ProjectImage src="/projects/tmrw/tmrw-7.webp" />
        <ProjectImage src="/projects/tmrw/tmrw-8.webp" />

      </div>


      {/* Editable Project Credits */}
      <div className="w-full px-4 md:px-8 xl:px-[4%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Branding & Website Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Anthony Baxter</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Video</h4>
              <p className="text-foreground/50 text-lg">VideGro</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Development</h4>
              <p className="text-foreground/50 text-lg">Danko Crocode</p>
            </div>
          </div>
        </div>
      </div>

    </ProjectLayout>
  );
}
