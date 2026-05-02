"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useAvatar, type AvatarVariant } from "@/contexts/avatar-context";
import { usePreloader } from "./preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth — edit ONLY this object to adjust avatar positions.
// x/y are pixel offsets applied via framer-motion on top of the base CSS anchor
// (right: 5vw, top: 13vh). Positive x = move right, positive y = move down.
// ─────────────────────────────────────────────────────────────────────────────
type MotionValues = { x: number; y: number; opacity: number };

const CONFIG: Record<
  AvatarVariant,
  {
    desktop: MotionValues;
    mobile: MotionValues;
  }
> = {
  hero: {
    desktop: { x: -240, y: 34,  opacity: 1 },
    mobile:  { x: -30,  y: 300, opacity: 1 },
  },
  about: {
    desktop: { x: -200, y: 20,  opacity: 1 },
    mobile:  { x: -30,  y: 280, opacity: 1 },
  },
  contact: {
    desktop: { x: -64,  y: 108, opacity: 1 },
    mobile:  { x: -74,  y: -44, opacity: 1 },
  },
};

const INITIAL: MotionValues = { x: 300, y: 0, opacity: 0 };
const EXIT:    MotionValues = { x: 300, y: 0, opacity: 0 };

const spring = { type: "spring" as const, stiffness: 180, damping: 22 };

// ─────────────────────────────────────────────────────────────────────────────

const AvatarPortrait = () => {
  const { variant, show, hide } = useAvatar();
  const pathname  = usePathname();
  const { resolvedTheme } = useTheme();
  const { isLoading } = usePreloader();
  const isMobile  = useMediaQuery("(max-width: 767px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Auto-show / auto-hide based on route
  useEffect(() => {
    if (pathname === "/about") show("about");
    else if (pathname !== "/") hide();
  }, [pathname]);

  const portraitSrc =
    mounted && resolvedTheme === "light"
      ? "/nvminh162-light.png"
      : "/nvminh162-dark.png";

  const animate = variant
    ? CONFIG[variant][isMobile ? "mobile" : "desktop"]
    : null;

  return (
    <AnimatePresence mode="wait">
      {!isLoading && variant && animate && (
        <motion.div
          key={variant}
          className="fixed right-[5vw] top-[13vh] z-[1] pointer-events-none"
          initial={INITIAL}
          animate={animate}
          exit={EXIT}
          transition={spring}
        >
          {/* Aura glow */}
          <motion.div
            className="absolute -inset-16 rounded-full blur-3xl bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-fuchsia-500/10"
            animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.38, 0.28] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Portrait frame — floats independently */}
          <motion.div
            className="h-[16.5rem] w-[16.5rem] md:h-[24rem] md:w-[24rem] rounded-full p-3 md:p-4 shadow-[0_22px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] bg-gradient-to-br from-white/35 via-white/10 to-black/30 backdrop-blur-md"
            animate={{ y: [0, -10, 0], rotateY: [0, 6, 0], rotateZ: [0, 1.5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-white/25 bg-black/25">
              <Image
                src={portraitSrc}
                alt="Nguyen Van Minh portrait"
                fill
                sizes="(max-width: 768px) 16.5rem, 24rem"
                className="object-cover scale-[1.08]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvatarPortrait;
