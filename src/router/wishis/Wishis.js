import React from 'react'
import { useSelector } from "react-redux"
import Products from '../../components/products/Products';

function Wishis() {
  const wishes = useSelector(state => state.wishes.value)
  return (
    <div>
        <Products data={wishes} title="Sevimlilar"/>
    </div>
  )
}

export default Wishis