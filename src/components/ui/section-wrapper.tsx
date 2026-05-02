"use client";

import { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, className, children, ...props }, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    const containerRef = (ref as React.RefObject<HTMLElement>) ?? innerRef;

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
      <section
        id={id}
        ref={containerRef}
        className={cn("relative", className)}
        {...props}
      >
        <motion.div
          style={{ opacity, scale }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
