import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CardSpotlight } from "@/components/card-spotlight";
import { SectionHeading } from "@/components/section-heading";
import { stats, siteConfig } from "@/lib/data";

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif italic normal-case tracking-normal text-primary">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-border py-28 sm:py-40 lg:py-48">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <Reveal>
            <SectionHeading index="01" label="About" className="lg:sticky lg:top-28">
              Engineer by <Accent>trade</Accent>, student by <Accent>choice</Accent>,
              coach by <Accent>conviction</Accent>.
            </SectionHeading>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal
              delay={0.1}
              className="space-y-5 text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                I&apos;m a software engineer pursuing my master&apos;s in{" "}
                <span className="text-foreground">machine learning</span> at{" "}
                <span className="text-foreground">Georgia Tech</span> while
                working full-time. I care about the systems and models
                underneath AI: how they actually work, and how to apply them to
                work more efficiently.
              </p>
              <p>
                Outside of engineering, I do online{" "}
                <span className="text-foreground">fitness coaching</span>, and I
                believe in distilling hard-earned knowledge into simple,
                actionable guides. Whether it&apos;s a training program or a
                technical write-up, the goal is the same: take something I had
                to learn the hard way and save someone else the time and energy.
              </p>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-base font-medium text-primary transition-colors hover:text-primary/80"
              >
                <span className="link-underline">View full résumé</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>

            <RevealGroup className="surface-gloss grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-card">
              {stats.map((stat, i) => (
                <RevealItem
                  key={stat.label}
                  className={`relative overflow-hidden p-5 sm:p-8 ${
                    i % 2 === 0 ? "border-r border-border" : ""
                  } ${i < 2 ? "border-b border-border" : ""}`}
                >
                  {/* Effect 2 — per-cell cursor spotlight. */}
                  <CardSpotlight />

                  <div className="whitespace-nowrap font-serif text-3xl font-medium leading-none text-primary sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <p className="annotation -mt-1 text-xl">
              the short version of a longer story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
