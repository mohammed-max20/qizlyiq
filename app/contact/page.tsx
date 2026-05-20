export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-6">Contact</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          For questions, feedback, partnerships, or business inquiries, feel
          free to contact QizlyIQ.
        </p>

        <div className="grid gap-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-6">
            <p className="text-xl font-semibold mb-2">Support</p>

            <a
              href="mailto:support@qizlyiq.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              support@qizlyiq.com
            </a>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-6">
            <p className="text-xl font-semibold mb-2">Business Contact</p>

            <a
              href="mailto:contact@qizlyiq.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              contact@qizlyiq.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

/*export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-300">Contact us at:</p>

      <p className="text-blue-400 mt-2">support@qizlyiq.com</p>
    </main>
  );
}

/*export default function ContactPage() {
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
*/
