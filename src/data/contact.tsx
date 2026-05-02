// ─────────────────────────────────────────────────────────────────────────────
// Domain: Contact
// Raw contact values + typed UI link definitions in one place.
// Components import `contact` for raw values, `ALL_CONTACT_GROUPS` for UI.
// ─────────────────────────────────────────────────────────────────────────────

import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaTiktok,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import { SiLeetcode, SiCodesandbox, SiZalo } from "react-icons/si";
import { IoHeartCircle } from "react-icons/io5";
import { config } from "./config";

// ─── Raw contact values ───────────────────────────────────────────────────────
export const contact = {
  email: "nvminh162@gmail.com",
  phone: "+840353999798",
  phoneDisplay: "(VN) +84 0353.999.798",
  handle: "@nvminh162",
  social: {
    // github is derived — single source of truth is config.githubUsername
    get github() {
      return `https://github.com/${config.githubUsername}`;
    },
    linkedin: "https://www.linkedin.com/in/nvminh162",
    facebook: "https://www.facebook.com/nvminh162",
    instagram: "https://www.instagram.com/nvminh162",
    x: "https://x.com/nvminh162",
    whatsapp: "https://wa.me/840353999798",
    tiktok: "https://www.tiktok.com/@nvminh162",
    zalo: "https://zalo.me/0353999798",
    telegram: "https://t.me/nvminh162",
    leetcode: "https://leetcode.com/nvminh162",
    codesandbox: "https://codesandbox.io/u/nvminh162",
  },
} as const;

// ─── UI types ─────────────────────────────────────────────────────────────────
export type ContactLink = {
  id: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  /** Tailwind bg-* class or arbitrary bg-[...] value */
  background: string;
  /** Tailwind text colour class(es). Defaults to "text-white". */
  textColor?: string;
};

export type ContactGroup = ContactLink[];

// ─── Row 1: primary ───────────────────────────────────────────────────────────
export const PRIMARY_CONTACTS: ContactGroup = [
  {
    id: "email",
    href: `mailto:${contact.email}`,
    icon: <FaEnvelope />,
    label: contact.email,
    background: "bg-[#EA4335]",
  },
  {
    id: "phone",
    href: `tel:${contact.phone}`,
    icon: <FaPhone />,
    label: contact.phoneDisplay,
    background: "bg-[#1877F2]",
  },
];

// ─── Row 2: social ────────────────────────────────────────────────────────────
export const SOCIAL_ROW1: ContactGroup = [
  {
    id: "facebook",
    href: contact.social.facebook,
    icon: <FaFacebook />,
    label: "Facebook",
    background: "bg-[#1877F2]",
  },
  {
    id: "instagram",
    href: contact.social.instagram,
    icon: <FaInstagram />,
    label: "Instagram",
    background: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    id: "x",
    href: contact.social.x,
    icon: <FaXTwitter />,
    label: "X",
    background: "bg-[#14171A]",
  },
  {
    id: "whatsapp",
    href: contact.social.whatsapp,
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    background: "bg-[#25D366]",
  },
  {
    id: "tiktok",
    href: contact.social.tiktok,
    icon: <FaTiktok />,
    label: "TikTok",
    background: "bg-black",
  },
];

// ─── Row 3: dev / professional ────────────────────────────────────────────────
export const SOCIAL_ROW2: ContactGroup = [
  {
    id: "linkedin",
    href: contact.social.linkedin,
    icon: <FaLinkedin />,
    label: "LinkedIn",
    background: "bg-[#0A66C2]",
  },
  {
    id: "telegram",
    href: contact.social.telegram,
    icon: <FaTelegram />,
    label: "Telegram",
    background: "bg-[#26A5E4]",
  },
  {
    id: "zalo",
    href: contact.social.zalo,
    icon: <SiZalo />,
    label: "Zalo",
    background: "bg-[#0068FF]",
  },
  {
    id: "github",
    href: contact.social.github,
    icon: <FaGithub />,
    label: "GitHub",
    background: "bg-[#24292e]",
  },
  {
    id: "leetcode",
    href: contact.social.leetcode,
    icon: <SiLeetcode />,
    label: "Leetcode",
    background: "bg-[#FFA116]",
    textColor: "text-black",
  },
  {
    id: "codesandbox",
    href: contact.social.codesandbox,
    icon: <SiCodesandbox />,
    label: "CodeSandbox",
    background: "bg-[#1c1c1c]",
  },
];

/** All groups in display order */
export const ALL_CONTACT_GROUPS: ContactGroup[] = [
  PRIMARY_CONTACTS,
  SOCIAL_ROW1,
  SOCIAL_ROW2,
];

/** Flat list — useful for search / iteration */
export const ALL_CONTACTS: ContactLink[] = ALL_CONTACT_GROUPS.flat();

export { IoHeartCircle as LocketIcon };
