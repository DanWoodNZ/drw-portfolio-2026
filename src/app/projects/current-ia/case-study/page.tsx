import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Eyebrow } from "@/components/Eyebrow";

export default function ProjectPage() {

  return (
    <CaseStudyLayout>

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[4%] pt-16 lg:pt-24 pb-12 lg:pb-12 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <Link href="/projects/current-ia" className="group flex items-center gap-2 px-4 py-2 -ml-2 rounded-full border border-transparent hover:bg-foreground/5 transition-colors duration-200 w-fit text-foreground/70 hover:text-foreground font-semibold">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Link>
          <div className="rounded-full border border-foreground/10 px-3 py-1 text-sm font-semibold text-foreground/70">
            2025
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          <span className="text-foreground/50">Case Study:</span> Current Information Architecture
        </h1>

      </HeroReveal>


      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-32 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[100%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-5xl">
              As Current expanded and added new products, offers, and incentives, our original five-tab navigation began to work against us. Key features were buried in secondary tabs, reward campaigns and partner offers were all displayed in the same place competing for attention, and duplicate entry points made navigation and discovery feel cluttered and confusing for our users.

            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-5xl">
              To fix this, we redesigned the information architecture to be much more intuitive. We deprecated a 'junk drawer' tab and found logical homes for features, with the goal of meeting business goals and user needs for a simple, streamlined financial experience.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <BeforeAfter
          beforeSrc="/projects/current/current-ia-before.webp"
          afterSrc="/projects/current/current-ia-after.webp"
          beforeMobileSrc="/projects/current/current-ia-before-mobile.webp"
          afterMobileSrc="/projects/current/current-ia-after-mobile.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Buried treasure
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Through research and marketing data, we knew over 70% of new users were joining Current for liquidity reasons. Our most impactful liquidity features - Paycheck Advance and Overdraft - were buried in a secondary tab, limiting adoption, visibility, and consecutive useage.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              To make matters worse, over time as new features were added and old design structures were abandonded, entrypoints to the same features were scattered throughout the 5 primary tabs and beyond, adding unnessecary cognitive load.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/current/current-ia-problem-1.webp" right="/projects/current/current-ia-problem-2.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Information overload
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              With promotional offers and partnerships, we were limited to using interstitials and content cards on the overview screen, in the same space we were communicating other account related info. PMs and other stakeholders were battling for space as our need to communicate important information and offers grew. This also made for a frustrating user experience, where offers shown in app were fleeting, with no easy way to rediscover.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/current/content-card-scroll.webm" right="/projects/current/interstitial-popup.webm" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>User research</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            So what makes sense to our users?
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Our original navigation structure relied on outdated logic that split key features across five different tabs. Over time, as we added new services, this led to redundant entry points and a fragmented user experience.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              To resolve this, we conducted tree testing and card sorting to validate a new approach. The results confirmed that consolidating these paths into single, focused entry points significantly improved navigation and removed unnecessary complexity.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/current/current-ia-tree-test.webp" right="/projects/current/current-ia-card-sort.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            The way forward
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              By removing duplicate entry points, deprecating the "Services" tab, and moving prominent features directly to the "Overview" tab, we could significantly increase discoverability and engagement.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              Furthermore, introducing a dedicated "Discover" tab for offers and other content would allow for improved discoverability, drive incremental app engagement and ultimately boost payroll conversion.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-4">
              Rather than shocking our users with a massive overnight change, and in part due to engineering constraints and bandwidth issues, we phased the rollout to monitor risk and user sentiment.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImage src="/projects/current/ia-handoff.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Phase 1 (Cleanup)
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              Stripped out duplicate entry points across the Transfer and Account tabs to reduce clutter. We decided to move to 100% immediately without a feature flag based on stakeholder agreement and research findings.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImage src="/projects/current/current-ia-phase-1.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Phase 2 (Consolidation)
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              Deprecated the Services tab entirely. Rebuilt the Overview screen with new card components, an animated referral entry point, and immediate visibility into spending balances, Paycheck Advance, and Overdraft. This was rolled out to 10% for monitoring, before an eventual full release after positive sentiment and metrics.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              An important note here is the bigger swing of transparency. We had never previously exposed limits for liquidity features at the tab level, and a point of contention between stakeholders was the risk of negative user sentiment in regard to fluctuating Paycheck Advance limits.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImage src="/projects/current/current-ia-phase-2.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Phase 3 (Expansion)
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              Launched the "Discover" tab to centralize always-on incentives, partnership offers, and points redemption, shifting these from comms-only channels into a native app experience.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImage src="/projects/current/current-ia-phase-3.webp" />
        <ProjectImage src="/projects/current/current-ia-tempest.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Risk management</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Navigating edge cases &amp; risk
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Exposing liquidity limits directly on the home screen introduced new risk, due to limit fluctuations, a known pain point for users. If a user's Paycheck Advance limit decreased, seeing that immediately upon login could trigger frustration or a spike in support tickets.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              To mitigate this, I designed distinct contextual states for the UI components depending on the user's lifecycle (New, Active, Limit Reached, Ineligible (State Restriction)). We also gated the visible limits behind specific feature flags to A/B test the impact on user sentiment and inbound support volume before a full rollout.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/current/current-ia-pca-states.webp" right="/projects/current/current-ia-pca-reddit.webp" />
      </ScrollReveal>



      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            What did we achieve?
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">Increase in engagement</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium"> The primary goal was increasing discoverability and clicks to high-value features without hurting business-critical metrics.<br /></p><br />
              <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
                <li><strong>Paycheck Advance:</strong> 14.6% increase in click-through rate, 3% increase in draws</li>
                <li><strong>Overdraft:</strong> 6.9% increase in click-through rate</li>
                <li><strong>Referrals:</strong> 12.4% increase in click-through rate</li>
              </ul>
            </div>
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">Small lift in payroll conversion</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium"> Increasing payroll conversion wasn't a make or break for this project, but we saw a small lift due to increased discoverability of Paycheck Advance and referrals on the homescreen.</p>
            </div>
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">Multiple campaigns viewed on discover</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium"> Over a month-long monitoring period, with 5 campaigns launched, we had 245k unique users visit the discover tab, with 7,342 cross-campaign users, something our old interstitial method couldn't emulate.</p>
            </div>
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">Dedicated portal for self service</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium"> Through the completion of the discover tab, we also created a dedicated portal for PMMs to self serve campaigns on the discover tab, complete with prioritization.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] pb-16 md:pb-24">
        <ProjectImagePair left="/projects/current/current-ia.webm" right="/projects/current/pca-draw.webm" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[4%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Expansion</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            What's next?
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              The discover tab was originally proposed as a place to explore a range of content, and was descoped for launch to just two categories, rewards and offers. Work is underway to bring the full vision to life, including educational content, points offers and more.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mt-4">
              A full overhaul of the monitor tab is also in the works, (a tab that hasn't seen love in over two years) with the goal of bringing more useful insights and financial information to users.
            </p>
          </div>
        </div>
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

    </CaseStudyLayout>
  );
}
