"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname, useRouter } from "next/navigation";
import { Section } from "./animated-background-config";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedBackground — handles URL hash sync while scrolling.
 * Portrait avatar is now managed by AvatarPortrait + AvatarContext.
 */
const AnimatedBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const router = useRouter();
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
      createTrigger("#skills", "skills", "hero"),
      createTrigger("#experience", "experience", "skills"),
      createTrigger("#projects", "projects", "experience", "top 85%"),
      createTrigger("#resume", "resume", "projects"),
      createTrigger("#contact", "contact", "resume", "top 30%"),
    ];

    return () => tls.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
  }, [isMobile, pathname]);

  // Sync URL hash
  useEffect(() => {
    if (pathname !== "/") return;
    const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    router.push(`/${hash}`, { scroll: false });
  }, [activeSection, router, pathname]);

  return null;
};

export default AnimatedBackground;
