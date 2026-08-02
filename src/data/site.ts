/**
 * site.ts — global site configuration.
 *
 * This is the one file to edit for identity, links, and SEO.
 * Everything else (components, structured data, meta tags) reads from here.
 */

export const site = {
  name: "Naman Goyal",
  /** Short role line used under the name and in the browser tab. */
  role: "Electrical Engineering @ IIT Delhi",

  /** The single sentence that defines you. Shown large in the hero. */
  headline:
    "I build fast, correct systems — and research the hardware they run on.",

  /** A supporting line for the hero. Keep it concrete, not boastful. */
  subhead:
    "Third-year Electrical Engineering at IIT Delhi, ranked first in my department. Incoming quantitative software engineering intern at Virtu Financial; previously hardware-security research at CISPA. I work on low-latency C++, FPGA design, and quantum computing.",

  email: "namangoyal@tutamail.com",
  location: "New Delhi, India",
  resume: "/Naman_Goyal_Resume.pdf",

  socials: {
    github: "https://github.com/namangoyal-work",
    linkedin: "https://www.linkedin.com/in/namangoyalo",
  },

  /**
   * Extra profile URLs for schema.org `sameAs`.
   *
   * This is the highest-value SEO field on a personal site with a common name:
   * every verified profile you list here is another edge tying the *entity*
   * "Naman Goyal, IIT Delhi" to this domain, which is how Google tells you
   * apart from everyone else with your name. Add Codeforces, Kaggle, ORCID,
   * Google Scholar, Devpost, Stack Overflow — anything you actually own.
   * Only add URLs that resolve and that link back here where possible.
   */
  profiles: [] as string[],

  /** SEO. `title` is the <title>; description is the search snippet. */
  seo: {
    title: "Naman Goyal — IIT Delhi | Low-Latency Systems & Quant",
    description:
      "Naman Goyal — Electrical Engineering at IIT Delhi, Dept Rank 1, incoming quantitative software engineering intern at Virtu Financial. Low-latency C++, FPGA, and hardware-security research.",
    /** 1200×630 image used for link previews on social / chat apps. */
    ogImage: "/og-image.png",
    /** Helps search engines and rich results understand who you are. */
    keywords: [
      "Naman Goyal",
      "Naman Goyal IIT Delhi",
      "IIT Delhi",
      "Electrical Engineering",
      "Virtu Financial",
      "quantitative developer",
      "quant developer",
      "low latency C++",
      "high frequency trading systems",
      "tick to trade",
      "FPGA",
      "SystemVerilog",
      "hardware security",
      "RISC-V",
      "CISPA",
      "quantum computing",
      "competitive programming",
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
    /** Bing Webmaster Tools token (bing.com/webmasters). Optional. */
    bing: "",
  },
} as const;

export type Site = typeof site;
