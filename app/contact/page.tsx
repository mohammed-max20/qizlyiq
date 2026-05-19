export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-6">Contact</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          If you have questions, feedback, or business inquiries, feel free to
          contact QizlyIQ.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-6">
          <p className="text-xl font-semibold mb-2">Email</p>

          <p className="text-gray-400">contact@qizlyiq.com</p>
        </div>
      </div>
    </main>
  );
}
