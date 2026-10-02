"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Globe, ArrowRight, CheckCircle2, Shield, Zap, Server, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { StatusDot } from "@/components/ui/status-dot";
import { ParticleDrift } from "@/components/ui/particle-drift";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// Dynamically import VectorWordmark with fallback
const VectorWordmark = dynamic(
  () => import("@/components/hero/vector-wordmark").then((mod) => mod.VectorWordmark),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 md:h-64 flex items-center justify-center border border-white/5 rounded-3xl bg-slate-900/20">
        <span className="text-4xl md:text-7xl font-black text-indigo-500/20 tracking-widest">
          UPTIME
        </span>
      </div>
    ),
  }
);

export function HeroSection() {
  const [urlInput, setUrlInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput) {
      setSubmitted(true);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden dark:bg-[#070a14] bg-slate-50 transition-colors duration-300">
      
      {/* WebGL ParticleDrift background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <ParticleDrift
          background="transparent"
          baseColor="#6366f1"
          accentColor="#38bdf8"
          density={120}
          dotSize={3.5}
          speed={22}
          hover={150}
          linkDistance={110}
        />
      </div>

      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Pill Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full dark:bg-white/[0.06] bg-slate-200/80 border dark:border-white/10 border-slate-300/80 shadow-inner backdrop-blur-md">
              <StatusDot status="live" size="sm" />
              <span className="text-xs sm:text-sm font-medium dark:text-slate-200 text-slate-700">
                9 regions online <span className="dark:text-slate-500 text-slate-400">·</span> checks every 10 seconds
              </span>
            </div>
          </motion.div>

          {/* Real SEO H1 Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight dark:text-white text-slate-900 leading-[1.1] mb-6"
          >
            Uptime monitoring that{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              knows before your users do.
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-xl dark:text-slate-300 text-slate-600 max-w-3xl leading-relaxed mb-8"
          >
            10-second checks for websites, APIs and servers from 9 regions on 4 continents. Multi-region confirmation, instant alerts via Slack, PagerDuty and email, and status pages on your own domain.
          </motion.p>

          {/* URL Input CTA Form */}
          <motion.div variants={fadeInUp} className="w-full max-w-xl mb-6">
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl dark:bg-white/[0.07] bg-white border dark:border-white/15 border-slate-200 backdrop-blur-xl shadow-2xl dark:shadow-black/60 shadow-slate-200">
              <div className="flex items-center gap-3 px-4 py-2.5 w-full">
                <Globe className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                <input
                  type="url"
                  required
                  placeholder="https://your-website.com"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full bg-transparent dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 text-sm focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto shrink-0 px-7 py-3.5 text-sm font-semibold whitespace-nowrap"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {submitted ? "Monitor Created!" : "Start monitoring free"}
              </Button>
            </form>
          </motion.div>

          {/* Trust Row */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm dark:text-slate-400 text-slate-600 mb-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              50 monitors free forever
            </span>
            <span className="hidden sm:inline dark:text-slate-600 text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No credit card required
            </span>
            <span className="hidden sm:inline dark:text-slate-600 text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Set up in 30 seconds
            </span>
          </motion.div>

          {/* Feature Chips */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
            {["Fastest detection", "Global coverage", "Native integrations"].map((chip) => (
              <span key={chip} className="px-3.5 py-1.5 rounded-lg dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200 dark:text-indigo-300 text-indigo-700 text-xs font-semibold">
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* VectorWordmark Canvas Component */}
        <div className="relative my-8 z-0">
          <VectorWordmark text="MONITER" />
        </div>

        {/* Stats Strip below (4 cells in one rounded container with dividers) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-8 rounded-3xl dark:bg-white/[0.04] bg-white border dark:border-white/10 border-slate-200 shadow-xl dark:shadow-none backdrop-blur-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x dark:divide-white/10 divide-slate-200"
        >
          {/* Cell 1 */}
          <div className="flex flex-col items-center text-center p-2">
            <Zap className="w-5 h-5 text-blue-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              <CountUp end={10} suffix=" s" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Fastest check interval</p>
          </div>

          {/* Cell 2 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <Globe className="w-5 h-5 text-indigo-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              <CountUp end={9} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Monitoring regions</p>
          </div>

          {/* Cell 3 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <Server className="w-5 h-5 text-violet-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              <CountUp end={8} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Monitor types</p>
          </div>

          {/* Cell 4 */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <BellRing className="w-5 h-5 text-sky-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <CountUp end={10} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Alert channels</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
