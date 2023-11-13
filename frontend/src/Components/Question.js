import React from "react";
import "../styles/Question.css";
const Question = () => {
  return (
    <>
      <div className="questions_1">
        <div className="Question">
          <h3 className="text_center">Question</h3>
          <p>
            The velocity of a ball is 90 meter per seconds ,then what will be
            its accelarations?
          </p>
        </div>
      
        <div className="answers">
          <input type="checkbox" id="optionA" name="options" />
          <label htmlFor="optionA">A. 10 meters per second square</label>
        </div>

        <div className="answers">
          <input type="checkbox" id="optionB" name="options" />
          <label htmlFor="optionB">B.10 meters per second square</label>
        </div>

        <div className="answers">
          <input type="checkbox" id="optionC" name="options" />
          <label htmlFor="optionC">C. 10 meters per second square</label>
        </div>

        <div className="answers">
          <input type="checkbox" id="optionD" name="options" />
          <label htmlFor="optionD">D. 10 meters per second square</label>
        </div>
        <div className="buttons">
        <button>Next</button>
        <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Question;
