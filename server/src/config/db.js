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


const createUsersTable = async ()=>{
  try{
     const db = pool.promise();

     const [rows] = await db.query(`
      SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'users'`);

      if(rows[0].count===0){
        await db.query(`
          CREATE TABLE users(
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(60) NOT NULL,
          role ENUM('customer','owner','employee') DEFAULT 'customer',
          refresh_token VARCHAR(255) NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP

          )`);
          console.log("Users table created successfully.")

      }else{
        console.log("Users table already exist");
      }

  }catch(err){
      console.error("Error creating users table",err.message);
  }
}

createUsersTable();

// Export the promise-based pool
module.exports = pool.promise();
