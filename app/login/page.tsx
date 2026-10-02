"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Activity, ArrowRight, KeyRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_NAME } from "@/lib/brand";

import { Navbar } from "@/components/layout/navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Magic login link sent to ${email}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white flex flex-col items-center justify-center p-4 relative overflow-hidden pt-24 transition-colors duration-300">
      <Navbar />
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-md relative z-10 py-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Activity className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Moniter<span className="text-blue-500 dark:text-blue-400">MySite</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sign in to your uptime dashboard workspace</p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
          <button
            onClick={() => alert("SSO initiated")}
            className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white font-medium text-sm flex items-center justify-center gap-3 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors"
          >
            <KeyRound className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            Continue with Single Sign-On (SSO)
          </button>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 dark:border-white/10 w-full" />
            <span className="bg-white dark:bg-[#090d1a] px-3 text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest relative z-10">
              OR EMAIL
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Work Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Work Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full justify-center" icon={<ArrowRight className="w-4 h-4" />}>
              Send Magic Sign-In Link
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/#hero" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            Create free account (50 monitors included)
          </Link>
        </p>
      </div>
    </main>
  );
}
