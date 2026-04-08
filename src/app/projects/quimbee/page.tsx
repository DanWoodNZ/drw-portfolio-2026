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
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[12%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="quimbee" />
          <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-medium text-foreground/70">
            2021
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I elevated core learning and assessment products, improving NPS empowering the next generation of top-tier legal talent.
        </h1>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-20">
        <img
          src="/pt-quimbee.webp"
          alt="Empowering the next generation of legal professionals."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-quimbee" }}
        />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            TLDR
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Quimbee’s flagship Study Aids platform suffered from an outdated user experience, resulting in low satisfaction scores and poor visibility for newer product lines like Bar Review and CLE. I led a comprehensive redesign of the student dashboard, introducing intuitive organizational tools and a personalized content management system.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            We transformed the user experience, achieving a 30% increase in NPS and a 30-point jump in CSAT (62% to 92%). Beyond the metrics, we successfully integrated high-demand features like bookmarking and advanced search while significantly improving cross-product discoverability.
          </p>
        </div>
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-1.webp"
          afterSrc="/projects/quimbee/quimbee-2.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-1.webp"
          afterMobileSrc="/projects/quimbee/quimbee-2.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>


      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Defining the problems
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <ol className="list-decimal pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
            <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">

            </p>
            <li>Low NPS (34/100)</li>
            <li>High feature demand</li>
            <li>Clunky UX</li>
            <li>Low CSAT (62%)</li>
          </ol>

        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/quimbee/quimbee-3.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Process</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Adjusting the process
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Given the critical nature of the Study Aids dashboard, I opted to deviate from our standard high-fidelity workflow. By utilizing a  low-fidelity exploration phase, we were able to avoid sweating the details and test multiple structural solutions, ensuring the final direction met expectations for our users' workflows.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/quimbee/quimbee-4.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Research</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Identifying friction
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            To ensure our design decisions were rooted in real-world utility, I led a research initiative involving 400+ active Quimbee users. We categorized qualitative feedback into key themes to define what students actually needed to stay organized and productive.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            By pairing these insights with quantitative heatmap data, we mapped out the existing dashboard’s friction points, allowing us to focus our efforts on the most impactful structural changes.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/quimbee/quimbee-responses.webp" right="/projects/quimbee/quimbee-5.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Learnings</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Key takeaways
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Our key takeaways from the initial user research and page breakdown gave us valuable insight into what areas we should focus on and what would satisfy our users.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/quimbee/quimbee-6.webp" right="/projects/quimbee/quimbee-7.webp" />
      </ScrollReveal>


      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>UX architecture</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Exploring user flows
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Our goal was to create a dashboard that felt both organized and easy to use. I prioritized the tools students use every day, while making the rest of the platform easy to explore through simple navigation.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            At the same time, we made sure our other products - like Bar Review and CLE - were easy to find. This helped more users discover the full range of what Quimbee offers, leading to higher engagement and more sign-ups.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            We prototyped four initial concepts based on our user research. After reviewing them with stakeholders, we narrowed the focus to two final directions (Concepts C & D) for high-fidelity user testing.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/quimbee/quimbee-8.webp" />
      </ScrollReveal>


      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Usability testing</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Battle of the nav
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            I used Figma to test two competing navigation styles with users. While stakeholders favored an accordion menu that exposed all products, the design team advocated for a cleaner dropdown to minimize distractions. By analyzing verbal and visual feedback during testing, I was able to identify which approach truly met user needs and where the friction points remained.
          </p>
        </div>
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-9.webp"
          afterSrc="/projects/quimbee/quimbee-10.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-9.webp"
          afterMobileSrc="/projects/quimbee/quimbee-10.webp"
          beforeLabel="Concept C"
          afterLabel="Concept D"
        />
      </ScrollReveal>



      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>User feedback</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Analysis
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Users overwhelmingly preferred the dropdown concept, which validated our decision from a design standpoint. Feedback general pointed out that the accordion-style menu felt cluttered and not useful. Users also told us that the content section was a huge improvement and would help them organize and personalize their experience.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/quimbee/quimbee-11.webp" right="/projects/quimbee/quimbee-12.webp" />
      </ScrollReveal>



      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>The final design</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Study Aids Dashboard
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Utilizing icons, color and video thumbnails gives users an improved visual hierarchy, making it faster to scan and locate content. It also makes the dashboard more generally appealing. Giving users the ability to pin/bookmark content allows users to customize their content layout. By adding content specific panels we improved the default dashboard organization.
          </p>
        </div>
      </ScrollReveal>



      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/quimbee/quimbee-dashboard-video.mp4" />
        <ProjectImage src="/projects/quimbee/quimbee-mock-hero.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-mock-1.webp" right="/projects/quimbee/quimbee-mock-3.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-mock-2.webp" right="/projects/quimbee/quimbee-mock-4.webp" />
        <ProjectImagePair left="/projects/quimbee/quimbee-organization-improvements.webp" right="/projects/quimbee/quimbee-visual-improvements.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Results & expansion
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Metrics improved across the board following the launch. We saw an increase from 62% to 92% in CSAT, a stat sig improvement to NPS from 34 to 67, and positive sentiment on social and app store reviews.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            The success of the redesign led to a full-scale rollout of the new sidebar across all internal content pages and the creation of specialized dashboards for our three main product lines: Study Aids, Bar Review, and CLE.
          </p>
          <p className="text-foreground/70 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            This new architecture allowed us to tailor the experience to the unique needs of each user group. Based on the positive results from the web platform, we also expanded this UX to the iOS app, ensuring a consistent and seamless experience for students across all their devices.
          </p>
        </div>
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
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
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <BeforeAfter
          beforeSrc="/projects/quimbee/quimbee-17.webp"
          afterSrc="/projects/quimbee/quimbee-18.webp"
          beforeMobileSrc="/projects/quimbee/quimbee-17.webp"
          afterMobileSrc="/projects/quimbee/quimbee-18.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <ProjectImage src="/projects/quimbee/quimbee-app.webp" />
      </ScrollReveal>


      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-20 mt-10">
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
