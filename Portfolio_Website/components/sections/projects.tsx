import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading index="02" label="Selected work">
            Things I&apos;ve designed, built,{" "}
            <span className="font-serif italic normal-case tracking-normal text-primary">
              &amp; shipped.
            </span>
          </SectionHeading>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.title} className="h-full">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
