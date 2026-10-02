"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, MessageSquare, ShieldAlert, Send, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { INTEGRATIONS } from "@/lib/data/integrations";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function IntegrationsSection() {
  const [selectedIntegration, setSelectedIntegration] = useState(INTEGRATIONS[0]);

  return (
    <section id="integrations" className="relative py-28 dark:bg-[#070a14] bg-slate-50 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-violet-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ALERTING & INTEGRATIONS"
          title="Instant alerts everywhere"
          gradientTitle="your team works."
          subtitle="Route downtime notifications to Slack, PagerDuty, Discord or SMS in milliseconds. Zero delay, zero false alarms."
        />

        {/* Integration Grid + Live Alert Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Integration Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {INTEGRATIONS.map((item) => (
              <GlassCard
                key={item.id}
                onClick={() => setSelectedIntegration(item)}
                className={`p-4 cursor-pointer flex flex-col justify-between transition-all duration-200 ${
                  selectedIntegration.id === item.id
                    ? "border-indigo-500/60 bg-indigo-50/90 dark:bg-indigo-950/60 ring-1 ring-indigo-500/40"
                    : "bg-white/80 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md text-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name.substring(0, 2).toUpperCase()}
                  </div>

                  <span className="text-[10px] font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold dark:text-white text-slate-900 text-sm mb-1">{item.name}</h4>
                  <p className="text-[11px] dark:text-slate-400 text-slate-600 line-clamp-2">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>

          {/* Right: Live Interactive Alert Payload Preview */}
          <div className="lg:col-span-5">
            <GlassCard className="p-6 border-indigo-500/30 dark:bg-slate-950/80 bg-white shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b dark:border-white/10 border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                    Live Alert Payload ({selectedIntegration.name})
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Latency: 21ms</span>
              </div>

              {/* Slack / Webhook Style Card Preview */}
              <div className="rounded-2xl dark:bg-black/60 bg-slate-900 border dark:border-white/10 border-slate-700 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 font-bold text-indigo-400">
                    <Bell className="w-4 h-4 text-indigo-400" /> MoniterMySite Bot
                  </span>
                  <span>[CRITICAL OUTAGE]</span>
                </div>

                <div>
                  <p className="font-bold text-sm text-rose-400">
                    🚨 DOWN: api.acme.com/v1/checkout
                  </p>
                  <p className="text-slate-400 mt-1">
                    Multi-region consensus failure (3 of 9 regions failed).
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Error Code</span>
                    <span className="text-amber-400 font-bold">504 Gateway Timeout</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Trigger Region</span>
                    <span className="text-slate-200">US-East (New York)</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> PagerDuty On-Call Escalated
                  </span>
                  <span className="text-slate-500">00:14s ago</span>
                </div>
              </div>

              <p className="text-center text-xs dark:text-slate-400 text-slate-600 mt-4">
                Configurable webhook templates with custom JSON variables & header authentication.
              </p>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
