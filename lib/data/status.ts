export interface StatusComponent {
  name: string;
  group: string;
  status: "operational" | "degraded" | "outage";
  uptime90d: number;
}

export interface IncidentLog {
  id: string;
  title: string;
  status: "resolved" | "monitoring" | "investigating";
  date: string;
  duration: string;
  description: string;
  impactedServices: string[];
}

export const STATUS_PAGE_MOCK = {
  domain: "status.acme-corp.com",
  companyName: "Acme Cloud Infrastructure",
  overallStatus: "operational" as const,
  uptime30d: 99.994,
  components: [
    { name: "US-East REST API Gateway", group: "Core Services", status: "operational", uptime90d: 100.0 },
    { name: "EU-West REST API Gateway", group: "Core Services", status: "operational", uptime90d: 99.99 },
    { name: "Auth & Identity SSO (OAuth2)", group: "Security", status: "operational", uptime90d: 100.0 },
    { name: "PostgreSQL Primary Cluster", group: "Database", status: "operational", uptime90d: 99.995 },
    { name: "Webhooks Dispatch Engine", group: "Background Workers", status: "operational", uptime90d: 99.98 },
  ] as StatusComponent[],
  incidents: [
    {
      id: "inc-1",
      title: "Transient latency spike on EU-West edge nodes",
      status: "resolved",
      date: "Oct 1, 2026",
      duration: "4m 20s",
      description: "Automated failover successfully rerouted traffic via Frankfurt probe nodes following upstream carrier congestion in London.",
      impactedServices: ["EU-West REST API Gateway"],
    },
  ] as IncidentLog[],
};
