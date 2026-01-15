import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

export class ProductService {
  constructor(private repo: ProductRepository) {}

  async getAllProducts(query: { page: number; limit: number; search: string }) {
    return this.repo.findAll(query.page, query.limit, query.search);
  }

  async getById(id: number) {
    return this.repo.findById(id);
  }

  async create(data: any) {
    return this.repo.create(data);
  }

  async update(id: number, data: Partial<Omit<Product, "id">>) {
    return this.repo.update(id, data);
  }

  // 🔥 DELETE
  async delete(id: number) {
    return this.repo.delete(id);
  }
}
