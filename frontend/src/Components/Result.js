import React from "react";
import "../styles/Result.css";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Result = () => {
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
              <p>Total Questions answered - 10</p>
            </div>
            <div className="box1_1">
              <p>Correct answered - 10</p>
            </div>
          </div>
          <div className="box_1">
            <div className="box1_1">
              <p>Total Questions answered - 10</p>
            </div>
            <div className="box1_1">
              <p>Correct answered - 10</p>
            </div>
          </div>
        </div>
      <button className="proceed_btn"><Link to="/Home">Proceed</Link></button>
      </div>
    </div>
  );
};

export default Result;
