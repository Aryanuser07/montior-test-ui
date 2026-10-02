"use client";

import { useEffect, useState } from "react";
import theatreState from "./theatre-state.json";

export interface TheatreSequenceOptions {
  sheetId: string;
  autoPlay?: boolean;
  onPositionChange?: (position: number) => void;
}

export function useTheatreSequence({
  sheetId,
  autoPlay = true,
}: TheatreSequenceOptions) {
  const [isReady, setIsReady] = useState(false);
  const [sheet, setSheet] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function initTheatre() {
      // Check reduced motion preference
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setIsReady(true);
        return;
      }

      try {
        const core = await import("@theatre/core");
        
        // Studio dynamic import in development mode only
        if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
          try {
            const studio = await import("@theatre/studio");
            studio.default.initialize();
          } catch (e) {
            // studio load warning suppressed silently
          }
        }

        const project = core.getProject("MoniterMySite", { state: theatreState });
        await project.ready;

        const currentSheet = project.sheet(sheetId);
        
        if (isMounted) {
          setSheet(currentSheet);
          setIsReady(true);

          if (autoPlay && currentSheet.sequence) {
            currentSheet.sequence.play();
          }
        }
      } catch (err) {
        console.warn("Theatre.js initialization fallback:", err);
        if (isMounted) setIsReady(true);
      }
    }

    initTheatre();

    return () => {
      isMounted = false;
    };
  }, [sheetId, autoPlay]);

  return { isReady, sheet };
}
