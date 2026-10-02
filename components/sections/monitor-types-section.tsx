"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, FileText, Activity, Server, Database, ShieldCheck, Clock, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { MONITOR_TYPES, type MonitorTypeItem } from "@/lib/data/monitor-types";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ICON_MAP = {
  Globe,
  FileText,
  Activity,
  Server,
  Database,
  ShieldCheck,
  Clock,
  Zap,
};

export function MonitorTypesSection() {
  return (
    <section id="monitors" className="relative py-28 dark:bg-[#050811] bg-slate-100 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="MONITORING"
          title="Catch downtime before"
          gradientTitle="it becomes a ticket."
          subtitle="Eight monitor types cover everything from a landing page to a cron job. Every check records the region it ran from, the response time and the exact error."
        />

        {/* 4x2 Grid of Monitor Types */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MONITOR_TYPES.map((item: MonitorTypeItem) => {
            const IconComponent = ICON_MAP[item.iconName] || Globe;

            return (
              <GlassCard
                key={item.id}
                glowColor={item.glowColor}
                className="flex flex-col justify-between h-full p-6 group hover:border-indigo-500/40 bg-white dark:bg-slate-900/80"
              >
                <div>
                  {/* Circular Gradient Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.colorGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded-full dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t dark:border-white/5 border-slate-200 flex items-center justify-between text-xs font-semibold text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Configure Check</span>
                  <span>→</span>
                </div>
              </GlassCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
