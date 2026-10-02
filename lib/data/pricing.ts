export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceMonthly: number;
  priceYearly: number; // per month when billed annually
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free Forever",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Ideal for side projects, personal sites, and open source developers.",
    features: [
      "50 monitors free forever",
      "10-second check intervals",
      "3 monitoring regions",
      "HTTP, HTTPS & Ping monitors",
      "Email & Slack alerts",
      "1 public status page",
      "24-hour log retention",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/login?plan=free",
  },
  {
    id: "pro",
    name: "Pro Developer",
    badge: "Most Popular",
    popular: true,
    priceMonthly: 29,
    priceYearly: 24,
    description: "Built for scaling SaaS products, high-traffic APIs, and active dev teams.",
    features: [
      "250 monitors included",
      "10-second check intervals",
      "All 9 global regions",
      "All 8 monitor types (SSL, Cron, DNS)",
      "Unlimited SMS, PagerDuty & Webhooks",
      "5 custom domain status pages",
      "30-day log & latency analytics",
      "Multi-user team workspace",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/login?plan=pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 99,
    priceYearly: 79,
    description: "Mission-critical infrastructure monitoring with dedicated SLAs & support.",
    features: [
      "1,000+ custom monitors",
      "5-second check intervals",
      "Custom private probe deployment",
      "Advanced anomaly detection AI",
      "SAML / SSO & RBAC permissions",
      "Unlimited custom status pages",
      "1-year raw log retention",
      "Dedicated Slack channel & 99.99% SLA",
    ],
    ctaText: "Contact Sales",
    ctaHref: "/login?plan=enterprise",
  },
];
