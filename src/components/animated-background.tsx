"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useRouter } from "next/navigation";
import { Section } from "./animated-background-config";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const router = useRouter();

  const frameRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);
  const idleTweenRef = useRef<gsap.core.Tween | null>(null);
  const contactTweenRef = useRef<gsap.core.Tween | null>(null);

  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [portraitReady, setPortraitReady] = useState(false);

  const getPortraitState = (section: Section) => {
    if (isMobile) {
      const mobileStates: Record<
        Section,
        { x: number; y: number; scale: number; rx: number; ry: number; rz: number; visible: boolean }
      > = {
        // Mobile: keep avatar visible and stable across sections (no fly-out)
        hero: { x: -30, y: 300, scale: 0.72, rx: -2, ry: -7, rz: 1, visible: true },
        about: { x: 155, y: -10, scale: 0.72, rx: -3, ry: -10, rz: 1.5, visible: false },
        skills: { x: 160, y: -6, scale: 0.72, rx: -2, ry: -10, rz: 1.5, visible: false },
        experience: { x: 160, y: 0, scale: 0.72, rx: -2, ry: -10, rz: 1.5, visible: false },
        projects: { x: 165, y: 8, scale: 0.7, rx: -2, ry: -9, rz: 1.2, visible: false },
        contact: { x: -74, y: -44, scale: 0.9, rx: 2, ry: -8, rz: -2, visible: true },
      };
      return mobileStates[section];
    }

    const desktopStates: Record<
      Section,
      { x: number; y: number; scale: number; rx: number; ry: number; rz: number; visible: boolean }
    > = {
      hero: { x: -168, y: 34, scale: 1.14, rx: -4, ry: -14, rz: 2, visible: true },
      about: { x: 220, y: -20, scale: 0.84, rx: -2, ry: -18, rz: 2, visible: false },
      skills: { x: 230, y: -28, scale: 0.8, rx: -2, ry: -20, rz: 1.5, visible: false },
      experience: { x: 235, y: -18, scale: 0.8, rx: -2, ry: -16, rz: 1.5, visible: false },
      projects: { x: 245, y: 12, scale: 0.76, rx: -1, ry: -10, rz: 1, visible: false },
      contact: { x: -64, y: 108, scale: 1.14, rx: 8, ry: -8, rz: -4, visible: true },
    };
    return desktopStates[section];
  };

  const applyState = (section: Section, duration = 0.9) => {
    const frame = frameRef.current;
    if (!frame) return;
    const state = getPortraitState(section);

    if (!state.visible) {
      gsap.to(frame, {
        x: state.x,
        y: state.y - 10,
        scale: state.scale,
        rotationX: state.rx,
        rotationY: state.ry + 10,
        rotationZ: state.rz + 6,
        autoAlpha: 0,
        transformPerspective: 1000,
        transformOrigin: "50% 50%",
        duration: Math.max(0.65, duration - 0.1),
        ease: "back.in(1.2)",
        overwrite: "auto",
      });
      return;
    }

    gsap.to(frame, {
      x: state.x,
      y: state.y,
      scale: state.scale,
      rotationX: state.rx,
      rotationY: state.ry,
      rotationZ: state.rz,
      autoAlpha: 1,
      transformPerspective: 1000,
      transformOrigin: "50% 50%",
      duration,
      ease: "back.out(1.3)",
      overwrite: "auto",
    });
  };

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    gsap.set(frame, {
      x: 0,
      y: 0,
      scale: 0.01,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      transformPerspective: 1000,
      transformOrigin: "50% 50%",
    });

    const createSectionTimeline = (
      triggerId: string,
      targetSection: Section,
      prevSection: Section,
      start = "top 50%",
      end = "bottom bottom",
    ) =>
      gsap.timeline({
        scrollTrigger: {
          trigger: triggerId,
          start,
          end,
          scrub: true,
          onEnter: () => {
            setActiveSection(targetSection);
            applyState(targetSection);
          },
          onLeaveBack: () => {
            setActiveSection(prevSection);
            applyState(prevSection);
          },
        },
      });

    const timelines = [
      createSectionTimeline("#skills", "skills", "hero"),
      createSectionTimeline("#projects", "projects", "skills", "top 85%"),
      createSectionTimeline("#contact", "contact", "projects", "top 30%"),
    ];

    return () => {
      timelines.forEach((timeline) => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      });
    };
  }, [isMobile]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    if (!portraitReady || isLoading) return;

    setActiveSection("hero");
    applyState("hero", 0);

    gsap.fromTo(
      frame,
      { scale: 0.01, autoAlpha: 0 },
      {
        scale: getPortraitState("hero").scale,
        autoAlpha: 1,
        duration: 1.3,
        ease: "elastic.out(1, 0.5)",
      },
    );
  }, [portraitReady, isLoading, isMobile]);

  useEffect(() => {
    const frame = frameRef.current;
    const aura = auraRef.current;
    if (!frame || !aura) return;

    idleTweenRef.current?.kill();
    contactTweenRef.current?.kill();

    idleTweenRef.current = gsap.to(frame, {
      y: "+=12",
      rotateY: "+=12",
      rotateZ: "+=2.5",
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      paused: true,
    });

    contactTweenRef.current = gsap.to(frame, {
      y: "+=10",
      rotateX: "-=6",
      rotateZ: "-=3",
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      paused: true,
    });

    if (activeSection === "hero") {
      idleTweenRef.current.restart();
      gsap.to(aura, { opacity: 0.35, scale: 1.15, duration: 0.8, ease: "power2.out" });
    } else if (activeSection === "contact") {
      contactTweenRef.current.restart();
      gsap.to(aura, { opacity: 0.22, scale: 1.05, duration: 0.8, ease: "power2.out" });
    } else {
      gsap.set(frame, { clearProps: "y" });
      gsap.to(aura, { opacity: 0.28, scale: 1.1, duration: 0.8, ease: "power2.out" });
    }

    return () => {
      idleTweenRef.current?.kill();
      contactTweenRef.current?.kill();
    };
  }, [activeSection]);

  useEffect(() => {
    const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    router.push(`/${hash}`, { scroll: false });
  }, [activeSection, router]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={auraRef}
        className="absolute right-[4vw] top-[12vh] h-[32rem] w-[32rem] rounded-full blur-3xl bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-fuchsia-500/10"
      />

      <div
        ref={frameRef}
        className="absolute right-[5vw] top-[13vh] h-[16.5rem] w-[16.5rem] md:h-[24rem] md:w-[24rem] rounded-full p-3 md:p-4 shadow-[0_22px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] bg-gradient-to-br from-white/35 via-white/10 to-black/30 backdrop-blur-md"
      >
        <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-white/25 bg-black/25">
          <Image
            src="https://avatars.githubusercontent.com/u/121565657?v=4"
            alt="Nguyen Van Minh portrait"
            fill
            sizes="(max-width: 768px) 16rem, 20rem"
            className="object-cover scale-[1.08]"
            onLoad={() => {
              setPortraitReady(true);
              bypassLoading();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
