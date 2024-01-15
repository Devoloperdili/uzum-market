import React from 'react'
import Cart from '../../assets/Screenshot (79).png'
import './UzumCart.css'
import { Link } from 'react-router-dom'

function UzumCart() {
  return (
    <div className='uzum'>
        <img className='uzum-wishes__image' src={Cart} alt="" />
        <h2>Savatda hozircha mahsulot yoʻq</h2>
        <br />
        <p>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping
</p>
<br />
<Link to={"/"}>
<button className="uzum-btn">Bosh sahifa</button>
</Link>
    </div>
  )
}

export default UzumCart