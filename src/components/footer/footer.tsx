"use client";

import Link from "next/link";
import { footer } from "./config";
import { Button } from "@/components/ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import comingSoonAnim from "../../../public/assets/lottie/developer.json";
import { Modal, ModalTrigger } from "../ui/animated-modal";
import CustomModal from "../custom-modal";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <SocialMediaButtons />

      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>

      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;
          const isComingSoon = title.toLowerCase() === "blog"

          if (isComingSoon) {
            return (
              <Modal key={`modal_${index}`}>
                <ModalTrigger className="bg-transparent p-0 text-xs underline-offset-4 hover:underline">
                  <span className="p-0 h-auto text-xs">{title}</span>
                </ModalTrigger>
                <CustomModal animationData={comingSoonAnim} />
              </Modal>
            );
          }

          return (
            <Link className="text-xs underline-offset-4 hover:underline" href={href} key={`l_${index}`}>
              <Button variant={"link"} className="p-0 h-auto text-xs">
                {title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
