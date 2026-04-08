import { ProjectLayout } from "@/components/ProjectLayout";
import { ProjectImage, ProjectImagePair } from "@/components/ProjectImage";
import { ProjectSwitcher } from "@/components/ProjectSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroReveal } from "@/components/HeroReveal";

export default function ProjectPage() {

  return (
    <ProjectLayout slug="current-direct-deposit">

      {/* Editable Top Hero Layout */}
      <HeroReveal className="w-full px-4 md:px-8 xl:px-[12%] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
        <ProjectSwitcher currentSlug="current-direct-deposit" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
          I overhauled the direct deposit flow to reduce duplicate switches by 60%, while simultaneously improving conversion and providing better clarity around timing for users.
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
            To fix this, I led the overhaul of our direct deposit setup and tracking experience. We created a clear feedback loop to reduce user anxiety, decrease duplicate setup attempts, and transparently connect payroll deposits to benefits those deposits unlocked.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/placeholder.svg" />
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />
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
              Our existing direct deposit flow lacked a post-setup feedback loop. Users would submit a switch, but see no change in the app while waiting for their first paycheck to land. This opacity led to several critical business and user pain points:
            </p>
            <ul className="list-disc pl-5 text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl flex flex-col gap-2 mb-4">
              <li><strong>High drop-off & switch duplication:</strong> Only about half of the users who submitted a switch via Pinwheel actually received a deposit within 35 days. Frustrated by the lack of feedback, many users submitted the exact same switch twice, with ~30% of switches being duplicates.</li>
              <li><strong>Support burden:</strong> Deposit status was the number one inbound support category for D35 payrollers. Users were tracking their deposits down to the minute and venting on platforms like Reddit when they were delayed.</li>
              <li><strong>Feature confusion:</strong> Users who successfully set up their direct deposit were confused about how it impacted their eligibility for features like Paycheck Advance or Fee-Free Overdraft. Some would receive a deposit but fail to unlock benefits (due to minimum deposit rules) and could not understand why.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/placeholder.svg" />
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Strategy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            Strategy &amp; Hypotheses
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
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              To test our hypotheses, we put together high fidelity flows for usability testing, to get an initial read on whether we were on the right track.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/placeholder.svg" />
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />
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
              <li><strong>Mental models:</strong> Users were bypassing the direct deposit screen entirely, going straight to the "Paycheck Advance" module to check their eligibility status. This highlighted a massive disconnect in our UX; users didn't mentally link the deposit action to the direct deposit hub.</li>
              <li><strong>Set up history:</strong> Users (and senior stakeholders) were confused by the set up history vs active payroll tracking. Since we didn't have attribution to connect a switch attempt with a landed deposit, the end-to-end flow was less useful, and a generic pending message made the most sense to cover all bases and provide clarity to the user.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] mb-16 md:mb-24">
        <ProjectImage src="/placeholder.svg" />
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />
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
        <ProjectImage src="/placeholder.svg" />
        <ProjectImagePair left="/placeholder.svg" right="/placeholder.svg" />
      </ScrollReveal>

      {/* Case Study Block */}
      <ScrollReveal className="w-full px-4 md:px-8 xl:px-[12%] py-16 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        <div className="w-full lg:w-[40%]">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            Results &amp; alignment
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Duplicate switches saw a 60% decrease in users with duplicative switches between variant and control. Payroll conversion saw a 10% relative lift.
            </p>
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
