/**
 * achievements.ts — grouped, human-readable accomplishments, split by phase
 * (University vs Pre-University).
 *
 * Writing rules (keep these when adding entries):
 *  - Lead with the result; context second. Recruiters scan, they don't read.
 *  - One or two sentences max. Say what the program is only if it's obscure.
 *  - `badge` is the scannable result label on the left — make it carry the
 *    headline number (rank, medal, score) whenever possible.
 *  - Never write anything a background check can't confirm.
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

export interface AchievementPhase {
  phase: string;
  groups: AchievementGroup[];
}

export const achievementPhases: AchievementPhase[] = [
  {
    phase: "University",
    groups: [
      {
        heading: "Awards & Championships",
        items: [
          {
            badge: "Champion",
            title: "CISPA European AI & Cybersecurity Hackathon",
            detail:
              "Won the European hackathon on AI and cybersecurity hosted by CISPA Helmholtz Center, one of the world's leading information-security institutes.",
          },
          {
            badge: "Winner",
            title: "Atlassian FastTrack",
            detail:
              "Won Atlassian's AI-assisted hackathon — shipping working software against the clock with AI-powered tooling.",
          },
          {
            badge: "Bronze",
            title: "AMS Derive Prosterior",
            detail:
              "Top 3 of 150+ selected finalists in a quantitative-finance competition of mathematics and programming; invited to the finals at IIT Bombay.",
          },
        ],
      },
    ],
  },
  {
    phase: "Pre-University",
    groups: [
      {
        heading: "Olympiads & Competitions",
        items: [
          {
            badge: "Gold",
            title: "Indian National Physics Olympiad (INPhO)",
            detail:
              "Gold medal and a top-37 finish nationwide in India's Physics Olympiad (HBCSE) — one stage below the camp that selects India's IPhO team.",
          },
          {
            badge: "Gold",
            title: "Indian National Astronomy Olympiad (INAO)",
            detail:
              "Gold medal and a top-29 finish nationwide, on the selection pathway to the International Olympiad on Astronomy & Astrophysics.",
          },
          {
            badge: "Platinum",
            title: "Competitive Programming — USACO & COCI",
            detail:
              "Reached Platinum, the highest division of the USA Computing Olympiad, promoting with a perfect 1000/1000 (Rank 1) contest; separately placed Rank 1 in a round of Croatia's COCI.",
          },
          {
            badge: "Top 5",
            title: "Technothlon — International School Championship",
            detail:
              "Ranked among top 5 (Juniors) in IIT Guwahati's international championship of logic and applied problem-solving; Gold certificate, 2021.",
          },
          {
            badge: "Awardee",
            title: "Indian National Mathematical Olympiad (INMO)",
            detail:
              "INMO Awardee, 2022 — cleared the proof-based national round that feeds India's IMO team selection, and was invited to the IMO Training Camp.",
          },
          {
            badge: "Top 36",
            title: "Indian National Junior Science Olympiad (INJSO)",
            detail:
              "Top 36 nationwide in 2021, after being shortlisted among 310 of 10,013 NSEJS candidates — eligible for the camp that selects India's IJSO team.",
          },
          {
            badge: "Top 54",
            title: "Indian National Chemistry Olympiad (INChO)",
            detail:
              "Top 54 nationwide in 2023 after a top-1% finish in NSEC — eligible for the next stage of International Chemistry Olympiad team selection.",
          },
          {
            badge: "Distinction",
            title: "British Mathematical Olympiad — Round 2",
            detail:
              "Certificate of Distinction in the invitation-only Round 2 of the UK's premier school mathematics olympiad (UKMT) — best in school, written from India.",
          },
          {
            badge: "138/150",
            title: "AMC 10B — Honor Roll",
            detail:
              "Scored 138/150 on the MAA's American Mathematics Competition, written from India — Honor Roll, among the top scorers worldwide.",
          },
          {
            badge: "2nd",
            title: "NMTC — National Mathematics Talent Contest",
            detail:
              "2nd place in the AMTI's national proof-based mathematics contest.",
          },
          {
            badge: "Diploma",
            title: "Sharygin Geometry Olympiad",
            detail:
              "Diploma in the correspondence round of the 16th edition of the international classical-geometry olympiad run from Russia.",
          },
          {
            badge: "Bronze",
            title: "Panini Linguistics Olympiad",
            detail:
              "Bronze medal in Round 2 of India's linguistics olympiad — reconstructing the grammar of unfamiliar languages from a handful of examples.",
          },
          {
            badge: "R2",
            title: "Dr. Homi Bhabha Balvaidnyanik Competition",
            detail:
              "Cleared the written stage of this multi-stage science competition (written, practical, and interview rounds) and was invited to Round 2.",
          },
        ],
      },
      {
        heading: "Fellowships, Programs & Honors",
        items: [
          {
            badge: "Fellow",
            title: "Atlas Fellowship",
            detail:
              "Selected for one of the world's most competitive student fellowships (single-digit-percent acceptance) — a scholarship plus a summer program in the San Francisco Bay Area.",
          },
          {
            badge: "ESPR",
            title: "European Summer Program on Rationality",
            detail:
              "Selected for the highly competitive residential program for mathematically gifted teenagers, covering rationality, cognitive science, mathematics, and computer science.",
          },
          {
            badge: "Camp",
            title: "Mathematical Olympiad Orientation Camp — HBCSE",
            detail:
              "Invited to the national camp run by the Homi Bhabha Centre for Science Education (TIFR) and India's Mathematical Olympiad coordinators, May 2021.",
          },
          {
            badge: "Distinction",
            title: "AP Scholar with Distinction",
            detail:
              "The College Board's highest AP Scholar tier — an average of 3.5+ across all AP exams with scores of 3+ on five or more.",
          },
          {
            badge: "Finalist",
            title: "STEMS — Chennai Mathematical Institute",
            detail:
              "Finalist in Mathematics with a Certificate of Excellence in CMI's Scholastic Test of Excellence in Mathematical Sciences.",
          },
          {
            badge: "Top 15",
            title: "LIMIT — Indian Statistical Institute, Bangalore",
            detail:
              "Top 15 in Category A of ISI Bangalore's international online mathematics competition.",
          },
          {
            badge: "Scholar",
            title: "Mukhyamantri Vigyan Protsahan Pariksha",
            detail:
              "Selected as a scholar in the Government of Delhi's science-talent examination.",
          },
        ],
      },
    ],
  },
];
