"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResultPage() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = Number(localStorage.getItem("qizlyiq-score") || "0");
    setScore(savedScore);
  }, []);

  const totalQuestions = 5;
  const percentage = Math.round((score / totalQuestions) * 100);

  let rank = "Beginner";

  if (score >= 5) {
    rank = "Brain Master";
  } else if (score >= 4) {
    rank = "Elite Thinker";
  } else if (score >= 3) {
    rank = "Sharp Mind";
  } else if (score >= 2) {
    rank = "Average Thinker";
  } else {
    rank = "Brain Rot Victim";
  }

  const shareResult = async () => {
    const text = `I scored ${score}/${totalQuestions} (${percentage}%) on QizlyIQ and got "${rank}". Can you beat me?`;

    if (navigator.share) {
      await navigator.share({
        title: "QizlyIQ Result",
        text,
        url: window.location.origin,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Result copied!");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <div className="text-7xl font-black mb-4">{percentage}%</div>

          <h1 className="text-4xl font-black mb-2">{rank}</h1>

          <p className="text-gray-400 text-lg">
            You answered {score} out of {totalQuestions} questions correctly.
          </p>
        </div>

        <div className="w-full bg-[#21262d] h-4 rounded-full overflow-hidden mb-10">
          <div
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/iq-test/1"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl text-lg font-bold"
          >
            Try Again
          </Link>

          <button
            onClick={shareResult}
            className="bg-[#21262d] border border-[#30363d] hover:border-cyan-400 transition px-6 py-4 rounded-2xl text-lg font-bold"
          >
            Share Result
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
