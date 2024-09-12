"use server";

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "a2hosting",
  database: process.env.DB_NAME || "a2host",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// we have to export this pool and use in different file here is only connection
module.exports = pool; // export the pool
