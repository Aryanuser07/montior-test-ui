"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusDot } from "@/components/ui/status-dot";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { REGIONS } from "@/lib/data/regions";

// Static Module Level Constants
const GLOBE_COLORS = ["#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"];

const GLOBE_CONFIG = {
  globeColor: "#070d24",
  emissive: "#0a1a4d",
  emissiveIntensity: 0.55,
  shininess: 0.6,
  dotColor: "#a5b4fc",
  atmosphereColor: "#4f7cff",
  atmosphereAltitude: 0.2,
  showAtmosphere: true,
  arcTime: 1800,
  arcLength: 0.5,
  autoRotate: true,
  autoRotateSpeed: 0.6,
  initialPosition: { lat: 20, lng: 20 },
  dotResolution: 3 as 3 | 4,
};

// 9 Region Active Arcs
const SAMPLE_ARCS = [
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.2, color: GLOBE_COLORS[0] }, // NY -> London
  { startLat: 43.6532, startLng: -79.3832, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.25, color: GLOBE_COLORS[1] }, // Toronto -> Amsterdam
  { startLat: 37.7749, startLng: -122.4194, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.4, color: GLOBE_COLORS[2] }, // SF -> Singapore
  { startLat: 51.5074, startLng: -0.1278, endLat: 50.1109, endLng: 8.6821, arcAlt: 0.1, color: GLOBE_COLORS[3] }, // London -> Frankfurt
  { startLat: 50.1109, startLng: 8.6821, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.35, color: GLOBE_COLORS[0] }, // Frankfurt -> Bangalore
  { startLat: 12.9716, startLng: 77.5946, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: GLOBE_COLORS[1] }, // Bangalore -> Sydney
  { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: GLOBE_COLORS[2] }, // Singapore -> Sydney
  { startLat: 40.7128, startLng: -74.006, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.15, color: GLOBE_COLORS[3] }, // NY -> SF
];

// Dynamically import Originkit Globe component
const GlobeComponent = dynamic(() => import("@/components/ui/globe").then((m) => m.Globe || m.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900/40 rounded-3xl border border-white/10">
      <Globe className="w-12 h-12 text-indigo-400 mb-3 animate-pulse" />
      <span className="text-slate-400 text-xs font-mono">Initializing 3D Probe Globe...</span>
    </div>
  ),
});

const REGION_MARKERS = REGIONS.map((r) => ({ lat: r.lat, lng: r.lng }));

const DOTS_CONFIG = { color: "#818cf8", size: 5, density: 8, allDots: false };
const MARKER_CONFIG = { markers: REGION_MARKERS, color: "#38bdf8", size: 45 };

const PROBE_ARCS = [
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: "#38bdf8", arcAlt: 0.12 }, // NY -> London
  { startLat: 43.6532, startLng: -79.3832, endLat: 52.3676, endLng: 4.9041, color: "#818cf8", arcAlt: 0.14 }, // Toronto -> Amsterdam
  { startLat: 37.7749, startLng: -122.4194, endLat: 1.3521, endLng: 103.8198, color: "#06b6d4", arcAlt: 0.18 }, // SF -> Singapore
  { startLat: 51.5074, startLng: -0.1278, endLat: 50.1109, endLng: 8.6821, color: "#a855f7", arcAlt: 0.08 }, // London -> Frankfurt
  { startLat: 50.1109, startLng: 8.6821, endLat: 12.9716, endLng: 77.5946, color: "#38bdf8", arcAlt: 0.15 }, // Frankfurt -> Bangalore
  { startLat: 12.9716, startLng: 77.5946, endLat: -33.8688, endLng: 151.2093, color: "#818cf8", arcAlt: 0.16 }, // Bangalore -> Sydney
  { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, color: "#06b6d4", arcAlt: 0.11 }, // Singapore -> Sydney
  { startLat: 40.7128, startLng: -74.006, endLat: 37.7749, endLng: -122.4194, color: "#a855f7", arcAlt: 0.1 }, // NY -> SF
];

export function GlobeSection() {
  const [checksToday, setChecksToday] = useState(2419215);

  // Ticking checks today counter
  useEffect(() => {
    const timer = setInterval(() => {
      setChecksToday((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="global-network" className="relative py-28 dark:bg-[#050811] bg-slate-100 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-600/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="GLOBAL COVERAGE"
          title="Nine regions."
          gradientTitle="One verdict."
          subtitle="Multi-region consensus verification eliminates false positives. Our distributed probe nodes check your endpoints in parallel from 4 continents."
        />

        {/* Unified Balanced Status Bar */}
        <div className="mb-8 max-w-4xl mx-auto p-4 rounded-2xl dark:bg-white/[0.04] bg-white border dark:border-white/10 border-slate-200 shadow-xl dark:shadow-none backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-semibold">
              <StatusDot status="live" size="sm" />
              Live Probe Network Active
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm dark:text-slate-300 text-slate-700 font-medium">
            <span className="dark:text-white text-slate-900 font-bold" suppressHydrationWarning>
              {checksToday.toLocaleString("en-US")}
            </span>{" "}
            checks completed today
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-indigo-500 dark:text-indigo-400 font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            9 Global Edge Vantage Points
          </div>
        </div>

        {/* Full-Width 3D Globe Canvas Container */}
        <div className="relative w-full h-[480px] sm:h-[620px] mb-12 flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <GlobeComponent
              speed={2}
              smoothing={8}
              dots={DOTS_CONFIG}
              fill="dots"
              fillColor="#818cf8"
              scale={8}
              stopOnHover={true}
              markerConfig={MARKER_CONFIG}
              arcs={PROBE_ARCS}
              direction="left"
              initialLatitude={20}
              initialLongitude={20}
              oceanColor="#060b1e"
              outlineColor="#4f46e5"
              showOutline={true}
              graticuleColor="rgba(99, 102, 241, 0.15)"
              showGrid={true}
              outlineWidth={1}
              dragSpeed={5}
              detail={5}
            />
          </div>

          {/* Floating Glass Cards overlaid on Globe */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-4 sm:left-12 z-20 pointer-events-none"
          >
            <GlassCard className="p-4 flex items-center gap-3 bg-slate-900/90 border-emerald-500/40 shadow-2xl backdrop-blur-xl max-w-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Incident Resolved</p>
                <p className="text-[11px] text-slate-400">api.yourapp.com · 4 m 20 s</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-12 left-4 sm:left-16 z-20 pointer-events-none"
          >
            <GlassCard className="p-4 flex items-center gap-3 bg-slate-900/90 border-blue-500/40 shadow-2xl backdrop-blur-xl max-w-xs">
              <MessageSquare className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Slack Alert Delivered</p>
                <p className="text-[11px] text-slate-400">#ops · 00:21 after failure</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Infinite Moving Cards Marquee with Country Flags Below Globe */}
        <div className="w-full pt-4 border-t border-white/5">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              ACTIVE PROBE REGIONS (9 ONLINE)
            </h3>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5"><StatusDot status="up" size="sm" /> 100% Operational</span>
              <span className="flex items-center gap-1.5"><StatusDot status="flight" size="sm" /> Parallel Checks</span>
            </div>
          </div>

          <InfiniteMovingCards
            items={REGIONS}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

      </div>
    </section>
  );
}
