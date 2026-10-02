"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Globe, ArrowRight, CheckCircle2, Zap, Server, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// Dynamically import VectorWordmark with fallback
const VectorWordmark = dynamic(
  () => import("@/components/hero/vector-wordmark").then((mod) => mod.VectorWordmark),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 md:h-64 flex items-center justify-center border border-white/5 rounded-3xl bg-slate-900/20">
        <span className="text-4xl md:text-7xl font-black text-orange-500/20 tracking-widest">
          UPTIME
        </span>
      </div>
    ),
  }
);

export function HeroSection() {
  const [urlInput, setUrlInput] = useState("https://my-saas-platform.io");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      }, 1200);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden dark:bg-[#06080d] bg-slate-950 text-white transition-colors duration-300">
      
      {/* MAP BACKGROUND LAYER WITH 9 REALISTIC TELEMETRY PROBES */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Radial vignette overlay to maintain high contrast for center typography */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#06080d]/70 to-[#06080d] z-10" />
        
        <div className="relative w-full max-w-[1440px] h-[600px] sm:h-[700px] lg:h-[800px] opacity-80 scale-105">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Ocean Grid */}
              <pattern id="ocean-grid" width="20" height="20" patternUnits="userSpaceOnUse" x="0" y="0">
                <circle cx="10" cy="10" r="0.75" fill="#334155" opacity="0.35" />
              </pattern>
              
              {/* Trajectory Trajectory Gradients */}
              <linearGradient id="arc-orange-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FFA040" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="arc-cyan-violet" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#818CF8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Ocean matrix */}
            <rect width="1000" height="500" fill="url(#ocean-grid)" />

            {/* Continent geometries */}
            <g className="transition-opacity duration-700" fill="#1e293b" fillOpacity="0.45" stroke="#334155" strokeOpacity="0.75" strokeWidth="1.1">
              {/* Greenland */}
              <path d="M 330 35 L 375 30 L 400 45 L 390 70 L 350 90 L 320 80 L 330 35 Z" />
              <path d="M 435 68 L 448 65 L 452 75 L 438 78 Z" />
              {/* North America */}
              <path d="M 120 48 L 160 42 L 205 50 L 260 45 L 290 55 L 275 80 L 295 95 L 285 120 L 265 130 L 245 115 L 235 125 L 255 140 L 250 162 L 240 165 L 230 185 L 200 230 L 185 220 L 160 185 L 140 182 L 135 155 L 105 135 L 85 115 L 90 90 L 70 85 L 65 72 L 95 62 Z" />
              {/* South America */}
              <path d="M 245 225 L 275 220 L 320 238 L 360 262 L 350 300 L 325 350 L 305 400 L 285 435 L 272 430 L 280 390 L 270 330 L 255 285 L 235 250 L 245 225 Z" />
              {/* Europe */}
              <path d="M 458 108 L 468 100 L 474 112 L 468 128 L 460 126 Z" />
              <path d="M 470 135 L 510 125 L 550 128 L 575 142 L 560 162 L 525 155 L 505 178 L 485 175 L 460 185 L 455 160 L 470 135 Z" />
              {/* Africa */}
              <path d="M 450 205 L 520 200 L 565 225 L 595 255 L 565 315 L 540 375 L 510 405 L 490 380 L 480 320 L 440 270 L 435 235 L 450 205 Z" />
              {/* Asia */}
              <path d="M 575 125 L 640 85 L 720 70 L 825 80 L 900 110 L 870 145 L 820 155 L 830 185 L 790 220 L 760 255 L 740 230 L 710 200 L 675 255 L 650 240 L 610 220 L 595 180 L 575 160 L 585 135 Z" />
              {/* Australia */}
              <path d="M 810 335 L 870 325 L 905 350 L 900 405 L 865 425 L 815 410 L 795 370 L 810 335 Z" />
            </g>

            {/* Trajectory Arcs */}
            <path className="animate-[dash_28s_linear_infinite]" d="M 165 168 Q 200 135, 248 142" stroke="url(#arc-orange-cyan)" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
            <path className="animate-[dash_18s_linear_infinite_reverse]" d="M 165 168 Q 210 120, 262 155" stroke="url(#arc-orange-cyan)" strokeWidth="2.2" strokeDasharray="4 6" strokeLinecap="round" fill="none" />
            <path className="animate-[dash_28s_linear_infinite]" d="M 262 155 Q 365 55, 468 120" stroke="url(#arc-cyan-violet)" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
            <path className="animate-[dash_28s_linear_infinite]" d="M 506 132 Q 600 165, 688 252" stroke="url(#arc-orange-cyan)" strokeWidth="2.2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
            <path className="animate-[dash_28s_linear_infinite]" d="M 688 252 Q 725 258, 768 282" stroke="url(#arc-cyan-violet)" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
            <path className="animate-[dash_28s_linear_infinite]" d="M 768 282 Q 830 330, 885 395" stroke="url(#arc-orange-cyan)" strokeWidth="2.2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
          </svg>

          {/* 9 Probe Nodes Overlay */}
          {/* San Francisco */}
          <div className="absolute" style={{ left: "16.5%", top: "33.6%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3.5 rounded-full bg-orange-500/30 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 border-2 border-[#06080d] shadow-lg shadow-orange-500/80" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-orange-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SF • 11ms</span>
            </div>
          </div>

          {/* Toronto */}
          <div className="absolute" style={{ left: "24.8%", top: "28.4%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-2.5 rounded-full bg-cyan-400/25 animate-ping" />
            <div className="relative w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#06080d] shadow-md shadow-cyan-400/70" />
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-white/10 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Toronto • 9ms</span>
            </div>
          </div>

          {/* New York */}
          <div className="absolute" style={{ left: "26.2%", top: "31.0%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3.5 rounded-full bg-orange-500/35 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 border-2 border-[#06080d] shadow-lg shadow-orange-500/90" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-orange-400 font-semibold whitespace-nowrap bg-[#06080d]/95 px-2 py-0.5 rounded-md border border-orange-500/40 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>New York • 8ms</span>
            </div>
          </div>

          {/* London */}
          <div className="absolute" style={{ left: "46.8%", top: "24.0%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3 rounded-full bg-cyan-400/30 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 border-2 border-[#06080d] shadow-lg shadow-cyan-400/80" />
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-white/10 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>London • 12ms</span>
            </div>
          </div>

          {/* Amsterdam */}
          <div className="absolute" style={{ left: "49.0%", top: "23.6%", transform: "translate(-50%, -50%)" }}>
            <div className="relative w-2.5 h-2.5 rounded-full bg-amber-400 border border-[#06080d] shadow-sm" />
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-400 whitespace-nowrap bg-[#06080d]/90 px-1.5 py-0.5 rounded border border-white/5">
              AMS • 10ms
            </div>
          </div>

          {/* Frankfurt */}
          <div className="absolute" style={{ left: "50.6%", top: "26.4%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-2.5 rounded-full bg-orange-500/25 animate-ping" />
            <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-indigo-500 border-2 border-[#06080d] shadow-md shadow-orange-500/70" />
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-white/10 shadow-md">
              Frankfurt • 13ms
            </div>
          </div>

          {/* Bangalore */}
          <div className="absolute" style={{ left: "68.8%", top: "50.4%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3.5 rounded-full bg-orange-500/35 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 border-2 border-[#06080d] shadow-lg shadow-orange-500/80" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-orange-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Bangalore • 19ms</span>
            </div>
          </div>

          {/* Singapore */}
          <div className="absolute" style={{ left: "76.8%", top: "56.4%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3 rounded-full bg-cyan-400/30 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 border-2 border-[#06080d] shadow-lg shadow-cyan-400/80" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-white/10 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Singapore • 15ms</span>
            </div>
          </div>

          {/* Sydney */}
          <div className="absolute" style={{ left: "88.5%", top: "79.0%", transform: "translate(-50%, -50%)" }}>
            <span className="absolute -inset-3.5 rounded-full bg-orange-500/35 animate-ping" />
            <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 border-2 border-[#06080d] shadow-lg shadow-orange-500/80" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-[#06080d]/90 px-2 py-0.5 rounded-md border border-orange-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Sydney • 22ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Live Status Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md hover:border-orange-500/50 transition-colors cursor-pointer group shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-300">
                <strong className="text-white font-semibold">9 regions online</strong> <span className="text-zinc-500 mx-1">•</span> checks every 10 seconds
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
          >
            <span className="text-white block mb-1">Uptime monitoring that</span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              knows before your users do.
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed mb-10 drop-shadow-md"
          >
            10-second checks across New York, Toronto, San Francisco, London, Amsterdam, Frankfurt, Bangalore, Singapore, and Sydney. Break free from blind spots.
          </motion.p>

          {/* URL Input CTA Form */}
          <motion.div variants={fadeInUp} className="w-full max-w-xl mb-8">
            <form onSubmit={handleSubmit} className="p-1.5 rounded-2xl bg-[#090d16]/85 border border-white/20 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/30 transition-all flex flex-col sm:flex-row gap-2 shadow-2xl backdrop-blur-2xl">
              <div className="relative flex-1 flex items-center pl-3">
                <Globe className="w-5 h-5 text-zinc-400 mr-2 shrink-0" />
                <input
                  type="url"
                  required
                  placeholder="https://your-website.com"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full bg-transparent border-0 text-white placeholder-zinc-500 focus:ring-0 focus:outline-none text-sm sm:text-base font-mono py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-indigo-600 hover:from-orange-400 hover:to-indigo-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>{loading ? "Checking 9 probes..." : submitted ? "✓ Monitored! 9/9 Active" : "Start monitoring free"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Trust Row */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-300 font-medium mb-12">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              50 monitors free forever
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              No credit card required
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Setup in 30 seconds
            </span>
          </motion.div>
        </motion.div>

        {/* VectorWordmark Canvas Component */}
        <div className="relative my-8 z-0">
          <VectorWordmark text="MONITER" />
        </div>

        {/* Stats Strip below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-8 rounded-3xl dark:bg-white/[0.04] bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {/* Cell 1 */}
          <div className="flex flex-col items-center text-center p-2">
            <Zap className="w-5 h-5 text-orange-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              <CountUp end={10} suffix=" s" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Fastest check interval</p>
          </div>

          {/* Cell 2 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <Globe className="w-5 h-5 text-indigo-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              <CountUp end={9} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Monitoring regions</p>
          </div>

          {/* Cell 3 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <Server className="w-5 h-5 text-purple-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <CountUp end={8} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Monitor types</p>
          </div>

          {/* Cell 4 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <BellRing className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              <CountUp end={10} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Alert channels</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
