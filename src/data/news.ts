/**
 * news.ts — dated updates shown on the home page, newest first.
 *
 * To add an update: prepend one object. Keep `date` short ("Jul 2026" or
 * just "2026" if you don't want to pin a month). `text` is plain prose;
 * set `href` + `linkText` to turn part of it into a link (the link is
 * appended after the text).
 */

export interface NewsItem {
  date: string;
  text: string;
  href?: string;
  linkText?: string;
}

export const news: NewsItem[] = [
  {
    date: "May 2026",
    text: "Started a research internship at CISPA Helmholtz Center for Information Security (Trusted Systems Group), studying the supply-chain security of open-source RISC-V hardware. A publication based on the study is in progress.",
    href: "/research/",
    linkText: "More",
  },
  {
    date: "2026",
    text: "Won the CISPA European AI & Cybersecurity Hackathon.",
  },
  {
    date: "2026",
    text: "Won Atlassian FastTrack, an AI-assisted rapid software-building hackathon.",
  },
  {
    date: "2026",
    text: "Placed top 3 of 150+ in AMS Derive Prosterior, a quant-finance programming and mathematics competition; invited to the finals at IIT Bombay.",
  },
  {
    date: "2025",
    text: "Ranked #1 in the Electrical Engineering department at IIT Delhi; received the Institute Merit Award (top 7% institute-wide).",
  },
  {
    date: "Jul 2024",
    text: "Began a B.Tech in Electrical Engineering at IIT Delhi.",
  },
];
