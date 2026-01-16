import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-10" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
              Public Fake API
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Fake E-Commerce <br />
              <span className="text-gray-400">API for Frontend</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A clean and reliable fake e-commerce API designed for frontend
              beginners to practice data fetching, pagination, validation
              errors, and UI state management.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link
                href="/docs"
                className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Read Docs
              </Link>

              <Link
                href="/playground"
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Try Playground
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="bg-black text-green-400 text-sm rounded-xl p-6 shadow-2xl font-mono">
              <div className="relative">
                <div className="shadow-2xl">
                  <div className="relative">
                    <CodeBlock
                      title={`GET ${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=1`}
                      language="json"
                      code={`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Scalevengers Merch - T-shirt Winch Winch Solution Long",
      "price": 350000,
      "stock": 10,
      "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mdvv5ql15og26e@resize_w900_nl.webp",
      "description": "T-shirt lengan panjang dengan desain Winch Winch Solution. Cocok untuk aktivitas outdoor dan trail ride."
    }
  ],
  "meta": {
   "total": 5,
    "page": 1,
    "limit": 1,
    "totalPages": 5
  }
}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why use this API?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Friendly",
                desc: "Simple endpoints and clean responses designed for frontend learners.",
              },
              {
                title: "Realistic API",
                desc: "Pagination, search, and schema validation similar to real-world APIs.",
              },
              {
                title: "No Auth Required",
                desc: "Instant access without tokens or setup. Just fetch and go.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Available Routes
          </h2>
          <p className="text-gray-600 text-center mb-12">
            A simple set of endpoints to practice real-world frontend data
            flows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Products list */}
            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Products</h3>

              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <span className="inline-block w-16 text-green-600 font-semibold">
                    GET
                  </span>
                  /api/products
                </li>
                <li>
                  <span className="inline-block w-16 text-blue-600 font-semibold">
                    POST
                  </span>
                  /api/products
                </li>
              </ul>

              <p className="text-gray-600 mt-4 text-sm">
                Fetch product list with pagination and search. Create operations
                return simulated responses.
              </p>
            </div>

            {/* Product detail */}
            <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Product Detail</h3>

              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <span className="inline-block w-16 text-green-600 font-semibold">
                    GET
                  </span>
                  /api/products/:id
                </li>
                <li>
                  <span className="inline-block w-16 text-yellow-600 font-semibold">
                    PATCH
                  </span>
                  /api/products/:id
                </li>
                <li>
                  <span className="inline-block w-16 text-red-600 font-semibold">
                    DELETE
                  </span>
                  /api/products/:id
                </li>
              </ul>

              <p className="text-gray-600 mt-4 text-sm">
                Retrieve, update, or delete a single product. Update and delete
                operations are simulated and never persist data.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 text-center text-sm text-gray-500">
            All write operations (<b>POST</b>, <b>PATCH</b>, <b>DELETE</b>)
            return simulated responses and <b>never persist data</b>.
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/playground"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Try in Playground
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Start building your frontend today
          </h2>
          <p className="mt-4 text-gray-400">
            Explore the documentation or test the API instantly.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/docs"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium"
            >
              Documentation
            </Link>
            <Link
              href="/playground"
              className="px-6 py-3 border border-gray-600 rounded-lg font-medium"
            >
              Playground
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
