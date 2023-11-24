const db  = require("../db");
const {nanoid} =  require('nanoid');

const startTest =  async (req,res) => {
  const testId = nanoid();
  const userId = req.userId;          //coming from verifyUser middleware
  const { examName, difficulty } = req.body;

  try {

    const selectQuery = `SELECT * FROM exam_details WHERE exam_name = '${examName}' ;`;
    const [rows,fields] = await db.execute(selectQuery);

    const totalQuestions = rows.reduce((sum, row) => sum + row.no_of_ques, 0);

    const insertQuery = `INSERT INTO tests (testid, userid, exam_name, difficulty, total_ques , start_time, end_time) VALUES
      ('${testId}', '${userId}', '${examName}', '${difficulty}', '${totalQuestions}', NOW(), NOW() );`;
    await db.execute(insertQuery);

    res.json({ message : "success", testId, examDetails : rows , totalQuestions});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message : "failure" });
  }

}        //sends testId and examDetails and inserts a new row in tests table

const getTestQuestions = async(req, res) => {

  const { difficulty, examName }  = req.body ;     
  console.log(difficulty, examName)           

  try {

    const detailsQuery = `SELECT * FROM exam_details WHERE exam_name = '${examName}';`;
    const [rows,fields] = await db.execute(detailsQuery);

    const allQuestions = [] ;
    const q = `SELECT quesid, ques_text, optionA, optionB, optionC, optionD, answer  FROM questions WHERE 
    difficulty = ? AND ques_subject = ? AND ques_type = ? AND marks = ? ORDER BY RAND() LIMIT ?;`;

    for (let i = 0; i < rows.length; i++) {
      const [questions,fields] = await db.execute( q, [ difficulty, rows[i].exam_subject, rows[i].ques_type, rows[i].pos_mark, rows[i].no_of_ques ] );
      console.log(questions.length);
      allQuestions.push( { subject : rows[i].exam_subject, numOfQues : rows[i].no_of_ques, quesType : rows[i].ques_type, posMark : rows[i].pos_mark , negMark: rows[i].neg_mark,  questions} );
    }

    console.log("-------ALL QUESTIONS----------");
    console.log(allQuestions);
    res.json({ message : "success" , allQuestions});

  } catch (err) {
    console.log(err.sqlMessage);
    res.status(500).json({ message : "failure" });   
  }
};           //sends all questions required for the test

const getQuestion = async (req, res) => {

  const quesId = req.params.id ;                                    // coming from the url
  const q = `SELECT * FROM questions WHERE quesid = '${quesId}';`;

  try {

    const [question,fields] = await db.execute(q);
    res.json({ message : "success" ,  question });
    console.log("question from backend");
    console.log(question);

  } catch (err) {
    console.log(err.sqlMessage);
    res.json({ message : "failure" });
  }
};                         // to get a question by id

const submitTest = async (req, res) => {
  const { testId, totalScore , attemptedQuestions, correctQuestions,  results } = req.body;
  console.log("---Results--");
  console.log(results);
  const values = results.map(({ quesid, userAnswer,score, verdict }) => [testId, quesid, userAnswer,score, verdict]);
  console.log(values);

  try {

    const updateQuery = `UPDATE tests SET total_score = ${totalScore}, attempted_ques = ${attemptedQuestions}, correct_ques = ${correctQuestions} , end_time = NOW()  WHERE testid = '${testId}';`;
    await db.execute(updateQuery);

    const q = `INSERT INTO test_results (testid, quesid, user_answer, ques_score, verdict) VALUES ?;`;
    await db.query(q, [values]);

    res.status(200).json({ message : "success" });

  } catch (error) {
    console.log(error);
    console.log(error.sqlMessage);
    res.status(500).json({ message : "failure" });
  }
};                // updates the tests table and inserts few rows into test_results table

module.exports = {
  startTest,
  getTestQuestions,
  getQuestion,
  submitTest,
};