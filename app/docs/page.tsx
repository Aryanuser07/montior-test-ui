import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { BRAND_NAME } from "@/lib/brand";
import { BookOpen, Terminal, Code, Cpu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: `Documentation & API — ${BRAND_NAME}`,
  description: "Learn how to configure monitors, integrate webhooks, and query the REST API.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#070a14] text-slate-900 dark:text-white pt-24 pb-20 transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          eyebrow="DOCUMENTATION"
          title="Developer Guide &"
          gradientTitle="API Reference."
          subtitle="Everything you need to programmatically manage monitors, configure heartbeat pings, and handle webhooks."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <GlassCard className="p-6 flex flex-col justify-between">
            <div>
              <BookOpen className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Getting Started</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed mb-4">
                Learn the core concepts of multi-region consensus, SLA calculation, and probe routing logic.
              </p>
            </div>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Read Guide →</span>
          </GlassCard>

          <GlassCard id="api" className="p-6 flex flex-col justify-between">
            <div>
              <Terminal className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">REST API v1</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed mb-4">
                Create, inspect, and delete monitors via curl or REST SDKs with bearer token authentication.
              </p>
            </div>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">View Endpoints →</span>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col justify-between">
            <div>
              <Code className="w-8 h-8 text-violet-500 dark:text-violet-400 mb-4" />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Webhooks & SDKs</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed mb-4">
                HMAC signed webhook payloads and official client libraries for Node.js, Go, Python, and Rust.
              </p>
            </div>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Explore Webhooks →</span>
          </GlassCard>
        </div>

        {/* Example Code Block */}
        <div className="mt-12 rounded-3xl dark:bg-[#090d1a] bg-slate-900 border dark:border-white/10 border-slate-800 p-6 sm:p-8 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-slate-400">
            <span>cURL Example — Create 10s HTTP Monitor</span>
            <span>HTTP 201 Created</span>
          </div>

          <pre className="text-emerald-400 overflow-x-auto p-4 rounded-xl bg-black/60">
{`curl -X POST https://api.monitermysite.com/v1/monitors \\
  -H "Authorization: Bearer mms_live_9f82a1..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production REST API",
    "url": "https://api.acme.com/v1/health",
    "type": "http",
    "interval": 10,
    "regions": ["us-east", "eu-west", "ap-south"]
  }'`}
          </pre>
        </div>
      </div>

      <Footer />
    </main>
  );
}
