export const personalityTestData = {
  title: "Personality Test",

  description:
    "Discover your personality type, mindset, decision style, and social behavior.",

  type: "score" as const,

  shareText:
    "I completed the Personality Test on QizlyIQ. What's your personality type?",

  questions: [
    {
      id: 1,
      question: "How do you usually make decisions?",
      options: [
        { text: "Logic and analysis", points: 3 },
        { text: "Feelings and intuition", points: 2 },
        { text: "Ask others first", points: 1 },
        { text: "Randomly", points: 0 },
      ],
    },

    {
      id: 2,
      question: "What sounds most enjoyable?",
      options: [
        { text: "Reading or learning", points: 3 },
        { text: "Gaming or entertainment", points: 2 },
        { text: "Going out with friends", points: 1 },
        { text: "Sleeping all day", points: 0 },
      ],
    },

    {
      id: 3,
      question: "When facing pressure, you usually:",
      options: [
        { text: "Stay calm and focused", points: 3 },
        { text: "Overthink quietly", points: 2 },
        { text: "Panic a little", points: 1 },
        { text: "Avoid the situation", points: 0 },
      ],
    },

    {
      id: 4,
      question: "Which describes you best?",
      options: [
        { text: "Independent", points: 3 },
        { text: "Creative", points: 2 },
        { text: "Social", points: 1 },
        { text: "Lazy", points: 0 },
      ],
    },

    {
      id: 5,
      question: "How organized are you?",
      options: [
        { text: "Very organized", points: 3 },
        { text: "Somewhat organized", points: 2 },
        { text: "Messy sometimes", points: 1 },
        { text: "Completely chaotic", points: 0 },
      ],
    },

    {
      id: 6,
      question: "What motivates you most?",
      options: [
        { text: "Success", points: 3 },
        { text: "Freedom", points: 2 },
        { text: "Fun", points: 1 },
        { text: "Nothing really", points: 0 },
      ],
    },

    {
      id: 7,
      question: "In conversations, you usually:",
      options: [
        { text: "Listen carefully", points: 3 },
        { text: "Talk passionately", points: 2 },
        { text: "Joke around", points: 1 },
        { text: "Stay quiet", points: 0 },
      ],
    },

    {
      id: 8,
      question: "What kind of thinker are you?",
      options: [
        { text: "Strategic", points: 3 },
        { text: "Creative", points: 2 },
        { text: "Emotional", points: 1 },
        { text: "Impulsive", points: 0 },
      ],
    },

    {
      id: 9,
      question: "Your ideal weekend is:",
      options: [
        { text: "Building skills", points: 3 },
        { text: "Relaxing peacefully", points: 2 },
        { text: "Going out", points: 1 },
        { text: "Doing nothing", points: 0 },
      ],
    },

    {
      id: 10,
      question: "How do people usually describe you?",
      options: [
        { text: "Smart", points: 3 },
        { text: "Interesting", points: 2 },
        { text: "Funny", points: 1 },
        { text: "Unpredictable", points: 0 },
      ],
    },
  ],
};
