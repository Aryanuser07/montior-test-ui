export interface Region {
  id: string;
  name: string;
  city: string;
  countryCode: string;
  lat: number;
  lng: number;
  status: "healthy" | "degraded" | "down";
  latencyMs: number;
  flagUrl: string;
}

export const REGIONS: Region[] = [
  {
    id: "us-east",
    name: "US East",
    city: "New York",
    countryCode: "US",
    lat: 40.7128,
    lng: -74.006,
    status: "healthy",
    latencyMs: 12,
    flagUrl: "https://flagcdn.com/us.svg",
  },
  {
    id: "ca-central",
    name: "North America",
    city: "Toronto",
    countryCode: "CA",
    lat: 43.6532,
    lng: -79.3832,
    status: "healthy",
    latencyMs: 18,
    flagUrl: "https://flagcdn.com/ca.svg",
  },
  {
    id: "us-west",
    name: "US West",
    city: "San Francisco",
    countryCode: "US",
    lat: 37.7749,
    lng: -122.4194,
    status: "healthy",
    latencyMs: 34,
    flagUrl: "https://flagcdn.com/us.svg",
  },
  {
    id: "eu-west",
    name: "Europe West",
    city: "London",
    countryCode: "GB",
    lat: 51.5074,
    lng: -0.1278,
    status: "healthy",
    latencyMs: 78,
    flagUrl: "https://flagcdn.com/gb.svg",
  },
  {
    id: "eu-central-1",
    name: "Europe Central",
    city: "Amsterdam",
    countryCode: "NL",
    lat: 52.3676,
    lng: 4.9041,
    status: "healthy",
    latencyMs: 82,
    flagUrl: "https://flagcdn.com/nl.svg",
  },
  {
    id: "eu-central-2",
    name: "Europe Central",
    city: "Frankfurt",
    countryCode: "DE",
    lat: 50.1109,
    lng: 8.6821,
    status: "healthy",
    latencyMs: 86,
    flagUrl: "https://flagcdn.com/de.svg",
  },
  {
    id: "ap-south",
    name: "Asia South",
    city: "Bangalore",
    countryCode: "IN",
    lat: 12.9716,
    lng: 77.5946,
    status: "healthy",
    latencyMs: 142,
    flagUrl: "https://flagcdn.com/in.svg",
  },
  {
    id: "ap-southeast",
    name: "Asia East",
    city: "Singapore",
    countryCode: "SG",
    lat: 1.3521,
    lng: 103.8198,
    status: "healthy",
    latencyMs: 165,
    flagUrl: "https://flagcdn.com/sg.svg",
  },
  {
    id: "ap-southeast-2",
    name: "Oceania",
    city: "Sydney",
    countryCode: "AU",
    lat: -33.8688,
    lng: 151.2093,
    status: "healthy",
    latencyMs: 210,
    flagUrl: "https://flagcdn.com/au.svg",
  },
];
