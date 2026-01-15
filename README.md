# 🛍️ Fake E-Commerce API

A **public, open-source fake e-commerce API** built to help frontend developers practice real-world API usage such as data fetching, pagination, search, validation errors, and UI state management — without worrying about authentication or data persistence.

> Perfect for learning React, Next.js, Vue, or any frontend framework.

---

## ✨ Features

- ✅ Public & free to use
- ✅ No authentication required
- ✅ Realistic REST API responses
- ✅ Pagination & search
- ✅ Schema validation (invalid fields return errors)
- ✅ Fake write operations (safe for public use)
- ✅ Interactive Playground UI
- ✅ Beginner-friendly documentation

---

## 🚨 Important Note (Fake Write Behavior)

This is a **fake API**.

All write operations:

- `POST`
- `PATCH`
- `DELETE`

will **return simulated success responses** but **never persist data**.

This design keeps the API safe for public usage while still allowing you to practice real-world frontend CRUD flows.

---

## 📦 Available Endpoints

### Products

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/products`     | Get product list           |
| GET    | `/api/products/:id` | Get product detail         |
| POST   | `/api/products`     | Create product (simulated) |
| PATCH  | `/api/products/:id` | Update product (simulated) |
| DELETE | `/api/products/:id` | Delete product (simulated) |

---

## 🔎 Query Parameters

### Pagination

```http
GET /api/products?page=1&limit=5
```

##Search

```bash
GET /api/products?search=sepatu
```

##Example Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Sepatu Lari",
      "price": 350000,
      "stock": 10,
      "image": "https://picsum.photos/300",
      "description": "T-shirt edisi trail malam."
    }
  ],
  "meta": {
    "page": 1,
    "limit": 5,
    "total": 20,
    "totalPages": 4
  }
}
```

##Playground

This project includes an interactive API Playground where you can:

- Select endpoints
- Switch HTTP methods (GET, POST, PATCH, DELETE)
- Modify query params & request body
- Inspect real-time responses
- Copy response JSON

👉 Open the Playground from the UI.

##ech Stack
Backend

- Node.js
- Express
- TypeScript
- SQLite

##Frontend

- Next.js (App Router)
- Tailwind CSS
- PrismJS (syntax highlighting)
