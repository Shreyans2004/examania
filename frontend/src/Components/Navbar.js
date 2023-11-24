import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav className='nav'>
      <div className='full flex1'>
      <ul className='no_decor flex1 ul1 font1'>
        <li className='li_1'><img src='./examania_image1.png' alt="logo" width={30}></img></li>
        <li className='li_2'>EXAMANIA</li>
        <li className='li_3'><Link to="/">Home</Link></li>
        <li className='li_4'><Link to="guidelines">Guidelines</Link></li>
        <li className='li_5'><Link to="/result">Result</Link></li>
        <li className='li_6'><Link to="/Login">Login</Link></li>
        <li className='li_7'><Link to="/Signup">Signup</Link></li>
      </ul>

      </div>  
    </nav>
  )
}

export default navbar
