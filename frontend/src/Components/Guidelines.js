import React from "react";
import "../styles/Guidelines.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
const guidelines = () => {
  return (
    <form>
        <Navbar/>
    <div className="guidelines_1">
      <div >
        {/* <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
<label for="myCheckbox">Check this box</label> */}
        <h1 align="center">General Instructions</h1>
        <ol>
          <li>
            Total duration of JEE-Main - PAPER 1 EHG 9th Jan SHIFT 2 is 180 min.
          </li>
          <li>
            The clock will be set at the server. The countdown timer in the top
            right corner of screen will display the remaining time available for
            you to complete the examination. When the timer reaches zero, the
            examination will end by itself. You will not be required to end or
            submit your examination.
          </li>
          <li>
            You can click on the "" arrow which apperes to the left of question
            palette to collapse the question palette thereby maximizing the
            question window. To view the question palette again, you can click
            on "" which appears on the right side of question window.
          </li>
          <li>
            You can click on your "Profile" image on top right corner of your
            screen to change the language during the exam for entire question
            paper. On clicking of Profile image you will get a drop-down to
            change the question content to the desired language.
          </li>
          <li>
            Procedure for answering a multiple choice type question:
            <ul>
              <li>
                To select you answer, click on the button of one of the options.
              </li>
              <li>
                To deselect your chosen answer, click on the button of the
                chosen option again or click on the Clear Response button
              </li>
              <li>
                To change your chosen answer, click on the button of another
                option
              </li>
              <li>
                To save your answer, you MUST click on the Save & Next button.
              </li>
              <li>
                To mark the question for review, click on the Mark for Review &
                Next button.
              </li>
            </ul>
          </li>
          <li>
            To change your answer to a question that has already been answered,
            first select that question for answering and then follow the
            procedure for answering that type of question.
          </li>
          <li>
            To answer a question, do the following:
            <ul>
              <li>
                Click on the question number in the Question Palette at the
                right of your screen to go to that numbered question directly.
                Note that using this option does NOT save your answer to the
                current question.
              </li>
              <li>
                Click on Save & Next to save your answer for the current
                question and then go to the next question.
              </li>
              <li>
                Click on Mark for Review & Next to save your answer for the
                current question, mark it for review, and then go to the next
                question
              </li>
            </ul>
          </li>
        
          <h4>   <input type="checkbox" required></input>
          <label for="myCheckbox">I have read and understood the instructions. All computer hardware
            allotted to me are in proper working condition. I declare that I am
            not in possession of / not wearing / not carrying any prohibited
            gadget like mobile phone, bluetooth devices etc. /any prohibited
            material with me into the Examination Hall.I agree that in case of
            not adhering to the instructions, I shall be liable to be debarred
            from this Test and/or to disciplinary action, which may include ban
            from future Tests / Examinations 
            </label>
            </h4> 
         
          <div className="above_btn">
           <button className="proceed_btn"><Link to="/Exam"> Proceed</Link></button>
          </div>
        </ol>
      </div>
    </div>
    </form>
  );
};

export default guidelines;
