"use client";

import React from "react";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
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
import { cn } from "@/lib/utils";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const ContactLink = ({ href, icon, label, className }: ContactLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wide",
      "text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95",
      "cursor-pointer select-none",
      className,
    )}
  >
    <span className="text-base shrink-0">{icon}</span>
    <span>{label}</span>
  </a>
);

const ContactInfoSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-fit py-20 max-w-5xl mx-auto">
      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={
          <>
            CONNECT <br />
            WITH ME
          </>
        }
      />

      <div className="flex flex-col items-center gap-8 px-4">
        {/* Handle */}
        <p className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
          <IoHeartCircle className="text-pink-500 text-xl" />
          Connect: <span className="text-foreground">{config.handle}</span>
        </p>

        {/* Primary: Email + Phone */}
        <div className="flex flex-wrap justify-center gap-3">
          <ContactLink
            href={`mailto:${config.email}`}
            icon={<FaEnvelope />}
            label={`Email  ${config.email}`}
            className="bg-[#EA4335]"
          />
          <ContactLink
            href={`tel:${config.phone}`}
            icon={<FaPhone />}
            label={`Phone  ${config.phoneDisplay}`}
            className="bg-[#1877F2]"
          />
        </div>

        {/* Secondary: social row 1 */}
        <div className="flex flex-wrap justify-center gap-3">
          <ContactLink
            href={config.social.facebook}
            icon={<FaFacebook />}
            label="Facebook"
            className="bg-[#1877F2]"
          />
          <ContactLink
            href={config.social.instagram}
            icon={<FaInstagram />}
            label="Instagram"
            className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
          />
          <ContactLink
            href={config.social.x}
            icon={<FaXTwitter />}
            label="X"
            className="bg-black dark:bg-white dark:text-black"
          />
          <ContactLink
            href={config.social.whatsapp}
            icon={<FaWhatsapp />}
            label="WhatsApp"
            className="bg-[#25D366]"
          />
          <ContactLink
            href={config.social.locket}
            icon={<IoHeartCircle />}
            label="Locket"
            className="bg-[#FF6B35]"
          />
          <ContactLink
            href={config.social.tiktok}
            icon={<FaTiktok />}
            label="TikTok"
            className="bg-black"
          />
        </div>

        {/* Tertiary: social row 2 */}
        <div className="flex flex-wrap justify-center gap-3">
          <ContactLink
            href={config.social.linkedin}
            icon={<FaLinkedin />}
            label="LinkedIn"
            className="bg-[#0A66C2]"
          />
          <ContactLink
            href={config.social.telegram}
            icon={<FaTelegram />}
            label="Telegram"
            className="bg-[#26A5E4]"
          />
          <ContactLink
            href={config.social.zalo}
            icon={<SiZalo />}
            label="Zalo"
            className="bg-[#0068FF]"
          />
          <ContactLink
            href={config.social.github}
            icon={<FaGithub />}
            label="GitHub"
            className="bg-[#181717] dark:bg-white dark:text-black"
          />
          <ContactLink
            href={config.social.leetcode}
            icon={<SiLeetcode />}
            label="Leetcode"
            className="bg-[#FFA116] text-black"
          />
          <ContactLink
            href={config.social.codesandbox}
            icon={<SiCodesandbox />}
            label="CodeSandbox"
            className="bg-[#151515] dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactInfoSection;
