"use client";

import Particles from "@/components/Particles";
import EasterEggs from "@/components/easter-eggs";
import ElasticCursor from "@/components/ui/ElasticCursor";
import { usePathname } from "next/navigation";
import RadialMenu from "@/components/radial-menu/index";

export default function AppOverlays() {
  const isHome = usePathname() === "/";
  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <EasterEggs />
      <ElasticCursor />
      {isHome && <RadialMenu />}
    </>
  );
}
