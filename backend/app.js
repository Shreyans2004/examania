const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const db = mysql.createConnection({
  host:  config.host,
  user:  config.user,
  password: config.password,
  database: config.database,
})

app.get("/", (req,res) => {
  res.json({message: "Welcome to the Examania application."});
});

app.get("/questions/:id", (req,res) => {
  const id = req.params.id;
  db.query("SELECT * FROM questions WHERE quesID = ?", id, (err, result) => {
    if(err){
      console.log(err.sqlMessage);
    } else {
      res.json(result);
      console.log("result from backend:\n");
      console.log(result);
    }
  });
});

app.get("/questions", (req,res) => {
  db.query("SELECT * FROM questions", (err, result) => {
    if(err){
      console.log(err.sqlMessage);
    } else {
      res.json(result);
      console.log("result from backend:\n");
      console.log(result);
    }
  });
});
app.post("/questions", (req,res) => {
  const q = "INSERT INTO questions  (quesID, quesText ,quesType ,optionA ,optionB ,optionC ,optionD , answer , marks,  difficulty, concept, quesSubject)  VALUES (?) ;"
  const values = [
    req.body.quesID, req.body.quesText, req.body.quesType,
    req.body.optionA, req.body.optionB, req.body.optionC, req.body.optionD,
    req.body.answer, parseInt(req.body.marks),
    req.body.difficulty, req.body.concept, 
    req.body.quesSubject
  ];
  console.log(values);
  db.query(q, [values], (err, result) => {
    if(err){
      console.log(err);
    } else {
      console.log("question added successfully:\n")
    }
  });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});