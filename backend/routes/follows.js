import express from "express";
import { getFollow, addFollow, deleteFollow } from "../controllers/follows.js";
const router = express.Router();

router.get("/", getFollow);
router.post("/", addFollow);
router.delete("/", deleteFollow);

export { router as followRouter };
