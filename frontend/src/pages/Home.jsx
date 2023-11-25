import React from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URLS from '../constants.js';
import Navbar from '../Components/Navbar.js'

function Home() {
  const [formData,setFormData] = useState({
    examName: "",
    difficulty: ""
  }) ;

  const navigate = useNavigate() ;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData) ;
  }

  const handleSubmit = async (e) => {
    e.preventDefault() ;
    try {
      
      console.log(formData) ;
      if (formData.examName === "" || formData.difficulty === "") {
        alert("Please select exam name and difficulty level") ;
        return ;
      }
      const response = await axios.post(`${API_URLS.START_TEST}`,formData, { withCredentials: true }) ;
      localStorage.setItem('testId',response.data.testId) ;
      localStorage.setItem('examDetails',JSON.stringify(response.data.examDetails)) ;
      localStorage.setItem('totalQuestions',response.data.totalQuestions) ;
      navigate("/guidelines") ; 

    } catch (error) {
      console.log(error);
      if(error.response.status === 403 || error.response.status === 401) {
        navigate('/login') ;
      }

    }
  }


  return (
    <div>
      <Navbar/>
      <div className='main_h1'>  
      <marquee>Welcome to Examania .Scroll down to enter the quiz area</marquee>
      </div>
 <video src="pexels_videos_3867 (720p).mp4" autoPlay loop muted />
    <form>


    <div className="hero_main">
    <div className='hero flex1'>
      <div className='left'>
        <div className="center">
        <img src='./examania_image1.png' alt="logo" width={150}></img>
        </div>
        <div className='div_l_2'>
            <h2 >Welcome to</h2>
            <h1 className="font_family_1 font2">EXAMANIA</h1>
        </div>
      </div>
      <div className='right'>
      <h1>Select the exam</h1>
        <div className='div_r_1'>
        
        <select name="examName" className='input_1' onChange={handleChange}>
          <option value="">Select Exam</option>
          <option value="JEE-MAIN">JEE-MAIN</option>
          <option value="NEET">NEET</option>
          <option value="TS-EAMCET">TS-EAMCET</option>
          <option value="BITSAT">BITSAT</option>
          <option value="VITEEE">VITEEE</option>
        </select>

        <select name="difficulty" className='input_1' onChange={handleChange}>
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
       
        </div>
        {/* <div className='div_r_2'>
        <input  placeholder='password' required  className='input_1'></input>
        <img src='./lock_icon.png' alt='lock_icon'></img>
        </div> */}

        <button className='div_r_3' onClick={handleSubmit}> <span className='span1'>START THE EXAM</span></button>


        
      </div>
     
    </div>
    </div>
    </form>
    </div>
  
  )
}

export default Home
