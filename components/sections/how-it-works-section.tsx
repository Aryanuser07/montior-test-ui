"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Sliders, BellRing, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Add your URL or Endpoint",
    description: "Paste your website address, HTTP/S API endpoint, TCP port, or ping address. Setup takes under 30 seconds.",
    icon: Globe,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    number: "02",
    title: "Configure Regions & SLA",
    description: "Select from 9 global monitoring regions. Customize check frequency down to 10 seconds and set SLA thresholds.",
    icon: Sliders,
    accent: "from-indigo-500 to-violet-600",
  },
  {
    number: "03",
    title: "Get Alerted Before Users Notice",
    description: "Receive multi-region verified alerts via Slack, PagerDuty, SMS or Webhooks instantly when an endpoint drops.",
    icon: BellRing,
    accent: "from-violet-500 to-purple-600",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 dark:bg-[#070a14] bg-slate-50 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="WORKFLOW"
          title="Up and running in"
          gradientTitle="30 seconds."
          subtitle="Simple 3-step configuration designed for developers and DevOps teams."
        />

        {/* 3 Step Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <GlassCard key={step.number} className="flex flex-col justify-between p-8 relative group dark:bg-slate-900/80 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.accent} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t dark:border-white/5 border-slate-200 flex items-center gap-2 text-xs font-semibold text-indigo-500 dark:text-indigo-400">
                  <span>Step {step.number} Complete</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </GlassCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
