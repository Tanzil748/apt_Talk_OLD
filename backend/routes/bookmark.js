import express from "express";
import {
  getBookmark,
  addBookmark,
  deleteBookmark,
} from "../controllers/bookmark.js";
const router = express.Router();

router.get("/", getBookmark);
router.post("/", addBookmark);
router.delete("/", deleteBookmark);

export { router as bookmarkRouter };
