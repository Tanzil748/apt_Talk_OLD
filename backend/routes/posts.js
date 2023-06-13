import express from "express";
import { getAllPosts, addPost } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getAllPosts);
router.post("/addPost", addPost);

export { router as postRouter };
