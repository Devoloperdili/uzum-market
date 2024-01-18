import React from 'react';
import './Products.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addToWishes, removeFromWishes } from '../../context/WishesSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Products({ title, data }) {
  const dispatch = useDispatch();
  const wishes = useSelector((s)=>s.wishes.value)
  console.log(wishes);

  return (
    <div className="container">
      <div className="products">
        <h2>{title}</h2>
        <div className="product__wrapper">
          {data?.map((el) => (
            <div key={el.id} className="product__card">
              <div className="product__image">
                <Link to={`/product/${el.id}`}>
                  <img src={el.url[0]} alt="rasm chiqadi 😥" />
                </Link>
              </div>
              <p className="product__title">{el.title}</p>
              <mark>1500 so'm/oyiga</mark>
              <br />
              <br />
              <del className="product__old-price">1500 so'm</del>
              <b className="product__price">{el.price?.brm()} so'm</b>

              <div onClick={() => dispatch(addToWishes(el))} className="product__heart">
                
                <FaRegHeart />
              </div>
              <div className="product__cart">
                <MdOutlineShoppingCart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
