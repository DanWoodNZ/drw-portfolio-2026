import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { NextProject } from "@/components/NextProject";
import { FloatingNextProject } from "@/components/FloatingNextProject";

export function ProjectLayout({ slug, children }: { slug: string, children: React.ReactNode }) {
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground/30">
      <NavBar />

      {/* Custom Content Render Slot - This pipes in all your explicit page layout HTML exactly! */}
      {children}

      <FloatingNextProject 
        slug={nextProject.slug} 
        title={nextProject.title} 
        imageSrc={nextProject.imageSrc} 
      />

      <NextProject 
        slug={nextProject.slug} 
        title={nextProject.title} 
        companyName={nextProject.companyName}
        imageSrc={nextProject.imageSrc} 
      />

      <Footer />
    </main>
  );
}
