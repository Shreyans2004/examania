import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero_main">
    <div className='hero flex1'>
      <div className='left'>
        <div className="center">
        <img src='./examania_image1.png' alt="logo" width={150}></img>
        </div>
        <div className='div_l_2'>
            <h2 >Welcome to</h2>
            <h1 class="font_family_1 font2">EXAMANIA</h1>
        </div>
      </div>
      <div className='right'>
        <div className='div_r_1'>
        <input placeholder='1234@1234.gmail.com'></input>
        <img  src="./user_icon.png" alt='user_icon' width={40} height={30}></img>
        </div>
        <div className='div_r_2'>
        <input  placeholder='password'></input>
        <img src='./lock_icon.png' alt='lock_icon'></img></div>
        <div className='div_r_3'>Login</div>
        <div className='div_r_4'><a><span className='underline'>?Forgot Password </span></a></div>
      </div>
     
    </div>
    </div>
  )
}

export default Hero