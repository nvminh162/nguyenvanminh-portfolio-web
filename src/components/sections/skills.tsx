import { SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SKILL_STACK: {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  highlights: string[];
  skills: SkillNames[];
}[] = [
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
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.TAILWIND,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
  {
    id: "backend-devops",
    title: "Backend & DevOps Stack",
    subtitle: "API, Data & Deployment",
    tag: "Daily",
    highlights: [
      "Design API flows with maintainable service layers and clear data contracts.",
      "Work with relational and document databases depending on product needs.",
      "Ship with practical CI/CD and deployment workflows for reliable releases.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.DOCKER,
      SkillNames.AWS,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.VERCEL,
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col items-center justify-center min-h-[120dvh] md:min-h-[320dvh] py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto" id="skills">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Languages and tools I use regularly."
          className="mb-12 md:mb-20 mt-0"
        />

        <div
          className="relative flex flex-col gap-8 md:block"
          style={{
            minHeight: `calc(${SKILL_STACK.length} * 70vh)`,
          }}
        >
          {SKILL_STACK.map((stackItem, index) => (
            <SkillStackCard key={stackItem.id} stackItem={stackItem} index={index} total={SKILL_STACK.length} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const SkillStackCard = ({
  stackItem,
  index,
}: {
  stackItem: (typeof SKILL_STACK)[0];
  index: number;
  total: number;
}) => {
  return (
    <motion.div
      className="sticky top-40 md:top-52 max-w-3xl"
      style={{
        zIndex: index + 1,
        paddingTop: index === 0 ? 0 : index * 95,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {stackItem.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {stackItem.subtitle}
              </div>
            </div>
            <Badge
              variant="secondary"
              className="w-fit font-mono text-xs font-normal"
            >
              {stackItem.tag}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {stackItem.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {stackItem.skills.map((skillName) => {
              const skill = SKILLS[skillName];
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsSection;
