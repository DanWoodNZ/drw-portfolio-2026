import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroGrid } from "@/components/HeroGrid";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavBar />

      <div className="relative pt-20 pb-40 px-4 md:px-8 xl:px-[12%] pointer-events-none">
        <HeroGrid />

        <h1 className="relative z-10 text-5xl md:text-[80px] font-semibold leading-[1.2] tracking-tight max-w-[1400px] pointer-events-none select-none">
          I’m Dan Wood <span className="inline-block relative w-[1.1em] h-[1.1em] align-middle -mt-[0.1em] mx-2"><Image src="/hand.png" fill className="object-contain" alt="Wave" /></span> a product design lead based in NYC <span className="inline-block relative w-[1.1em] h-[1.1em] align-middle -mt-[0.1em] mx-2"><Image src="/apple.png" fill className="object-contain" alt="Apple" /></span> building the future of banking at Current <span className="inline-block relative w-[1.1em] h-[1.1em] align-middle -mt-[0.1em] mx-2"><Image src="/cash.png" fill className="object-contain" alt="Cash" /></span>
        </h1>
      </div>

      <div className="pb-32">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            companyLogo={project.companyLogo}
            companyName={project.companyName}
          />
        ))}
      </div>

      <div className="w-full px-4 md:px-8 xl:px-[12%] pb-32">
        <h3 className="text-2xl font-semibold mb-10">Visual Feed</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-foreground/5 rounded-[24px] border border-foreground/5 flex items-center justify-center relative overflow-hidden"
            >
              <span className="text-foreground/20 text-xs font-semibold uppercase tracking-widest text-center px-4">
                Feed Item {i + 1}
              </span>
              {/* Add an <Image /> tag here to replace the background block */}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
