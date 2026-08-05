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
  /** Papers the work builds on, or outputs once they exist. */
  links?: { label: string; href: string }[];
}

export const researchEntries: ResearchEntry[] = [
  {
    title: "Quantum Complexity of Minimum Weight Cycles and Triangles",
    org: "IIT Delhi",
    role: "Undergraduate Researcher",
    period: "2026 – present",
    status: "In progress",
    summary:
      "Roditty and Vassilevska Williams showed that finding a minimum weight cycle in a weighted graph reduces to finding a minimum weight triangle — a classical equivalence that settled a question of Itai and Rodeh. Our goal is to understand what these problems cost on a quantum computer: which parts of that reduction survive, and what the true quantum complexity of minimum weight cycle and minimum weight triangle actually is.",
    points: [
      "Working through the classical cycle-to-triangle reduction and identifying which steps carry over to the quantum setting.",
      "Surveying what existing quantum approaches to triangle finding — Grover search and quantum walk methods — give on the weighted versions of the problem.",
      "Asking whether the classical separation between minimum weight cycle and all-pairs shortest paths has a quantum analogue.",
    ],
    tags: ["Quantum algorithms", "Fine-grained complexity", "Graph algorithms", "Quantum walks"],
    links: [
      {
        label: "Roditty & Vassilevska Williams — Minimum Weight Cycles and Triangles (arXiv:1104.2882)",
        href: "https://arxiv.org/abs/1104.2882",
      },
    ],
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
