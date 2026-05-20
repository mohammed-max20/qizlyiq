"use client";

import { useState } from "react";
import Link from "next/link";
import type { TestData } from "@/app/data/testsData";

export default function TestRunner({ test }: { test: TestData }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalPossible = test.questions.length * 2;
  const percentage = Math.round((score / totalPossible) * 100);

  const result =
    test.results.find((item) => score >= item.min && score <= item.max) ||
    test.results[0];

  const answerQuestion = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (current + 1 >= test.questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const shareResult = async () => {
    const text = `I got "${result.title}" on ${test.title} at QizlyIQ. Can you beat me?`;

    if (navigator.share) {
      await navigator.share({
        title: test.title,
        text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Result copied!");
    }
  };

  if (finished) {
    return (
      <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-8 text-center">
          <p className="text-blue-400 font-semibold mb-3">Your Result</p>

          <h1 className="text-5xl font-black mb-4">{percentage}%</h1>

          <h2 className="text-3xl font-black mb-4">{result.title}</h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {result.description}
          </p>

          <div className="w-full bg-[#21262d] h-4 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-4 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl font-bold"
            >
              Try Again
            </button>

            <button
              onClick={shareResult}
              className="bg-[#21262d] border border-[#30363d] hover:border-cyan-400 transition px-6 py-4 rounded-2xl font-bold"
            >
              Share Result
            </button>

            <Link
              href="/"
              className="bg-[#21262d] border border-[#30363d] hover:border-blue-500 transition px-6 py-4 rounded-2xl font-bold"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = test.questions[current];
  const progress = Math.round(((current + 1) / test.questions.length) * 100);

  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-8">
        <div className="mb-8">
          <p className="text-blue-400 font-semibold mb-2">{test.title}</p>

          <div className="w-full bg-[#21262d] h-3 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-gray-500 mt-3">
            Question {current + 1} of {test.questions.length}
          </p>
        </div>

        <h1 className="text-3xl font-black mb-8">{question.question}</h1>

        <div className="grid gap-4">
          {question.options.map((option) => (
            <button
              key={option.text}
              onClick={() => answerQuestion(option.points)}
              className="text-left bg-[#0d1117] border border-[#30363d] hover:border-blue-500 transition rounded-2xl p-5 text-lg font-semibold"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
