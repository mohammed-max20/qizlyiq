import { notFound } from "next/navigation";

const testsData: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "iq-tests": {
    title: "IQ Tests",
    description:
      "Challenge your intelligence with advanced IQ questions and logic puzzles.",
  },

  "memory-training": {
    title: "Memory Training",
    description:
      "Train your memory, improve focus, and sharpen your cognitive skills.",
  },

  "logic-challenges": {
    title: "Logic Challenges",
    description:
      "Solve difficult logic problems designed to test deep thinking.",
  },
};

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const test = testsData[slug];

  if (!test) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-black mb-4">{test.title}</h1>

          <p className="text-gray-400 text-xl">{test.description}</p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            This test is currently under development and will be available soon
            on QizlyIQ.
          </p>
        </div>
      </div>
    </main>
  );
}
