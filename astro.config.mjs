// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ─────────────────────────────────────────────────────────────
// The canonical URL of the live site. This is the single source
// of truth for SEO (canonical tags, sitemap, Open Graph, etc.).
//
// • GitHub Pages user site:  https://namangoyal-work.github.io
// • Custom domain (later):   https://your-domain.tld
//   → change SITE below AND put the bare domain in `public/CNAME`.
// ─────────────────────────────────────────────────────────────
const SITE = "https://namangoyal.me";

export default defineConfig({
  site: SITE,
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  // Prefetch internal links on hover for an instant-feel UX.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
