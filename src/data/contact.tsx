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

export type ContactLink = {
  id: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  /** Tailwind bg-* class or arbitrary bg-[...] value */
  background: string;
  /** Tailwind text color class(es), defaults to "text-white" */
  textColor?: string;
};

export type ContactGroup = ContactLink[];

// ─── Row 1: primary contacts ──────────────────────────────────────────────
export const PRIMARY_CONTACTS: ContactGroup = [
  {
    id: "email",
    href: `mailto:${config.email}`,
    icon: <FaEnvelope />,
    label: config.email,
    background: "bg-[#EA4335]",
  },
  {
    id: "phone",
    href: `tel:${config.phone}`,
    icon: <FaPhone />,
    label: config.phoneDisplay,
    background: "bg-[#1877F2]",
  },
];

// ─── Row 2: social platforms ──────────────────────────────────────────────
export const SOCIAL_ROW1: ContactGroup = [
  {
    id: "facebook",
    href: config.social.facebook,
    icon: <FaFacebook />,
    label: "Facebook",
    background: "bg-[#1877F2]",
  },
  {
    id: "instagram",
    href: config.social.instagram,
    icon: <FaInstagram />,
    label: "Instagram",
    background: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    id: "x",
    href: config.social.x,
    icon: <FaXTwitter />,
    label: "X",
    background: "bg-[#14171A]",
  },
  {
    id: "whatsapp",
    href: config.social.whatsapp,
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    background: "bg-[#25D366]",
  },
  {
    id: "tiktok",
    href: config.social.tiktok,
    icon: <FaTiktok />,
    label: "TikTok",
    background: "bg-black",
  },
];

// ─── Row 3: dev / professional ────────────────────────────────────────────
export const SOCIAL_ROW2: ContactGroup = [
  {
    id: "linkedin",
    href: config.social.linkedin,
    icon: <FaLinkedin />,
    label: "LinkedIn",
    background: "bg-[#0A66C2]",
  },
  {
    id: "telegram",
    href: config.social.telegram,
    icon: <FaTelegram />,
    label: "Telegram",
    background: "bg-[#26A5E4]",
  },
  {
    id: "zalo",
    href: config.social.zalo,
    icon: <SiZalo />,
    label: "Zalo",
    background: "bg-[#0068FF]",
  },
  {
    id: "github",
    href: config.social.github,
    icon: <FaGithub />,
    label: "GitHub",
    background: "bg-[#24292e]",
  },
  {
    id: "leetcode",
    href: config.social.leetcode,
    icon: <SiLeetcode />,
    label: "Leetcode",
    background: "bg-[#FFA116]",
    textColor: "text-black",
  },
  {
    id: "codesandbox",
    href: config.social.codesandbox,
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

/** Flat list — useful for iteration / search */
export const ALL_CONTACTS: ContactLink[] = ALL_CONTACT_GROUPS.flat();

/** Icon used for "Locket" link (standalone, kept here for convenience) */
export { IoHeartCircle as LocketIcon };

