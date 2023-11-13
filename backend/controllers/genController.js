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

const getTests = async (req,res) => {
  try {
    
    const q = "SELECT * FROM tests WHERE userid = ?;" ;
    const [tests,fields] = await db.execute(q,[req.userId]);

    const options = {
      month: 'short',day: 'numeric',year: 'numeric',hour: 'numeric',minute: 'numeric',timeZoneName: 'short', hour12: false
    };
    tests.forEach((test) => {
      test.start_time = test.start_time.toLocaleString(undefined,options);
      test.end_time = test.end_time.toLocaleString(undefined,options);
    });

    res.json({message: "success", tests});

  } catch (error) {
    res.status(500).json({message: "failure"});
    console.log(error.sqlMessage);
    console.log(error);
  }
}         // to get all tests of a user

const getTestResults = async (req,res) => {
  try {
    
    const { testId , examName } = req.body ;
    const q = "SELECT questions.* ,user_answer, ques_score, verdict FROM test_results JOIN questions ON test_results.quesid = questions.quesid WHERE testid = ? ;" ;
    const [rows,fields] = await db.execute(q,[req.body.testId]);

    const [examDetails,filds] = await db.execute("SELECT * FROM exam_details WHERE exam_name = ? ;",[examName]);

    const groupedQuestions = {} ;
    rows.forEach((question) => {
      const { ques_subject, ques_type } = question;
      const key = `${ques_subject}_${ques_type}`;
      if (!groupedQuestions[key]) {
        groupedQuestions[key] = {
          ques_subject,
          ques_type,
          questions: [],
        };
      }
      groupedQuestions[key].questions.push(question);
    });

    res.json({message: "success", allQuestions : Object.values(groupedQuestions), examDetails});

  } catch (error) {
    res.status(500).json({message : "failure"});
    console.log(error.sqlMessage);
    console.log(error);
  }
}

module.exports = {
  getExams,
  addQuestion,
  getTests,
  getTestResults,
};