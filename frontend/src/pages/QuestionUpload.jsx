import { backendURL } from "../constants.js";
import axios from "axios";
import { useState } from "react";
import { nanoid } from "nanoid";
import API_URLS from "../constants.js";

const QuestionUpload = () => {
  const [formData, setFormData] = useState({
    quesId: "",
    quesText: "",
    quesType: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
    marks: 0,
    difficulty: "",
    concept: "",
    quesSubject: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    if (name === "quesType" && value === "Integer") {
      formData.answer = "";
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.quesId = nanoid();
    console.log(formData.quesId);
    // make only first letter capital
    formData.quesSubject = formData.quesSubject.charAt(0).toUpperCase() + formData.quesSubject.slice(1);
    if (formData.quesType === "Integer") {
      formData.optionA = "";
      formData.optionB = "";
      formData.optionC = "";
      formData.optionD = "";
    } else {
      formData.answer = formData.answer.toUpperCase();
    }
    try {
      await axios.post(API_URLS.ADD_QUESTION, formData);
      console.log("Question posted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="quesForm" onSubmit={handleSubmit}>
        <div className="main_div">
          <div className="child_div1">
            <label className="labels">Question Text</label>
            <textarea
              name="quesText"
              value={formData.quesText}
              onChange={handleChange}
              placeholder="What is conservation of energy?"
              className="inputs"
            />
          </div>
          <div className="child_div1">
            <label className="labels">Question Type</label>
            <input
              type="radio"
              name="quesType"
              value="MCQ"
              onChange={handleChange}
            />
            MCQ
            <input
              type="radio"
              name="quesType"
              value="Integer"
              onChange={handleChange}
            />
            Integer
          </div>
          <br></br>
          <br></br>

          {formData.quesType === "MCQ" && (
            <div>
              <label className="labels">Question Option1</label>
              <input
                type="text"
                name="optionA"
                value={formData.optionA}
                onChange={handleChange}
                placeholder="Potential Energy is conserved"
                
              />
              <br></br>
              <br></br>
              <label className="labels">Question Option2</label>
              <input
                type="text"
                name="optionB"
                value={formData.optionB}
                onChange={handleChange}
                placeholder="Kinetic Energy is conserved"
               
              />
              <br></br>
              <br></br>
              <label className="labels">Question Option3</label>
              <input
                type="text"
                name="optionC"
                value={formData.optionC}
                onChange={handleChange}
                placeholder="Total Energy is conserved"
                
              />
              <br></br>
              <br></br>
              <label className="labels">Question Option4</label>
              <input
                type="text"
                name="optionD"
                value={formData.optionD}
                onChange={handleChange}
                placeholder="Energy is not conserved"
                
              />
            </div>
          )}

          {formData.quesType === "Integer" ? (
            <div>
              <label className="lables"> Integer Answer</label>
              <input
                type="number"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                placeholder="24"
              />
            </div>
          ) : (
            <div>
              <label> MCQ Answer</label>
              <input
                type="text"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                placeholder="Enter A/B/C/D"
              />
            </div>
          )}

          <br></br>
          <br></br>

          <label>Question Marks</label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="Enter question marks"
          />
          <br></br>
          <br></br>
          <label>Question Difficulty</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <br></br>
          <br></br>
          <label>Question Concept</label>
          <input
            type="text"
            name="concept"
            value={formData.concept}
            onChange={handleChange}
            placeholder="Enter question concept"
          />
          <br></br>
          <br></br>
          <label>Question Subject</label>
          <input
            type="text"
            name="quesSubject"
            value={formData.quesSubject}
            onChange={handleChange}
            placeholder="Enter question subject"
          />
          <br></br>
          <br></br>
          <div className="child_div2">
          <button type="submit" className="q_button">Submit</button>
          <br></br>
          <br></br>
          <button type="reset" className="q_button">Reset</button>
          </div>
        </div>
     
      </form>
    </>
  );
};

export default QuestionUpload;
