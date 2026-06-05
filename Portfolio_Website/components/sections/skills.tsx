import { Boxes, BrainCircuit, Cloud, Code2, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CardSpotlight } from "@/components/card-spotlight";
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
    <section id="skills" className="border-t border-border py-28 sm:py-40 lg:py-48">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" label="Toolkit">
            The stack I{" "}
            <span className="italic text-primary">reach for.</span>
          </SectionHeading>
        </Reveal>

        <RevealGroup className="surface-gloss mt-16 grid overflow-hidden rounded-lg border border-border bg-card sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            const isLeft = i % 2 === 0;
            const isTopRow = i < 2;
            return (
              <RevealItem
                key={group.category}
                className={cn(
                  "group relative overflow-hidden p-8 sm:p-10",
                  i < skillGroups.length - 1 && "border-b border-border",
                  isLeft && "sm:border-r",
                  isTopRow ? "sm:border-b" : "sm:border-b-0",
                )}
              >
                {/* Effect 2 — per-cell cursor spotlight. */}
                <CardSpotlight />

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-primary transition-all duration-300 ease-out group-hover:border-primary/40 motion-safe:group-hover:-translate-y-0.5">
                    <Icon className="size-5 transition-transform duration-300 ease-out motion-safe:group-hover:scale-110" />
                  </span>
                  <h3 className="font-serif text-2xl font-medium transition-colors duration-200 ease-out group-hover:text-primary">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-200 ease-out hover:border-primary/40 hover:bg-background hover:text-foreground motion-safe:hover:-translate-y-0.5"
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
