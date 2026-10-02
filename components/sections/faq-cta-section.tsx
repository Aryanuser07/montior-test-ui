"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/data/faq";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function FaqCtaSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [ctaUrl, setCtaUrl] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaUrl) setCtaSubmitted(true);
  };

  return (
    <section className="relative py-28 dark:bg-[#070a14] bg-slate-50 overflow-hidden border-t dark:border-white/5 border-slate-200 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-indigo-600/15 via-blue-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto mb-28">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything you need to know"
            gradientTitle="about MoniterMySite."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <GlassCard key={faq.id} className="p-0 overflow-hidden dark:border-white/10 border-slate-200 hover:border-slate-300 dark:hover:border-white/20 dark:bg-slate-900/80 bg-white">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg dark:text-white text-slate-900 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 p-1 rounded-full dark:bg-white/5 bg-slate-100"
                    >
                      <ChevronDown className="w-5 h-5 dark:text-slate-400 text-slate-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 text-sm dark:text-slate-300 text-slate-600 leading-relaxed border-t dark:border-white/5 border-slate-200 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>

        {/* Final CTA Band */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 dark:bg-gradient-to-r dark:from-blue-900/40 dark:via-indigo-900/50 dark:to-violet-900/40 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 border dark:border-indigo-500/30 border-indigo-600 backdrop-blur-2xl shadow-2xl overflow-hidden text-center flex flex-col items-center text-white"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/30 blur-[100px] pointer-events-none rounded-full" />

          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
            Get Started Free
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Never let a server outage stay invisible again.
          </h2>

          <p className="text-base sm:text-lg text-slate-100 max-w-xl mb-8 leading-relaxed">
            Join thousands of engineering teams who rely on MoniterMySite for 10-second multi-region uptime checks.
          </p>

          <form onSubmit={handleCtaSubmit} className="w-full max-w-lg relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 px-4 py-2.5 w-full">
              <Globe className="w-5 h-5 text-white shrink-0" />
              <input
                type="url"
                required
                placeholder="https://your-website.com"
                value={ctaUrl}
                onChange={(e) => setCtaUrl(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-200 text-sm focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto shrink-0 px-7 py-3.5 text-sm font-semibold whitespace-nowrap bg-white text-slate-900 hover:bg-slate-100 border-none shadow-lg"
              icon={<ArrowRight className="w-4 h-4 text-slate-900" />}
            >
              {ctaSubmitted ? "Monitor Created!" : "Start monitoring free"}
            </Button>
          </form>

          <p className="text-xs text-slate-200 mt-4 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            50 monitors free forever · No credit card required
          </p>
        </motion.div>

      </div>
    </section>
  );
}
