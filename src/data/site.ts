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
    "Electrical Engineering at IIT Delhi, currently a research intern at CISPA working on hardware security. I like low-latency C++, quantum computing, and turning hard problems into clean code.",

  email: "namangoyal@tutamail.com",
  location: "New Delhi, India",
  resume: "/Naman_Goyal_Resume.pdf",

  socials: {
    github: "https://github.com/namangoyal-work",
    linkedin: "https://www.linkedin.com/in/namangoyalo",
  },

  /** SEO. `title` is the <title>; description is the search snippet. */
  seo: {
    title: "Naman Goyal — Systems, Hardware Security & Quant",
    description:
      "Naman Goyal — Electrical Engineering at IIT Delhi and research intern at CISPA. I build low-latency C++ systems, quantum simulators, ML models, and FPGA hardware. Open to quant and research internships.",
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
      "quantitative developer",
      "quant",
      "quantum computing",
      "machine learning",
      "FPGA",
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
