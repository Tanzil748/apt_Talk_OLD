import { pool } from "../db/connectDb.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// all posts that show on home page
export const getAllPosts = async (req, res) => {
  try {
    const posts = await pool.query(
      "SELECT p.*, u.username FROM posts AS p INNER JOIN users AS u ON u.id = p.postauthorid ORDER BY p.id DESC"
    ); //latest posts up top
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// add post
export const addPost = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res.status(401).json("Authentication failed. No linked user found");

  // grab the user id from the id created in authentication.js
  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error)
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");

    try {
      await pool.query(
        "INSERT INTO posts (postcontent, picture, postauthorid, title) VALUES ($1, $2, $3, $4)",
        [req.body.postContent, req.body.picture, user.id, req.body.title]
      );
      return res.status(200).json("Post added!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};

// delete post
export const deletePost = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res.status(401).json("Authentication failed. No linked user found");

  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error)
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");

    try {
      await pool.query(
        "DELETE FROM posts WHERE id = $1 AND postauthorid = $2",
        [req.params.id, user.id]
      );
      // if()
      return res.status(200).json("Post deleted!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};
