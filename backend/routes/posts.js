import express from "express";
import { getAllPosts, addPost } from "../controllers/posts.js";
import { verifyUserToken } from "../middleware/authorize.js";
const router = express.Router();

router.get("/", getAllPosts);
router.post("/addPost", verifyUserToken, addPost);

export { router as postRouter };
