"use client";

import Lottie from "lottie-react";
import { Button } from "./button";
import { ModalBody, ModalContent, useModal } from "./animated-modal";

interface ComingSoonModalProps {
  /** Main heading text */
  title?: string;
  /** Sub-description text */
  description?: string;
  /** Lottie JSON animation data */
  animationData?: object;
  /** Confirm button label */
  buttonText?: string;
  /** Extra className on ModalBody */
  className?: string;
}

const CustomModal = ({
  title = "Heads up! Fun stuff loading…",
  description = "We're brewing the next drop—grab a coffee and stick around.",
  animationData,
  buttonText = "Got it",
  className,
}: ComingSoonModalProps) => {
  const { setOpen } = useModal();

  return (
    <ModalBody className={className ?? "md:max-w-lg"}>
      <ModalContent className="items-center gap-6 text-center">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop
            className="w-44 h-auto md:w-52 mx-auto -mt-16 -mb-4"
          />
        )}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button onClick={() => setOpen(false)} className="self-center">
          {buttonText}
        </Button>
      </ModalContent>
    </ModalBody>
  );
};

export default CustomModal;
