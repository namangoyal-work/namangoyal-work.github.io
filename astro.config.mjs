// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

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
  // A stable, memorable URL for the résumé — put THIS on LinkedIn, in email
  // signatures and on applications, never the raw PDF path. The file can be
  // renamed later without breaking a single link you've already sent out.
  redirects: {
    "/resume": "/Naman_Goyal_Resume.pdf",
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
      // Redirect stubs are not content; keep them out of the index.
      filter: (page) => !/\/resume\/?$/.test(page),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
  // Prefetch internal links on hover for an instant-feel UX.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
