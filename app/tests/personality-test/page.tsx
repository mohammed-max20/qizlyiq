import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personality Test | QizlyIQ",

  description:
    "Discover your personality type, mindset, and decision-making style with this free personality test.",

  openGraph: {
    title: "Personality Test | QizlyIQ",

    description:
      "Discover your personality type, mindset, and decision-making style.",

    url: "https://qizlyiq.com/tests/personality-test",

    siteName: "QizlyIQ",

    type: "website",
  },
};

export default function PersonalityTestPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#161b22] border border-[#30363d] rounded-3xl p-10 text-center">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-bold">
            QizlyIQ Personality Test
          </span>
        </div>

        <h1 className="text-5xl font-black mb-6 leading-tight">
          Personality Test
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Discover your personality type, mindset, decision style, and social
          behavior.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-orange-400 mb-2">10</h2>
            <p className="text-gray-400 text-sm">Questions</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-pink-400 mb-2">Type</h2>
            <p className="text-gray-400 text-sm">Personality Result</p>
          </div>

          <div className="bg-[#21262d] rounded-2xl p-5 border border-[#30363d]">
            <h2 className="text-3xl font-black text-cyan-400 mb-2">Free</h2>
            <p className="text-gray-400 text-sm">Instant Results</p>
          </div>
        </div>

        <Link
          href="/tests/personality-test/play"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:opacity-90 transition-all text-white font-black text-lg px-10 py-5 rounded-2xl"
        >
          Start Personality Test
        </Link>
      </div>
    </main>
  );
}
