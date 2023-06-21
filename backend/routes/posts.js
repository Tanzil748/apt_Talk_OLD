import express from "express";
import { getAllPosts, addPost, deletePost } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getAllPosts);
router.post("/:id", addPost);
router.delete("/:id", deletePost);

export { router as postRouter };
