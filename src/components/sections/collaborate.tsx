"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { contact } from "@/data/contact";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { useInView } from "framer-motion";
import { useAvatar } from "@/contexts/avatar-context";

const CollaborateSection = () => {
  const { show, hide } = useAvatar();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25 });

  useEffect(() => {
    if (inView) show("contact");
    else hide();
  }, [inView]);

  return (
    <SectionWrapper id="collaborate" className="min-h-[100dvh] max-w-7xl mx-auto " ref={sectionRef}>
      <SectionHeader id='collaborate' className="relative mb-14" title={
        <>
          LET&apos;S <br />
          COLLABORATE
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="w-full bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Start a Project</CardTitle>
            <CardDescription>
              Have an idea or a project in mind? Reach me at{" "}
              <a
                target="_blank"
                href={`mailto:${contact.email}`}
                className="cursor-can-hover rounded-lg underline"
              >
                {contact.email}
              </a>{" "}
              or fill out the form and I&apos;ll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default CollaborateSection;
