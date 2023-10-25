import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <nav className='nav'>
      <div className='full flex1'>
      <ul className='no_decor flex1 ul1 font1'>
    <li className='li_1'><img src='./examania_image1.png' alt="logo" width={30}></img></li>
    <li  className='li_2'>EXAMANIA</li>
    <li  className='li_3'>Home</li>
    <li  className='li_4'>Guidelines</li>
    <li  className='li_5'>Login</li>
    <li  className='li_6'>Feedback</li>

      </ul>

      </div>  
    </nav>
  )
}

export default navbar
