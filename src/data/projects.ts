/**
 * projects.ts — selected work only.
 *
 * Deliberately short. This page lists the handful of projects worth a
 * recruiter's attention; everything else lives on GitHub and is linked once
 * at the bottom of the page. A long list dilutes the good entries — if you
 * wouldn't defend it in an interview, it doesn't belong here.
 */

export interface Project {
  title: string;
  /** One line, shown next to the title. */
  kind: string;
  year: string;
  blurb: string;
  tags: string[];
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "FPGA Tick-to-Trade Pipeline",
    kind: "Independent",
    year: "2026",
    blurb:
      "An ultra-low-latency trading system implemented entirely in FPGA fabric for wire-speed execution: hardware protocol decoding, deterministic order encoding, and fault tolerance with real-time heartbeat monitoring and corruption handling.",
    tags: ["SystemVerilog", "FPGA", "Formal verification", "Low latency"],
    repo: "https://github.com/namangoyal-work/fpga-tick-to-trade",
  },
  {
    title: "Low-Latency C++ Execution Engine",
    kind: "Independent",
    year: "2025",
    blurb:
      "A trading-style execution pipeline engineered for nanoseconds: zero-allocation architecture, lock-free SPSC ring buffers, SIMD prefetching, cache-locality tuning, and a hardware-aware scheduler with core pinning and explicit memory ordering.",
    tags: ["C++", "Lock-free", "SIMD", "Low latency"],
  },
  {
    title: "Wire-Speed FPGA Network Parser",
    kind: "Independent",
    year: "2026",
    blurb:
      "A wire-speed MAC/IP/UDP header parser with a fixed-latency Level-1 trigger. Formally verified with SymbiYosys and adversarially tested with a cocotb + scapy bench that fires malformed and edge-case packets through the pipeline.",
    tags: ["SystemVerilog", "FPGA", "SymbiYosys", "cocotb"],
    repo: "https://github.com/namangoyal-work/fpga-net-parser",
  },
  {
    title: "Solovay–Kitaev Unitary Decomposer",
    kind: "Independent",
    year: "2026",
    blurb:
      "Recursive decomposition of SU(2) unitaries into a discrete gate set at O(log^2.71(1/ε)) complexity, with a precomputed base-case table and vectorised nearest-neighbour search.",
    tags: ["Python", "Quantum compilers", "Numerical"],
    repo: "https://github.com/namangoyal-work/unitary-decomposer",
  },
  {
    title: "KAN-PINN Battery State-of-Health",
    kind: "Independent",
    year: "2025",
    blurb:
      "A hybrid Kolmogorov–Arnold / physics-informed neural network for lithium-ion battery SOH estimation, embedding the Verhulst degradation model as a physics constraint and trained with a custom augmented-Lagrangian framework.",
    tags: ["PyTorch", "KAN", "PINN", "Physics-ML"],
    repo: "https://github.com/namangoyal-work/KAN-PINN-Battery-SOH",
  },
];
