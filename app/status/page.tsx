import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StatusPagesSection } from "@/components/sections/status-pages-section";
import { BRAND_NAME } from "@/lib/brand";

export const metadata = {
  title: `Global Status — ${BRAND_NAME}`,
  description: "Live system status for all MoniterMySite probe nodes and core services.",
};

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#070a14] text-slate-900 dark:text-white pt-16 transition-colors duration-300">
      <Navbar />
      <div className="pt-12">
        <StatusPagesSection />
      </div>
      <Footer />
    </main>
  );
}
