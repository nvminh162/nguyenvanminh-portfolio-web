// ─────────────────────────────────────────────────────────────────────────────
// Theme-aware static asset paths.
// All paths are relative to /public.
// ─────────────────────────────────────────────────────────────────────────────

export const logoAssets = {
  dark:  "/logo/nguyenvanminh-logo-name-dark.png",
  light: "/logo/nguyenvanminh-logo-name-light.png",
} as const;

export const portraitAssets = {
  dark:  "/avatars/nvminh162-dark.png",
  light: "/avatars/nvminh162-light.png",
} as const;

export const cvAssets = {
  path:     "/cv/nguyenvanminh-cv.pdf",
  fileName: "nguyenvanminh-cv.pdf",
} as const;
