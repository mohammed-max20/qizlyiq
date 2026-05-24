export const brainGamesData = {
  title: "Brain Games",
  description:
    "Test your logic, speed, pattern recognition, and quick thinking skills.",
  type: "correct" as const,
  shareText: "I played Brain Games on QizlyIQ. Can you beat me?",

  questions: [
    {
      id: 1,
      question: "What comes next? 4, 8, 16, 32, ?",
      options: [
        { text: "48", points: 0 },
        { text: "64", points: 1 },
        { text: "72", points: 0 },
        { text: "80", points: 0 },
      ],
    },
    {
      id: 2,
      question: "Which word does not belong?",
      options: [
        { text: "Circle", points: 0 },
        { text: "Square", points: 0 },
        { text: "Triangle", points: 0 },
        { text: "Banana", points: 1 },
      ],
    },
    {
      id: 3,
      question: "What is 9 × 7?",
      options: [
        { text: "56", points: 0 },
        { text: "63", points: 1 },
        { text: "72", points: 0 },
        { text: "81", points: 0 },
      ],
    },
    {
      id: 4,
      question: "Find the pattern: Red, Blue, Red, Blue, ?",
      options: [
        { text: "Green", points: 0 },
        { text: "Blue", points: 0 },
        { text: "Red", points: 1 },
        { text: "Yellow", points: 0 },
      ],
    },
    {
      id: 5,
      question: "Which number is odd?",
      options: [
        { text: "22", points: 0 },
        { text: "48", points: 0 },
        { text: "37", points: 1 },
        { text: "64", points: 0 },
      ],
    },
    {
      id: 6,
      question: "If CAT becomes DBU, then DOG becomes:",
      options: [
        { text: "EPH", points: 1 },
        { text: "DOH", points: 0 },
        { text: "FQI", points: 0 },
        { text: "ENF", points: 0 },
      ],
    },
    {
      id: 7,
      question: "Which is the fastest mental calculation?",
      options: [
        { text: "25 + 25", points: 1 },
        { text: "13 × 17", points: 0 },
        { text: "91 ÷ 7", points: 0 },
        { text: "144 - 59", points: 0 },
      ],
    },
    {
      id: 8,
      question: "What comes next? A, B, D, G, K, ?",
      options: [
        { text: "M", points: 0 },
        { text: "N", points: 0 },
        { text: "P", points: 1 },
        { text: "Q", points: 0 },
      ],
    },
    {
      id: 9,
      question: "Which one is different?",
      options: [
        { text: "Keyboard", points: 0 },
        { text: "Mouse", points: 0 },
        { text: "Monitor", points: 0 },
        { text: "Pillow", points: 1 },
      ],
    },
    {
      id: 10,
      question: "What is half of 98?",
      options: [
        { text: "46", points: 0 },
        { text: "47", points: 0 },
        { text: "49", points: 1 },
        { text: "51", points: 0 },
      ],
    },
  ],
};
