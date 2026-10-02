"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Globe, ExternalLink, Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusDot } from "@/components/ui/status-dot";
import { STATUS_PAGE_MOCK } from "@/lib/data/status";
import { fadeInUp } from "@/lib/motion";

export function StatusPagesSection() {
  return (
    <section id="status-pages" className="relative py-28 dark:bg-[#050811] bg-slate-100 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="PUBLIC STATUS PAGES"
          title="Build trust with beautiful"
          gradientTitle="status pages."
          subtitle="Host public or password-protected status pages on your own custom domain. Free SSL, automated updates, and zero maintenance."
        />

        {/* Status Page Mock Chrome */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto rounded-3xl dark:bg-[#090d1a] bg-white border dark:border-white/15 border-slate-200 shadow-2xl dark:shadow-black/80 shadow-slate-300/50 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-lg dark:bg-black/40 bg-slate-200/80 border dark:border-white/10 border-slate-300 text-xs font-mono dark:text-slate-300 text-slate-700">
              <Globe className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {STATUS_PAGE_MOCK.domain}
              <ExternalLink className="w-3 h-3 text-slate-400 ml-1" />
            </div>

            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> SSL Secured
            </span>
          </div>

          {/* Status Page Mock Body */}
          <div className="p-6 md:p-10 flex flex-col gap-8">
            
            {/* Overall System Banner */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <StatusDot status="healthy" size="lg" />
                <div>
                  <h3 className="text-lg font-bold dark:text-white text-slate-900">All Systems Operational</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600">99.994% average uptime across all infrastructure over the past 30 days.</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold">
                100.0% UPTIME
              </span>
            </div>

            {/* Component Status List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">System Components</h4>
              
              <div className="rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-slate-50 divide-y dark:divide-white/5 divide-slate-200">
                {STATUS_PAGE_MOCK.components.map((comp) => (
                  <div key={comp.name} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold dark:text-white text-slate-900">{comp.name}</p>
                      <p className="text-xs dark:text-slate-500 text-slate-400">{comp.group}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono dark:text-slate-400 text-slate-500 hidden sm:inline">{comp.uptime90d}% 90d</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                        <StatusDot status="healthy" size="sm" pulse={false} />
                        Operational
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incident History */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">Recent Incident History</h4>
              
              {STATUS_PAGE_MOCK.incidents.map((inc) => (
                <div key={inc.id} className="p-5 rounded-2xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/10 border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold dark:text-white text-slate-900 text-sm">{inc.title}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                      Resolved in {inc.duration}
                    </span>
                  </div>
                  <p className="text-xs dark:text-slate-400 text-slate-600">{inc.description}</p>
                  <span className="text-[11px] dark:text-slate-500 text-slate-400">{inc.date}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
