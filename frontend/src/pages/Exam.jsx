import axios from 'axios'
import { useState, useEffect } from 'react'
import Question from '../Components/Question';
import  API_URLS from '../constants.js' ;
import Timer from '../Components/Timer.jsx';
import Questions1 from '../Components/Questions1.jsx';
import "../styles/Exam.css"
import { useNavigate } from 'react-router-dom';

const Exam = () => {
  const navigate = useNavigate() ;
  const [quesData,setQuesData] = useState([]) ;

  const [current,setCurrent] = useState({});
  const [section,setSection] = useState({}) ;
  
  const [results,setResults] = useState([]) ;
  // const [score,setScore] = useState(0) ;
  // const [attempted,setAttempted] = useState(0) ;
  // const [correctQues,setCorrectQues] = useState(0) ;

  useEffect(() => {
    const fetchAllQues = async () => {
      try {
        const temp = JSON.parse(localStorage.getItem('quesData')) ;
        setQuesData(temp) ;
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllQues() ;
  }, []) ;

  useEffect(() => {
    const handleSection = async () => {
      try {
        console.log("quesData changed to below:");
        console.log(quesData[1]);
        if (quesData.length > 0) {
          setSection(quesData[1]) ;
          console.log("section set to below:");
          console.log(section);
        }

        const initResults = [] ;
        for (let i = 0; i < quesData.length; i++) {
          for(let j = 0; j < quesData[i].questions.length; j++) {
            initResults.push({
              quesid: quesData[i].questions[j].quesid,
              userAnswer: "",
              score: 0,
              verdict: "",
              correctAnswer: quesData[i].questions[j].answer
            }) ;
          }
        }

        setResults(initResults) ;
        console.log("results initialized to below:");
        console.log(results[0]);

      } catch (error) {
        console.log(error);
      }
    }

    handleSection() ;

  }, [quesData]) ;

  console.log("RESULTS:");
  console.log(results);

  useEffect(() => {
    const handleCurrent = async () => {
      try {
        if (section.questions.length > 0) {
          setCurrent(section.questions[0]) ;
          console.log("current set to below:");
          console.log(current);
        }
      } catch (error) {
        console.log(error);
      }
    }

    handleCurrent() ;
  }, [section]);

  const validateAnswer = (quesid, userAnswer) => {
    setResults(prevResults => {
      const index = prevResults.findIndex(ques => ques.quesid === quesid);
      const posMark = section.posMark;
      const negMark = section.negMark;
      const updatedQuestion = { ...prevResults[index] };
      updatedQuestion.userAnswer = userAnswer;
      if(userAnswer === "") {
        updatedQuestion.score = 0;
        updatedQuestion.verdict = "Unattempted";
      } else if (userAnswer === updatedQuestion.correctAnswer) {
        updatedQuestion.score = posMark; 
        updatedQuestion.verdict = "Correct";
      } else {
        updatedQuestion.score = negMark; 
        updatedQuestion.verdict = "Wrong";
      }
      
      const updatedResults = [...prevResults];
      updatedResults[index] = updatedQuestion;
      console.log(updatedResults[index], index);

      return updatedResults;
    });
  };

  const handleNext = (e) => {
    e.preventDefault() ;
    console.log("toNext called");
    const i = quesData[1].questions.findIndex((ques) => ques.quesid === current.quesid) ;
    console.log(i);
    if (i < quesData.length - 1) {
      setCurrent(quesData[1].questions[i+1]) ;
    }
  }

  const handlePrevious = (e) => {
    e.preventDefault() ;
    console.log("handle Prev called");
    const i = quesData[1].questions.findIndex((ques) => ques.quesid === current.quesid) ;
    console.log(i);
    if (i < quesData.length - 1) {
      setCurrent(quesData[1].questions[i-1]) ;
    }
  }  

  // const changeQuestion = (e) => {
  //   e.preventDefault() ;
  //   console.log("change Question called");
  //   const i = quesData[1].questions.findIndex((ques) => ques.quesid === current.quesid) ;
  //   console.log(i);
  //   if (i < quesData.length - 1) {
  //     setCurrent(quesData[1].questions[i-1]) ;
  //   }
  // }

  const handleSubmit = async() => {
    var totalScore = 0 ;
    var attemptedQuestions = 0 ;
    var correctQuestions = 0 ;
    const totalQuestions = results.length ;

    for (let i = 0; i < totalQuestions; i++) {
      if (results[i].userAnswer !== "") {
        attemptedQuestions++ ;
        totalScore += results[i].score ;
        if (results[i].verdict === "Correct") {
          correctQuestions++ ;
        }
      }
    }
    console.log(totalScore,attemptedQuestions,correctQuestions);
    localStorage.setItem('totalScore',totalScore) ;
    localStorage.setItem('attemptedQuestions',attemptedQuestions) ;
    localStorage.setItem('correctQuestions',correctQuestions) ;
    localStorage.setItem('totalQuestions',totalQuestions) ;

    const formData = {
      testId : localStorage.getItem('testId') || "60f6d4a3e4d8f3b0a8a0c5d5",
      totalScore: totalScore,
      attemptedQuestions: attemptedQuestions,
      correctQuestions: correctQuestions,
      results : results
    }

    try {

      console.log(results)

      const response = await axios.post(API_URLS.SUBMIT_TEST,formData) ;
      console.log(response);
      navigate('/result') ;

    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div>
      <div className='main'>
      <div className='main1_1'>
        <Timer/>
        <Question key = {current.quesid} data = {current} handleNext = {handleNext}  handlePrevious = {handlePrevious} validateAnswer = {validateAnswer} />
        {/* <div className='right'>
        <Questions1/>
        </div> */}
        </div>
        <button className='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Exam ;