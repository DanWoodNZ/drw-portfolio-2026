import { Link } from "next-view-transitions";
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
    <ProjectLayout slug="quimbee">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[4%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="quimbee" />
          <div className="rounded-full border border-foreground/10 px-3 py-1 text-sm font-semibold text-foreground/70">
            2021
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I elevated core learning and assessment products, improving NPS empowering the next generation of top-tier legal talent.
        </h1>
        <div>
          <Link href={`/projects/quimbee/case-study`} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground/5 text-foreground font-semibold hover:scale-105 transition-transform duration-200 mt-2">
            📖&ensp;View case study
          </Link>
        </div>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] mb-10">
        <img
          src="/pt-quimbee.webp"
          alt="Empowering the next generation of legal professionals."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-quimbee" }}
        />
      </ScrollReveal>



      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-1.webp"
          afterSrc="/projects/quimbee/quimbee-2.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-1.webp"
          afterMobileSrc="/projects/quimbee/quimbee-2.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>




      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <ProjectImage src="/projects/quimbee/quimbee-dashboard-video.mp4" />
        <ProjectImage src="/projects/quimbee/quimbee-app.webp" />
        <ProjectImage src="/projects/quimbee/quimbee-mock-hero.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-mock-1.webp" right="/projects/quimbee/quimbee-mock-3.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-mock-2.webp" right="/projects/quimbee/quimbee-mock-4.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-organization-improvements.webp" right="/projects/quimbee/quimbee-visual-improvements.webp" />
      </ScrollReveal>



      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-15.webp"
          afterSrc="/projects/quimbee/quimbee-16.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-15.webp"
          afterMobileSrc="/projects/quimbee/quimbee-16.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-17.webp"
          afterSrc="/projects/quimbee/quimbee-18.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-17.webp"
          afterMobileSrc="/projects/quimbee/quimbee-18.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>





      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Design, User Research</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Engineering</h4>
              <p className="text-foreground/50 text-lg">María Pérez Ferrando, Derek Kniffin</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Aaron Dewald</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
