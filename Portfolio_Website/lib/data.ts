/**
 * Central content config for the site.
 * Edit this file to update copy, projects, skills, and links —
 * no need to touch component code.
 */

export const siteConfig = {
  name: "Daniel Bird",
  monogram: "DB",
  role: "Software Engineer & Graduate Student",
  // Used for <title>, meta, and Open Graph.
  url: "https://www.danielbird.org",
  description:
    "Daniel Bird — software engineer building useful things with AI and ML, graduate student at Georgia Tech, and online fitness coach. Notes, guides, and projects.",
  // TODO(daniel): confirm which inbox you want public.
  email: "danielbirdwork@gmail.com",
  resumeUrl:
    "https://docs.google.com/document/d/1ChM2u16f4U3MLGuHp-Eb6d5ELqWw0IG0/edit",
};

export const socials = {
  github: "https://github.com/danielbirdjr",
  linkedin: "https://www.linkedin.com/in/danielbirdjr/",
  // TODO(daniel): update if your X/Twitter handle differs.
  twitter: "https://x.com/danielbirdjr",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "M.S.", label: "Computer Science @ Georgia Tech" },
  { value: "1 yr", label: "Full-time Software Engineer" },
  { value: "AI / ML", label: "Graduate specialization" },
  { value: "Coach", label: "Online fitness coaching" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ProgressAI",
    description:
      "An AI-driven fitness tracking app that builds personalized workout programs and continuously optimizes them from user data — training volume, intensity, sleep, nutrition, and stress.",
    tech: ["React", "JavaScript", "Firebase", "Vite", "SQL"],
    liveUrl: "https://training-app-project.vercel.app/",
    githubUrl: "https://github.com/danielbirdjr",
    image: "/progress-ai.png",
    featured: true,
  },
  {
    title: "TicketChain",
    description:
      "A decentralized ticketing platform on the Mode Network blockchain — decentralized event management, user dashboards, and a secure ticket-transfer system. Led a cross-functional team of four.",
    tech: ["React", "Node.js", "Solidity", "thirdweb", "Python"],
    // TODO(daniel): add live demo + repo links if available.
    githubUrl: "https://github.com/danielbirdjr",
  },
];

export type SkillGroup = {
  category: string;
  icon: "code" | "boxes" | "brain" | "cloud";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Solidity"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "boxes",
    skills: ["React", "Next.js", "Node.js", "Vite", "Tailwind CSS"],
  },
  {
    category: "AI / ML",
    icon: "brain",
    // TODO(daniel): tune to match the tools you actually use day-to-day.
    skills: ["PyTorch", "scikit-learn", "OpenAI API", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & Tooling",
    icon: "cloud",
    skills: ["Firebase", "Azure", "MySQL", "Auth0", "Git", "Vercel"],
  },
];
