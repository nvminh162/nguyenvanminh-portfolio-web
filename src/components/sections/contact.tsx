"use client";

import React from "react";
import { config } from "@/data/config";
import { ALL_CONTACT_GROUPS, ContactLink } from "@/data/contact";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── single button ────────────────────────────────────────────────────────
const ContactBtn = ({ href, icon, label, background, textColor }: Omit<ContactLink, "id">) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center gap-2.5",
      "px-4 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wide whitespace-nowrap",
      "transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95",
      "cursor-pointer select-none",
      textColor ?? "text-white",
      background,
    )}
  >
    <Image
      src={icon}
      alt={label}
      width={16}
      height={16}
      style={{ width: "16px", height: "auto" }}
      className={cn(
        "shrink-0",
        textColor === "text-black" ? "brightness-0" : "brightness-0 invert",
      )}
      unoptimized
    />
    <span>{label}</span>
  </a>
);

// ─── section ──────────────────────────────────────────────────────────────
const ContactInfoSection = () => (
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
      {/* Handle badge */}
      <p className="flex items-center gap-2 text-lg font-semibold text-muted-foreground mt-3">
        <svg className="w-5 h-5 text-pink-500 shrink-0" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 78c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254h-48v-14h16V280h-16v-14h32v152h16v14z"/>
        </svg>
        Connect:{" "}
        <span className="text-foreground">{config.username}</span>
      </p>

      {/* Button rows — each row is a flex-wrap centered row */}
      {ALL_CONTACT_GROUPS.map((group, gi) => (
        <div key={gi} className="flex flex-wrap justify-center gap-3">
          {group.map(({ id, ...link }) => (
            <ContactBtn key={id} {...link} />
          ))}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ContactInfoSection;
