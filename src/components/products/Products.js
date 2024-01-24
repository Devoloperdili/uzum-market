import React from "react";
import "./Products.css";
import { IoHeartOutline, IoHeart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";
import { incCart } from "../../context/cartSlice"
import { Link } from "react-router-dom";
import {toast} from "react-toastify"

function Products({ title, data }) {
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.wishes.value);
  const handleAddCart = (el)=>{
    dispatch(incCart(el))
    toast.success("Savatga qo'shildi")
  }
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
              <p className="product__title">{title}</p>
              <mark className="product__monthly">{(el.price * 1.5 / 12)?.brm()} so'm/oyiga</mark>
              <br />
              <br />
              <del className="product__old-price">{(el.price * 1.2)?.brm()} so'm</del>
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
              <div onClick={()=> handleAddCart(el)} className="product__cart">
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
