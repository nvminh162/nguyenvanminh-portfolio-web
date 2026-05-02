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
    name: "Nguyen Van Minh Portfolio",
    imageKey: "portfolio",
    description: "(Private Repository) Nguyen Van Minh's portfolio website",
    gradient: ["#6142ff", "#8c3a61"],
    url: "https://nguyenvanminh.com",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Aurora Hotel Management System",
    imageKey: "aurora",
    description: "(Web) Hotel management system for Aurora Hotel",
    gradient: ["#f9be62", "#9f433e"],
    url: "https://github.com/nvminh162/aurora-hotel-management-system",
    tech: ["javascript", "react", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Chatly Social Media",
    imageKey: "chatly",
    description: "(Web + Mobile) Social media platform for Chatly",
    gradient: ["#00a3ff", "#1446fe"],
    url: "https://github.com/giasinguyen/chatly-messaging-platform",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Nexatech E-Commerce",
    imageKey: "nexatech",
    description: "(Microservices) E-Commerce platform for Nexatech",
    gradient: ["#0a0604", "#34260d"],
    url: "https://gitlab.com/software-architecture264301",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Zolara Chat Platform",
    imageKey: "zolara",
    description: "(Mobile) Chat platform for Zolara",
    gradient: ["#01e08b", "#1e1e21"],
    url: "https://github.com/nvminh162/zolara-chat-platform",
    tech: ["typescript", "nextjs", "tailwindcss", "redux", "tanstack"],
  },
  {
    name: "Shopeefood - Mobile UI",
    imageKey: "shopeefood",
    description: "(Mobile) UI for Shopeefood",
    gradient: ["#281f0f", "#fcba00"],
    url: "https://github.com/nvminh162/shopeefood-app",
    tech: ["javascript", "react", "framer-motion"],
  },
  {
    name: "Huong Bien 1 - Restaurant Management System",
    imageKey: "huongbien",
    description: "(Desktop JavaFX) Restaurant management system for Huong Bien 1 - Single Server",
    gradient: ["#7b4f22", "#060606"],
    url: "https://github.com/NguyenNguyen0/HuongBien",
    tech: ["javascript", "react", "tailwindcss"],
  },
  {
    name: "Huong Bien 2 - Restaurant Management System",
    imageKey: "huongbien",
    description: "(Desktop JavaFX) Restaurant management system for Huong Bien 2 - Distributed Client-Server",
    gradient: ["#fd7602", "#242220"],
    url: "https://github.com/NguyenNguyen0/HuongBien2",
    tech: ["javascript", "react", "tailwindcss"],
  }
];
