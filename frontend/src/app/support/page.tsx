import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-10" />

      {/* Header */}
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24 text-center">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            Support the Project
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Enjoying the API?
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This open-source fake e-commerce API is built and maintained to help
            frontend developers learn faster and practice real-world API usage.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why support this project?
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-xl">🚀</span>
                <span>
                  Keep the API free, stable, and available for everyone.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🛠️</span>
                <span>Support maintenance, bug fixes, and new features.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📚</span>
                <span>Help improve documentation and learning resources.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">💛</span>
                <span>Support independent open-source work.</span>
              </li>
            </ul>
          </div>

          {/* Support card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />

            <div className="relative bg-white rounded-2xl shadow-xl p-10 text-center">
              <div className="text-6xl mb-6">☕</div>

              <h3 className="text-2xl font-bold mb-3">
                Traktir Coffee via Saweria
              </h3>

              <p className="text-gray-600 mb-8">
                If this project helps you, consider supporting it by buying a
                coffee. Every contribution means a lot ❤️
              </p>

              <a
                href="https://saweria.co/mufkimustache"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                ☕ Traktir Coffee
              </a>

              <p className="text-sm text-gray-400 mt-4">
                You will be redirected to Saweria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12 text-center text-sm text-gray-500 space-y-2">
          <p>Thank you for supporting an independent open-source project.</p>

          <p>
            <a
              href="https://github.com/abdillahmufki/fake-api-eccomerce"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              View source on GitHub
            </a>
          </p>

          <Link href="/" className="underline hover:text-black block">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
