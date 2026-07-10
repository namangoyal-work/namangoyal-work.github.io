/**
 * achievements.ts — grouped, human-readable accomplishments, split by phase
 * (University vs Pre-University).
 *
 * Written for people to read, not for an ATS. Each `detail` says what the
 * program/olympiad actually *is*, so a reader who's never heard of it still
 * understands why it's hard. `badge` is the short label on the left.
 *
 * Structure: each phase (University / Pre-University) holds one or more groups,
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
          {
            badge: "Bronze",
            title: "AMS Derive Prosterior",
            detail:
              "Top 3 among more than 150 participants selected to write the second round of the competition involving programming and math problems based on quant finance. Invited to attend finals at IIT Bombay."
          },
        ],
      },
      {
        heading: "Selective Programs",
        items: [
          {
            badge: "SEE",
            title: "Jane Street SEE — Quantitative Trading Track",
            detail:
              "Selected for Jane Street's SEE program (Quantitative Trading track, Hong Kong, Dec 2025) — an invite-based program on mathematical and financial topics including probability, market structure, and arbitrage.",
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
              "The national round of India's Physics Olympiad (run by HBCSE), taken after clearing NSEP. Won a gold medal and finished among the top ~37 in the country, on the path to the camp that selects India's IPhO team.",
          },
          {
            badge: "Gold",
            title: "Indian National Astronomy Olympiad (INAO)",
            detail:
              "HBCSE's national astronomy round. Gold medal and a top ~29 finish nationally, on the selection pathway for the International Olympiad on Astronomy & Astrophysics (IOAA).",
          },
          {
            badge: "Platinum",
            title: "Competitive Programming — USACO & COCI",
            detail:
              "Reached the Platinum division — the highest — of the USA Computing Olympiad, promoting with a perfect 1000/1000 (Rank 1) contest, and placed Rank 1 in a round of the Croatian Open Competition in Informatics (COCI).",
          },
          {
            badge: "AIR 1",
            title: "Technothlon — International School Championship",
            detail:
              "IIT Guwahati's international school championship (Techniche), testing logic and applied problem-solving. All India Rank 1 in the Juniors squad (2021), with a Gold certificate.",
          },
          {
            badge: "Awardee",
            title: "Indian National Mathematical Olympiad (INMO)",
            detail:
              "The proof-based stage after IOQM that feeds India's IMO team selection. Declared an INMO Awardee (2022) by HBCSE/NBHM and invited to the International Mathematical Olympiad training camp.",
          },
          {
            badge: "Top 36",
            title: "Indian National Junior Science Olympiad (INJSO)",
            detail:
              "The national round of India's Junior Science Olympiad (IAPT/HBCSE). Finished in the top 36 in the country (2021), earning a Certificate of Merit and eligibility for the camp that selects India's International Junior Science Olympiad team. Reached the national round as one of 310 shortlisted from 10,013 candidates in NSEJS.",
          },
          {
            badge: "Distinction",
            title: "British Mathematical Olympiad — Round 2",
            detail:
              "The UK's premier school mathematics olympiad (UK Maths Trust, supported by Jane Street). Qualified from Round 1 into the invitation-only Round 2 and earned a Certificate of Distinction — best in school.",
          },
          {
            badge: "Top 54",
            title: "Indian National Chemistry Olympiad (INChO)",
            detail:
              "India's national Chemistry Olympiad round (HBCSE), reached after placing in the national top 1% of NSEC. Finished in the top 54 in the country (2023), earning a Certificate of Merit and eligibility for the next stage of International Chemistry Olympiad team selection.",
          },
          {
            badge: "2nd",
            title: "NMTC — National Mathematics Talent Contest",
            detail:
              "A rigorous proof-and-problem-solving olympiad run by the Association of Mathematics Teachers of India. Finished 2nd.",
          },
          {
            badge: "138/150",
            title: "AMC 10B — Honor Roll",
            detail:
              "The MAA's American Mathematics Competition (25 problems, 75 minutes), written from India. Scored 138/150, placing on the Honor Roll among the top scorers.",
          },
          {
            badge: "Diploma",
            title: "Sharygin Geometry Olympiad",
            detail:
              "A major international olympiad in classical geometry, run from Russia by the Steklov Mathematical Institute and partners. Awarded a diploma in the correspondence round of the 16th edition.",
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
            badge: "Camp",
            title: "Mathematical Olympiad Orientation Camp (MOOC) — HBCSE",
            detail:
              "An invitational camp run by the Homi Bhabha Centre for Science Education (TIFR) and India's national Mathematical Olympiad coordinators for the country's top young olympiad mathematicians (May 2021).",
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
