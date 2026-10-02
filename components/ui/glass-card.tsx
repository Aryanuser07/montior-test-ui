"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor,
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } } : undefined}
      className={cn(
        "relative rounded-3xl p-6 md:p-8",
        "bg-white/90 dark:bg-slate-900/80 dark:bg-gradient-to-b dark:from-white/[0.07] dark:to-white/[0.02]",
        "border dark:border-white/10 border-slate-200/80 shadow-xl dark:shadow-2xl backdrop-blur-xl",
        "overflow-hidden transition-all duration-300 group",
        className
      )}
      style={
        glowColor
          ? ({
              "--glow-color": glowColor,
            } as React.CSSProperties)
          : undefined
      }
      {...props}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />
      
      {/* Dynamic hover glow overlay */}
      {glowColor && (
        <div 
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
          }}
        />
      )}

      {children}
    </motion.div>
  );
}
