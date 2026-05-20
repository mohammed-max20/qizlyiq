export type TestOption = {
  text: string;
  points: number;
};

export type TestQuestion = {
  question: string;
  options: TestOption[];
};

export type TestResult = {
  min: number;
  max: number;
  title: string;
  description: string;
};

export type TestData = {
  slug: string;
  title: string;
  description: string;
  questions: TestQuestion[];
  results: TestResult[];
};

export const testsData: TestData[] = [
  {
    slug: "brain-rot-recovery",
    title: "Brain Rot Recovery Test",
    description:
      "Check how much short-form content, distractions, and low-focus habits are affecting your brain.",
    questions: [
      {
        question:
          "How often do you scroll short videos without noticing time passing?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Very often", points: 0 },
        ],
      },
      {
        question:
          "Can you focus on one task for 30 minutes without checking your phone?",
        options: [
          { text: "Yes, easily", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No, it is hard", points: 0 },
        ],
      },
      {
        question:
          "How often do you feel mentally tired even without doing hard work?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Often", points: 0 },
        ],
      },
      {
        question: "Do you read long text or articles without skipping quickly?",
        options: [
          { text: "Yes", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No", points: 0 },
        ],
      },
      {
        question: "How quickly do you get bored when there is no stimulation?",
        options: [
          { text: "Not quickly", points: 2 },
          { text: "Medium", points: 1 },
          { text: "Very quickly", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 3,
        title: "High Brain Rot Risk",
        description:
          "Your focus system is overloaded. Reduce short-form scrolling and rebuild deep attention slowly.",
      },
      {
        min: 4,
        max: 7,
        title: "Moderate Brain Rot",
        description:
          "You still have focus ability, but distractions are affecting your mental performance.",
      },
      {
        min: 8,
        max: 10,
        title: "Healthy Focus",
        description:
          "Your attention habits are strong. Keep protecting your focus and avoid overstimulation.",
      },
    ],
  },
  {
    slug: "brain-games",
    title: "Brain Games Test",
    description:
      "Solve quick mental challenges that test logic, pattern recognition, and thinking speed.",
    questions: [
      {
        question: "What comes next? 2, 4, 8, 16, ?",
        options: [
          { text: "24", points: 0 },
          { text: "32", points: 2 },
          { text: "30", points: 0 },
        ],
      },
      {
        question: "Which word does not belong?",
        options: [
          { text: "Apple", points: 0 },
          { text: "Banana", points: 0 },
          { text: "Car", points: 2 },
        ],
      },
      {
        question:
          "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops Lazzies?",
        options: [
          { text: "Yes", points: 2 },
          { text: "No", points: 0 },
          { text: "Cannot know", points: 0 },
        ],
      },
      {
        question: "What is 15% of 200?",
        options: [
          { text: "15", points: 0 },
          { text: "30", points: 2 },
          { text: "45", points: 0 },
        ],
      },
      {
        question: "Find the pattern: A, C, F, J, O, ?",
        options: [
          { text: "U", points: 2 },
          { text: "T", points: 0 },
          { text: "V", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 3,
        title: "Needs Practice",
        description:
          "Your brain games score is low. Practice logic puzzles and pattern questions daily.",
      },
      {
        min: 4,
        max: 7,
        title: "Good Thinker",
        description:
          "You solved several challenges correctly. Your reasoning is developing well.",
      },
      {
        min: 8,
        max: 10,
        title: "Sharp Brain",
        description:
          "Strong logic and pattern recognition. You performed very well on this brain game.",
      },
    ],
  },
  {
    slug: "personality-tests",
    title: "Thinking Personality Test",
    description:
      "Discover your thinking style based on how you solve problems, make decisions, and handle focus.",
    questions: [
      {
        question: "When facing a problem, what do you usually do first?",
        options: [
          { text: "Analyze the details", points: 2 },
          { text: "Trust my instinct", points: 1 },
          { text: "Ask someone else", points: 0 },
        ],
      },
      {
        question: "How do you make important decisions?",
        options: [
          { text: "Logic and evidence", points: 2 },
          { text: "Emotion and feeling", points: 1 },
          { text: "Avoid deciding quickly", points: 0 },
        ],
      },
      {
        question: "What describes your focus style?",
        options: [
          { text: "Deep and consistent", points: 2 },
          { text: "Strong but inconsistent", points: 1 },
          { text: "Easily distracted", points: 0 },
        ],
      },
      {
        question: "When learning something new, you prefer:",
        options: [
          { text: "Structured steps", points: 2 },
          { text: "Experimenting", points: 1 },
          { text: "Watching only", points: 0 },
        ],
      },
      {
        question: "Under pressure, you usually:",
        options: [
          { text: "Stay logical", points: 2 },
          { text: "React fast", points: 1 },
          { text: "Freeze or delay", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 3,
        title: "Reactive Thinker",
        description:
          "You tend to react more than plan. Building focus and structure will improve your decisions.",
      },
      {
        min: 4,
        max: 7,
        title: "Balanced Thinker",
        description:
          "You mix logic and instinct. With more consistency, your thinking can become sharper.",
      },
      {
        min: 8,
        max: 10,
        title: "Strategic Thinker",
        description:
          "You think with structure, logic, and control. This is a strong cognitive personality.",
      },
    ],
  },
];
