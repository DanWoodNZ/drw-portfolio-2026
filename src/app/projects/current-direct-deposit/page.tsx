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
    <ProjectLayout slug="current-direct-deposit">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[12%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <ProjectSwitcher currentSlug="current-direct-deposit" />
          <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-medium text-foreground/70">
            2026
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I overhauled the direct deposit flow to reduce duplicate switches by 60%, while providing better clarity around timing for users.
        </h1>
      </HeroReveal>

      {/* Editable Primary Hero Image */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-20">
        <img
          src="/pt-current-direct-deposit.webp"
          alt="Driving growth through Current's core banking."
          className="w-full h-auto block rounded-[20px] md:rounded-[32px]"
          style={{ viewTransitionName: "project-thumb-current-direct-deposit" }}
        />
      </ScrollReveal>


      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            TLDR
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            Direct deposit is the lifeblood of fintech primacy, but our users were being left in the dark during the crucial waiting period. Like many fintech platforms, growth at Current relies on users setting up direct deposit to unlock premium benefits. Optimizing this journey was essential to driving both conversion and long-term retention.
            <br /><br />
            To fix this, I led design for the overhaul of our direct deposit setup and tracking experience. We created a clear feedback loop to reduce user anxiety, decrease duplicate setup attempts, and transparently connect payroll deposits to benefits those deposits unlocked.
          </p>
        </div>
      </ScrollReveal>

      {/* Before / After */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-16 md:pb-24">
        <BeforeAfter
          beforeSrc="/projects/current/current-dd-before.webp"
          afterSrc="/projects/current/current-dd-after.webp"
          beforeMobileSrc="/projects/current/current-dd-before-mobile.webp"
          afterMobileSrc="/projects/current/current-dd-after-mobile.webp"
          beforeLabel="Before"
          afterLabel="After"
        />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            A black box experience
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Our direct deposit flow lacked post-setup feedback, leaving users in the dark until their first paycheck arrived. This lack of guidance caused three major pain points:
            </p>
            <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2 mb-4">
              <li><strong>High drop-off & switch duplication:</strong> Only ~50% of switches converted to a deposit within 35 days. Through cs inbound and public comms, we knew users were confused by the lack of visibility. This resulted in users often resubmitting, resulting in ~30% of switches as pure duplicates.</li>
              <li><strong>Support burden:</strong> Payroll status was our number one inbound support category. Users were tracking their deposits down to the minute and venting on platforms like Reddit when they were delayed.</li>
              <li><strong>Benefits confusion:</strong> Users who successfully set up their direct deposit were confused about how it impacted their eligibility for features like Paycheck Advance or Fee-Free Overdraft. Some would receive a deposit but fail to unlock benefits (due to minimum deposit rules) and could not understand why.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImagePair left="/projects/current/current-dd-reddit.webp" right="/projects/current/current-dd-appbot.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            The game plan
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              To solve this, we hypothesized that increasing transparency around setup status, deposit timing, and feature eligibility would significantly improve the user experience. Our core objectives were to:
            </p>
            <ol className="list-decimal pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
              <li><strong>Acknowledge the switch:</strong> Provide immediate visual confirmation when a switch is processing.</li>
              <li><strong>Clarify benefit unlocking:</strong> Make it explicit that benefits unlock after the direct deposit lands, not just when the switch is submitted.</li>
              <li><strong>Predict deposit timing:</strong> Give users an estimate of when to expect their next paycheck.</li>
            </ol>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/projects/current/current-dd-original-test.webp" />
        <ProjectImagePair left="/projects/current/current-dd-exploration-1.webp" right="/projects/current/current-dd-exploration-2.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>User research</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            Rapid prototyping
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              We conducted usability testing to validate our initial assumptions.
            </p>
            <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
              <li><strong>Timeline expectations:</strong> We discovered users explicitly expected a timeline or progress bar when returning to the DD flow to check their status.</li>
              <li><strong>Set up history:</strong> Users (and senior stakeholders) were confused by the set up history vs active payroll tracking. Since we didn't have attribution to connect a switch attempt with a landed deposit, the end-to-end flow was less useful, and a generic pending message made the most sense to cover all bases and provide clarity to the user.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImagePair left="/projects/current/current-dd-usability-1.webp" right="/projects/current/current-dd-usability-2.webp" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Design</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            The solution
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Phase 1: Acknowledgment & benefit clarity</h3>
              <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
                <li><strong>Status Alert Cards:</strong> Added dynamic alert cards at the top of the screen to acknowledge successful switches, surfacing them for 35 days or until a payroll landed.</li>
                <li><strong>Payroll History:</strong> Introduced a new payroll detail card showing the last deposit received date and a 90-day payroll history.</li>
                <li><strong>Benefits Hub Integration:</strong> Designed a unified payroll benefits module displaying active/inactive states (Eligible, Ineligible, Unavailable) for features like Paycheck Advance, Overdraft, and Savings Boost. The intention here was for each feature to handle ineligble states and set expections within each module, with direct deposit acting as an overview of status.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Phase 2: Predictive tracking & delay alerts</h3>
              <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2">
                <li><strong>Expected Dates:</strong> Added the "next expected deposit date" to the payroll details for users with regular periodicity.</li>
                <li><strong>Contextual Delays:</strong> Designed contextual alert cards (yellow for delayed, red for missed) to proactively inform users if their deposit was delayed, heading off support tickets.</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/projects/current/current-dd-states-1.webp" />
        <ProjectImage src="/projects/current/current-dd-states-2.webp" />
        {/*add videos of final solution
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />*/}
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Outcome</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            What did we achieve?
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">60% reduction in duplicate switches</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium"> Between variant and control, duplicate switches were down to 2k per week from 6-7k prior to experience launch<br /></p><br />
            </div>
            <div className="border-l-4 border-foreground/20 pl-6 py-2">
              <h4 className="text-foreground font-bold text-xl mb-2">3% payroll conversion lift</h4>
              <p className="text-foreground/70 text-base md:text-lg font-medium">A less than ideal result, but an improvement nonetheless and a sign we were headed in the right direction.<br /></p><br />
            </div>
          </div>
        </div>
      </ScrollReveal>



      {/* Editable Project Credits */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] pb-20 mt-10">
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
          </div>
        </div>
      </ScrollReveal>

    </ProjectLayout>
  );
}
