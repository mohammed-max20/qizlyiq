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
    description: "Measure your focus habits and digital distraction level.",
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
        question: "Can you focus for 30 minutes without checking your phone?",
        options: [
          { text: "Yes, easily", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No, it is hard", points: 0 },
        ],
      },
      {
        question: "How often do you feel mentally tired without deep work?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Often", points: 0 },
        ],
      },
      {
        question: "Do you read long text without skipping quickly?",
        options: [
          { text: "Yes", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No", points: 0 },
        ],
      },
      {
        question: "How fast do you get bored without stimulation?",
        options: [
          { text: "Slowly", points: 2 },
          { text: "Medium", points: 1 },
          { text: "Very fast", points: 0 },
        ],
      },
      {
        question: "How often do notifications interrupt your work?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Constantly", points: 0 },
        ],
      },
      {
        question: "Can you enjoy quiet time without reaching for your phone?",
        options: [
          { text: "Yes", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 4,
        title: "High Brain Rot Risk",
        description:
          "Your attention system is overloaded. Reduce short-form scrolling and rebuild deep focus.",
      },
      {
        min: 5,
        max: 10,
        title: "Moderate Brain Rot",
        description:
          "Your focus still works, but digital distractions are affecting your mental clarity.",
      },
      {
        min: 11,
        max: 14,
        title: "Healthy Focus",
        description:
          "Your attention habits are strong. Keep protecting your focus from overstimulation.",
      },
    ],
  },
  {
    slug: "brain-games",
    title: "Brain Games Test",
    description: "Test logic, patterns, and quick thinking.",
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
          "All Bloops are Razzies. All Razzies are Lazzies. Are all Bloops Lazzies?",
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
      {
        question: "If today is Monday, what day is it after 10 days?",
        options: [
          { text: "Thursday", points: 2 },
          { text: "Friday", points: 0 },
          { text: "Wednesday", points: 0 },
        ],
      },
      {
        question: "Which number is different? 9, 16, 25, 36, 45",
        options: [
          { text: "16", points: 0 },
          { text: "45", points: 2 },
          { text: "36", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 4,
        title: "Needs Practice",
        description:
          "Your score is low. Practice pattern recognition and logic puzzles daily.",
      },
      {
        min: 5,
        max: 10,
        title: "Good Thinker",
        description:
          "You solved several challenges correctly. Your reasoning is developing well.",
      },
      {
        min: 11,
        max: 14,
        title: "Sharp Brain",
        description:
          "Strong logic and pattern recognition. You performed very well.",
      },
    ],
  },
  {
    slug: "personality-tests",
    title: "Thinking Personality Test",
    description: "Discover your cognitive thinking style.",
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
      {
        question: "Which task feels easiest to you?",
        options: [
          { text: "Planning", points: 2 },
          { text: "Improvising", points: 1 },
          { text: "Repeating instructions", points: 0 },
        ],
      },
      {
        question: "How do you handle mistakes?",
        options: [
          { text: "Analyze and adjust", points: 2 },
          { text: "Move on quickly", points: 1 },
          { text: "Feel stuck", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 4,
        title: "Reactive Thinker",
        description:
          "You tend to react more than plan. Structure and focus will improve your decisions.",
      },
      {
        min: 5,
        max: 10,
        title: "Balanced Thinker",
        description:
          "You mix logic and instinct. More consistency will sharpen your thinking.",
      },
      {
        min: 11,
        max: 14,
        title: "Strategic Thinker",
        description:
          "You think with structure, logic, and control. Strong cognitive personality.",
      },
    ],
  },
  {
    slug: "memory-training",
    title: "Memory Training Test",
    description: "Check your memory habits and recall strength.",
    questions: [
      {
        question: "How often do you forget why you entered a room?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Often", points: 0 },
        ],
      },
      {
        question: "Can you remember a short list after 5 minutes?",
        options: [
          { text: "Yes", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "No", points: 0 },
        ],
      },
      {
        question: "Do you repeat information to remember it?",
        options: [
          { text: "Often", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Rarely", points: 0 },
        ],
      },
      {
        question: "How often do you forget names after meeting people?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Often", points: 0 },
        ],
      },
      {
        question: "Do you sleep enough before mentally hard days?",
        options: [
          { text: "Usually", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "Rarely", points: 0 },
        ],
      },
      {
        question: "Can you recall what you studied yesterday?",
        options: [
          { text: "Clearly", points: 2 },
          { text: "Partly", points: 1 },
          { text: "Barely", points: 0 },
        ],
      },
      {
        question: "Do distractions affect your memory?",
        options: [
          { text: "Rarely", points: 2 },
          { text: "Sometimes", points: 1 },
          { text: "A lot", points: 0 },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 4,
        title: "Weak Recall",
        description:
          "Your memory habits need work. Start with sleep, repetition, and fewer distractions.",
      },
      {
        min: 5,
        max: 10,
        title: "Average Memory",
        description:
          "Your memory is functional, but it can improve with better focus habits.",
      },
      {
        min: 11,
        max: 14,
        title: "Strong Memory",
        description: "You have solid recall habits and good memory discipline.",
      },
    ],
  },
];
