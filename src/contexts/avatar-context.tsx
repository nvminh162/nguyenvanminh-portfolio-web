"use client";

import { createContext, useContext, useState } from "react";

export type AvatarVariant = "hero" | "about" | "contact";

interface AvatarContextType {
  variant: AvatarVariant | null;
  show: (v: AvatarVariant) => void;
  hide: () => void;
}

const AvatarContext = createContext<AvatarContextType>({
  variant: null,
  show: () => {},
  hide: () => {},
});

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState<AvatarVariant | null>(null);

  return (
    <AvatarContext.Provider
      value={{
        variant,
        show: (v) => setVariant(v),
        hide: () => setVariant(null),
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
