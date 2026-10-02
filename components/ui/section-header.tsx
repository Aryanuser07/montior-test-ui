"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  gradientTitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  gradientTitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={cn(
        "flex flex-col max-w-3xl mb-16",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-indigo-500/80 rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight dark:text-white text-slate-900 leading-[1.15]">
        {title}{" "}
        {gradientTitle && (
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            {gradientTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
