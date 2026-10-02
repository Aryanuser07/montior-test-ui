"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS, type PricingTier } from "@/lib/data/pricing";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="relative py-28 dark:bg-[#050811] bg-slate-100 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="TRANSPARENT PRICING"
          title="Predictable plans for"
          gradientTitle="projects of all sizes."
          subtitle="Start with 50 monitors free forever. Upgrade anytime as your infrastructure expands."
        />

        {/* Monthly / Yearly Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${billingCycle === "monthly" ? "dark:text-white text-slate-900 font-bold" : "dark:text-slate-400 text-slate-500"}`}>
            Monthly Billing
          </span>

          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="w-14 h-8 rounded-full dark:bg-white/10 bg-slate-200 border dark:border-white/15 border-slate-300 p-1 relative transition-colors focus:outline-none"
            aria-label="Toggle billing cycle"
          >
            <motion.div
              animate={{ x: billingCycle === "yearly" ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"
            />
          </button>

          <span className={`text-sm font-medium flex items-center gap-2 ${billingCycle === "yearly" ? "dark:text-white text-slate-900 font-bold" : "dark:text-slate-400 text-slate-500"}`}>
            Annual Billing
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              Save 20%
            </span>
          </span>
        </div>

        {/* 3 Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {PRICING_TIERS.map((tier: PricingTier) => {
            const price = billingCycle === "yearly" ? tier.priceYearly : tier.priceMonthly;

            return (
              <GlassCard
                key={tier.id}
                className={`flex flex-col justify-between p-8 relative ${
                  tier.popular
                    ? "border-indigo-500/60 bg-white dark:bg-slate-900/90 dark:bg-gradient-to-b dark:from-indigo-950/80 dark:to-slate-900/90 ring-2 ring-indigo-500 shadow-2xl shadow-indigo-500/20 scale-[1.02]"
                    : "bg-white dark:bg-slate-900/60"
                }`}
              >
                <div>
                  {tier.badge && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">{tier.description}</p>

                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900">${price}</span>
                    <span className="dark:text-slate-400 text-slate-500 text-sm font-medium">/ month</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm dark:text-slate-300 text-slate-700">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={tier.ctaHref} className="w-full">
                  <Button
                    variant={tier.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {tier.ctaText}
                  </Button>
                </Link>
              </GlassCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
