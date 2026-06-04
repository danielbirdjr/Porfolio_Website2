import { Boxes, BrainCircuit, Cloud, Code2, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  boxes: Boxes,
  brain: BrainCircuit,
  cloud: Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" label="Toolkit">
            The stack I{" "}
            <span className="font-serif italic normal-case tracking-normal text-primary">
              reach for.
            </span>
          </SectionHeading>
        </Reveal>

        <RevealGroup className="mt-14 grid overflow-hidden rounded-lg border border-border sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            const isLeft = i % 2 === 0;
            const isTopRow = i < 2;
            return (
              <RevealItem
                key={group.category}
                className={cn(
                  "graph-panel bg-card/40 p-8 transition-colors hover:bg-accent/50",
                  i < skillGroups.length - 1 && "border-b border-border",
                  isLeft && "sm:border-r",
                  isTopRow ? "sm:border-b" : "sm:border-b-0",
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/60 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
