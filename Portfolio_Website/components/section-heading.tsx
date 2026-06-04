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
