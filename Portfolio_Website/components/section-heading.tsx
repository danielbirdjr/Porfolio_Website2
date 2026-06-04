import { cn } from "@/lib/utils";

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("eyebrow", className)}>
      {index && (
        <span className="font-mono text-primary/70 tabular-nums">{index}</span>
      )}
      <span className="h-px w-8 bg-primary/50" />
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  label,
  children,
  className,
}: {
  index?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <Eyebrow index={index}>{label}</Eyebrow>
      <h2 className="display-heading text-balance text-5xl text-foreground sm:text-6xl md:text-7xl">
        {children}
      </h2>
    </div>
  );
}

/** Hand-drawn arrow doodle for "handwritten note" annotations. */
export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M70 6C54 2 22 6 12 30c-3 7-4 16-2 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M3 44c2 4 6 8 7 10m0 0c4-1 9-3 13-3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
