export const brainRotData = {
  title: "Brain Rot Recovery",
  type: "score" as const,
  description:
    "Test your focus, dopamine balance, attention span, and scrolling habits.",

  shareText: "I got Brain Rot Recovery results on QizlyIQ. Can you beat me?",

  questions: [
    {
      id: 1,
      question: "How many hours a day do you spend scrolling short videos?",
      options: [
        { text: "Less than 1 hour", points: 3 },
        { text: "1-3 hours", points: 2 },
        { text: "4-6 hours", points: 1 },
        { text: "More than 6 hours", points: 0 },
      ],
    },

    {
      id: 2,
      question: "How often do you switch between apps within a few minutes?",
      options: [
        { text: "Rarely", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Often", points: 1 },
        { text: "Constantly", points: 0 },
      ],
    },

    {
      id: 3,
      question: "Can you watch a full movie without checking your phone?",
      options: [
        { text: "Easily", points: 3 },
        { text: "Usually", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "No", points: 0 },
      ],
    },

    {
      id: 4,
      question: "How long can you focus on studying or work?",
      options: [
        { text: "2+ hours", points: 3 },
        { text: "1 hour", points: 2 },
        { text: "30 minutes", points: 1 },
        { text: "Less than 10 minutes", points: 0 },
      ],
    },

    {
      id: 5,
      question: "Do you open social media automatically without thinking?",
      options: [
        { text: "Never", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "Always", points: 0 },
      ],
    },

    {
      id: 6,
      question: "How is your sleep schedule?",
      options: [
        { text: "Very consistent", points: 3 },
        { text: "Mostly okay", points: 2 },
        { text: "Random", points: 1 },
        { text: "Completely broken", points: 0 },
      ],
    },

    {
      id: 7,
      question: "Can you read 10 pages of a book without distraction?",
      options: [
        { text: "Yes easily", points: 3 },
        { text: "Usually", points: 2 },
        { text: "Barely", points: 1 },
        { text: "Impossible", points: 0 },
      ],
    },

    {
      id: 8,
      question: "How often do you forget why you opened an app?",
      options: [
        { text: "Never", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Often", points: 1 },
        { text: "Constantly", points: 0 },
      ],
    },

    {
      id: 9,
      question: "How quickly do you get bored without stimulation?",
      options: [
        { text: "Very slowly", points: 3 },
        { text: "Sometimes", points: 2 },
        { text: "Quickly", points: 1 },
        { text: "Almost instantly", points: 0 },
      ],
    },

    {
      id: 10,
      question: "Can you stay away from your phone for 3 hours?",
      options: [
        { text: "Easy", points: 3 },
        { text: "Manageable", points: 2 },
        { text: "Hard", points: 1 },
        { text: "Impossible", points: 0 },
      ],
    },
  ],
};
