"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { Section } from "./animated-background-config";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedBackground — handles URL hash sync while scrolling.
 * Portrait avatar is now managed by AvatarPortrait + AvatarContext.
 */
const AnimatedBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState<Section>("hero");

  // Scroll-trigger: update active section on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const createTrigger = (
      triggerId: string,
      target: Section,
      prev: Section,
      start = "top 50%",
      end = "bottom bottom",
    ) =>
      gsap.timeline({
        scrollTrigger: {
          trigger: triggerId,
          start,
          end,
          scrub: true,
          onEnter: () => setActiveSection(target),
          onLeaveBack: () => setActiveSection(prev),
        },
      });

    const tls = [
      createTrigger("#summary", "summary", "hero"),
      createTrigger("#skills", "skills", "summary"),
      createTrigger("#projects", "projects", "skills", "top 85%"),
      createTrigger("#resume", "resume", "projects"),
      createTrigger("#collaborate", "collaborate", "resume", "top 30%"),
      createTrigger("#contact", "contact", "collaborate", "top 30%"),
    ];

    return () => tls.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
  }, [isMobile, pathname]);

  // Sync URL hash — use replaceState to avoid double-hash from router.push
  useEffect(() => {
    if (pathname !== "/") return;
    const hash = activeSection === "hero" ? "" : `#${activeSection}`;
    window.history.replaceState(null, "", `/${hash}`);
  }, [activeSection, pathname]);

  return null;
};

export default AnimatedBackground;
