"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StatusDotProps {
  status: "healthy" | "up" | "degraded" | "down" | "flight" | "live";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

export function StatusDot({
  status,
  size = "md",
  pulse = true,
  className,
}: StatusDotProps) {
  const isHealthy = status === "healthy" || status === "up" || status === "live";
  const isDown = status === "down";
  const isFlight = status === "flight" || status === "degraded";

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3.5 h-3.5",
  }[size];

  const colorClasses = isHealthy
    ? "bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
    : isDown
    ? "bg-rose-500 shadow-[0_0_10px_rgba(248,113,113,0.6)]"
    : "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]";

  return (
    <span className="relative flex items-center justify-center shrink-0">
      {pulse && (
        <span
          className={cn(
            "absolute inline-flex rounded-full opacity-75 animate-ping",
            sizeClasses,
            isHealthy ? "bg-emerald-400" : isDown ? "bg-rose-400" : "bg-blue-300"
          )}
        />
      )}
      <span
        className={cn(
          "relative inline-block rounded-full transition-colors",
          sizeClasses,
          colorClasses,
          className
        )}
      />
    </span>
  );
}
