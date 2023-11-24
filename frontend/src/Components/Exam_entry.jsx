import React from 'react'
import "../styles/Exam_entry.css"
function Exam_entry() {
  return (
    <div>
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
        <div className='div_r_1'>
        <label>Exam name</label>
      <select>
        <option>JEE</option>
        <option>NEET</option>
        <option>CA</option>
        <option>UPSC</option>
      </select>
        </div>

        <div className='div_r_2'>
        <label>Difficulty level</label>
      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
        
      </select>
       </div>
        <div className='div_r_3'>Submit</div>
       
      </div>
    
    </div>
    </div>
   
      <br></br>
     
    </div>
  )
}

export default Exam_entry
