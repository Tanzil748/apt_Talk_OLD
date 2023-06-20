import { pool } from "../db/connectDb.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getFollow = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Authentication failed");
  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error)
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");

    try {
      const result = await pool.query(
        "SELECT f.followerid, u.username FROM followers AS f INNER JOIN users AS u ON u.id = f.followerid WHERE f.followeduserid = $1",
        [user.id]
      );
      const data = result.rows; // Assign the query result to the data variable
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};

export const addFollow = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Authentication failed");
  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error) {
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");
    }

    try {
      await pool.query(
        "INSERT INTO followers (followeduserid, followerid) VALUES ($1)",
        [user.id]
      );
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};

export const deleteFollow = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Authentication failed");
  jwt.verify(token, process.env.JWTkey, async (error, user) => {
    if (error) {
      return res
        .status(403)
        .json("Authorization failed. Cannot do that action!");
    }

    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
};
