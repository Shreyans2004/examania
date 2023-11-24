import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import API_URLS from "../constants.js";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${API_URLS.LOGIN}`, formData, {
        withCredentials: true,
      });
      sessionStorage.setItem("username", response.data.username);
      navigate("/"); // to home page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="hero_main">
        <div className="hero flex1">
          <div className="left">
            <div className="center">
              <img src="./examania_image1.png" alt="logo" width={150}></img>
            </div>
            <div className="div_l_2">
              <h2>Welcome to</h2>
              <h1 className="font_family_1 font2">EXAMANIA</h1>
            </div>
          </div>

          <div className="right">
            <div className="div_r_1">
              <label className="label_1"></label>
              <input
                name="username"
                onChange={handleChange}
                value={formData.username}
                type="text"
                className="input_1"
                placeholder="Username"
                required
              ></input>
              <img
                src="./user_icon.png"
                alt="user_icon"
                width={40}
                height={30}
              ></img>
            </div>
            <div className="div_r_2">
              <label className="label_1"></label>
              <input
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="password"
                placeholder="password"
                className="input_1"
                required
              ></input>
              <img src="./lock_icon.png" alt="lock_icon"></img>
            </div>
            <button className='div_r_3' onClick={handleSubmit}>
            <Link to="/Home">
                <span className="span1" >Login</span>{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
