"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import {
  Download,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { cvAssets } from "@/data/assets";

const ResumePdfViewer = dynamic(
  () => import("./resume-pdf-viewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[500px]">
        <Loader2 className="animate-spin text-muted-foreground" size={32} />
      </div>
    ),
  }
);

const ResumeSection = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState(1);

  const onLoadSuccess = useCallback((n: number) => setNumPages(n), []);

  const zoomIn = () => setScale((s) => Math.min(+(s + 0.2).toFixed(1), 2));
  const zoomOut = () => setScale((s) => Math.max(+(s - 0.2).toFixed(1), 0.6));

  return (
    <SectionWrapper
      id="resume"
      className="flex flex-col items-center justify-center py-20 min-h-screen"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="resume"
          title="Resume"
          desc="My curriculum vitae — feel free to download a copy."
          className="mb-12 md:mb-16 mt-0"
        />

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={cn(
            "flex items-center justify-between gap-3 mb-4 px-4 py-3 rounded-xl",
            "bg-card border border-border shadow-sm flex-wrap"
          )}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground tabular-nums min-w-[80px]">
              {numPages === 0 ? "Loading..." : `${numPages} pages`}
            </span>
          </div>

          {/* Zoom + Download */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={zoomOut}
              disabled={scale <= 0.6}
              className="h-8 w-8"
            >
              <ZoomOut size={16} />
            </Button>
            <span className="text-xs text-muted-foreground w-12 text-center tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={zoomIn}
              disabled={scale >= 2}
              className="h-8 w-8"
            >
              <ZoomIn size={16} />
            </Button>

            <div className="w-px h-6 bg-border mx-1" />

            <a href={cvAssets.path} download={cvAssets.fileName}>
              <Button className="flex items-center gap-2 h-8 px-4 text-sm">
                <Download size={15} />
                Download CV
              </Button>
            </a>
          </div>
        </motion.div>

        {/* PDF Viewer — no overflow-hidden so inner scroll works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "rounded-2xl",
            "bg-card border border-border shadow-md",
          )}
        >
          <ResumePdfViewer
            file={cvAssets.path}
            scale={scale}
            onLoadSuccess={onLoadSuccess}
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeSection;
