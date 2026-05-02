"use client";

import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { TooltipProvider } from "./ui/tooltip";
import { AvatarProvider } from "@/contexts/avatar-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <AvatarProvider>
        <Preloader>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </Preloader>
      </AvatarProvider>
    </ThemeProvider>
  );
};
