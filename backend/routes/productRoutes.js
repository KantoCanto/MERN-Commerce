import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    //get products from database. By passing in an empty object we are fetching all the products
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //getting a single product
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }

    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
