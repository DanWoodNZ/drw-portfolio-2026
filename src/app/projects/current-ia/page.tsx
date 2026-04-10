import { Link } from "next-view-transitions";
import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Eyebrow } from "@/components/Eyebrow";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="current-ia">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[4%] pt-8 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="current-ia" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I overhauled an out-of-date information architecture for Current, improving feature discoverability and conversion.
        </h1>
        <div>
          <Link href={`/projects/current-ia/case-study`} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground/5 text-foreground font-semibold hover:scale-105 transition-transform duration-200 mt-2">
            📖&ensp;View case study
          </Link>
        </div>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] mb-10">
        <img
          src="/pt-current-ia.webp"
          alt="Unlocking the value of the Current."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-current-ia" }}
        />
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-10 md:pb-10">
        <ProjectImagePair left="/projects/current/current-ia-overview.webp" right="/projects/current/current-ia-discover.webp" />
        <ProjectImagePair left="/projects/current/current-ia-transfer.webp" right="/projects/current/current-ia-account.webp" />

        <ProjectImagePair left="/projects/current/current-ia-offers.webp" right="/projects/current/current-ia-pca-states.webm" />
        <ProjectImagePair left="/projects/current/current-ia-pca-states.webp" right="/projects/current/current-ia-od-states.webp" />
        <ProjectImagePair left="/projects/current/current-ia-overview.webm" right="/projects/current/current-ia-reward.webp" />
      </ScrollReveal>


      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Maggie Newcomer, Phil Shipley</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Engineering</h4>
              <p className="text-foreground/50 text-lg">Sergiy Momot, Ramit Suri, Mingming Lang, Jayson Isaac</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Data</h4>
              <p className="text-foreground/50 text-lg">Bella Ishmaeva</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">User Research</h4>
              <p className="text-foreground/50 text-lg">Seka Sekanwagi, Travis Pinnick</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
