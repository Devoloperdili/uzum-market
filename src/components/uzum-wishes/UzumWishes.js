import React from 'react'
import wishes from '../../assets/Screenshot (78).png'
import './UzumWishes.css'
import { Link } from 'react-router-dom'

function UzumWishes() {
  return (
    <div className='uzum'>
      <img className='uzum-wishes__image' src={wishes} alt="" />
      <h2>Sizga yoqqanini qoʻshing</h2>
      <br />
      <p>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
      <br />
<Link to={"/"}>
      <button className='uzum-btn'>Akkauntga kirish</button>
</Link>
    </div>
  )
}

export default UzumWishes