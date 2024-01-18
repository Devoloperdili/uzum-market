import React from 'react'
import "./NavbarContainer.css"
import { FaRegUser, FaRegHeart  } from "react-icons/fa";
import { IoCartOutline, IoMenu, IoSearch, IoHomeOutline   } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container navbar'>
      <NavLink to={"/"} className="navbar__logo">
        {/* <img src="" alt="" /> */}
        <h2>uzum market</h2>
      </NavLink>
      <button className='navbar__btn-category'>
        <IoMenu/>
        <span>Katalog</span>
      </button>
      <div className='navbar__search'>
        <input type="search" placeholder='Qidirish...' />
        <button> <IoSearch/> </button>
      </div>
      <ul className='navbar__collection'>
        <li className="navbar__item">
          <NavLink to={"/"} className="navbar__link">
            <IoHomeOutline/>
            <span>Asosiy sahifa</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/login"} className="navbar__link">
            <FaRegUser/>
            <span>Kirish</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/wishes"} className="navbar__link">
            <FaRegHeart/>
            <span>Sevimlilar</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/cart"} className="navbar__link">
            <IoCartOutline/>
            <span>Savatcha</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar