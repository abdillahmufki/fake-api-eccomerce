"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

const ENDPOINTS = [
  {
    label: "Products (List)",
    path: "/api/products",
    methods: ["GET", "POST"] as HttpMethod[],
    supportsSearch: true,
    supportsPagination: true,
    supportsBody: true,
    default: {
      page: 1,
      limit: 5,
      search: "",
      body: {
        name: "Scalevengers Merch - T-shirt Winch Winch Solution Long",
        price: 350000,
        image:
          "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mdvv5ql15og26e@resize_w900_nl.webp",
        stock: 10,
        description:
          "T-shirt lengan panjang dengan desain Winch Winch Solution. Cocok untuk aktivitas outdoor dan trail ride.",
      },
    },
  },
  {
    label: "Product Detail",
    path: "/api/products/1",
    methods: ["GET", "PATCH", "DELETE"] as HttpMethod[],
    supportsSearch: false,
    supportsPagination: false,
    supportsBody: true,
    default: {
      body: {
        name: "Updated Products",
        price: 299000,
        stock: 5,
        image: "https://picsum.photos/300",
        description: "The product description has been updated.",
      },
    },
  },
];

export default function Playground() {
  const [endpointIndex, setEndpointIndex] = useState(0);
  const endpoint = ENDPOINTS[endpointIndex];

  const [method, setMethod] = useState<HttpMethod>(endpoint.methods[0]);

  const [search, setSearch] = useState(endpoint.default.search || "");
  const [page, setPage] = useState(endpoint.default.page || 1);
  const [limit, setLimit] = useState(endpoint.default.limit || 5);

  const [body, setBody] = useState(
    JSON.stringify(endpoint.default.body || {}, null, 2)
  );

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams({
    ...(endpoint.supportsPagination && {
      page: String(page),
      limit: String(limit),
    }),
    ...(endpoint.supportsSearch && search && { search }),
  }).toString();

  const url = API_BASE_URL + endpoint.path + (query ? `?${query}` : "");

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(url, {
        method,
        headers:
          method === "POST" || method === "PATCH"
            ? { "Content-Type": "application/json" }
            : undefined,
        body: method === "POST" || method === "PATCH" ? body : undefined,
      });

      const responseBody = res.status !== 204 ? await res.json() : null;

      if (!res.ok) {
        throw {
          status: res.status,
          body: responseBody,
        };
      }

      if (res.status === 204) {
        setData({ success: true, message: "Deleted successfully" });
      } else {
        setData(responseBody);
      }
    } catch (err: any) {
      if (err?.body) {
        setError(
          JSON.stringify(
            {
              status: err.status,
              ...err.body,
            },
            null,
            2
          )
        );
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">API Playground</h1>
          <p className="text-gray-600 mt-2">
            Test Products API (GET, POST, PATCH, DELETE)
          </p>
        </header>

        <section className="bg-white rounded-lg shadow p-6 mb-6 space-y-4">
          {/* Endpoint */}
          <select
            value={endpointIndex}
            onChange={(e) => {
              const ep = ENDPOINTS[Number(e.target.value)];
              setEndpointIndex(Number(e.target.value));
              setMethod(ep.methods[0]);
              setSearch(ep.default.search || "");
              setPage(ep.default.page || 1);
              setLimit(ep.default.limit || 5);
              setBody(JSON.stringify(ep.default.body || {}, null, 2));
            }}
            className="w-full border rounded px-3 py-2"
          >
            {ENDPOINTS.map((ep, i) => (
              <option key={ep.label} value={i}>
                {ep.label}
              </option>
            ))}
          </select>

          {/* Method */}
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as HttpMethod)}
            className="w-full border rounded px-3 py-2"
          >
            {endpoint.methods.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          {endpoint.supportsSearch && (
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full border rounded px-3 py-2"
            />
          )}

          {endpoint.supportsPagination && (
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                value={page}
                onChange={(e) => setPage(+e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(+e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          )}

          {(method === "POST" || method === "PATCH") && (
            <textarea
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full border rounded px-3 py-2 font-mono"
            />
          )}

          <div className="bg-gray-100 p-2 font-mono text-sm break-all">
            {method} {url}
          </div>

          <button
            onClick={sendRequest}
            className="px-6 py-3 bg-black text-white rounded"
          >
            Send Request
          </button>
        </section>

        {data && (
          <CodeBlock code={JSON.stringify(data, null, 2)} language="json" />
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <div className="text-red-700 font-semibold mb-2">
              ❌ Request Error
            </div>
            <CodeBlock code={error} language="json" />
          </div>
        )}
      </div>
    </main>
  );
}
