"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Loader2 } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumePdfViewerProps {
  file: string;
  scale: number;
  pageNumber: number;
  onLoadSuccess: (numPages: number) => void;
}

const ResumePdfViewer = ({
  file,
  scale,
  pageNumber,
  onLoadSuccess,
}: ResumePdfViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(760);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setContainerWidth(Math.min(w - 32, 900));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setLoading(false);
      onLoadSuccess(numPages);
    },
    [onLoadSuccess]
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 min-h-[500px]">
          <Loader2 className="animate-spin text-muted-foreground" size={32} />
        </div>
      )}
      <div
        data-lenis-prevent
        className="overflow-y-auto overflow-x-auto w-full flex justify-center py-6 scroll-smooth pointer-events-auto"
        style={{ maxHeight: "82dvh" }}
      >
        <Document
          file={file}
          onLoadSuccess={handleLoadSuccess}
          loading={null}
          className="flex flex-col items-center"
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth * scale}
            renderAnnotationLayer
            renderTextLayer
            className="shadow-lg"
          />
        </Document>
      </div>
    </div>
  );
};

export default ResumePdfViewer;
