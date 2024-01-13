import React from 'react'
import {PRODUCTS} from '../../static/index'
import { useParams } from 'react-router-dom'
import './Singlerote.css'
function Singleroute() {
  const params = useParams()
  const oneItem = PRODUCTS.find((el) => el.id === params.id)
  console.log(oneItem);

  return (
    <div className='single__route'>
      <div>
      <img src={oneItem?.url[0]} alt="" />
      </div>
      <div className='single'>
      <h3>{oneItem?.price} so'm</h3>
      <h2>{oneItem?.title}</h2>
      <h3>{oneItem?.category}</h3>
      <br />
      <button className='single-route__btn'>1 tugmani bosishda xarid qilish</button> <br />
      <br />
      <button className='single-route__btn'>savatga solib qo'yish</button>
      <br />  
      <br />
      <div className='single__colors'>

      <h1 className='single-route__title'>ranglarni talang</h1>
      <br />
      <br />
      <br />
      <div className="red">qizil</div> <br />
      <div className="green">yashil</div> <br />
      <div className="blue">moviy</div> <br />
      <div className="bluviolet">binafsha</div>
      </div>
      </div>
    </div>
  )
}

export default Singleroute