import mysql from "mysql2/promise";

let pool = null;

export async function connectSQL(config) {
  if (!pool) {
    pool = await mysql.createPool(config);
    console.log("✅ MySQL connected");
  }
  return pool;
}

export async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
