export interface MonitorTypeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Globe" | "FileText" | "Activity" | "Server" | "Database" | "ShieldCheck" | "Clock" | "Zap";
  colorGradient: string; // Tailwind gradient classes
  glowColor: string; // Hex color for hover shadow/border
  accentColor: string;
}

export const MONITOR_TYPES: MonitorTypeItem[] = [
  {
    id: "http",
    title: "Website & API",
    subtitle: "HTTP / HTTPS",
    description: "Validate HTTP status codes, headers, response payloads, authentication schemes, and edge redirects every 10 seconds.",
    iconName: "Globe",
    colorGradient: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    accentColor: "#3b82f6",
  },
  {
    id: "keyword",
    title: "Keyword",
    subtitle: "DOM Search",
    description: "Check if essential HTML text or string payloads are present or missing on dynamic rendered landing pages.",
    iconName: "FileText",
    colorGradient: "from-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.4)",
    accentColor: "#a855f7",
  },
  {
    id: "ping",
    title: "Ping",
    subtitle: "ICMP Protocol",
    description: "Monitor bare-metal server reachability, latency packet loss, and network routing stability at lower OSI layers.",
    iconName: "Activity",
    colorGradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    accentColor: "#10b981",
  },
  {
    id: "port",
    title: "Port",
    subtitle: "TCP Network",
    description: "Ensure mail servers, database ports, FTP nodes, and custom TCP daemons are accepting incoming connections.",
    iconName: "Server",
    colorGradient: "from-orange-500 to-amber-600",
    glowColor: "rgba(249, 115, 22, 0.4)",
    accentColor: "#f97316",
  },
  {
    id: "dns",
    title: "DNS Record",
    subtitle: "Domain Resolution",
    description: "Verify A, AAAA, CNAME, MX, and TXT records resolve to expected IPs from all global geographical vantage points.",
    iconName: "Database",
    colorGradient: "from-sky-400 to-blue-600",
    glowColor: "rgba(56, 189, 248, 0.4)",
    accentColor: "#38bdf8",
  },
  {
    id: "ssl",
    title: "SSL Certificate",
    subtitle: "TLS Security",
    description: "Get early warning alerts 30, 14, and 7 days before SSL certificates expire, plus instant alerts for chain breaks.",
    iconName: "ShieldCheck",
    colorGradient: "from-red-500 to-rose-600",
    glowColor: "rgba(239, 68, 68, 0.4)",
    accentColor: "#ef4444",
  },
  {
    id: "heartbeat",
    title: "Heartbeat / Cron",
    subtitle: "Push Monitoring",
    description: "Receive push pings from background workers, backup jobs, and scheduled cron tasks. Alert if execution misses schedule.",
    iconName: "Clock",
    colorGradient: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    accentColor: "#6366f1",
  },
  {
    id: "response-time",
    title: "Response Time",
    subtitle: "Performance SLA",
    description: "Trigger alerts whenever TTFB (Time to First Byte) or DNS resolution degrades past configured SLA thresholds.",
    iconName: "Zap",
    colorGradient: "from-teal-400 to-cyan-600",
    glowColor: "rgba(20, 184, 166, 0.4)",
    accentColor: "#14b8a6",
  },
];
