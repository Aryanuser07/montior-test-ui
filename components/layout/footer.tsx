"use client";

import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, Heart } from "lucide-react";
import { BRAND_NAME } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#050811] text-slate-600 dark:text-slate-400 py-16 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand info */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Moniter<span className="text-blue-500 dark:text-blue-400">MySite</span>
            </span>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            Multi-region uptime monitoring that detects failures in under 10 seconds before they impact your end users or SLA commitments.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All 9 global probe regions operational
          </div>
        </div>

        {/* Product links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Product</h3>
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#global-network" className="hover:text-slate-900 dark:hover:text-white transition-colors">Global Probes</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
          <Link href="/status" className="hover:text-slate-900 dark:hover:text-white transition-colors">Status Pages</Link>
          <a href="#monitors" className="hover:text-slate-900 dark:hover:text-white transition-colors">Monitor Types</a>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Resources</h3>
          <Link href="/docs" className="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</Link>
          <Link href="/docs#api" className="hover:text-slate-900 dark:hover:text-white transition-colors">API Reference</Link>
          <a href="#integrations" className="hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</a>
          <Link href="/status" className="hover:text-slate-900 dark:hover:text-white transition-colors">System Health</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Company & Legal</h3>
          <Link href="/login" className="hover:text-slate-900 dark:hover:text-white transition-colors">Customer Portal</Link>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security Statement</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} {BRAND_NAME} Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with precision for engineering teams worldwide.
        </p>
      </div>
    </footer>
  );
}
