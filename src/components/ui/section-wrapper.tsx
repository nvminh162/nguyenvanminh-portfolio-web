"use client";

import { forwardRef, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, className, children, ...props }, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <section
        id={id}
        ref={setRefs}
        className={cn("relative", className)}
        {...props}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
