import { configureStore } from '@reduxjs/toolkit'
import WishesSlice from './WishesSlice'

export const store = configureStore({
  reducer: {
    wishes:WishesSlice
  },
})