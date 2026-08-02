/**
 * research.ts — research entries, newest first.
 *
 * This is the page that matters most: internships and research are what the
 * people you want to work for actually read. Keep entries factual and
 * specific; never state a finding you can't point to.
 */

export interface ResearchEntry {
  title: string;
  org: string;
  role: string;
  period: string;
  status?: string;
  summary: string;
  points: string[];
  tags: string[];
}

export const researchEntries: ResearchEntry[] = [
  {
    title: "Quantum Computing",
    org: "IIT Delhi",
    role: "Undergraduate Researcher",
    period: "2026 – present",
    status: "Ongoing",
    summary:
      "My current research direction is quantum computing — algorithms, simulation, and the software layer between the two. Details of the active project will be posted here as the work develops.",
    points: [],
    tags: ["Quantum Computing", "Algorithms", "Simulation"],
  },
  {
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
  },
];
