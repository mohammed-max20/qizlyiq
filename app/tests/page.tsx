const tests = ["IQ Tests", "Memory Training", "Logic Challenges"];

{
  /* "Math Challenges", "Critical Thinking", "Reaction Speed",  "Focus Exercises",
  "Reaction Speed",

  "Visual Memory", */
}

const descriptions: Record<string, string> = {
  "IQ Tests": "Test your intelligence with fast and challenging IQ questions.",

  "Memory Training": "Improve memory, focus, and long-term brain performance.",

  "Logic Challenges":
    "Solve logic puzzles designed to sharpen critical thinking skills.",
};

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-6">More Brain Challenges</h1>

        <p className="text-gray-400 text-lg mb-12">
          Explore powerful IQ tests, memory training, and logic challenges
          designed to improve focus, thinking speed, and mental performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <a
              key={index}
              href={`/tests/${test.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-[#161b22] border border-[#30363d] hover:border-blue-500 transition-all rounded-3xl p-6 cursor-pointer hover:-translate-y-1 block"
            >
              <h2 className="text-2xl font-bold mb-3">{test}</h2>

              <p className="text-gray-400">{descriptions[test]}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
