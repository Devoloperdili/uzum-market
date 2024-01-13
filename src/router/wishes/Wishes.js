import React from 'react';
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux';
function Wishes() {
  const wishes = useSelector((state) => state.wishes.value);
  console.log(wishes);
  return (
    <div>
      <h2>Wishes</h2>
      <Products data={wishes}/>
    </div>
  );
}

export default Wishes;
