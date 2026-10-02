"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { StatusDot } from "@/components/ui/status-dot";

export interface RegionCardItem {
  id: string;
  city: string;
  name: string;
  countryCode: string;
  flagUrl?: string;
  latencyMs: number;
  status: "healthy" | "up" | "degraded" | "down";
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: RegionCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate elements to create seamless infinite loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "35s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className="w-[260px] max-w-full relative rounded-2xl border border-white/10 shrink-0 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.01] p-5 backdrop-blur-2xl hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                {item.flagUrl && (
                  <img
                    src={item.flagUrl}
                    alt={`${item.countryCode} flag`}
                    className="w-5 h-3.5 object-cover rounded shadow-sm shrink-0 border border-white/20"
                    loading="lazy"
                  />
                )}
                <span className="text-xs font-mono font-extrabold text-indigo-300 px-2.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-400/30 group-hover:bg-indigo-500/30 transition-colors">
                  {item.countryCode}
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <StatusDot status={item.status} size="sm" pulse={false} />
                <span>Online</span>
              </div>
            </div>

            <div className="my-2">
              <h4 className="text-base font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                {item.city}
              </h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{item.name}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                Ping Latency
              </span>
              <span className="text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {item.latencyMs} ms
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
