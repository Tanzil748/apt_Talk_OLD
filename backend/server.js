import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import cors from "cors";
import { pool } from "./db/connectDb.js";
import { authRouter } from "./routes/authentication.js";
import cookieParser from "cookie-parser";

// middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
