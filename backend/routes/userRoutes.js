import express from "express";

import {
  create,
  deleteBook,
  fetch,
  update,
  searchByBookName,
} from "../controller/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const route = express.Router();

// Public Routes
route.get("/getallbooks", fetch);
route.get("/search", searchByBookName);

// Protected Routes
route.post("/create", authMiddleware, create);
route.put("/update/:id", authMiddleware, update);
route.delete("/delete/:id", authMiddleware, deleteBook);

export default route;