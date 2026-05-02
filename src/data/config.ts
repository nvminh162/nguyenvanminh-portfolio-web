// ─────────────────────────────────────────────────────────────────────────────
// Site-level config — SEO metadata + identity.
// Contact info (email, phone, socials) lives in src/data/contact.tsx.
// ─────────────────────────────────────────────────────────────────────────────

const config = {
  // ── SEO ───────────────────────────────────────────────────────────────────
  title: "@nvminh162 | Nguyen Van Minh",
  description: {
    long: "Explore the portfolio of Nguyen Van Minh, a full-stack developer and creative technologist specialising in interactive web experiences, 3D animations, and innovative projects.",
    short:
      "Portfolio of Nguyen Van Minh — full-stack developer creating interactive web experiences.",
  },
  keywords: [
    "Nguyen Van Minh",
    "nvminh162",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "GSAP",
    "Framer Motion",
  ],

  // ── Identity ──────────────────────────────────────────────────────────────
  /** Display name shown in the header and metadata */
  author: "Van Minh",
  /** Short handle shown in the header brand */
  username: "@nvminh162",
  /** Used by GitHubFollowersButton in the header */
  githubUsername: "nvminh162",
  /** Canonical site URL */
  site: "https://nguyenvanminh.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
};

export { config };
