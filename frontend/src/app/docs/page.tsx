import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DocsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
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

          <div className="mt-6 bg-gray-100 border rounded-lg p-4 font-mono text-sm">
            Base URL: <span className="font-semibold">{API_BASE_URL}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16 space-y-20">
        <div>
          <h2 className="text-2xl font-bold mb-8">What you can do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Fetch Products</h3>
              <p className="text-gray-600 mb-4">
                Retrieve a list of fake products with a realistic response
                structure for building product listings.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                GET /api/products
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Pagination & Search
              </h3>
              <p className="text-gray-600 mb-4">
                Practice pagination UI and search input using query parameters.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                /api/products?page=1&limit=5&search=shirt
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
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

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Schema Validation</h3>
              <p className="text-gray-600 mb-4">
                Learn how APIs validate request bodies. Invalid fields return
                clear validation errors.
              </p>

              <div className="bg-gray-900 text-green-400 text-sm rounded p-4 font-mono">
                400 Invalid request body
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">⚠️ Fake Write Behavior</h3>
          <p className="text-gray-700">
            This is a public fake API. POST, PATCH, and DELETE always return
            success but never persist data.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Products</h2>

          <div className="bg-white rounded-lg border p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg">GET /api/products</h3>

              <CodeBlock
                title="Fetch"
                code={`fetch(\`\https://fake-api.smart-greenhouse.my.id/api/products?page=1&limit=5&search=shirt\`)
  .then(res => res.json())
  .then(console.log);`}
              />

              <CodeBlock
                title="cURL"
                language="bash"
                code={`curl "\https://fake-api.smart-greenhouse.my.id/api/products?page=1&limit=5&search=Winch"`}
              />

              <CodeBlock
                title="Response"
                code={`{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Scalevengers Merch - T-shirt Winch Winch Solution Long",
      "price": 350000,
      "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mdvv5ql15og26e@resize_w900_nl.webp",
      "stock": 10,
      "description": "T-shirt lengan panjang dengan desain Winch Winch Solution. Cocok untuk aktivitas outdoor dan trail ride."
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 5,
    "totalPages": 1
  }
}`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">POST /api/products</h3>

              <CodeBlock
                title="Fetch"
                code={`fetch(\`\https://fake-api.smart-greenhouse.my.id/api/products\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "New Product",
    price: 120000,
    stock: 5,
    image: "https://picsum.photos/300",
    description: "Demo product"
  })
}).then(res => res.json())
  .then(console.log);`}
              />

              <CodeBlock
                title="cURL"
                language="bash"
                code={`curl -X POST "\https://fake-api.smart-greenhouse.my.id/api/products" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "New Product",
    "price": 120000,
    "stock": 5,
    "image": "https://picsum.photos/300",
    "description": "Demo product"
  }'`}
              />

              <CodeBlock
                title="Response"
                code={`{
  "success": true,
  "data": {
    "id": 999,
    "name": "New Product",
    "price": 120000,
    "stock": 5,
    "image": "https://picsum.photos/300",
    "description": "Demo product"
  },
  "message": "Product created (simulated)"
}`}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Product Detail</h2>

          <div className="bg-white rounded-lg border p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg">GET /api/products/:id</h3>

              <CodeBlock
                title="cURL"
                language="bash"
                code={`curl "\https://fake-api.smart-greenhouse.my.id/api/products/1"`}
              />

              <CodeBlock
                title="Response"
                code={`{
  "success": true,
  "data": {
    "id": 1,
    "name": "Scalevengers Merch - T-shirt Winch Winch Solution Long",
    "price": 350000,
    "stock": 10,
    "image": "https://picsum.photos/300",
    "description": "T-shirt lengan panjang dengan desain Winch Winch Solution."
  }
}`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">PATCH /api/products/:id</h3>

              <CodeBlock
                title="cURL"
                language="bash"
                code={`curl -X PATCH "\https://fake-api.smart-greenhouse.my.id/api/products/1" \\
  -H "Content-Type: application/json" \\
  -d '{ "price": 299000 }'`}
              />

              <CodeBlock
                title="Response"
                code={`{
  "success": true,
  "data": {
    "id": 1,
    "price": 299000
  },
  "message": "Product updated (simulated)"
}`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                DELETE /api/products/:id
              </h3>

              <CodeBlock
                title="cURL"
                language="bash"
                code={`curl -X DELETE "\https://fake-api.smart-greenhouse.my.id/api/products/1"`}
              />

              <CodeBlock
                title="Response"
                code={`{
  "success": true,
  "message": "Deleted successfully"
}`}
              />
            </div>
          </div>
        </section>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to try it out?</h3>
          <p className="text-gray-600 mb-8">
            Explore the playground to experiment with the API in real time.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/playground"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium"
            >
              Open Playground
            </Link>

            <Link
              href="/"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
