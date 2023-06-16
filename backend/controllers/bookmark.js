import { pool } from "../db/connectDb.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// display bookmark counts to ALL users
export const getBookmark = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT bookmark_user_id FROM bookmarks WHERE bookmark_post_id = $1",
      [req.query.postId]
    );
    let data = result.rows; // Assign the query result to the data variable
    return res
      .status(200)
      .json(data.map((bookmarked) => bookmarked.bookmark_user_id));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const addBookmark = async (req, res) => {
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
        "INSERT INTO bookmarks (bookmark_post_id, bookmark_user_id) VALUES ($1, $2)",
        [req.body.postId, user.id]
      );
      return res.status(200).json("Bookmarked!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};

export const deleteBookmark = async (req, res) => {
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
        "DELETE FROM bookmarks WHERE bookmark_post_id = $1 AND bookmark_user_id = $2",
        [req.query.postId, user.id]
      );
      return res.status(200).json("Bookmark removed!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};
