import { pool } from "../db/connectDb.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getComments = async (req, res) => {
  try {
    const info = await pool.query(
      "SELECT c.*, u.username FROM comments AS c INNER JOIN users AS u ON u.id = c.commentuserid WHERE c.commentpostid = $1 ORDER BY c.id DESC",
      [req.query.postId]
    );
    return res.status(200).json(info.rows); //comments appear in rows
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const addComment = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Authentication failed. No linked user found");
  }

  // grab the user id from the id created in authentication.js
  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error)
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");

    try {
      await pool.query(
        "INSERT INTO comments (commentcontent, commentuserid, commentpostid) VALUES ($1, $2, $3)",
        [req.body.commentContent, user.id, req.body.postId]
      );
      return res.status(200).json("Comment created!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};
