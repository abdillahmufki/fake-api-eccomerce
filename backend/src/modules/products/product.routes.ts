import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.post("/products", ProductController.create);
router.patch("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.destroy);

export default router;
