export interface Integration {
  id: string;
  name: string;
  category: "chat" | "incident" | "communication" | "automation";
  color: string;
  iconSvg?: string;
  description: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "slack",
    name: "Slack",
    category: "chat",
    color: "#E01E5A",
    description: "Instant channel alerts with rich JSON attachments and one-click resolution buttons.",
  },
  {
    id: "pagerduty",
    name: "PagerDuty",
    category: "incident",
    color: "#06AC38",
    description: "Trigger on-call escalations automatically upon multi-region failure verification.",
  },
  {
    id: "email",
    name: "Email (SMTP/SES)",
    category: "communication",
    color: "#3B82F6",
    description: "Detailed email notifications complete with MTR traceroute logs and response bodies.",
  },
  {
    id: "sms",
    name: "SMS & Phone Call",
    category: "communication",
    color: "#F59E0B",
    description: "High-priority emergency SMS pings and automated voice calls for critical outages.",
  },
  {
    id: "discord",
    name: "Discord",
    category: "chat",
    color: "#5865F2",
    description: "Webhook alerts directly to developer community or ops channels.",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "chat",
    color: "#6264A7",
    description: "Adaptive Cards integration for enterprise incident channels.",
  },
  {
    id: "webhooks",
    name: "Custom Webhooks",
    category: "automation",
    color: "#10B981",
    description: "Signed HMAC payloads to initiate auto-remediation scripts or cloud functions.",
  },
  {
    id: "telegram",
    name: "Telegram Bot",
    category: "chat",
    color: "#229ED9",
    description: "Real-time bot alerts with instant status query commands.",
  },
  {
    id: "opsgenie",
    name: "Opsgenie",
    category: "incident",
    color: "#2582FF",
    description: "Atlassian incident management synchronization and alert routing.",
  },
  {
    id: "zapier",
    name: "Zapier & Make",
    category: "automation",
    color: "#FF4A00",
    description: "Connect downtime events to 5,000+ app workflows.",
  },
];
