import React from 'react';
import "./Login.css";
import { NavLink } from 'react-router-dom';

function Login() {
  return (
<div className='container  login'>
<div className="box">
  <br />
  <input type="text" className="inp" placeholder='tel raqamni kiriting' /> <br /> <br />
  <input type="text" className="inp" placeholder='telefonizga kelga kodni yozing' /> <br /> <br />
  <input type="text" className="inp" placeholder='yoki emil kiriting' /> <br />
  <br />  
  <NavLink to={"/"}>
    <button className="btn">kirish</button>
  </NavLink>
</div>
</div>
  );
}

export default Login;
