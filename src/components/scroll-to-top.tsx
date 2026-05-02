"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cursor-can-hover fixed bottom-6 right-6 z-[999] flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground shadow-md transition-colors hover:bg-foreground hover:text-background"
        >
          <ArrowUp className="h-5 w-5 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
