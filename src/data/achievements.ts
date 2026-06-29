/**
 * achievements.ts — grouped, human-readable accomplishments.
 *
 * Written for people to read, not for an ATS. Each `detail` says what the
 * program/olympiad actually *is*, so a reader who's never heard of it still
 * understands why it's hard. `badge` is the short label on the left.
 */

export interface Achievement {
  badge: string;
  title: string;
  detail: string;
}

export interface AchievementGroup {
  heading: string;
  items: Achievement[];
}

export const achievementGroups: AchievementGroup[] = [
  {
    heading: "Olympiads & Competitions",
    items: [
      {
        badge: "Gold",
        title: "Indian National Physics Olympiad (INPhO)",
        detail:
          "The national round of India's Physics Olympiad (run by HBCSE), taken after clearing NSEP. Won a gold medal and finished among the top ~37 in the country, on the path to the camp that selects India's IPhO team.",
      },
      {
        badge: "Gold",
        title: "Indian National Astronomy Olympiad (INAO)",
        detail:
          "HBCSE's national astronomy round. Gold medal and a top ~29 finish nationally, on the selection pathway for the International Olympiad on Astronomy & Astrophysics (IOAA).",
      },
      {
        badge: "Gold",
        title: "Competitive Programming — USACO & COCI",
        detail:
          "Reached the Gold division of the USA Computing Olympiad (advanced graph algorithms, DP, and greedy problems), and placed Rank 1 in a round of the Croatian Open Competition in Informatics (COCI).",
      },
      {
        badge: "INMO",
        title: "Indian National Mathematical Olympiad",
        detail:
          "The proof-based stage after IOQM that feeds India's IMO team selection. Qualified and was invited to the International Mathematical Olympiad training camp.",
      },
      {
        badge: "2nd",
        title: "NMTC — National Mathematics Talent Contest",
        detail:
          "A rigorous proof-and-problem-solving olympiad run by the Association of Mathematics Teachers of India. Finished 2nd.",
      },
      {
        badge: "Honor",
        title: "AMC 10B — Honor Roll",
        detail:
          "The MAA's American Mathematics Competition (25 problems, 75 minutes). Scored on the Honor Roll, among the top scorers nationally.",
      },
      {
        badge: "INJSO",
        title: "Indian National Junior Science Olympiad",
        detail:
          "HBCSE's national junior-science round (after NSEJS) — the stage that selects India's team for the International Junior Science Olympiad. Qualified as one of the top junior-science students in the country.",
      },
      {
        badge: "Bronze",
        title: "Panini Linguistics Olympiad",
        detail:
          "India's national linguistics olympiad: you reconstruct the grammar of unfamiliar languages from a few examples using pure logic. Bronze medal in Round 2.",
      },
    ],
  },
  {
    heading: "Scholarships & Honors",
    items: [
      {
        badge: "#1",
        title: "Department Rank 1 — IIT Delhi",
        detail: "First among Electrical Engineering (Power & Automation) students across consecutive semesters.",
      },
      {
        badge: "Top 7%",
        title: "Semester Merit Award",
        detail: "Cash scholarship for finishing in the top 7% of the institute (semesters 1 & 3).",
      },
      {
        badge: "ESPR",
        title: "European Summer Program on Rationality",
        detail:
          "A free, highly selective residential program in Europe for mathematically gifted teenagers, covering rationality, cognitive science, mathematics, computer science, and decision-making. Selected to attend.",
      },
      {
        badge: "MVPP",
        title: "Mukhyamantri Vigyan Protsahan Pariksha",
        detail:
          "A science-talent scholarship examination conducted by the Government of Delhi to identify and support promising young students in the sciences. Selected as a scholar.",
      },
    ],
  },
];
