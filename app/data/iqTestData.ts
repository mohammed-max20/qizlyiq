export type IQQuestion = {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
};

export const iqTestData = {
  slug: "iq-tests",
  title: "Ultimate IQ Test",
  description:
    "Test your logical thinking, pattern recognition, memory, and problem-solving skills with carefully selected IQ questions.",

  questions: [
    {
      id: 1,
      question: "Which number comes next? 3, 6, 12, 24, ?",
      options: [
        { text: "36", points: 0 },
        { text: "42", points: 0 },
        { text: "48", points: 1 },
        { text: "60", points: 0 },
      ],
    },
    {
      id: 2,
      question:
        "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: [
        { text: "0°", points: 0 },
        { text: "7.5°", points: 1 },
        { text: "15°", points: 0 },
        { text: "30°", points: 0 },
      ],
    },
    {
      id: 3,
      question:
        "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are:",
      options: [
        { text: "Lazzies", points: 1 },
        { text: "Not Lazzies", points: 0 },
        { text: "Animals", points: 0 },
        { text: "Unknown", points: 0 },
      ],
    },
    {
      id: 4,
      question: "Which number does not belong? 2, 3, 5, 7, 11, 14, 17",
      options: [
        { text: "7", points: 0 },
        { text: "11", points: 0 },
        { text: "14", points: 1 },
        { text: "17", points: 0 },
      ],
    },
    {
      id: 5,
      question: "A farmer has 17 sheep. All but 9 die. How many are left?",
      options: [
        { text: "8", points: 0 },
        { text: "9", points: 1 },
        { text: "17", points: 0 },
        { text: "0", points: 0 },
      ],
    },
    {
      id: 6,
      question: "Which word is the opposite of 'Expand'?",
      options: [
        { text: "Increase", points: 0 },
        { text: "Shrink", points: 1 },
        { text: "Stretch", points: 0 },
        { text: "Grow", points: 0 },
      ],
    },
    {
      id: 7,
      question: "Find the missing number: 1, 4, 9, 16, ?, 36",
      options: [
        { text: "20", points: 0 },
        { text: "24", points: 0 },
        { text: "25", points: 1 },
        { text: "30", points: 0 },
      ],
    },
    {
      id: 8,
      question:
        "If you rearrange the letters 'CIFAIPC', you get the name of a:",
      options: [
        { text: "Ocean", points: 1 },
        { text: "Country", points: 0 },
        { text: "Animal", points: 0 },
        { text: "City", points: 0 },
      ],
    },
    {
      id: 9,
      question: "Which shape has the greatest number of sides?",
      options: [
        { text: "Hexagon", points: 0 },
        { text: "Octagon", points: 0 },
        { text: "Decagon", points: 1 },
        { text: "Pentagon", points: 0 },
      ],
    },
    {
      id: 10,
      question: "A train travels 120 km in 2 hours. What is its average speed?",
      options: [
        { text: "40 km/h", points: 0 },
        { text: "50 km/h", points: 0 },
        { text: "60 km/h", points: 1 },
        { text: "80 km/h", points: 0 },
      ],
    },
    {
      id: 11,
      question: "Which number comes next? 1, 1, 2, 3, 5, 8, ?",
      options: [
        { text: "11", points: 0 },
        { text: "12", points: 0 },
        { text: "13", points: 1 },
        { text: "15", points: 0 },
      ],
    },
    {
      id: 12,
      question: "If TODAY is coded as UPEBZ, how is NIGHT coded?",
      options: [
        { text: "OJHIU", points: 1 },
        { text: "OJIHU", points: 0 },
        { text: "NIGHT", points: 0 },
        { text: "PHIHT", points: 0 },
      ],
    },
    {
      id: 13,
      question: "Which one is different?",
      options: [
        { text: "Apple", points: 0 },
        { text: "Banana", points: 0 },
        { text: "Carrot", points: 1 },
        { text: "Orange", points: 0 },
      ],
    },
    {
      id: 14,
      question: "How many months have 28 days?",
      options: [
        { text: "1", points: 0 },
        { text: "2", points: 0 },
        { text: "6", points: 0 },
        { text: "12", points: 1 },
      ],
    },
    {
      id: 15,
      question:
        "If a cube has 6 faces, how many faces do 3 cubes have together?",
      options: [
        { text: "12", points: 0 },
        { text: "18", points: 1 },
        { text: "24", points: 0 },
        { text: "30", points: 0 },
      ],
    },

    {
      id: 16,
      question: "Which shape is different from the others?",
      image: "/iq/shape-1.png",
      options: [
        { text: "Top Left", points: 0 },
        { text: "Top Right", points: 1 },
        { text: "Bottom Left", points: 0 },
        { text: "Bottom Right", points: 0 },
      ],
    },

    {
      id: 17,
      question: "Which pattern completes the sequence?",
      image: "/iq/pattern-1.png",
      options: [
        { text: "A", points: 0 },
        { text: "B", points: 1 },
        { text: "C", points: 0 },
        { text: "D", points: 0 },
      ],
    },

    {
      id: 18,
      question: "Which box should come next?",
      image: "/iq/pattern-2.png",
      options: [
        { text: "Option 1", points: 0 },
        { text: "Option 2", points: 0 },
        { text: "Option 3", points: 1 },
        { text: "Option 4", points: 0 },
      ],
    },

    {
      id: 19,
      question: "Which symbol is mirrored incorrectly?",
      image: "/iq/symbols-1.png",
      options: [
        { text: "A", points: 0 },
        { text: "B", points: 0 },
        { text: "C", points: 1 },
        { text: "D", points: 0 },
      ],
    },

    {
      id: 20,
      question: "Which image contains the hidden pattern?",
      image: "/iq/final-pattern.png",
      options: [
        { text: "Image 1", points: 1 },
        { text: "Image 2", points: 0 },
        { text: "Image 3", points: 0 },
        { text: "Image 4", points: 0 },
      ],
    },
  ],
};
