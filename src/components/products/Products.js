import React from "react";
import "./Products.css";
import { IoHeartOutline, IoHeart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";
import {decCart,incCart,removeAll,removeCart} from '../../context/cartSlice'
import { Link } from "react-router-dom";

function Products({ title, data }) {
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.wishes.value);
  console.log(wishes);
  return (
    <div className="container">
      <div className="products">
        <h2>{title}</h2>
        <div className="product__wrapper">
          {data?.map((el) => (
            <div key={el.id} className="product__card">
              <Link to={`/login`} className="product__image">
                <img src={el.url[0]} alt="rasm chiqadi" />
              </Link>
              <p className="product__title">{el.title}</p>
              <mark className="product__monthly">1500 so'm/oyiga</mark>
              <br />
              <br />
              <del className="product__old-price">1500 so'm</del>
              <b className="product__price">{el.price?.brm()} so'm</b>
              {wishes?.some((liked) => liked.id === el.id) ? (
                <div
                  onClick={() => dispatch(removeFromWishes(el))}
                  className="product__heart"
                >
                  <IoHeart style={{color:"#7000ff"}} />
                </div>
              ) : (
                <div
                  onClick={() => dispatch(addToWishes(el))}
                  className="product__heart"
                >
                  <IoHeartOutline />
                </div>
              )}
              <div onClick={()=> dispatch(incCart(el))} className="product__cart">
                <IoCartOutline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
