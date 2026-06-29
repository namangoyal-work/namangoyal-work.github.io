/**
 * projects.ts — everything in the Projects section.
 *
 * To add a project: copy one object below and edit it.
 * - category controls which filter tab it shows under.
 * - featured: true makes the card larger / highlighted.
 * - links are optional; omit a link and its button simply won't render.
 */

export type Category = "systems" | "quantum" | "ml" | "hardware";

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

/** Human-readable label for each category (used by the filter UI). */
export const categoryLabels: Record<Category | "all", string> = {
  all: "All",
  systems: "Systems & Performance",
  quantum: "Quantum",
  ml: "ML & Research",
  hardware: "Hardware",
};

export const projects: Project[] = [
  {
    title: "Low-Latency C++ Execution Engine",
    category: "systems",
    featured: true,
    blurb:
      "A trading-style execution pipeline engineered for nanoseconds: zero-allocation architecture, lock-free SPSC ring buffers, SIMD prefetching, cache-locality tuning, and a hardware-aware scheduler with CPU core pinning and explicit memory ordering.",
    tags: ["C++", "Lock-free", "SIMD", "Low-latency"],
    context: "Independent · 2025",
  },
  {
    title: "KAN-PINN Battery State-of-Health",
    category: "ml",
    featured: true,
    blurb:
      "A hybrid Kolmogorov–Arnold / physics-informed neural network for lithium-ion battery SOH estimation, embedding the Verhulst degradation model as a physics constraint and trained with a custom augmented-Lagrangian framework for stability.",
    tags: ["PyTorch", "KAN", "PINN", "Physics-ML"],
    context: "Independent · 2025",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/KAN-PINN-Battery-SOH" }],
  },
  {
    title: "Solovay–Kitaev Unitary Decomposer",
    category: "quantum",
    featured: true,
    blurb:
      "A clean, high-performance implementation of the Solovay–Kitaev algorithm: recursive decomposition of SU(2) unitaries into a discrete gate set at O(log^2.71(1/ε)) complexity, with a precomputed base-case table and vectorized nearest-neighbor search.",
    tags: ["Python", "Numerical", "Quantum Compilers"],
    context: "Independent · 2026",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/unitary-decomposer" }],
  },
  {
    title: "QicQacQoe — Quantum Tic-Tac-Toe",
    category: "quantum",
    blurb:
      "A 13-qubit quantum game simulator supporting configurable states and concurrent gates (Hadamard, CNOT, measurement), with continuous quantum-state analysis to evaluate win conditions across superposition and entanglement.",
    tags: ["Python", "Qiskit", "Quantum"],
    context: "Course · Prof. Rajendra Kumar · 2026",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/QicQacQoe" }],
  },
  {
    title: "Time-Travelling File System",
    category: "systems",
    blurb:
      "A Git-inspired version control system in C++ built on custom Heap and HashMap structures, with pointer-based memory management for snapshotting and full history tracking, achieving O(log n) state rollbacks and revision traversals.",
    tags: ["C++", "Data Structures", "VCS"],
    context: "Course · Prof. Rohit Vaish · 2025",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/TimeTravellingFileSystem" }],
  },
  {
    title: "SocialNet — Network Backend",
    category: "systems",
    blurb:
      "A C++ social-network backend built on custom AVL trees and graph structures, with pointer-based node management handling user interactions, post mapping, and network traversal.",
    tags: ["C++", "AVL Trees", "Graphs"],
    context: "Course · Prof. Rajendra Kumar · 2025",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/SocialNet" }],
  },
  {
    title: "Automated Retinal Segmentation",
    category: "ml",
    blurb:
      "A U-Net pipeline for SD-OCT retinal layer segmentation with GPU acceleration and sub-pixel accuracy, improved through data augmentation and post-processing.",
    tags: ["Python", "U-Net", "Computer Vision"],
    context: "Research · 2025",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/Automated-Retinal-Segmentation" }],
  },
  {
    title: "UserRating — NLP Sentiment",
    category: "ml",
    blurb:
      "An NLP system that predicts user ratings from free-text feedback: tokenization, feature extraction, and sentiment analysis, tuned with hyperparameter search and cross-validation.",
    tags: ["Python", "NLP", "ML"],
    context: "Independent · 2025",
    links: [{ label: "Code", href: "https://github.com/namangoyal-work/UserRating" }],
  },
  {
    title: "4-bit Gray Code Counter (FPGA)",
    category: "hardware",
    blurb:
      "A 4-bit Gray-code counter on a Nexys Artix-7 FPGA in Verilog, designed for minimal bit transitions across all states, with SR flip-flop input logic optimized via Karnaugh maps for efficient resource usage.",
    tags: ["Verilog", "FPGA", "Vivado", "Digital Logic"],
    context: "Course · Prof. Manan Suri · 2025",
  },
];
