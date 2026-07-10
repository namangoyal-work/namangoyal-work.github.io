/**
 * projects.ts — everything shown on the Projects page (and the home page's
 * "Selected work" section).
 *
 * To add a project: copy one object below and edit it.
 * - category controls which group it appears under on /projects/.
 * - featured: true also shows it in "Selected work" on the home page.
 * - links are optional; omit them and no link renders.
 */

export type Category = "systems" | "hardware" | "quantum" | "ml";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: Category;
  featured?: boolean;
  blurb: string;
  tags: string[];
  context: string; // e.g. "Independent · Jul 2025" or "Course · Prof. X"
  links?: ProjectLink[];
}

/** Human-readable label for each category (used as group headings). */
export const categoryLabels: Record<Category, string> = {
  systems: "Systems & Performance",
  hardware: "Hardware",
  quantum: "Quantum",
  ml: "Machine Learning & Research",
};

/** Group order on the Projects page. */
export const categoryOrder: Category[] = ["systems", "hardware", "quantum", "ml"];

export const projects: Project[] = [
  {
    title: "FPGA Tick-to-Trade Pipeline",
    category: "systems",
    featured: true,
    blurb:
      "A deterministic tick-to-trade engine implemented entirely in FPGA fabric — hardware-level protocol decoding, deterministic order encoding, and fail-closed fault handling with real-time heartbeat monitoring.",
    tags: ["SystemVerilog", "FPGA", "Formal Verification", "Low-latency"],
    context: "Independent · 2026",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/fpga-tick-to-trade" }],
  },
  {
    title: "Wire-Speed FPGA Network Parser",
    category: "hardware",
    featured: true,
    blurb:
      "A wire-speed MAC/IP/UDP header parser with a fixed-latency Level-1 trigger, written in SystemVerilog. Formally verified with SymbiYosys and adversarially tested with a cocotb + scapy bench that fires malformed and edge-case packets through the pipeline.",
    tags: ["SystemVerilog", "FPGA", "Formal Verification", "cocotb"],
    context: "Independent · 2026",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/fpga-net-parser" }],
  },
  {
    title: "KAN-PINN Battery State-of-Health",
    category: "ml",
    featured: true,
    blurb:
      "A hybrid Kolmogorov–Arnold / physics-informed neural network for lithium-ion battery SOH estimation, embedding the Verhulst degradation model as a physics constraint and trained with a custom augmented-Lagrangian framework for stability.",
    tags: ["PyTorch", "KAN", "PINN", "Physics-ML"],
    context: "Independent · 2025",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/KAN-PINN-Battery-SOH" }],
  },
  {
    title: "Low-Latency C++ Execution Engine",
    category: "systems",
    blurb:
      "A trading-style execution pipeline engineered for nanoseconds: zero-allocation architecture, lock-free SPSC ring buffers, SIMD prefetching, cache-locality tuning, and a hardware-aware scheduler with CPU core pinning and explicit memory ordering.",
    tags: ["C++", "Lock-free", "SIMD", "Low-latency"],
    context: "Independent · 2025",
  },
  {
    title: "Solovay–Kitaev Unitary Decomposer",
    category: "quantum",
    featured: true,
    blurb:
      "A clean, high-performance implementation of the Solovay–Kitaev algorithm: recursive decomposition of SU(2) unitaries into a discrete gate set at O(log^2.71(1/ε)) complexity, with a precomputed base-case table and vectorized nearest-neighbor search.",
    tags: ["Python", "Numerical", "Quantum Compilers"],
    context: "Independent · 2026",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/unitary-decomposer" }],
  },
  {
    title: "QicQacQoe — Quantum Tic-Tac-Toe",
    category: "quantum",
    blurb:
      "A 13-qubit quantum game simulator supporting configurable states and concurrent gates (Hadamard, CNOT, measurement), with continuous quantum-state analysis to evaluate win conditions across superposition and entanglement.",
    tags: ["Python", "Qiskit", "Quantum"],
    context: "Course · Prof. Rajendra Kumar · 2026",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/QicQacQoe" }],
  },
  {
    title: "Automated Retinal Segmentation",
    category: "ml",
    blurb:
      "A U-Net pipeline for SD-OCT retinal layer segmentation with GPU acceleration and sub-pixel accuracy, improved through data augmentation and post-processing.",
    tags: ["Python", "U-Net", "Computer Vision"],
    context: "Research · 2025",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/Automated-Retinal-Segmentation" }],
  },
  {
    title: "UserRating — NLP Sentiment",
    category: "ml",
    blurb:
      "An NLP system that predicts user ratings from free-text feedback: tokenization, feature extraction, and sentiment analysis, tuned with hyperparameter search and cross-validation.",
    tags: ["Python", "NLP", "ML"],
    context: "Independent · 2025",
    links: [{ label: "GitHub", href: "https://github.com/namangoyal-work/UserRating" }],
  },
];

/** Projects shown on the home page ("Selected work"). */
export const featuredProjects = projects.filter((p) => p.featured);
