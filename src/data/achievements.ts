/**
 * achievements.ts — grouped, human-readable accomplishments, split by phase
 * (University vs High School).
 *
 * Written for people to read, not for an ATS. Each `detail` says what the
 * program/olympiad actually *is*, so a reader who's never heard of it still
 * understands why it's hard. `badge` is the short label on the left.
 *
 * Structure: each phase (University / High School) holds one or more groups,
 * and each group holds the individual achievements.
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
              "Won the championship at CISPA's European hackathon on AI and cybersecurity.",
          },
          {
            badge: "Winner",
            title: "Atlassian FastTrack",
            detail:
              "Won Atlassian's FastTrack, an AI-assisted hackathon — building working software rapidly with AI-powered tooling under a tight deadline.",
          },
        ],
      },
    ],
  },
  {
    phase: "High School",
    groups: [
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
            badge: "Distinction",
            title: "British Mathematical Olympiad — Round 2",
            detail:
              "The UK's premier school mathematics olympiad (UK Maths Trust, supported by Jane Street). Qualified from Round 1 into the invitation-only Round 2 and earned a Certificate of Distinction — best in school.",
          },
          {
            badge: "Top 1%",
            title: "Chemistry Olympiad — NSEC",
            detail:
              "National Standard Examination in Chemistry, the first stage of India's Chemistry Olympiad. Placed in the national top 1%, qualifying for the next round.",
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
            badge: "Diploma",
            title: "Sharygin Geometry Olympiad",
            detail:
              "A major international olympiad in classical geometry, run from Russia by the Steklov Mathematical Institute and partners. Awarded a diploma in the correspondence round of the 16th edition.",
          },
          {
            badge: "Top 3%",
            title: "Indian National Junior Science Olympiad (NSEJS)",
            detail:
              "The national qualifier for India's Junior Science Olympiad, run by HBCSE. Placed among the top 310 of 10,013 candidates nationwide, earning a Certificate of Merit and a shortlist for the next stage.",
          },
          {
            badge: "R2",
            title: "Dr. Homi Bhabha Balvaidnyanik Competition",
            detail:
              "A multi-stage school science competition (written, practical, and interview rounds). Cleared the written stage and was invited to Round 2.",
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
        heading: "Fellowships, Programs & Honors",
        items: [
          {
            badge: "Atlas",
            title: "Atlas Fellowship",
            detail:
              "One of the most selective fellowships for ambitious students worldwide (single-digit-percent acceptance), pairing a scholarship with a summer program in the San Francisco Bay Area.",
          },
          {
            badge: "ESPR",
            title: "European Summer Program on Rationality",
            detail:
              "A free, highly selective residential program in Europe for mathematically gifted teenagers, covering rationality, cognitive science, mathematics, computer science, and decision-making.",
          },
          {
            badge: "Distinction",
            title: "AP Scholar with Distinction",
            detail:
              "The College Board's highest AP Scholar tier — awarded for an average score of at least 3.5 across all AP exams taken, with scores of 3 or higher on five or more exams.",
          },
          {
            badge: "Finalist",
            title: "STEMS — Chennai Mathematical Institute",
            detail:
              "The Scholastic Test of Excellence in Mathematical Sciences, run by the student body of Chennai Mathematical Institute (CMI). Qualified through to the final round in Mathematics and received a Certificate of Excellence.",
          },
          {
            badge: "Top 15",
            title: "LIMIT — Indian Statistical Institute, Bangalore",
            detail:
              "An international online mathematics competition organised by students and scholars of the Indian Statistical Institute (ISI), Bangalore. Ranked within the top 15 in Category A.",
          },
          {
            badge: "Camp",
            title: "Mathematical Olympiad Orientation Camp (MOOC)",
            detail:
              "Took part in HBCSE's (TIFR) national mathematical-olympiad orientation camp — a two-week virtual program of problem-solving in olympiad mathematics.",
          },
          {
            badge: "MVPP",
            title: "Mukhyamantri Vigyan Protsahan Pariksha",
            detail:
              "A science-talent scholarship examination conducted by the Government of Delhi to identify and support promising young students in the sciences. Selected as a scholar.",
          },
        ],
      },
    ],
  },
];
