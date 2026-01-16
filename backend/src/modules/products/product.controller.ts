import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductRepository } from "./product.repository";

const repo = new ProductRepository();
const service = new ProductService(repo);

const ALLOWED_FIELDS = ["name", "price", "description", "stock", "image"];

console.log("test");

function validateBody(body: any) {
  const keys = Object.keys(body);
  return keys.filter((key) => !ALLOWED_FIELDS.includes(key));
}

export class ProductController {
  static async index(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";

    const { data, total } = await service.getAllProducts({
      page,
      limit,
      search,
    });

    res.json({
      success: true,
      message: "Products fetched successfully",
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }

  static async show(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await service.getById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  }

  static async create(req: Request, res: Response) {
    const invalidFields = validateBody(req.body);

    if (invalidFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: invalidFields.map((f) => `Unknown field: ${f}`),
      });
    }

    res.status(201).json({
      success: true,
      message: "Product created successfully (fake)",
      data: {
        id: Date.now(),
        ...req.body,
      },
    });
  }

  static async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const invalidFields = validateBody(req.body);

    if (invalidFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: invalidFields.map((f) => `Unknown field: ${f}`),
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully (fake)",
      data: {
        id,
        ...req.body,
      },
    });
  }

  static async destroy(req: Request, res: Response) {
    res.status(204).send();
  }
}
