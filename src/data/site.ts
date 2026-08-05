/**
 * site.ts — global site configuration.
 *
 * This is the one file to edit for identity, links, and SEO.
 * Everything else (components, structured data, meta tags) reads from here.
 */

export const site = {
  name: "Naman Goyal",
  /** Short role line used under the name and in the browser tab. */
  role: "Electrical Engineering, IIT Delhi \u00B7 Dept. Rank 1 \u00B7 CGPA 9.22",

  /** Current position. Facts, stated plainly — no tagline. */
  status: "Incoming Software Engineering Intern \u00B7 Virtu Financial \u00B7 Summer 2027",

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
    title: "Naman Goyal — IIT Delhi | Quantum Computing & Low-Latency Systems",
    description:
      "Naman Goyal — Electrical Engineering at IIT Delhi, Dept Rank 1. Researching the quantum complexity of minimum weight cycles and triangles; hardware security at CISPA; low-latency C++ and FPGA systems.",
    /** 1200×630 image used for link previews on social / chat apps. */
    ogImage: "/og-image.png",
    /** Helps search engines and rich results understand who you are. */
    keywords: [
      "Naman Goyal",
      "Naman Goyal IIT Delhi",
      "IIT Delhi",
      "Electrical Engineering",
      "Virtu Financial",
      "software engineer",
      "quantum computing research",
      "low latency C++",
      "high frequency trading systems",
      "tick to trade",
      "FPGA",
      "SystemVerilog",
      "hardware security",
      "RISC-V",
      "CISPA",
      "quantum computing",
      "quantum algorithms",
      "quantum complexity",
      "fine-grained complexity",
      "minimum weight cycle",
      "graph algorithms",
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
