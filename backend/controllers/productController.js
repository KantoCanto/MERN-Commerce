import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desct Fetch all products
//@routes GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  //get products from database. By passing in an empty object we are fetching all the products
  const products = await Product.find({});
  res.json(products);
});

//@desct Fetch single product
//@routes GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }

  res.status(404).json({ message: "Product not found" });
});

export { getProducts, getProductById };
