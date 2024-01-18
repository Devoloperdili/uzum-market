import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incCart, decCart } from '../../context/cartSlice';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.value);

  console.log(cart);

  return (
    <div className='container'>
      <div className="cart__wrapper"></div>
      {cart?.map((item) => (
        <div key={item.id} className='cart__item'>
          <img src={item.url[0]} width={60} alt="" />
          <p>{item.title}</p>
          <div className="control">
            <button
              onClick={() => dispatch(decCart(item))}
              disabled={item.quantity === 0}>-
            </button>
            <p>{item.price}</p>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(incCart(item))}>+</button>
          </div>
          <p>Total: {item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
