"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Activity, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useSmoothScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      if (lenis) {
        lenis.scrollTo(href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border dark:border-white/10 border-slate-200/80 rounded-full dark:bg-[#070b19]/85 bg-white/90 backdrop-blur-2xl shadow-2xl dark:shadow-black/60 shadow-slate-300/40 z-[5000] px-4 sm:px-6 py-2 items-center justify-between space-x-3 sm:space-x-6 transition-colors duration-300",
          className
        )}
      >
        {/* Brand Icon */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-4 h-4 text-white animate-pulse" />
          </div>
          <span className="hidden sm:inline text-sm font-bold tracking-tight dark:text-white text-slate-900">
            Moniter<span className="text-blue-500">MySite</span>
          </span>
        </Link>

        {/* Vertical Divider */}
        <div className="h-4 w-px dark:bg-white/10 bg-slate-200 hidden sm:block" />

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-5">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className="relative flex items-center space-x-1.5 dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors text-xs font-semibold"
            >
              {navItem.icon && <span className="dark:text-slate-400 text-slate-500">{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Right Action Icons: Theme Toggle + Start Free CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />

          <button
            onClick={() => {
              if (lenis) lenis.scrollTo("#hero");
            }}
            className="border text-xs font-semibold relative border-indigo-500/30 text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
          >
            <span>Start free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-14 left-0 right-0 w-64 mx-auto rounded-2xl dark:bg-slate-900/95 bg-white/95 border dark:border-white/10 border-slate-200 shadow-2xl backdrop-blur-2xl p-4 flex flex-col gap-3 text-xs font-medium dark:text-slate-300 text-slate-700 md:hidden z-[6000]"
            >
              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                  className="flex items-center gap-2 dark:hover:text-white hover:text-slate-900 py-1.5 px-2 rounded-lg dark:hover:bg-white/5 hover:bg-slate-100"
                >
                  {navItem.icon}
                  <span>{navItem.name}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
