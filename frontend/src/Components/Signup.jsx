import React from 'react'
import '../styles/Signup.css'
import { useState } from 'react'
const Signup = () => {
    const [formData, setFormData] = useState ({
        username:"",
        password:""
       })
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
        <div className='div_r_1'>
        <input placeholder='1234@1234.gmail.com'  className='input_1'></input>
        <img  src="./user_icon.png" alt='user_icon' width={40} height={30}></img>
        </div>
        <div className='div_r_2'>
        <input  placeholder='password' className='input_1'></input>
        <img src='./lock_icon.png' alt='lock_icon'></img></div>
        <div className='div_r_3'>Signup</div>
        
      </div>
     
    </div>
    </div>
    </form>
  )
}

export default Signup
