import React from "react";
import "./Stylesheets/Question.css"
const Question = () => {
  return (
    <>

      <div className="questions_1">
        <div className="color_1">
          <h1 className="white">Question 1</h1>
          <div className="question_pallete">
            <p className="white margin">
              The velocity ofv a ball is 5 meters per second and suddenly it
              increases to 20 meters per second .then what will be its
              acceleration?
            </p>
          </div>
        </div>
        <h3 className="white margin">Options</h3>
        <ol className="white" type="A">
            <li><input type="checkbox"></input>20 meter/seconds*seconds</li>
            <li><input type="checkbox"></input>20 meter/seconds*seconds</li>
            <li><input type="checkbox"></input>20 meter/seconds*seconds</li>
            <li><input type="checkbox"></input>20 meter/seconds*seconds</li>
        </ol>
        <div className="buttons">
        <button className="next">Next</button>
        <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Question;
