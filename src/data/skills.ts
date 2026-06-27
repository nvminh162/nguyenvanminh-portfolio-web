// ─────────────────────────────────────────────────────────────────────────────
// Domain: Skills
// Text-only skill catalogue.
// ─────────────────────────────────────────────────────────────────────────────

export type SkillCategory =
  | "language"
  | "frontend"
  | "animation"
  | "state"
  | "backend"
  | "database"
  | "tooling"
  | "mobile";

export type Skill = {
  id: string;
  label: string;
  description: string;
  color: string; // brand hex — used for UI accents
  category: SkillCategory;
};

// ─── Master skill catalogue ───────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Languages
  {
    id: "javascript",
    label: "JavaScript",
    description: "sprinkling chaos and callbacks since ES5",
    color: "#f0db4f",
    category: "language",
  },
  {
    id: "typescript",
    label: "TypeScript",
    description: "JavaScript's overachiever with a helmet on",
    color: "#007acc",
    category: "language",
  },
  // Frontend
  {
    id: "react",
    label: "React",
    description: "hooks on hooks on hooks—state of constant suspense",
    color: "#61dafb",
    category: "frontend",
  },
  {
    id: "nextjs",
    label: "Next.js",
    description: "SSR sorcery with a sprinkle of router drama",
    color: "#ffffff",
    category: "frontend",
  },
  {
    id: "tailwindcss",
    label: "Tailwind CSS",
    description: "utility drip so strong it bends time-to-ship",
    color: "#38bdf8",
    category: "frontend",
  },
  {
    id: "sass",
    label: "Sass",
    description: "CSS with superpowers and a nesting addiction",
    color: "#cc6699",
    category: "frontend",
  },
  {
    id: "chakra-ui",
    label: "Chakra UI",
    description: "accessible component system with theme tokens",
    color: "#319795",
    category: "frontend",
  },
  {
    id: "styledcomponents",
    label: "Styled Components",
    description: "CSS-in-JS: your styles live where your logic lives",
    color: "#db7093",
    category: "frontend",
  },
  // Animation
  {
    id: "framer-motion",
    label: "Framer Motion",
    description: "declarative animations that feel alive",
    color: "#0055ff",
    category: "animation",
  },
  {
    id: "gsap",
    label: "GSAP",
    description: "timeline-based animation engine for the web",
    color: "#88ce02",
    category: "animation",
  },
  // State management / data fetching
  {
    id: "redux",
    label: "Redux",
    description: "predictable state container with a side of boilerplate",
    color: "#764abc",
    category: "state",
  },
  {
    id: "tanstack",
    label: "TanStack Query",
    description: "async state management that makes REST bearable",
    color: "#ef4444",
    category: "state",
  },
  {
    id: "react-query",
    label: "React Query",
    description: "server state with caching, refetching, and sane defaults",
    color: "#ef4444",
    category: "state",
  },
  // Database / backend-as-a-service
  {
    id: "mongodb",
    label: "MongoDB",
    description: "document hoarder with flexible vibes",
    color: "#4db33d",
    category: "database",
  },
  {
    id: "firebase",
    label: "Firebase",
    description: "rapid backend-in-a-box; watch for the vendor vines",
    color: "#ffca28",
    category: "database",
  },
  // Tooling / CI
  {
    id: "git",
    label: "Git",
    description: "time travel for code, with merge plot twists",
    color: "#f1502f",
    category: "tooling",
  },
  {
    id: "sanity",
    label: "Sanity CMS",
    description: "structured content platform with a real-time GROQ API",
    color: "#f03e2f",
    category: "tooling",
  },
  // Mobile
  {
    id: "expo",
    label: "Expo",
    description: "React Native toolkit that removes the native pain",
    color: "#000020",
    category: "mobile",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getSkillById = (id: string): Skill | undefined =>
  SKILLS.find((s) => s.id === id);

export const getSkillsByIds = (ids: string[]): Skill[] =>
  ids.flatMap((id) => {
    const s = getSkillById(id);
    return s ? [s] : [];
  });

export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  SKILLS.filter((s) => s.category === category);

// ─── Skill stack cards (displayed in SkillsSection) ──────────────────────────
// Defined here so the component stays presentation-only.

export type SkillStack = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  highlights: string[];
  skillIds: string[]; // references SKILLS by id
};

export const SKILL_STACKS: SkillStack[] = [
  {
    id: "frontend",
    title: "Frontend Stack",
    subtitle: "UI & Interaction",
    tag: "Core",
    highlights: [
      "Build responsive interfaces with reusable components and clean composition patterns.",
      "Focus on performance and accessibility for smooth interactions across devices.",
      "Prefer scalable styling systems for fast iteration and consistent UI.",
    ],
    skillIds: ["react", "nextjs", "typescript", "tailwindcss", "framer-motion", "redux"],
  },
  {
    id: "animation",
    title: "Animation & Motion",
    subtitle: "Interaction Design",
    tag: "Creative",
    highlights: [
      "Craft scroll-triggered timelines and micro-interactions with GSAP.",
      "Leverage declarative animations with Framer Motion for React components.",
      "Balance performance and visual richness through GPU-accelerated transforms.",
    ],
    skillIds: ["gsap", "framer-motion", "sass", "styledcomponents", "chakra-ui"],
  },
  {
    id: "backend-data",
    title: "Backend & Data Stack",
    subtitle: "API, Database & Deployment",
    tag: "Daily",
    highlights: [
      "Design API flows with maintainable service layers and clear data contracts.",
      "Work with document databases and real-time services depending on product needs.",
      "Ship with practical CI/CD and deployment workflows for reliable releases.",
    ],
    skillIds: ["mongodb", "firebase", "tanstack", "react-query", "git", "sanity"],
  },
  {
    id: "mobile",
    title: "Mobile Stack",
    subtitle: "Cross-Platform Apps",
    tag: "Growing",
    highlights: [
      "Build cross-platform mobile apps with React Native and Expo.",
      "Share logic across web and mobile to reduce duplication.",
      "Integrate native device APIs through Expo's managed workflow.",
    ],
    skillIds: ["expo", "react", "typescript", "redux", "tanstack"],
  },
];
