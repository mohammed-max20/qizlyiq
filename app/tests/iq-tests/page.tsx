import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimate IQ Test | QizlyIQ",
  description:
    "Take a free IQ test with logic, pattern recognition, memory, and reasoning questions. Get instant results on QizlyIQ.",
};

import Link from "next/link";

export default function IQTestsPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
            QizlyIQ Challenge
          </span>
        </div>

        <h1 className="text-5xl font-black mb-6 leading-tight">
          Ultimate IQ Test
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Test your logical thinking, pattern recognition, memory, and problem
          solving skills with 20 carefully selected IQ questions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-blue-400 mb-2">20</h2>
            <p className="text-gray-400 text-sm">Questions</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-purple-400 mb-2">IQ</h2>
            <p className="text-gray-400 text-sm">Logic Test</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-cyan-400 mb-2">Free</h2>
            <p className="text-gray-400 text-sm">Instant Results</p>
          </div>
        </div>

        <Link
          href="/tests/iq-tests/play"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:opacity-90 transition-all text-white font-black text-lg px-10 py-5 rounded-2xl"
        >
          Start IQ Test
        </Link>
      </div>
    </main>
  );
}

/*"use client";

import { useState } from "react";
import Link from "next/link";
import { iqTestData } from "@/app/data/iqTestData";

export default function IQTestPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const question = iqTestData.questions[current];
  const progress = ((current + 1) / iqTestData.questions.length) * 100;

  const answerQuestion = (points: number, index: number) => {
    if (selected !== null) return;

    setSelected(index);
    setScore((prev) => prev + points);

    setTimeout(() => {
      if (current + 1 < iqTestData.questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  const getRank = () => {
    if (score >= 13) return "Elite Thinker";
    if (score >= 10) return "Sharp Mind";
    if (score >= 7) return "Average Thinker";
    return "Beginner Thinker";
  };

  if (finished) {
    const percentage = Math.round((score / iqTestData.questions.length) * 100);

    return (
      <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10">
        <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
          <div className="text-7xl font-black mb-4">{percentage}%</div>

          <h1 className="text-4xl font-black mb-2">{getRank()}</h1>

          <p className="text-gray-400 text-lg mb-8">
            You answered {score} out of {iqTestData.questions.length} questions correctly.
          </p>

          <div className="w-full bg-[#21262d] h-4 rounded-full overflow-hidden mb-10">
            <div
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
                setSelected(null);
              }}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl text-lg font-bold"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="bg-[#21262d] border border-[#30363d] hover:border-blue-500 transition px-6 py-4 rounded-2xl text-lg font-bold"
            >
              Home Page
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-8">
        <div className="mb-8">
          <div className="w-full bg-[#21262d] h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-gray-400 mb-3">
          Question {current + 1} of {iqTestData.questions.length}
        </p>

        <h1 className="text-3xl font-black mb-8 leading-relaxed">
          {question.question}
        </h1>

        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => answerQuestion(option.points, index)}
              disabled={selected !== null}
              className={`
                p-5 rounded-2xl text-left border transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98]
                ${
                  selected === null
                    ? "bg-[#21262d] border-[#30363d] hover:border-blue-500 hover:bg-[#30363d]"
                    : selected === index
                    ? "bg-blue-500/20 border-blue-500 text-blue-300"
                    : "bg-[#21262d] border-[#30363d] opacity-50"
                }
              `}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
  */
