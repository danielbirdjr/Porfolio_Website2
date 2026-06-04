import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { siteConfig, socials } from "@/lib/data";

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: socials.twitter, Icon: XIcon },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="container">
        <Reveal className="graph-panel relative overflow-hidden rounded-xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 hero-glow opacity-70" aria-hidden />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="eyebrow">
              <span className="h-px w-8 bg-primary/50" />
              Contact
              <span className="h-px w-8 bg-primary/50" />
            </div>
            <h2 className="display-heading mt-6 text-balance text-5xl text-foreground sm:text-6xl md:text-7xl">
              Let&apos;s build — or{" "}
              <span className="font-serif italic normal-case tracking-normal text-primary">
                train
              </span>{" "}
              — something good.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;ve got an engineering problem, a coaching
              question, or just want to talk shop, my inbox is open.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`mailto:${siteConfig.email}`}>
                  <Mail />
                  {siteConfig.email}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {socialItems.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="size-[18px]" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
