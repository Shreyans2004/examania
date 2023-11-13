const mysql = require("mysql2/promise");
const config = require("./config");

const db = mysql.createPool({
  host : config.host,
  user : config.user,
  password: config.password,
  database: config.database,
  port: config.dbport,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;