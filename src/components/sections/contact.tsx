"use client";

import React from "react";
import { config } from "@/data/config";
import { ALL_CONTACT_GROUPS, ContactLink, LocketIcon } from "@/data/contact";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

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
    <span className="text-base shrink-0">{icon}</span>
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
        <LocketIcon className="text-pink-500 text-xl" />
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
