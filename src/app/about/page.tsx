import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SkillCard } from "@/components/SkillCard";
import Image from "next/image";

export default function About() {
  const skills = [
    { emoji: "📌", label: "UX Design" },
    { emoji: "📐", label: "UI Design" },
    { emoji: "📱", label: "Responsive Design" },
    { emoji: "👉", label: "Interaction Design" },
    { emoji: "💫", label: "Motion Design" },
    { emoji: "↩️", label: "Prototyping" },
    { emoji: "🖌️", label: "Illustration" },
    { emoji: "💻", label: "Development" },
    { emoji: "📷", label: "Photography" },
    { emoji: "🎬", label: "Videography" },
    { emoji: "📄", label: "Research" },
    { emoji: "☕", label: "Perfect Cold Brew" },
  ];

  const experiences = [
    {
      company: "Current",
      role: "Lead Product Designer",
      status: "Hybrid",
      date: "2022 — Present",
      desc: "Leading design on the primacy / growth team and responsible for the Current app & web design system.",
      logo: "/current.png",
    },
    {
      company: "Kismet",
      role: "Lead Product Designer",
      status: "Freelance",
      date: "2025 — 2026",
      desc: "Led an experience redesign and build out of net new user flows.",
      logo: "/kismet.png",
    },
    {
      company: "TMRW",
      role: "Branding",
      status: "Freelance",
      date: "2025 — 2026",
      desc: "Led all branding efforts, creating the visual identity, marketing resources, brand guidelines, and the launch website.",
      logo: "/tmrw.png",
    },
    {
      company: "Quimbee",
      role: "Senior Product Designer",
      status: "Remote",
      date: "2020 — 2022",
      desc: "Responsible for ongoing end-to-end cross-platform feature releases, including research, ideation, and integration into the design system.",
      logo: "/quimbee.png",
    },
    {
      company: "NightOwls",
      role: "Product Designer",
      status: "In-Person",
      date: "2019 — 2020",
      desc: "Designed websites and web applications for a wide range of clients from personal brands to augmented reality tech for pharma.",
      logo: "/nightowls.png",
    },
    {
      company: "NinetyOne Visual",
      role: "Owner",
      status: "In-Person",
      date: "2014 — 2029",
      desc: "Owned and operated a creative agency offering web design, branding, digital design, film, and photography. Worked with clients throughout New Zealand and the United States, from large brands to local businesses.",
      logo: "/ninetyone.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavBar />

      {/* Intro section */}
      <div className="pt-20 pb-24 px-4 md:px-8 xl:px-[4%]">
        <h1 className="text-4xl md:text-[64px] font-semibold leading-[1.2] tracking-tight max-w-[1400px] mb-24">
          15 years of creative problem solving. Currently focused on the future of banking and the chaos of a toddler.
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Description */}
          <div className="w-full lg:w-[60%] flex flex-col gap-16">
            <section className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-bold">A little about me</h3>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                My background is a mix of visual storytelling and systems thinking. After two degrees
                (one in film and one in software engineering), a few years in filmmaking, and a few years
                running a creative agency, I transitioned into product design. Outside of work, I&apos;m based
                in Hoboken with my wife Paige, our daughter Elva, and our dog Archie. I&apos;m into photography,
                film &amp; enjoy the occasional round of tennis.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-bold">My work now</h3>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                At Current I lead design on the primacy / growth team, managing a cross-platform design
                system while optimizing the high-stakes flows of onboarding and direct deposit. By balancing
                rigorous systems thinking with strategic information architecture, i&apos;ve helped turn complex
                financial friction into intuitive, discoverable experiences that drive both user trust and
                business growth.
              </p>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                An unsung part of my role is ensuring our design process is as powerful as the products
                we build. I upleveled our design system by introducing complex variables with primitives
                and semantic naming for better code parity, resulting in less time spent on design system
                questions in the delivery phase, while keeping output clean and accurate. Beyond what&apos;s
                actually shipped to users, I also focus on reducing friction by streamlining our asset
                pipelines, and have been experimenting with vibe coding AI tools for asset creation.
              </p>
            </section>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full aspect-[4/5] bg-foreground/5 rounded-[16px] md:rounded-[20px] border border-foreground/5 flex items-center justify-center relative overflow-hidden">
              <Image src="/dan-profile.jpg" alt="Dan Wood" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Work History — Timeline */}
      <div className="w-full px-4 md:px-8 xl:px-[4%] mb-40">
        <h2 className="text-4xl font-semibold mb-16">Work history</h2>

        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group border border-foreground/6 rounded-[16px] md:rounded-[20px] p-6 md:p-8">

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">

                {/* Logo — stacks on mobile, sits left on desktop */}
                <div className="flex w-14 h-14 sm:w-24 sm:h-24 md:w-[110px] md:h-[110px] shrink-0 bg-[#0A0A0A] border border-transparent dark:border-foreground/10 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] items-center justify-center relative overflow-hidden self-start">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      fill
                      className="object-contain p-3 sm:p-5 md:p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center gap-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 w-full">
                    <div className="flex flex-col gap-1 pr-20 sm:pr-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{exp.company}</h3>
                      <div className="flex items-center gap-3">
                        <p className="text-foreground/70 text-base">{exp.role}</p>
                        <span className="px-3 py-1 bg-foreground/5 border border-foreground/6 rounded-full text-[11px] sm:text-xs font-medium tracking-normal text-foreground/50 backdrop-blur-md">
                          {exp.status}
                        </span>
                      </div>
                    </div>
                    <div className="md:text-right mt-1 md:mt-0 shrink-0">
                      <p className="text-foreground font-semibold text-base sm:text-lg tracking-wide">{exp.date}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-base leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Bag of tricks */}
      <div className="w-full px-4 md:px-8 xl:px-[4%] pb-40">
        <h2 className="text-4xl font-semibold mb-12">My bag of tricks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} emoji={skill.emoji} label={skill.label} />
          ))}
        </div>
      </div>

      {/* Photography 
      <div className="w-full px-4 md:px-8 xl:px-[4%] pb-40">
        <h2 className="text-4xl font-semibold mb-12">Snaps 📸</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full aspect-[4/3] bg-foreground/5 rounded-[32px] border border-foreground/5 flex items-center justify-center relative overflow-hidden">
            <span className="text-foreground/20 text-xs font-semibold uppercase tracking-widest px-4">
              Upload Photo 1
            </span>
            <Image src="/my-photo-1.jpg" alt="Photography 1" fill className="object-cover" />
          </div>
          <div className="w-full aspect-[4/3] bg-foreground/5 rounded-[32px] border border-foreground/5 flex items-center justify-center relative overflow-hidden">
            <span className="text-foreground/20 text-xs font-semibold uppercase tracking-widest px-4">
              Upload Photo 2
            </span>
            <Image src="/my-photo-2.jpg" alt="Photography 2" fill className="object-cover" />
          </div>
        </div>
      </div>*/}

      <Footer />
    </main>
  );
}
