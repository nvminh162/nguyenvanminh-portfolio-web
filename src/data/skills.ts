// ─────────────────────────────────────────────────────────────────────────────
// Domain: Skills
// ─────────────────────────────────────────────────────────────────────────────

export type SkillItem = {
  label: string;
  value: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  items: SkillItem[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "technical-skills",
    title: "Technical Skills",
    subtitle: "Languages, frameworks, APIs, databases, tooling, and cloud",
    tag: "Technical",
    items: [
      {
        label: "Languages",
        value: "Java, JavaScript, TypeScript, SQL",
      },
      {
        label: "Frontend Development",
        value:
          "React.js, Next.js, React Native, Redux Toolkit, TanStack Query, HTML5, CSS3, Tailwind CSS, shadcn/ui, Responsive Design, Cross-browser Compatibility",
      },
      {
        label: "API Integration",
        value:
          "RESTful API Integration, Fetch API/Axios, Postman, Swagger/OpenAPI",
      },
      {
        label: "Backend Development",
        value:
          "Spring Boot, Spring MVC, Spring Security, Spring Data JPA, WebSocket/STOMP, Hibernate",
      },
      {
        label: "Databases",
        value: "MySQL, MariaDB, PostgreSQL, MongoDB, Redis",
      },
      {
        label: "Tools",
        value: "IntelliJ IDEA, Visual Studio Code, Cursor IDE, Maven",
      },
      {
        label: "DevOps & Cloud",
        value:
          "Docker, Git, GitHub Actions, AWS (IAM, EC2, RDS, DynamoDB, S3, CloudFront)",
      },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    subtitle: "Collaboration, communication, ownership, and continuous learning",
    tag: "Professional",
    items: [
      {
        label: "Collaboration",
        value:
          "Effective teamwork, communication, knowledge sharing, and experience working in Agile/Scrum environments",
      },
      {
        label: "Communication",
        value:
          "Clear written and verbal communication for discussing requirements, explaining technical trade-offs, and keeping teammates aligned",
      },
      {
        label: "Problem Solving",
        value:
          "Analytical thinking, testing, debugging, troubleshooting, attention to detail, and ability to improve code quality",
      },
      {
        label: "Adaptability",
        value:
          "Comfortable learning new tools, adjusting to changing requirements, and working across frontend, backend, and deployment tasks",
      },
      {
        label: "Ownership",
        value:
          "Responsible follow-through from implementation to testing, documentation, review feedback, and final delivery",
      },
      {
        label: "Time Management",
        value:
          "Able to prioritize tasks, estimate effort, respect deadlines, and keep progress visible during iterative development",
      },
      {
        label: "Continuous Learning",
        value:
          "Actively improves backend architecture, frontend development practices, deployment knowledge, and overall engineering fundamentals",
      },
    ],
  },
];
