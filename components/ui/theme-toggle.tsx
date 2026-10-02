"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
        <Moon className="w-4 h-4" />
      </div>
    );
  }

  const currentIcon =
    theme === "system" ? (
      resolvedTheme === "dark" ? (
        <Moon className="w-4 h-4 text-indigo-400" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400" />
      )
    ) : theme === "light" ? (
      <Sun className="w-4 h-4 text-amber-400" />
    ) : (
      <Moon className="w-4 h-4 text-indigo-400" />
    );

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 flex items-center justify-center"
        aria-label="Preferred color scheme"
        title="Change theme"
      >
        {currentIcon}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl backdrop-blur-2xl py-1.5 z-[6000]"
          >
            <button
              onClick={() => {
                setTheme("light");
                setOpen(false);
              }}
              className={`w-full px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-white/10 transition-colors ${
                theme === "light" ? "text-indigo-400 font-semibold" : "text-slate-300"
              }`}
            >
              <span className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Light
              </span>
              {theme === "light" && <Check className="w-3.5 h-3.5 text-indigo-400" />}
            </button>

            <button
              onClick={() => {
                setTheme("dark");
                setOpen(false);
              }}
              className={`w-full px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-white/10 transition-colors ${
                theme === "dark" ? "text-indigo-400 font-semibold" : "text-slate-300"
              }`}
            >
              <span className="flex items-center gap-2">
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                Dark
              </span>
              {theme === "dark" && <Check className="w-3.5 h-3.5 text-indigo-400" />}
            </button>

            <button
              onClick={() => {
                setTheme("system");
                setOpen(false);
              }}
              className={`w-full px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-white/10 transition-colors ${
                theme === "system" ? "text-indigo-400 font-semibold" : "text-slate-300"
              }`}
            >
              <span className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-slate-400" />
                System
              </span>
              {theme === "system" && <Check className="w-3.5 h-3.5 text-indigo-400" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
