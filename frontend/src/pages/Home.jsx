import React from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
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
        
        <select className='input_1'>
          <option>JEE</option>
          <option>NEET</option>
          <option>CLAT</option>
        </select>
       
        </div>
        {/* <div className='div_r_2'>
        <input  placeholder='password' required  className='input_1'></input>
        <img src='./lock_icon.png' alt='lock_icon'></img>
        </div> */}
        <button className='div_r_3'> <Link to="/guidelines"><span className='span1'>START THE EXAM</span> </Link></button>

        
      </div>
     
    </div>
    </div>
    </form>
  
  )
}

export default Home
