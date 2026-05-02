// ─────────────────────────────────────────────────────────────────────────────
// Domain: Projects
// techIds reference SKILLS catalogue — never duplicate skill definitions.
// imageKey matches /public/assets/projects-screenshots/{imageKey}.jpg
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "web"
  | "mobile"
  | "desktop"
  | "fullstack"
  | "other";

export type ProjectStatus = "completed" | "in-progress" | "archived";

export type Project = {
  id: string;
  name: string;
  /** Matches filename in /public/assets/projects-screenshots/ (without extension) */
  imageKey: string;
  description: string;
  /** CSS gradient stop colours [from, to] */
  gradient: [string, string];
  url: string;
  /** IDs from SKILLS catalogue in skills.ts */
  techIds: string[];
  category: ProjectCategory;
  status: ProjectStatus;
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    name: "Nguyen Van Minh Portfolio",
    imageKey: "portfolio",
    description: "Personal portfolio website with 3-D animations and interactive sections.",
    gradient: ["#6142ff", "#8c3a61"],
    url: "https://nguyenvanminh.com",
    techIds: ["typescript", "nextjs", "tailwindcss", "framer-motion", "gsap"],
    category: "web",
    status: "completed",
  },
  {
    id: "aurora",
    name: "Aurora Hotel Management System",
    imageKey: "aurora",
    description: "(Web) Hotel management system for Aurora Hotel.",
    gradient: ["#f9be62", "#9f433e"],
    url: "https://github.com/nvminh162/aurora-hotel-management-system",
    techIds: ["javascript", "react", "tailwindcss", "redux", "tanstack"],
    category: "fullstack",
    status: "completed",
  },
  {
    id: "chatly",
    name: "Chatly Social Media",
    imageKey: "chatly",
    description: "(Web + Mobile) Social media platform for Chatly.",
    gradient: ["#00a3ff", "#1446fe"],
    url: "https://github.com/giasinguyen/chatly-messaging-platform",
    techIds: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
    category: "fullstack",
    status: "completed",
  },
  {
    id: "nexatech",
    name: "Nexatech E-Commerce",
    imageKey: "nexatech",
    description: "(Microservices) E-Commerce platform for Nexatech.",
    gradient: ["#0a0604", "#34260d"],
    url: "https://gitlab.com/software-architecture264301",
    techIds: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
    category: "fullstack",
    status: "completed",
  },
  {
    id: "zolara",
    name: "Zolara Chat Platform",
    imageKey: "zolara",
    description: "(Mobile) Cross-platform chat application.",
    gradient: ["#01e08b", "#1e1e21"],
    url: "https://github.com/nvminh162/zolara-chat-platform",
    techIds: ["typescript", "react", "tailwindcss", "redux", "expo"],
    category: "mobile",
    status: "completed",
  },
  {
    id: "shopeefood",
    name: "Shopeefood – Mobile UI",
    imageKey: "shopeefood",
    description: "(Mobile) React Native UI clone for Shopeefood.",
    gradient: ["#281f0f", "#fcba00"],
    url: "https://github.com/nvminh162/shopeefood-app",
    techIds: ["javascript", "react", "framer-motion"],
    category: "mobile",
    status: "completed",
  },
  {
    id: "huongbien1",
    name: "Huong Bien 1",
    imageKey: "huongbien",
    description: "(Desktop JavaFX) Restaurant management — Single Server.",
    gradient: ["#7b4f22", "#060606"],
    url: "https://github.com/NguyenNguyen0/HuongBien",
    techIds: ["javascript", "react", "tailwindcss"],
    category: "desktop",
    status: "completed",
  },
  {
    id: "huongbien2",
    name: "Huong Bien 2",
    imageKey: "huongbien",
    description: "(Desktop JavaFX) Restaurant management — Distributed Client-Server.",
    gradient: ["#fd7602", "#242220"],
    url: "https://github.com/NguyenNguyen0/HuongBien2",
    techIds: ["javascript", "react", "tailwindcss"],
    category: "desktop",
    status: "completed",
  },
];
