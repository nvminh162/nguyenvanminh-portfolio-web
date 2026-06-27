"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type AvatarVariant = "hero";

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
  const show = useCallback((v: AvatarVariant) => setVariant(v), []);
  const hide = useCallback(() => setVariant(null), []);
  const value = useMemo(
    () => ({
      variant,
      show,
      hide,
    }),
    [hide, show, variant]
  );

  return (
    <AvatarContext.Provider value={value}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
