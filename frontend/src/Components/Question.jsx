import React, { useState } from "react";
import "../styles/Question.css";
const Question = (props) => {
  const [userAnswer,setUserAnswer] = useState("") ;
  console.log("From Question.jsx:")
  console.log(props.data);

  const handleChange = (e) => {
    setUserAnswer(e.target.value) ;
    console.log(`userAnswer: ${e.target.value}`);
    props.validateAnswer(props.data.quesid,e.target.value) ;
  }

  const resetOptions = () => {
    setUserAnswer("") ;
  }

  return (
    <>
      <div className="questions_1">
        <div className="Question">
          <h3 className="text_center">Question</h3>
          <p>
            {props.data.ques_text}
          </p>
        </div>
      
        <div className="answers">
          <input type="radio" id="optionA" name={`${props.quesid}-userAnswer`} value={"A"} onChange={handleChange} checked={userAnswer === "A"} />
          <label htmlFor="optionA">A. {props.data.optionA} </label>
        </div>

        <div className="answers">
          <input type="radio" id="optionB" name={`${props.quesid}-userAnswer`}  value={"B"} onChange={handleChange} checked={userAnswer === "B"} />
          <label htmlFor="optionB">B.{props.data.optionB}</label>
        </div>

        <div className="answers">
          <input  type="radio" id="optionC" name={`${props.quesid}-userAnswer`} value={"C"} onChange={handleChange} checked={userAnswer === "C"} />
          <label htmlFor="optionC">C. {props.data.optionC}</label>
        </div>

        <div className="answers">
          <input type="radio" id="optionD" name={`${props.quesid}-userAnswer`} value={"D"} onChange={handleChange} checked={userAnswer === "D"} />
          <label htmlFor="optionD">D. {props.data.optionD}</label>
        </div>

        <div className="buttons">
          <button onClick={props.handlePrevious}>Previous</button>
          <button onClick={props.handleNext}>Next</button>
          <button onClick={resetOptions}>Reset</button>
        </div>

      </div>
    </>
  );
};

export default Question;
