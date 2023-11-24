import React from "react";
import "../styles/Result.css";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Result = () => {
  const totalQuestions = localStorage.getItem("totalQuestions") || 75 ;
  const attemptedQuestions = localStorage.getItem("attemptedQuestions") || 3 ;
  const correctQuestions = localStorage.getItem("correctQuestions") || 2 ;
  const totalScore = localStorage.getItem("totalScore") || 8 ;

  return (
    <div>
    <Navbar/>
      <div className="color_1">
        <div className="result_box">
          <h1>
            <u>Result</u>
          </h1>
          <div className="box_1">
            <div className="box1_1">
              <p>Total Questions - {totalQuestions}  </p>
            </div>
            <div className="box1_1">
              <p>Question Attempted - {attemptedQuestions} </p>
            </div>
          </div>
          <div className="box_1">
            <div className="box1_1">
              <p>Correctly answered - {correctQuestions} </p>
            </div>
            <div className="box1_1">
              <p>Total Score - {totalScore}  </p>
            </div>
          </div>
        </div>
      <button className="proceed_btn"><Link to="/Home">Proceed</Link></button>
      </div>
    </div>
  );
};

export default Result;
