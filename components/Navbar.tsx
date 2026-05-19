export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-black tracking-tight">
          QizlyIQ
        </a>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="/tests"
            className="text-gray-400 hover:text-white transition"
          >
            Tests
          </a>

          <a
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
