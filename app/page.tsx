export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-black mb-6 tracking-tight whitespace-nowrap cursor-default overflow-visible leading-tight">
          {"QizlyIQ".split("").map((letter, index) => (
            <span key={index} className="logo-letter">
              {letter}
            </span>
          ))}
        </h1>

        <p className="text-gray-400 text-xl mb-8 leading-relaxed">
          Train your brain with advanced IQ tests, logic puzzles, memory
          challenges, personality tests, and brain games designed to fight brain
          rot and improve focus, thinking speed, and problem-solving skills.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/coming-soon"
            className="
      bg-[#161b22]
      border
      border-[#30363d]
      px-6
      py-3
      rounded-full
      text-sm
      transition-all
      duration-300
      hover:scale-110
      hover:border-blue-500
      hover:bg-[#1f2937]
    "
          >
            Brain Rot Recovery
          </a>

          <a
            href="/coming-soon"
            className="
      bg-[#161b22]
      border
      border-[#30363d]
      px-6
      py-3
      rounded-full
      text-sm
      transition-all
      duration-300
      hover:scale-110
      hover:border-purple-500
      hover:bg-[#1f2937]
    "
          >
            Brain Games
          </a>

          <a
            href="/coming-soon"
            className="
      bg-[#161b22]
      border
      border-[#30363d]
      px-6
      py-3
      rounded-full
      text-sm
      transition-all
      duration-300
      hover:scale-110
      hover:border-pink-500
      hover:bg-[#1f2937]
    "
          >
            Personality Tests
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/iq-test/1"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
          >
            Start Quick IQ Test
          </a>

          <a
            href="/tests"
            className="border border-gray-700 hover:border-gray-500 transition px-8 py-4 rounded-2xl text-lg font-bold bg-[#161b22]"
          >
            View More Tests
          </a>

          <a
            href="/daily-tip"
            className="border border-gray-700 hover:border-green-500 transition px-8 py-4 rounded-2xl text-lg font-bold bg-[#161b22]"
          >
            Daily Brain Tip
          </a>
        </div>
      </div>
      <footer className="absolute bottom-6 text-gray-500 text-sm flex gap-6">
        <a href="/about" className="hover:text-white transition">
          About
        </a>

        <a href="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </a>

        <a href="/contact" className="hover:text-white transition">
          Contact
        </a>
      </footer>
    </main>
  );
}
