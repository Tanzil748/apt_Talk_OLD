import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { authRouter } from "./routes/authentication.js";
import { postRouter } from "./routes/posts.js";
import { commentRouter } from "./routes/comments.js";
import { bookmarkRouter } from "./routes/bookmark.js";
import { followRouter } from "./routes/follows.js";

// middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: `${process.env.FRONTEND_LINK}`,
  })
);
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".").pop();
    cb(null, Date.now() + file.fieldname + "." + fileExtension);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

// routes
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/bookmark", bookmarkRouter);
app.use("/follow", followRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
