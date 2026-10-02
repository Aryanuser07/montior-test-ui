import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { GlobeSection } from "@/components/sections/globe-section";
import { DashboardSection } from "@/components/sections/dashboard-section";
import { MonitorTypesSection } from "@/components/sections/monitor-types-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { StatusPagesSection } from "@/components/sections/status-pages-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqCtaSection } from "@/components/sections/faq-cta-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#070a14] text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <GlobeSection />
      <DashboardSection />
      <MonitorTypesSection />
      <IntegrationsSection />
      <StatusPagesSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqCtaSection />
      <Footer />
    </main>
  );
}
