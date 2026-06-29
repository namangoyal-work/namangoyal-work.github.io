/**
 * about.ts — the About section: short narrative, education, skills.
 */

/** Each string is one paragraph. Keep it to two or three. */
export const aboutParagraphs: string[] = [
  "I'm a second-year Electrical Engineering student at IIT Delhi, ranked first in my department. I'm drawn to problems that sit between disciplines — where a clean algorithm, a tight C++ implementation, and real silicon all have to agree.",
  "Right now that means hardware-security research at CISPA, alongside systems I build for rigor and fun: a low-latency C++ execution engine, quantum simulators, and FPGA designs. My background is competitive math and science, and I'm channeling it into real software and hardware engineering.",
];

export interface Education {
  org: string;
  detail: string;
  meta: string;
}

export const education: Education[] = [
  {
    org: "IIT Delhi",
    detail: "B.Tech, Electrical Engineering (Power & Automation)",
    meta: "2024 – 2028 · CGPA 9.22 · Dept Rank #1",
  },
  {
    org: "M.M. Public School",
    detail: "CBSE Class XII",
    meta: "2024 · 92.6%",
  },
  {
    org: "N.C. Jindal Public School",
    detail: "CBSE Class X",
    meta: "2022 · 97.2%",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C++", "Python", "C", "JavaScript", "Verilog", "MATLAB"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow", "Qiskit", "React", "Flask", "NumPy", "pandas", "scikit-learn"],
  },
  {
    label: "Tools & Hardware",
    items: ["Git", "Docker", "Vivado", "Neovim", "Nexys Artix-7", "Autodesk Inventor"],
  },
];

/** Short, scannable focus areas shown as chips in the hero/about. */
export const focusAreas: string[] = [
  "Hardware Security",
  "Low-Latency Systems",
  "Quantum Computing",
  "Machine Learning",
  "FPGA / Verilog",
  "Algorithms",
];
