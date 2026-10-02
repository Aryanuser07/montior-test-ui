import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqCtaSection } from "@/components/sections/faq-cta-section";
import { BRAND_NAME } from "@/lib/brand";

export const metadata = {
  title: `Pricing — ${BRAND_NAME}`,
  description: "Predictable pricing plans for modern infrastructure monitoring.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#070a14] text-slate-900 dark:text-white pt-16 transition-colors duration-300">
      <Navbar />
      <div className="pt-12">
        <PricingSection />
        <FaqCtaSection />
      </div>
      <Footer />
    </main>
  );
}
