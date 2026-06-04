import Link from "next/link";
import { siteConfig, socials } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: socials.twitter, Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-serif text-base font-medium text-foreground">
            {siteConfig.name}
          </span>
          <span aria-hidden>·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-1">
          {socialItems.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-[18px]" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
