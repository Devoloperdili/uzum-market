import React from 'react';
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux';
import UzumWishes from '../../components/uzum-wishes/UzumWishes';
function Wishes() {
  const wishes = useSelector((state) => state.wishes.value);
  console.log(wishes);
  return (
    <div>
      <UzumWishes/>
      <Products data={wishes}/>

    </div>
  );
}

export default Wishes;
