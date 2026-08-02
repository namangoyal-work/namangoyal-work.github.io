/**
 * experience.ts — roles, newest first. Used on the CV page and the home page.
 *
 * Write the `points` as results, not duties. If a line could appear on any
 * intern's CV, cut it.
 */

export interface Role {
  org: string;
  title: string;
  period: string;
  location?: string;
  /** Marks a role that hasn't started yet — rendered as "incoming". */
  upcoming?: boolean;
  points: string[];
}

export const experience: Role[] = [
  {
    org: "Virtu Financial",
    title: "Quantitative Software Engineering Intern",
    period: "Summer 2027",
    upcoming: true,
    points: [],
  },
  {
    org: "CISPA Helmholtz Center for Information Security",
    title: "Research Intern — Trusted Systems Group",
    period: "May – Jul 2026",
    location: "Saarbrücken, Germany",
    points: [
      "Forensically graded 131 open-source RISC-V CPU and GPU cores against their stated security claims, reading RTL, testbenches and commit history rather than READMEs.",
      "Designed a 13-dimensional, 50-attribute taxonomy covering reproducibility, verification and CI/CD resilience.",
      "Built a reproducible Python analysis pipeline producing 40+ figures for the study.",
      "Co-authoring a publication on the findings.",
    ],
  },
  {
    org: "ARIES — IIT Delhi's AI Society",
    title: "Research Executive",
    period: "2025 – present",
    points: ["Technical and research projects in machine learning."],
  },
  {
    org: "IIT Delhi",
    title: "Academic Mentor — Calculus (MTL100)",
    period: "2025 – present",
    points: ["Mentoring first-year students through single- and multivariable calculus."],
  },
];
