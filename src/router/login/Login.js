import React from 'react';
import "./Login.css";
import { NavLink } from 'react-router-dom';

function Login() {
  return (
<div className='container  login'>
<div className="box">
  <br />
  <div className="card">
    <form action="">

    <input required className='inp' type="text" placeholder='username'  /> <br /> <br />
    <input required className='inp' type="password" placeholder='password' /><br /> <br />
    <input required className='inp' type="email" placeholder='email'  />  <br /> <br />
    
    <NavLink className="login__navlink" to={"/"}>
      <span>asosiy sahifaga qaytish</span>
    </NavLink>
    <br />
    <button  className="inp">kirish</button>
    </form>
    <br />
  </div>
</div>
  </div>
  );
}

export default Login;
