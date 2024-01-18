import { createSlice } from "@reduxjs/toolkit";

export const WishesSlice = createSlice({
  name: "wishes",
  initialState: {
    value: [],
  },
  reducers: {
    addToWishes(state, action) {
      state.value = [...state.value, action.payload]
    },
    removeFromWishes(state, action){
      state.value = state.value.filter(el => el.id !== action.payload.id)
    }
  },
});

export const { addToWishes, removeFromWishes } = WishesSlice.actions;
export default WishesSlice.reducer;
