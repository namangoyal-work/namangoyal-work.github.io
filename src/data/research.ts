/**
 * research.ts — the Research section: a flagship entry + lighter activities.
 */

export interface Research {
  title: string;
  org: string;
  role: string;
  period: string;
  status?: string;
  summary: string;
  points: string[];
  tags: string[];
}

export const research: Research = {
  title: "Hardware Supply-Chain Security of Open-Source CPU & GPU Cores",
  org: "CISPA Helmholtz Center for Information Security · Trusted Systems Group",
  role: "Research Intern",
  period: "May – Jul 2026",
  status: "Publication in progress",
  summary:
    "A large-scale measurement study of how secure open-source hardware really is. I forensically graded 131 open-source RISC-V CPU and GPU cores against their security claims — reading RTL, testbenches, and commit history rather than trusting the README.",
  points: [
    "Designed a 13-dimensional, 50-attribute taxonomy spanning reproducibility, verification, and CI/CD resilience.",
    "Built a reproducible Python analysis pipeline producing 40+ figures for the final study.",
    "Found 95% of repositories shipped with no side-channel defenses and 77% lacked secure boot.",
    "Co-authoring a publication based on the findings.",
  ],
  tags: ["RISC-V", "Hardware Security", "RTL Analysis", "Side-Channels", "Python"],
};

export interface Activity {
  role: string;
  org: string;
  note: string;
}

export const activities: Activity[] = [
  {
    role: "Research Executive",
    org: "ARIES — IIT Delhi's AI Society",
    note: "Contributing to technical and research projects in machine learning.",
  },
  {
    role: "Academic Mentor — Calculus (MTL100)",
    org: "IIT Delhi",
    note: "Guiding first-year students through single- and multivariable calculus.",
  },
];
