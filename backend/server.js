import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload } from "./middleware/multer.js";
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
    origin: "https://apttalk-demo.netlify.app",
  })
);
app.use(express.json());
app.use(cookieParser());

// upload image endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  // Access the file URL from the Cloudinary response
  const imageUrl = file.path;
  // Return the file URL to the client
  res.status(200).json({ imageUrl });
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
