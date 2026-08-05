/**
 * news.ts — the "recent" list on the home page.
 *
 * Rules: newest first, keep it to ~6 entries, and delete rather than archive.
 * A stale news list is worse than no news list — it tells a visitor the last
 * thing that happened to you was eighteen months ago.
 *
 * `date` is display text, so "Aug 2026" and "Summer 2027" are both fine.
 */

export interface NewsItem {
  date: string;
  text: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    text: "Joining Virtu Financial as a Software Engineering Intern for Summer 2027.",
  },
  {
    date: "Aug 2026",
    text: "Started research on the quantum complexity of minimum weight cycles and triangles.",
    href: "/research",
  },
  {
    date: "Jul 2026",
    text: "Wrapped up a research internship at CISPA Helmholtz Center on the hardware supply-chain security of open-source RISC-V cores. Publication in progress.",
    href: "/research",
  },
  {
    date: "2026",
    text: "Won the CISPA European AI & Cybersecurity Hackathon.",
    href: "/achievements",
  },
  {
    date: "2026",
    text: "Released a formally verified tick-to-trade engine and a wire-speed packet parser, both in SystemVerilog.",
    href: "/projects",
  },
];
