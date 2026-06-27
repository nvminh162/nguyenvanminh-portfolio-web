import { SKILL_GROUPS, SkillGroup } from "@/data/skills";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col items-center justify-center min-h-[120dvh] md:min-h-[220dvh] py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto" id="skills">
        <SectionHeader
          id="skills"
          title="Skills"
          desc="Technical skills and soft skills from my CV."
          className="mb-12 md:mb-20 mt-0"
        />

        <div
          className="relative flex flex-col gap-8 md:block"
          style={{
            minHeight: `calc(${SKILL_GROUPS.length} * 70vh)`,
          }}
        >
          {SKILL_GROUPS.map((group, index) => (
            <SkillGroupCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const SkillGroupCard = ({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
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
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="bg-card text-card-foreground border-border shadow-sm hover:border-primary/20 hover:shadow-md transition-colors duration-300">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {group.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {group.subtitle}
              </div>
            </div>
            <Badge
              variant="secondary"
              className="w-fit font-mono text-xs font-normal"
            >
              {group.tag}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {group.items.map((item) => (
              <li key={item.label}>
                <span className="font-semibold text-foreground">
                  {item.label}:
                </span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsSection;
