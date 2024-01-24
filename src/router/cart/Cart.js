import React from 'react'
import { useSelector} from 'react-redux'
import CartProduct from '../../components/cart-product/CartProduct'

function Cart() {
  const cart = useSelector(s => s.cart.value)
  return (
    <div className='container'>
      {
        cart.length ? <CartProduct data={cart}/> : <h2>Empty</h2>
      }
    </div>
  )
}

export default Cart