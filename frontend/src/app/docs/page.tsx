import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
            Documentation
          </span>

          <h1 className="text-4xl font-extrabold mb-4">
            Fake E-Commerce API Docs
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            A public fake API designed to help frontend developers practice data
            fetching, pagination, search, and handling realistic API responses.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-8 py-16 space-y-20">
        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold mb-8">What you can do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Fetch Products</h3>
              <p className="text-gray-600 mb-4">
                Retrieve a list of fake products with a realistic response
                structure for building product listings.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                GET /api/products
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Pagination & Search
              </h3>
              <p className="text-gray-600 mb-4">
                Practice pagination UI and search input using query parameters.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                /api/products?page=1&limit=5&search=sepatu
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                CRUD Operations (Simulated)
              </h3>
              <p className="text-gray-600 mb-4">
                Practice creating, updating, and deleting products. All write
                operations return simulated responses and do not persist data.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                POST / PATCH / DELETE /api/products
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Schema Validation</h3>
              <p className="text-gray-600 mb-4">
                Learn how APIs validate request bodies. Unknown or invalid
                fields will return a clear validation error.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                400 Invalid request body
              </div>
            </div>
          </div>
        </div>

        {/* Fake write explanation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">⚠️ Fake Write Behavior</h3>
          <p className="text-gray-700">
            This is a <b>public fake API</b>. All write operations (<b>POST</b>,{" "}
            <b>PATCH</b>, <b>DELETE</b>) return successful responses but{" "}
            <b>never persist data</b>.
          </p>
          <p className="text-gray-700 mt-2">
            This design keeps the API safe for public use while still allowing
            you to practice real-world frontend CRUD flows.
          </p>
        </div>

        {/* Next step */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to try it out?</h3>
          <p className="text-gray-600 mb-8">
            Explore the playground to experiment with the API in real time.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/playground"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Open Playground
            </Link>

            <Link
              href="/"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
