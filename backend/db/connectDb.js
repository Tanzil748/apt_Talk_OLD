import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  database: process.env.DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
});
