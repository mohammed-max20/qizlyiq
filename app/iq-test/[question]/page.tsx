"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question:
      "If 3 people take 3 hours to make 3 chairs, how many hours does it take 1 person to make 1 chair?",
    answers: ["1 hour", "3 hours", "6 hours", "9 hours"],
    correct: 1,
  },
  {
    id: 2,
    question: "Which number comes next? 2, 4, 8, 16, ?",
    answers: ["18", "24", "32", "64"],
    correct: 2,
  },
  {
    id: 3,
    question: "Sorrow is to Happiness as Defeat is to:",
    answers: ["Victory", "Failure", "Game", "Sadness"],
    correct: 0,
  },
  {
    id: 4,
    question: "Which shape has 4 equal sides?",
    answers: ["Rectangle", "Triangle", "Circle", "Square"],
    correct: 3,
  },
  {
    id: 5,
    question: "What is 15% of 200?",
    answers: ["20", "25", "30", "35"],
    correct: 2,
  },
];

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter();

  const questionId = Number(params.question);
  const question = questions.find((q) => q.id === questionId);

  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const handleAnswer = (answerIndex: number) => {
    if (!question) return;
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);

    const oldScore = Number(localStorage.getItem("qizlyiq-score") || "0");
    const newScore = answerIndex === question.correct ? oldScore + 1 : oldScore;

    localStorage.setItem("qizlyiq-score", String(newScore));

    setTimeout(() => {
      if (questionId < questions.length) {
        router.push(`/iq-test/${questionId + 1}`);
      } else {
        router.push("/iq-test/result");
      }
    }, 900);
  };

  useEffect(() => {
    if (questionId === 1) {
      localStorage.setItem("qizlyiq-score", "0");
    }

    setSelectedAnswer(null);
    setTimeLeft(60);

    const previousProgress = ((questionId - 1) / questions.length) * 100;
    const currentProgress = (questionId / questions.length) * 100;

    setProgress(previousProgress);

    const timer = setTimeout(() => {
      setProgress(currentProgress);
    }, 120);

    return () => clearTimeout(timer);
  }, [questionId]);

  useEffect(() => {
    if (selectedAnswer !== null) return;

    if (timeLeft === 0) {
      handleAnswer(-1);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedAnswer]);

  if (!question) {
    return (
      <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">Question Not Found</h1>
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
            Question {question.id} / {questions.length}
          </span>

          <span
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              timeLeft <= 10
                ? "bg-red-500/20 text-red-400"
                : "bg-[#21262d] text-blue-300"
            }`}
          >
            {timeLeft}s
          </span>
        </div>

        <h1 className="text-3xl font-black mb-8 leading-relaxed">
          {question.question}
        </h1>

        <div className="grid gap-4">
          {question.answers.map((answer, index) => {
            const isCorrect = index === question.correct;
            const isSelected = selectedAnswer === index;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`
  p-5 rounded-2xl text-left border transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98]
                  ${
                    selectedAnswer === null
                      ? "bg-[#21262d] border-[#30363d] hover:border-blue-500 hover:bg-[#30363d]"
                      : isCorrect
                        ? "bg-green-500/20 border-green-500 text-green-300"
                        : isSelected
                          ? "bg-red-500/20 border-red-500 text-red-300"
                          : "bg-[#21262d] border-[#30363d] opacity-50"
                  }
                `}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
