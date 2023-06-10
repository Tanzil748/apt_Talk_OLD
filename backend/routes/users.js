import express from "express";
import { getUser } from "../controllers/users";
const router = express.Router();

router.get("/find/:id", getUser);

export { router as userRouter };
