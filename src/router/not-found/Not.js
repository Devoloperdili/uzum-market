import React from 'react'
import "./Not.css"
import rasm from '../../assets/Error-404.png'

function Not() {
  return (
    <div>
        <h2 className='not__title'>NOT BUNDAY SAHIFA YO'Q</h2>
        <img className='img' width={500} height={500} src={rasm} alt="" />
    </div>
  )
}

export default Not