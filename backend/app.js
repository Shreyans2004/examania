const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const morgan = require("morgan");
const dbConfig = require("./dbConfig");
const port = process.env.PORT || 8000 ;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
})

app.get("/", (req,res) => {
  res.json({message: "Welcome to the Examania application."});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});