import express from "express";
import authMiddleware from "../middleware/auth.js";
import adminAuthMiddleware from "../middleware/adminAuth.js";

// nếu bạn có upload/image/controller thì import như cũ
import { createItem, deleteItem, getItems } from "../controllers/itemController.js";
import upload from "../middleware/multer.js";

const itemRouter = express.Router();

// Public or user
itemRouter.get("/list", getItems);

// Admin only
itemRouter.post(
  "/",
  authMiddleware,
  adminAuthMiddleware,
  upload.single("image"),
  createItem
);

itemRouter.delete("/:id", authMiddleware, adminAuthMiddleware, deleteItem);

export default itemRouter;
