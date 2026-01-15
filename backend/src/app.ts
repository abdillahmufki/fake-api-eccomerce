import express from "express";
import { Request, Response } from "express";
import productRoutes from "./modules/products/product.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.disable("etag");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the Fake E-commerce API!");
});

app.use("/api", productRoutes);

export default app;
