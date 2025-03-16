const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "1234",
});

// Create the database if it doesn't exist
connection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || "pizza_db"}`,
  (err) => {
    if (err) {
      console.error("❌ Database creation failed:", err.message);
    } else {
      console.log("✅ Database is ready!");
    }
  } 
);

connection.end(); // Close the initial connection

// Create a pool for actual database usage
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "pizza_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("✅ Connected to MySQL database!");

// Export the promise-based pool
module.exports = pool.promise();
