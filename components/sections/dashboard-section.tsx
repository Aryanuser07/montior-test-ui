"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Server, ArrowUpRight, ShieldCheck, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusDot } from "@/components/ui/status-dot";
import { MOCK_MONITORS, DASHBOARD_STATS } from "@/lib/data/monitors";
import { REGIONS } from "@/lib/data/regions";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function DashboardSection() {
  const [monitors, setMonitors] = useState(MOCK_MONITORS);
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0.1, 0.4], [10, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1]);

  // Jitter response times slightly to feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      setMonitors((prev) =>
        prev.map((m) => {
          if (m.responseTimeMs === null || m.status === "down") return m;
          const delta = Math.floor(Math.random() * 9) - 4;
          return {
            ...m,
            responseTimeMs: Math.max(20, m.responseTimeMs + delta),
          };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative py-28 dark:bg-[#070a14] bg-slate-50 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-600/15 to-violet-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="DASHBOARD"
          title="Every monitor, every region,"
          gradientTitle="at a glance."
          subtitle="Live status, response times and 30-day uptime bars for all your monitors on one screen. Updates in real time without refreshing."
        />

        {/* Perspective Tilt Container */}
        <motion.div
          style={{ rotateX, scale, transformPerspective: 1200 }}
          className="relative max-w-6xl mx-auto rounded-3xl dark:bg-[#090d1a] bg-white border dark:border-white/15 border-slate-200 shadow-2xl dark:shadow-black/80 shadow-slate-300/50 overflow-hidden"
        >
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-6 py-4 dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="px-4 py-1.5 rounded-lg dark:bg-black/40 bg-slate-200/80 border dark:border-white/10 border-slate-300 text-xs font-mono dark:text-slate-300 text-slate-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              app.monitermysite.com/app/monitors
            </div>

            <div className="flex items-center gap-2 text-xs dark:text-slate-400 text-slate-600 font-medium">
              <StatusDot status="live" size="sm" />
              <span>Real-time WebSocket connection</span>
            </div>
          </div>

          {/* Window Content Body */}
          <div className="p-6 md:p-8 flex flex-col gap-8">
            
            {/* 4 Stat Tiles */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/10 border-slate-200 flex flex-col">
                <span className="text-xs font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider">Total Monitors</span>
                <span className="text-2xl sm:text-3xl font-bold dark:text-white text-slate-900 mt-1">{DASHBOARD_STATS.totalMonitors}</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Operational</span>
                <span className="text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-300 mt-1">{DASHBOARD_STATS.upCount}</span>
              </div>

              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex flex-col">
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Failing Nodes</span>
                <span className="text-2xl sm:text-3xl font-bold text-rose-700 dark:text-rose-300 mt-1">{DASHBOARD_STATS.downCount}</span>
              </div>

              <div className="p-4 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/10 border-slate-200 flex flex-col">
                <span className="text-xs font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider">Avg Response Time</span>
                <span className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">{DASHBOARD_STATS.avgResponseTimeMs} ms</span>
              </div>
            </div>

            {/* Monitor Table */}
            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-white" data-lenis-prevent>
              <table className="w-full text-left text-xs sm:text-sm dark:text-slate-300 text-slate-700">
                <thead className="dark:bg-white/[0.04] bg-slate-100 dark:text-slate-400 text-slate-500 uppercase text-[11px] font-semibold tracking-wider border-b dark:border-white/10 border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Status / Name</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">Type</th>
                    <th className="py-3.5 px-4">30-Day Uptime Bar</th>
                    <th className="py-3.5 px-4 text-right">Latency</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Uptime %</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-200 font-mono">
                  {monitors.map((mon) => (
                    <tr key={mon.id} className="dark:hover:bg-white/[0.04] hover:bg-slate-50 transition-colors">
                      {/* Name & Status Dot */}
                      <td className="py-4 px-4 sm:px-6 font-sans">
                        <div className="flex items-center gap-3">
                          <StatusDot status={mon.status} size="md" />
                          <div>
                            <p className="font-bold dark:text-white text-slate-900 text-xs sm:text-sm">{mon.name}</p>
                            <p className="text-[11px] dark:text-slate-500 text-slate-400 font-mono">{mon.url}</p>
                          </div>
                        </div>
                      </td>

                      {/* Type */}
                      <td className="py-4 px-4 hidden md:table-cell font-sans">
                        <span className="px-2.5 py-1 rounded-md dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 text-xs dark:text-slate-300 text-slate-700">
                          {mon.type}
                        </span>
                      </td>

                      {/* 30-segment Uptime Bar */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          {mon.segments.map((seg, i) => (
                            <span
                              key={i}
                              className={`w-1.5 sm:w-2 h-6 rounded-sm transition-colors ${
                                seg === "green"
                                  ? "bg-emerald-500/80 hover:bg-emerald-400"
                                  : seg === "red"
                                  ? "bg-rose-500 shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                                  : "bg-amber-400"
                              }`}
                              title={`Day ${30 - i}: ${seg}`}
                            />
                          ))}
                        </div>
                      </td>

                      {/* Latency */}
                      <td className="py-4 px-4 text-right">
                        {mon.responseTimeMs !== null ? (
                          <span className={mon.status === "down" ? "text-rose-500 font-bold" : "dark:text-slate-200 text-slate-800"}>
                            {mon.responseTimeMs} ms
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Uptime % Pill */}
                      <td className="py-4 px-4 sm:px-6 text-right font-sans">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${
                            mon.uptimePercentage > 99
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                              : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                          }`}
                        >
                          {mon.uptimePercentage.toFixed(3)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Window Footer: Region Chips */}
            <div className="pt-2 border-t dark:border-white/10 border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs dark:text-slate-400 text-slate-600">
              <span className="font-semibold dark:text-slate-300 text-slate-800">Probe Locations (Active):</span>
              <div className="flex flex-wrap items-center gap-2">
                {REGIONS.map((r) => (
                  <span
                    key={r.id}
                    className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 dark:text-slate-300 text-slate-700 font-medium flex items-center gap-1.5"
                  >
                    {r.countryCode} {r.city}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded-lg dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200 dark:text-indigo-300 text-indigo-700 font-semibold">
                  +8 more edge probes
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
