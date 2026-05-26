import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Brain Tip | QizlyIQ",

  description:
    "Get a new daily brain improvement tip focused on memory, focus, dopamine, and mental performance.",

  openGraph: {
    title: "Daily Brain Tip | QizlyIQ",

    description:
      "Get a new daily brain improvement tip focused on memory and focus.",

    url: "https://qizlyiq.com/daily-tip",

    siteName: "QizlyIQ",

    type: "website",
  },
};

const tips = [
  "Drink water before studying to improve concentration.",
  "Walking for 10 minutes can reset mental fatigue.",
  "Avoid short videos before sleep for better focus.",
  "Reading daily improves memory retention.",
  "Deep work sessions increase attention span.",
  "Sleep is critical for memory formation.",
  "Writing notes by hand improves recall.",
  "Meditation can reduce mental distractions.",
  "Exercise improves brain performance and mood.",
  "Reducing multitasking improves productivity.",
];

const today = new Date().getDate();
const dailyTip = tips[today % tips.length];

export default function DailyTipPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-bold">
            QizlyIQ Daily Tip
          </span>
        </div>

        <h1 className="text-5xl font-black mb-6 leading-tight">
          Daily Brain Tip
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Improve your brain performance one small habit at a time.
        </p>

        <div className="bg-[#21262d] border border-[#30363d] rounded-3xl p-10">
          <p className="text-2xl font-bold leading-relaxed text-white">
            {dailyTip}
          </p>
        </div>
      </div>
    </main>
  );
}

/*"use client";

import { useEffect, useState } from "react";

const tips = [
  {
    title: "Take a 10-minute screen break",
    text: "Short breaks help your brain reset, reduce mental fatigue, and improve focus.",
  },
  {
    title: "Drink water before studying",
    text: "Even mild dehydration can reduce concentration and memory performance.",
  },
  {
    title: "Sleep is brain training",
    text: "Good sleep improves memory storage, focus, and mental recovery.",
  },
  {
    title: "Walk for 15 minutes",
    text: "Light movement increases blood flow and improves cognitive performance.",
  },
];

export default function DailyTipPage() {
  const [timeLeft, setTimeLeft] = useState("");

  const today = new Date();

  const dayIndex = Math.floor(today.getTime() / 86400000) % tips.length;

  const tip = tips[dayIndex];

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const nyTime = new Date(
        now.toLocaleString("en-US", {
          timeZone: "America/New_York",
        }),
      );

      const next = new Date(nyTime);

      next.setHours(7, 0, 0, 0);

      if (nyTime >= next) {
        next.setDate(next.getDate() + 1);
      }

      const diff = next.getTime() - nyTime.getTime();

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-4">Daily Brain Tip</h1>

        <p className="text-gray-400 text-lg mb-10">
          Improve focus, memory, and cognitive performance with one daily habit.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-blue-400 font-semibold">Today&apos;s Tip</p>

            <div className="text-right">
              <p className="text-sm text-gray-500">Next tip in</p>

              <p className="text-xl font-bold text-green-400">{timeLeft}</p>
            </div>
          </div>

          <h2 className="text-3xl font-black mb-4">{tip.title}</h2>

          <p className="text-gray-400 text-lg leading-relaxed">{tip.text}</p>
        </div>

        <h2 className="text-3xl font-black mb-6 mt-14">Previous Tips</h2>

        <div className="grid gap-4">
          {tips.map((item, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>

              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
*/
