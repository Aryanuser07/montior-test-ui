export interface MonitorItem {
  id: string;
  name: string;
  type: string;
  url: string;
  status: "up" | "down" | "degraded";
  responseTimeMs: number | null;
  uptimePercentage: number;
  segments: ("green" | "red" | "yellow")[];
  interval: string;
  lastChecked: string;
}

export const DASHBOARD_STATS = {
  totalMonitors: 5,
  upCount: 4,
  downCount: 1,
  avgResponseTimeMs: 180,
};

export const MOCK_MONITORS: MonitorItem[] = [
  {
    id: "mon-1",
    name: "api.acme.com",
    type: "HTTP/S",
    url: "https://api.acme.com/v1/health",
    status: "up",
    responseTimeMs: 142,
    uptimePercentage: 100.0,
    segments: Array(30).fill("green"),
    interval: "10s",
    lastChecked: "Just now",
  },
  {
    id: "mon-2",
    name: "acme.com",
    type: "Website",
    url: "https://acme.com",
    status: "up",
    responseTimeMs: 88,
    uptimePercentage: 99.998,
    segments: Array(30).fill("green").map((s, idx) => (idx === 14 ? "yellow" : "green")),
    interval: "10s",
    lastChecked: "2s ago",
  },
  {
    id: "mon-3",
    name: "Checkout (keyword)",
    type: "Keyword",
    url: "https://acme.com/checkout",
    status: "up",
    responseTimeMs: 311,
    uptimePercentage: 99.991,
    segments: Array(30).fill("green").map((s, idx) => (idx === 22 ? "yellow" : "green")),
    interval: "30s",
    lastChecked: "5s ago",
  },
  {
    id: "mon-4",
    name: "Nightly backup (heartbeat)",
    type: "Heartbeat",
    url: "cron://acme-db-backup",
    status: "up",
    responseTimeMs: null,
    uptimePercentage: 100.0,
    segments: Array(30).fill("green"),
    interval: "24h",
    lastChecked: "4h ago",
  },
  {
    id: "mon-5",
    name: "legacy.acme.com",
    type: "Ping (ICMP)",
    url: "https://legacy.acme.com",
    status: "down",
    responseTimeMs: 0,
    uptimePercentage: 97.213,
    segments: Array(30).fill("green").map((s, idx) => (idx >= 25 ? "red" : "green")),
    interval: "10s",
    lastChecked: "3s ago",
  },
];
