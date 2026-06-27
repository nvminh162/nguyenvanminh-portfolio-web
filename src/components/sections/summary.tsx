import { SUMMARY_CARDS, SummaryCard } from "@/data/summary";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SummarySection = () => {
  return (
    <SectionWrapper
      id="summary"
      className="flex flex-col items-center justify-center min-h-[100dvh] py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto" id="summary">
        <SectionHeader
          id="summary"
          title="Summary"
          desc="A quick snapshot of my current focus and direction."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid gap-8">
          {SUMMARY_CARDS.map((summary, index) => (
            <SummaryCardView key={summary.id} summary={summary} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const SummaryCardView = ({
  summary,
  index,
}: {
  summary: SummaryCard;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="bg-card text-card-foreground border-border shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {summary.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {summary.subtitle}
              </div>
            </div>
            <Badge
              variant="secondary"
              className="w-fit font-mono text-xs font-normal"
            >
              {summary.tag}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {summary.content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SummarySection;
