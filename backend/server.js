import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
import connectDB from "./config/db.js";
import { connect } from "mongoose";

const port = process.env.PORT || 4040;

connectDB(); // connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const server = app.listen(port, (req, res) => {
  console.log(`Server Running on ${port}`);
});

//handle server shutdown
process.on("SIGINT", () => {
  console.log("Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed :)");
    process.exit(0);
  });
});
