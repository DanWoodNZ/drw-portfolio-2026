import { NavBar } from "@/components/NavBar";

export function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground/30">
      <NavBar />
      {children}
    </main>
  );
}
