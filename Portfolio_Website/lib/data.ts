/**
 * Central content config for the site.
 * Edit this file to update copy, projects, skills, and links —
 * no need to touch component code.
 */

export const siteConfig = {
  name: "Daniel Bird",
  monogram: "DB",
  role: "Fullstack Software Engineer & Georgia Tech M.S.",
  // Used for <title>, meta, and Open Graph.
  url: "https://www.danielbird.org",
  description:
    "Daniel Bird — fullstack software engineer and Georgia Tech master's student in machine learning, and online fitness coach. Notes, guides, and projects.",
  // TODO(daniel): confirm which inbox you want public.
  email: "danielbirdwork@gmail.com",
  resumeUrl:
    "https://docs.google.com/document/d/1ChM2u16f4U3MLGuHp-Eb6d5ELqWw0IG0/edit",
};

export const socials = {
  github: "https://github.com/danielbirdjr",
  linkedin: "https://www.linkedin.com/in/danielbirdjr/",
  twitter: "https://x.com/danielbird0",
};

// Order matches the on-page section order (About → Work → Notes → Contact).
// Notes points at the on-page #notes preview; the full notes index is reached
// via the "All notes" link inside that section.
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Notes", href: "/#notes" },
  { label: "Contact", href: "/#contact" },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "M.S.", label: "Computer Science @ Georgia Tech" },
  { value: "5+ yrs", label: "Writing & shipping code" },
  { value: "AI/ML", label: "Graduate specialization" },
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
      "A fitness app that builds personalized training programs and refines them from logged data — training volume, intensity, sleep, nutrition, and stress.",
    tech: ["React", "JavaScript", "Firebase", "Vite", "SQL"],
    liveUrl: "https://training-app-project.vercel.app/",
    githubUrl: "https://github.com/danielbirdjr",
    image: "/progress-ai.png",
    featured: true,
  },
  {
    title: "TicketChain",
    description:
      "A blockchain ticketing platform on Mode Network — on-chain event management, user dashboards, and a tamper-resistant ticket-transfer system. Led a cross-functional team of four.",
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
    skills: ["Python", "TypeScript", "JavaScript", "C#", "Java", "SQL", "Solidity"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "boxes",
    skills: ["React", "Next.js", "Angular", ".NET", "Node.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "AI / ML",
    icon: "brain",
    skills: ["PyTorch", "scikit-learn", "OpenAI API", "Claude API", "Gemini API", "Ollama", "NumPy", "Pandas"],
  },
  {
    category: "Cloud & Tooling",
    icon: "cloud",
    skills: ["Firebase", "Azure", "MySQL", "Auth0", "Git", "Vercel"],
  },
];
