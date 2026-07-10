/**
 * site.ts — global site configuration.
 *
 * This is the one file to edit for identity, links, and site-wide SEO.
 * Per-page titles/descriptions live in each file under src/pages/.
 */

export const site = {
  name: "Naman Goyal",
  /** Short role line used under the name and in the browser tab. */
  role: "Electrical Engineering @ IIT Delhi",

  /** One-line positioning statement shown under the name on the home page. */
  headline: "I build fast, correct systems — and research the hardware they run on.",

  email: "namangoyal@tutamail.com",
  location: "New Delhi, India",
  resume: "/Naman_Goyal_Resume.pdf",

  socials: {
    github: "https://github.com/namangoyal-work",
    linkedin: "https://www.linkedin.com/in/namangoyalo",
  },

  /**
   * Top-level pages, in nav order. Each page under src/pages/ should have a
   * matching entry here so the nav and footer stay in sync automatically.
   */
  nav: [
    { href: "/", label: "About" },
    { href: "/research/", label: "Research" },
    { href: "/projects/", label: "Projects" },
    { href: "/achievements/", label: "Honors" },
  ],

  /** Site-wide SEO defaults. Pages override title/description individually. */
  seo: {
    title: "Naman Goyal — Systems, Hardware Security & Quant",
    description:
      "Naman Goyal — Electrical Engineering at IIT Delhi (Dept Rank 1) and hardware-security research intern at CISPA. Builds low-latency C++ and FPGA systems, quantum simulators, and ML models.",
    /** 1200×630 image used for link previews on social / chat apps. */
    ogImage: "/og-image.png",
    /** Helps search engines and rich results understand who you are. */
    keywords: [
      "Naman Goyal",
      "IIT Delhi",
      "Electrical Engineering",
      "CISPA",
      "hardware security",
      "low latency C++",
      "FPGA",
      "quantitative developer",
      "quant",
      "quantum computing",
      "machine learning",
    ],
  },

  /**
   * Google Search Console verification token.
   * Get it at https://search.google.com/search-console → add a "URL prefix"
   * property → "HTML tag" method → paste only the content="..." value here.
   * Leave "" until you have it; the meta tag is then simply omitted.
   */
  verification: {
    google: "",
  },
} as const;

export type Site = typeof site;
