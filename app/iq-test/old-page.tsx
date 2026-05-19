"use client";

import { useState } from "react";

const questions = [
  {
    question:
      "If 3 people take 3 hours to make 3 chairs, how many hours does it take 1 person to make 1 chair?",
    answers: ["1 hour", "3 hours", "6 hours", "9 hours"],
    correct: 1,
  },
  {
    question: "Which number comes next? 2, 4, 8, 16, ?",
    answers: ["18", "24", "32", "64"],
    correct: 2,
  },
  {
    question: "Sorrow is to Happiness as Defeat is to:",
    answers: ["Victory", "Failure", "Game", "Sadness"],
    correct: 0,
  },
  {
    question: "Which shape has 4 equal sides?",
    answers: ["Rectangle", "Triangle", "Circle", "Square"],
    correct: 3,
  },
  {
    question: "What is 15% of 200?",
    answers: ["20", "25", "30", "35"],
    correct: 2,
  },
];

export default function IQTestPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl bg-[#161b22] border border-[#30363d] rounded-3xl p-8">
        {!finished ? (
          <>
            <div className="mb-8">
              <div className="w-full h-3 bg-[#21262d] rounded-full overflow-hidden">
                <div
                  className="h-3 bg-blue-500 rounded-full transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between mb-8 text-gray-400">
              <span>
                Question {current + 1} / {questions.length}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-8 leading-relaxed">
              {questions[current].question}
            </h1>

            <div className="grid gap-4">
              {questions[current].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="bg-[#21262d] border border-[#30363d] hover:border-blue-500 hover:bg-[#30363d] transition-all p-5 rounded-2xl text-left font-medium"
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-5xl font-black mb-6">Your Score</h1>

            <div className="text-7xl font-black text-blue-400 mb-6">
              {score} / {questions.length}
            </div>

            <p className="text-gray-400 text-xl mb-10">
              {score >= 4
                ? "Your brain is highly active."
                : score >= 2
                  ? "Good thinking skills."
                  : "Your brain needs more training."}
            </p>

            <a
              href="/iq-test"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-lg font-bold inline-block"
            >
              Try Again
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
