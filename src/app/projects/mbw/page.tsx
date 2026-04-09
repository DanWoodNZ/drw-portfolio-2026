import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="mbw">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[4%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="mbw" />
          <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-medium text-foreground/70">
            2020
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I created the brand and blueprint for a private digital membership portal targeting authentic leadership.
        </h1>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] mb-10">
        <img
          src="/pt-mbw.webp"
          alt="Building a platform for authentic leadership."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-mbw" }}
        />
      </ScrollReveal>

      {/* Case Study Block
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Brand direction</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Bold and unapologetic
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            When we were researching an aesthetic for the brand, we were looking for punchy and memorable. With a background in addiction and a no-nonsense style of coaching, we selected a striking color palette paired with brazen imagery that would allow Michael to position himself as a leader in his niche and stand out from the competition.
          </p>
        </div>
      </ScrollReveal> */}

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImage src="/projects/mbw/mbw-headings-example.webp" />
        <ProjectImage src="/projects/mbw/mbw-1.webp" />
        <ProjectImage src="/projects/mbw/mbw-2.webp" />
        <ProjectImagePair left="/projects/mbw/mbw-3.webp" right="/projects/mbw/mbw-4.webp" />
        <ProjectImage src="/projects/mbw/mbw-5.webp" />
        <ProjectImage src="/projects/mbw/mbw-9.webp" />
        <ProjectImage src="/projects/mbw/mbw-10.webp" />
        <ProjectImage src="/projects/mbw/mbw-6.webp" />
        <ProjectImage src="/projects/mbw/mbw-7.webp" />
        <ProjectImage src="/projects/mbw/mbw-8.webp" />
      </ScrollReveal>

      {/* Case Study Block 
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Content strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Stories worth telling
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            We found that the most important part of Michael's branding was the relationship between his past in addiction and his future in leadership. We wanted to tell his story in an authentic and captivating way while implementing a system that encouraged others to also share, and become a part of his community. This enabled us to grow a strong and loyal customer base by emulating the meeting and sponsorship aspects of recovery in a business setting.
          </p>
        </div>
      </ScrollReveal>*/}

      {/* Case Study Block 
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Growth</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Optimizing for growth.
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            We approached the entire user experience with future growth and Michael's vision at the forefront. Knowing that Michael was looking to build a large community over the next few years, we created a digital platform/portal for Michael's paid and unpaid followers to access resources as well as participate in live calls, 'sponsorship' and other activities associated with Michael's Mask-Free program.
          </p>
        </div>
      </ScrollReveal>*/}




      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Branding, App & Web Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Sun Yi, Gigi Yi</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
