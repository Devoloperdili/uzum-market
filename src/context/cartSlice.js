import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
   incCart(state, action){
    let index = state.value.findIndex(el => el.id === action.payload.id)
    if(index < 0){
        // birinchi marta bosgana
       state.value = [...state.value,{...action.payload, quantity: 1}]
    }else{
        state.value = state.value.map((item, inx)=>{
            return inx === index ? {...item,quantity: item.quantity + 1}:item
        })
    }
   },
   decCart(state, action){
    let index = state.value.findIndex(el => el.id === action.payload.id)
    if(index < 0){
        // birinchi marta bosgana
       state.value = [...state.value,{...action.payload, quantity: 1}]
    }else{
        state.value = state.value.map((item, inx)=>{
            return inx === index ? {...item,quantity: item.quantity - 1}:item
        })
    }
   },
   removeCart(){},
   removeAll(){}
    }
})

export const {decCart,incCart,removeAll,removeCart} = cartSlice.actions
export default cartSlice.reducer