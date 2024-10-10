import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { FaUser,FaLock } from 'react-icons/fa';
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate('/main');
  }
  return (
    <div className='container'>
    <div className="wrapper">
         <div className="login_left">
          {/* <img src="../assets/bg1.webp" alt="College Logo" className="college-image" /> */}
        </div>

      <div className="login_right">
       <form onSubmit={handleLogin}>
          <h2>LOGIN</h2>
          <div className="input-box">
            <input type='email' placeholder='E-Mail'/>
            <FaUser className='login__icon'/>
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password'/>
            <FaLock className='login__icon'/>
          </div>

          <button type="submit" className="login-button">Login</button>
          </form> 
      </div>
      
    </div>
    </div>
  );
};

export default LoginPage;
