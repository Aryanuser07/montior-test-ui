# MoniterMySite — High-End Uptime Monitoring Marketing Site

A dark, art-directed marketing site built for **MoniterMySite**, an enterprise-grade uptime monitoring SaaS.

## 🚀 Tech Stack
- **Framework**: Next.js 14+ (App Router, Turbopack, TypeScript)
- **Styling**: Tailwind CSS v4, custom glassmorphism design system
- **Smooth Scroll**: `lenis` (`SmoothScrollProvider` in root layout)
- **DOM Motion**: `framer-motion` (shared ease curves & duration scale in `lib/motion.ts`)
- **Interactive 3D Globe**: `cobe` (WebGL 3D dotted globe with region markers & live outage simulation)
- **Hero Centerpiece**: Custom `VectorWordmark` pointer-reactive canvas wordmark with vector construction lines and drifting coordinates
- **Timeline Choreography**: `@theatre/core` with JSON state in `lib/theatre-state.json`
- **Iconography**: `lucide-react`

---

## 🛠️ How to Run

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📁 Key Configuration & Customization Points

| Feature / Data | Location | Notes |
| :--- | :--- | :--- |
| **Brand Name & Domain** | [`lib/brand.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/brand.ts) | Single constant `BRAND_NAME = "MoniterMySite"` |
| **Monitoring Regions** | [`lib/data/regions.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/regions.ts) | 9 global probe locations (New York, Toronto, SF, London, Amsterdam, Frankfurt, Bangalore, Singapore, Sydney) |
| **Mock Dashboard Data** | [`lib/data/monitors.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/monitors.ts) | Monitor statuses, response times, 30-day uptime bars |
| **Monitor Types** | [`lib/data/monitor-types.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/monitor-types.ts) | 8 monitor type descriptions and gradient icons |
| **Integrations** | [`lib/data/integrations.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/integrations.ts) | Slack, PagerDuty, SMS, Webhooks, etc. |
| **Pricing Tiers** | [`lib/data/pricing.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/pricing.ts) | Free, Pro, Enterprise features & pricing |
| **FAQ Items** | [`lib/data/faq.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/faq.ts) | Accordion questions and answers |
| **Status Page Mock** | [`lib/data/status.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/data/status.ts) | Public status page mock data |
| **Motion Variants** | [`lib/motion.ts`](file:///c:/Users/rawat/OneDrive/Desktop/demoo-t1/lib/motion.ts) | Apple/Linear standard easing `[0.16, 1, 0.3, 1]` |

---

## 🎨 Architectural Trade-offs & Optimizations

1. **WebGL & Motion Budgeting**:
   - WebGL rendering loop in `cobe` and `VectorWordmark` pauses automatically when offscreen using `IntersectionObserver`.
   - Max device pixel ratio (DPR) is capped at 2.0 to protect mobile GPU performance.
   - Degrades gracefully to static CSS gradients / SVG fallbacks under `prefers-reduced-motion` or when WebGL context creation fails.

2. **LCP & SEO Performance**:
   - The primary H1 headline paints immediately as raw HTML for fast LCP and search indexing.
   - Heavy WebGL canvas components are dynamically loaded (`next/dynamic`, `ssr: false`).

3. **Smooth Scroll Integration**:
   - `Lenis` drives smooth scrolling while preserving standard browser scroll events, allowing Framer Motion scroll hooks (`useScroll`, `useTransform`) to work seamlessly.
