// ─────────────────────────────────────────────────────────────────────────────
// Domain: Summary
// ─────────────────────────────────────────────────────────────────────────────

export type SummaryCard = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  content: string;
};

export const SUMMARY_CARDS: SummaryCard[] = [
  {
    id: "fullstack-intern-summary",
    title: "Summary",
    subtitle: "Full-stack Developer Intern focus",
    tag: "Profile",
    content:
      "Final-year Software Engineering student focusing on full-stack web development, with hands-on experience in Java/Spring Boot backend development and React.js/Next.js frontend development. Skilled in building RESTful APIs, authentication and authorization flows, responsive user interfaces, database-driven applications, and frontend-backend integration. Familiar with MySQL, PostgreSQL, MongoDB, Redis, Git, Docker, AWS, and cloud-based deployment. Seeking a Full-stack Developer Intern position to contribute to real-world projects and continue improving backend architecture, frontend development, and deployment skills.",
  },
];
