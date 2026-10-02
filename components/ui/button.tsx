"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-orange-500 via-orange-600 to-indigo-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/25 active:scale-[0.98]",
    outline:
      "bg-transparent text-slate-200 border border-slate-700 hover:border-slate-500 hover:text-white active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
  }[variant];

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
