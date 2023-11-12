const db = require("../db");

const getExams = async(req, res) => {
  try {

    const q = "SELECT * FROM exam_types;";
    const [exams,fields] = await db.execute(q);
    res.json({ message : "success" , exams});

  } catch (error) {
    res.status(500).json({ message : "failure" });
    console.log(error.sqlMessage);
    console.log(error);
  }
}                  // to get all exams

const addQuestion = async(req, res) => {
  try {

    const q =
  "INSERT INTO questions  (quesid, ques_text ,ques_type ,ques_subject,optionA ,optionB ,optionC ,optionD , answer , marks,  difficulty, concept)  VALUES (?) ;";
    const values = [
      req.body.quesId,
      req.body.quesText,
      req.body.quesType,
      req.body.quesSubject,
      req.body.optionA,
      req.body.optionB,
      req.body.optionC,
      req.body.optionD,
      req.body.answer,
      parseInt(req.body.marks),
      req.body.difficulty,
      req.body.concept,
    ];
    console.log(values.length);
    console.log(values);
    await db.query(q, [values]);

    res.json({message: "Question added successfully"}); 
    console.log("question added successfully") ;

  } catch (error) {
    console.log(error);
    if(error.errno == 1062){
      res.status(500).json({message: "Unable to add question. Please Retry!"}); // duplicate entry
    } else if(error.errno == 1452){
      res.status(500).json({message: "Invalid subject !. Unable to add the question"});  // foreign key constraint of subject
    } else {
      res.status(500).json({message: "Unable to add the question due to network issue"});  // any other error
    }
  }
};            // to add a question into the DB


module.exports = {
  getExams,
  addQuestion,
};