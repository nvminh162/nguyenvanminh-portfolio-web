export type SimpleProject = {
  name: string;
  imageKey: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
};

export const PROJECTS: SimpleProject[] = [
  {
    name: "BlockMed Pro",
    imageKey: "blockmedpro",
    description: "Healthcare that pays you back 🤝",
    gradient: ["#00a3ff", "#1446fe"],
    url: "https://www.blockmedpro.com/",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Black Gold Salajeet",
    imageKey: "theblackgoldsalajeet",
    description: "Pure Himalayan Mountain Blood",
    gradient: ["#0a0604", "#34260d"],
    url: "https://www.theblackgoldsalajeet.com/",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Infin Global.io",
    imageKey: "infinglobalio",
    description: "Invest in Real World Assets",
    gradient: ["#01e08b", "#1e1e21"],
    url: "https://www.infinglobal.io/",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  }
];
