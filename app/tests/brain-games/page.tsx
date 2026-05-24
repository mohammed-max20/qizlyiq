"use client";

import Link from "next/link";

export default function BrainGamesPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold">
            QizlyIQ Brain Game
          </span>
        </div>

        <h1 className="text-5xl font-black mb-6 leading-tight">Brain Games</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Test your logic, speed, pattern recognition, and quick thinking with
          10 fast brain challenges.
        </p>

        <Link
          href="/tests/brain-games/play"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 hover:opacity-90 transition-all text-white font-black text-lg px-10 py-5 rounded-2xl"
        >
          Start Brain Games
        </Link>
      </div>
    </main>
  );
}
