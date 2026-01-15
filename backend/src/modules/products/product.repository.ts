import { db } from "../../config/database";
import { Product } from "./product.model";

export class ProductRepository {
  async findAll(
    page: number,
    limit: number,
    search: string
  ): Promise<{ data: Product[]; total: number }> {
    const database = await db;

    const offset = (page - 1) * limit;
    const keyword = search ? `%${search}%` : "%";

    const data = await database.all(
      `SELECT * FROM products WHERE name LIKE ? LIMIT ? OFFSET ?`,
      keyword,
      limit,
      offset
    );

    const totalRow = await database.get(
      `SELECT COUNT(*) as count FROM products WHERE name LIKE ?`,
      keyword
    );

    return { data, total: totalRow.count };
  }

  async findById(id: number): Promise<Product | null> {
    const database = await db;
    const result = database.get(`SELECT * FROM products WHERE id = ?`, id);
    return result === undefined ? null : result;
  }

  async create(id: Omit<Product, "id">): Promise<Product> {
    const database = await db;

    const result = await database.run(
      `INSERT INTO products (name, price, image, description, stock)
        VALUES (?, ?, ?, ?, ?)`,
      id.name,
      id.price,
      id.image,
      id.description,
      id.stock
    );

    return { ...id, id: result.lastID! };
  }

  async update(
    id: number,
    data: Partial<Omit<Product, "id">>
  ): Promise<Product | null> {
    const database = await db;

    const existing = await this.findById(id);
    if (!existing) return null;

    const updated = { ...existing, ...data };

    await database.run(
      `UPDATE products
       SET name = ?, price = ?, image = ?, description = ?, stock = ?
       WHERE id = ?`,
      updated.name,
      updated.price,
      updated.image,
      updated.description,
      updated.stock,
      id
    );

    return updated;
  }

  async delete(id: number): Promise<boolean> {
    const database = await db;

    const result = await database.run(`DELETE FROM products WHERE id = ?`, id);

    return result.changes! > 0;
  }
}
