export const memoryTrainingData = {
  title: "Memory Training",
  description: "Test your memory habits, recall ability, and focus strength.",
  type: "score" as const,
  shareText: "I completed Memory Training on QizlyIQ. Can you beat me?",

  questions: [
    {
      id: 1,
      question: "How often do you forget why you entered a room?",
      options: [
        { text: "Rarely", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Often", points: 1 },
        { text: "Very often", points: 0 },
      ],
    },

    {
      id: 2,
      question: "Can you remember a short list after 5 minutes?",
      options: [
        { text: "Easily", points: 3 },
        { text: "Usually", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "No", points: 0 },
      ],
    },

    {
      id: 3,
      question:
        "How often do you forget people's names shortly after meeting them?",
      options: [
        { text: "Almost never", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Often", points: 1 },
        { text: "Always", points: 0 },
      ],
    },

    {
      id: 4,
      question: "Can you remember phone numbers without saving them?",
      options: [
        { text: "Very easily", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Rarely", points: 1 },
        { text: "Impossible", points: 0 },
      ],
    },

    {
      id: 5,
      question: "How good are you at remembering directions?",
      options: [
        { text: "Excellent", points: 3 },
        { text: "Good", points: 2 },
        { text: "Average", points: 1 },
        { text: "Terrible", points: 0 },
      ],
    },

    {
      id: 6,
      question: "Do you forget tasks unless you write them down?",
      options: [
        { text: "Rarely", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Often", points: 1 },
        { text: "Always", points: 0 },
      ],
    },

    {
      id: 7,
      question: "Can you remember details from movies or books?",
      options: [
        { text: "Very clearly", points: 3 },
        { text: "Mostly", points: 2 },
        { text: "Barely", points: 1 },
        { text: "Not at all", points: 0 },
      ],
    },

    {
      id: 8,
      question: "How quickly do you memorize new information?",
      options: [
        { text: "Very quickly", points: 3 },
        { text: "Normally", points: 2 },
        { text: "Slowly", points: 1 },
        { text: "Very slowly", points: 0 },
      ],
    },

    {
      id: 9,
      question: "Can you multitask without forgetting things?",
      options: [
        { text: "Very well", points: 3 },
        { text: "Usually", points: 2 },
        { text: "Not really", points: 1 },
        { text: "Impossible", points: 0 },
      ],
    },

    {
      id: 10,
      question: "How often do you lose personal items like keys or phone?",
      options: [
        { text: "Almost never", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Often", points: 1 },
        { text: "Constantly", points: 0 },
      ],
    },
  ],
};
