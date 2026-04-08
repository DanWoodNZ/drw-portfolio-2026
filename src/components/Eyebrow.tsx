/** Subtle section eyebrow displayed above a case study block heading. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-base font-medium text-foreground/40 tracking-wide mb-2">
      {children}
    </p>
  );
}
