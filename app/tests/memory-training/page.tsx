"use client";

import Link from "next/link";

export default function MemoryTrainingPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-bold">
            QizlyIQ Memory Test
          </span>
        </div>

        <h1 className="text-5xl font-black mb-6 leading-tight">
          Memory Training
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Test your memory habits, recall ability, and focus strength with 10
          memory challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-cyan-400 mb-2">10</h2>
            <p className="text-gray-400 text-sm">Questions</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-blue-400 mb-2">Memory</h2>
            <p className="text-gray-400 text-sm">Recall Strength</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-purple-400 mb-2">Free</h2>
            <p className="text-gray-400 text-sm">Instant Results</p>
          </div>
        </div>

        <Link
          href="/tests/memory-training/play"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:opacity-90 transition-all text-white font-black text-lg px-10 py-5 rounded-2xl"
        >
          Start Memory Training
        </Link>
      </div>
    </main>
  );
}
