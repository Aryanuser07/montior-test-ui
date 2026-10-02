import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Uptime Monitoring That Knows Before Your Users Do`,
  description:
    "10-second multi-region uptime checks for websites, APIs and servers from 9 regions on 4 continents. Multi-region consensus, instant Slack/PagerDuty alerts, and custom status pages.",
  keywords: [
    "uptime monitoring",
    "website monitoring",
    "api monitoring",
    "status page",
    "cron monitoring",
    "pagerduty integration",
    "slack alerts",
    "multi-region checking",
  ],
  authors: [{ name: BRAND_NAME }],
  openGraph: {
    title: `${BRAND_NAME} — High Performance Uptime Monitoring`,
    description: "Multi-region uptime checks in under 10 seconds. Free 50 monitors forever.",
    type: "website",
    url: "https://monitermysite.com",
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_TAGLINE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND_NAME,
    operatingSystem: "All",
    applicationCategory: "DeveloperApplication",
    description: BRAND_TAGLINE,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 dark:bg-[#070a14] text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
