import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user: "postgres",
  password: process.env.DBPASS,
  host: "localhost",
  port: "5433",
  database: "aptTalk",
});
