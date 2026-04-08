import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="simply-nootropics">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[12%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <ProjectSwitcher currentSlug="simply-nootropics" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I led the foundational branding and web efforts that helped scale Simply Nootropics from a niche startup to a $30M+ multi-category brand
        </h1>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-20">
        <img
          src="/pt-simply-nootropics.webp"
          alt="Elevating cognitive wellness."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-simply-nootropics" }}
        />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Design goals</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Creating an informative experience
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            The objective for Simply Nootropics was to establish a premium market position while prioritizing consumer education. Given the emerging nature of the nootropics category in New Zealand, I designed a high-fidelity user experience focused on clarity and trust. My goal was to demystify the product for new customers through an informative, guided journey that converted curiosity into confidence and sales.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/simply/simply-1.webp" />
        <ProjectImage src="/projects/simply/simply-2.webp" />
        <ProjectImage src="/projects/simply/simply-3.webp" />
        <ProjectImage src="/projects/simply/simply-4.webp" />
        <ProjectImage src="/projects/simply/simply-5.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Storytelling</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Complete transparency
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            For the website and social content, I wanted to lean into the brand’s natural roots. I led the creative direction to highlight raw ingredients and total transparency, using hero imagery that shows exactly what goes into each bottle. By pairing those visuals with clear info on where the ingredients come from, I was able to answer customers' questions upfront and make the decision to buy much easier.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/simply/simply-6.webp" />
        <ProjectImage src="/projects/simply/simply-7.webp" />
        <ProjectImagePair left="/projects/simply/simply-8.webp" right="/projects/simply/simply-9.webp" />
        <ProjectImage src="/projects/simply/simply-10.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Brand identity</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Creating the brand
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            I led the branding and creative direction, focusing on a premium, 'less is more' aesthetic. I designed a conceptual logo and a minimalist packaging system that cuts through the usual supplement clutter. By prioritizing only the most essential information, I was able to create a brand identity that’s both high-end and instantly recognizable.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/simply/simply-11.webp" />

      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Packaging</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Sleek and simple
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            I focused on keeping the packaging clean and high-end while finding ways to keep manufacturing costs down. To add extra value, I designed custom inserts that educate new customers on how to use the products, while also creating a natural touchpoint for upselling and building long-term loyalty.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/simply/simply-12.webp" right="/projects/simply/simply-13.webp" />
        <ProjectImagePair left="/projects/simply/simply-14.webp" right="/projects/simply/simply-15.webp" />
      </ScrollReveal>


      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-20 mt-10">
        <div className="flex flex-col border-t border-foreground/10 pt-16">
          <h2 className="text-4xl font-semibold mb-12">Credits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Branding, Web Design</h4>
              <p className="text-foreground/50 text-lg">Dan Wood</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-foreground font-semibold text-lg">Product Management</h4>
              <p className="text-foreground/50 text-lg">Anthony Baxter</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
