/**
 * about.ts — bio, education, skills. Shown on the home page.
 */

/** Each string is one paragraph. Keep it to two or three. */
export const aboutParagraphs: string[] = [
  "I'm a third-year Electrical Engineering student at IIT Delhi, ranked first in my department. I'm drawn to problems that sit between disciplines — where a clean algorithm, a tight C++ implementation, and real silicon all have to agree.",
  "Right now that means hardware-security research at CISPA Helmholtz Center, alongside systems I build to sharpen my craft: FPGA trading and network pipelines, low-latency C++, and quantum computing tools. My background is competitive mathematics and science, and I apply it to real software and hardware engineering.",
];

export interface Education {
  org: string;
  detail: string;
  meta: string;
  /** Optional academic honors line shown under the meta. */
  honors?: string;
}

export const education: Education[] = [
  {
    org: "IIT Delhi",
    detail: "B.Tech, Electrical Engineering",
    meta: "2024 – 2028 · CGPA 9.22 · Dept Rank #1",
    honors: "Institute Merit Award — top 7% of the institute (semesters 1 & 3)",
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

/** Life outside the lab — shown as chips in the About section. */
export const interests: string[] = [
  "Grade 8 guitarist",
  "Formula 1",
  "Football",
];
