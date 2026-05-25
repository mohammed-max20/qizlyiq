"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  question: string;
  image?: string;
  options: {
    text: string;
    points: number;
  }[];
};

type QuizData = {
  title: string;
  description: string;
  shareText: string;
  type: "correct" | "score";

  questions: {
    id: number;
    question: string;
    image?: string;

    options: {
      text: string;
      points: number;
    }[];
  }[];
};

/*type QuizData = {
  title: string;
  description: string;
  questions: Question[];
};*/

export default function QuizRunner({ data }: { data: QuizData }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const question = data.questions[current];

  const progress = ((current + 1) / data.questions.length) * 100;

  const answerQuestion = (points: number, index: number) => {
    if (selected !== null) return;

    setSelected(index);

    setScore((prev) => prev + points);

    setTimeout(() => {
      if (current + 1 < data.questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  const percentage =
    data.type === "score"
      ? Math.round((score / (data.questions.length * 3)) * 100)
      : Math.round((score / data.questions.length) * 100);

  /*const percentage = Math.round((score / data.questions.length) * 100);*/

  const getRank = () => {
    if (data.title === "Ultimate IQ Test") {
      if (percentage >= 90) return "Elite Thinker";
      if (percentage >= 70) return "Sharp Mind";
      if (percentage >= 50) return "Average Thinker";

      return "Beginner Thinker";
    }

    if (data.title === "Brain Rot Recovery") {
      if (percentage >= 90) return "Elite Focus";
      if (percentage >= 70) return "Healthy Brain";
      if (percentage >= 50) return "Distracted Mind";

      return "Brain Rot Victim";
    }

    if (data.title === "Brain Games") {
      if (percentage >= 90) return "Brain Master";
      if (percentage >= 70) return "Fast Thinker";
      if (percentage >= 50) return "Quick Learner";

      return "Slow Processor";
    }

    if (data.title === "Personality Test") {
      if (percentage >= 90) return "Strategic Leader";
      if (percentage >= 70) return "Creative Thinker";
      if (percentage >= 50) return "Balanced Mind";

      return "Free Spirit";
    }

    if (data.title === "Memory Training") {
      if (percentage >= 90) return "Memory Master";
      if (percentage >= 70) return "Strong Recall";
      if (percentage >= 50) return "Average Memory";

      return "Forgetful Mind";
    }

    return "Unknown";
  };

  const shareResult = async () => {
    const text = `I scored ${percentage}% "(${getRank()})" on the ${data.title} at QizlyIQ. Can you beat me?`;
    if (navigator.share) {
      await navigator.share({
        title: data.title,
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
      <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10">
        <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
          <div className="text-7xl font-black mb-4">{percentage}%</div>

          <h1 className="text-4xl font-black mb-2">{getRank()}</h1>

          <p className="text-gray-400 text-lg mb-8">
            {data.type === "score"
              ? `Your focus score is ${percentage}%.`
              : `You answered ${score} out of ${data.questions.length} questions correctly.`}
          </p>

          <div className="w-full bg-[#21262d] h-4 rounded-full overflow-hidden mb-10">
            <div
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
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
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10 select-none">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-8">
        <div className="mb-8">
          <div className="w-full bg-[#21262d] h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-8 text-gray-400">
          <span>
            Question {current + 1} / {data.questions.length}
          </span>

          <span className="px-4 py-2 rounded-full text-sm font-bold bg-[#21262d] text-blue-300">
            IQ Test
          </span>
        </div>

        <h1 className="text-3xl font-black mb-8 leading-relaxed">
          {question.question}
        </h1>

        {question.image && (
          <div className="mb-8">
            <img
              src={question.image}
              alt="Question visual"
              className="w-full rounded-2xl border border-[#30363d]"
            />
          </div>
        )}

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
