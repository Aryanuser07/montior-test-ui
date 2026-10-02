export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does MoniterMySite eliminate false positive alert spam?",
    answer: "When a check fails from one location (e.g. New York), MoniterMySite automatically triggers immediate peer confirmation checks from 2 adjacent global regions (e.g. Toronto and Frankfurt). An incident is only declared and alerted when multi-region consensus confirms the failure.",
  },
  {
    id: "faq-2",
    question: "Is the 10-second check interval available on the Free plan?",
    answer: "Yes! Unlike other uptime services that lock fast checks behind $100+ tiers, MoniterMySite provides true 10-second check intervals across 50 monitors on our free plan.",
  },
  {
    id: "faq-3",
    question: "Can I host status pages on my own custom domain?",
    answer: "Absolutely. You can point your custom domain or subdomain (like status.yourcompany.com) via CNAME record. We automatically provision and renew free SSL certificates for all custom domains.",
  },
  {
    id: "faq-4",
    question: "What happens if a cron job / heartbeat fails to check in?",
    answer: "You get a unique Webhook URL for your background job. If your worker fails to ping MoniterMySite within your configured schedule window (plus a customizable grace period), we instantly trigger an alert via your preferred channel.",
  },
  {
    id: "faq-5",
    question: "Can I invite team members and set alert routing escalation?",
    answer: "Yes, Pro and Enterprise plans support multi-user workspaces with role-based permissions (Admin, Member, Viewer) and custom escalation schedules for phone/SMS/PagerDuty alerts.",
  },
];
