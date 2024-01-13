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
  },
});

export const { addToWishes } = WishesSlice.actions;
export default WishesSlice.reducer;
