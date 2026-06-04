import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-28 sm:py-40 lg:py-48">
      <div className="container">
        <Reveal>
          <SectionHeading index="02" label="Selected work">
            Things I&apos;ve designed, built,{" "}
            <span className="italic text-primary">&amp; shipped.</span>
          </SectionHeading>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.title} className="h-full min-w-0">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
