// require('dotenv').config();
module.exports = {
  host : process.env.DB_HOST || "localhost",
  user : process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "examania_local",
  dbport: process.env.DB_PORT || 3306,
  dburi : process.env.DB_URI || "mysql://root@localhost:3306/examania_local",
  port : process.env.API_PORT || 8000,
}