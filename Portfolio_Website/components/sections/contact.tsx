import Image from "next/image";
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
    <section id="contact" className="border-t border-border py-28 sm:py-40 lg:py-48">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-lg border border-border bg-card px-8 py-20 text-center sm:px-12 sm:py-24">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <figure className="mb-8 size-28 overflow-hidden rounded-full border border-border sm:size-32">
              <Image
                src="/images/daniel-headshot.webp"
                alt="Daniel Bird"
                width={320}
                height={320}
                sizes="128px"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="eyebrow">
              <span className="h-px w-8 bg-primary/40" />
              Contact
              <span className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="display-heading mt-6 text-balance text-4xl text-foreground sm:text-5xl md:text-6xl">
              Let&apos;s build or{" "}
              <span className="italic text-primary">train</span> something good.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;ve got an engineering problem, a coaching
              question, or just want to talk... my inbox is open.
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
                  View résumé
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
