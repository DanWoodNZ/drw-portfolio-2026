import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="kismet">

      {/* Editable Top Hero Layout */}
      <div className="w-full px-4 md:px-8 xl:px-[12%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <ProjectSwitcher currentSlug="kismet" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I helped prepare a next-generation golf event booking platform for seed-stage success by rethinking legacy booking flows
        </h1>
      </div>

      {/* Editable Primary Hero Image */}
      <div className="w-full px-4 md:px-8 xl:px-[12%] mb-20">
        <img
          src="/pt-kismet.webp"
          alt="Transforming Kismet's booking ecosystem."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-kismet" }}
        />
      </div>

      {/* Editable Title & Description side by side */}
      <div className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row gap-16 lg:gap-32 mb-16 md:mb-24">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            TLDR
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-xl lg:text-2xl leading-relaxed max-w-3xl">
            Founded by a former D1 golfer and veteran software engineer, Kismet was born from a firsthand understanding of the gap between elite golf events and the logistical friction behind them.
          </p>
          <p className="text-foreground/70 text-xl lg:text-2xl leading-relaxed max-w-3xl">
            I joined the team (of two) to help refine the platform's user flows, develop new core experiences, and elevate the user interface in preparation for a seed funding round in late 2025.
          </p>
        </div>
      </div>

      {/* Editable Content Images */}
      <div className="w-full px-4 md:px-8 xl:px-[12%]">
        <ProjectImage src="/projects/kismet/kismet-create-account.webp" />
        <ProjectImage src="/projects/kismet/kismet-event-card.webp" />
        <ProjectImage src="/projects/kismet/kismet-event-templates.webp" />
        <ProjectImage src="/projects/kismet/kismet-event-mockup.webp" />
        <ProjectImage src="/projects/kismet/kismet-event-plan-mobile.webp" />
        <ProjectImagePair left="/projects/kismet/kismet-booking-dark.webp" right="/projects/kismet/kismet-booking-light.webp" />
        <ProjectImage src="/projects/kismet/kismet-vessel-homepage.webp" />
        <ProjectImage src="/projects/kismet/kismet-find-events.webp" />
        <ProjectImage src="/projects/kismet/kismet-event-booking.webp" />

      </div>


      {/* Editable Project Credits */}
      <div className="w-full px-4 md:px-8 xl:px-[12%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Software Engineering</h4>
              <p className="text-foreground/50 text-lg">Kat Slump</p>
            </div>
          </div>
        </div>
      </div>

    </ProjectLayout>
  );
}
