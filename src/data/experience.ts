// ─────────────────────────────────────────────────────────────────────────────
// Domain: Experience
// Each entry references skills by ID — no duplicated skill definitions here.
// ─────────────────────────────────────────────────────────────────────────────

import { getSkillsByIds, Skill } from "./skills";

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship"
  | "freelance";

export type Experience = {
  id: string;
  startDate: string;
  endDate: string | null; // null = present / ongoing
  title: string;
  company: string;
  location?: string;
  type: EmploymentType;
  description: string[];
  /** IDs from SKILLS catalogue in skills.ts */
  skillIds: string[];
};

/** Experience with skill objects resolved — ready for the UI to render. */
export type ExperienceResolved = Omit<Experience, "skillIds"> & {
  skills: Skill[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────
export const EXPERIENCE: Experience[] = [
  {
    id: "exp-codenencoders",
    startDate: "Jun 2023",
    endDate: null,
    title: "Sr. MERN Stack Developer",
    company: "Code Encoders",
    location: "Remote",
    type: "full-time",
    description: [
      "Leveled up from Associate to Senior while shipping 45+ full-stack builds without burning the servers down.",
      "Migrated legacy Node stacks to a structured service-layer architecture and kept Swagger docs honest.",
      "Optimised bundle sizes, tuned APIs, added Jest coverage and wired GitHub Actions for zero-downtime deploys.",
    ],
    skillIds: ["react", "nextjs", "mongodb", "tailwindcss", "redux"],
  },
  {
    id: "exp-pixledigital",
    startDate: "May 2024",
    endDate: "Dec 2024",
    title: "Sr. Web Developer",
    company: "Pixle Digital",
    location: "Remote",
    type: "contract",
    description: [
      "Led remote squads and enforced coding standards so client apps stayed maintainable at speed.",
      "Built reusable component kits and boilerplates that shortened delivery times across multiple projects.",
      "Mentored junior devs and refined sprint workflows, lifting team velocity without extra overhead.",
    ],
    skillIds: ["react", "typescript", "tailwindcss", "framer-motion", "git"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Resolve skill IDs to full Skill objects for rendering. */
export const resolveExperience = (exp: Experience): ExperienceResolved => ({
  ...exp,
  skills: getSkillsByIds(exp.skillIds),
});

export const EXPERIENCE_RESOLVED: ExperienceResolved[] =
  EXPERIENCE.map(resolveExperience);
