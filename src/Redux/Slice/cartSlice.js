import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: 'cart',
   initialState: [],
   reducers: {
      addToCart: (state, action) => {
         const product = action.payload;
         const index = state.findIndex((x) => x.id === product.id)
         if (index >= 0) {
            state[index].quantity += 1;
         } else {
            product.quantity = 1;
            state.push(product)
         }
      },
      addToCartByAmount: (state, action) => {
         const { product, quantity } = action.payload;
         const index = state.findIndex((x) => x.id === product.id)
         if (index >= 0) {
            state[index].quantity += quantity
         } else {
            product.quantity = quantity
            state.push(product)
         }
      },
      incrementByAUnit: (state, action) => {
         const product = action.payload;
         const index = state.findIndex((x) => x.id === product.id)
         state[index].quantity += 1;
      },
      decrementByAUnit: (state, action) => {
         const product = action.payload;
         const index = state.findIndex((x) => x.id === product.id)
         if (state[index].quantity >= 2) {
            state[index].quantity -= 1;
         } else {
            state[index].quantity = 1
         }
      },
      updateQuantity: (state, action) => {
         const { product, quantity } = action.payload;
         const index = state.findIndex((x) => x.id === product.id)
         state[index].quantity = state[index].quantity > 1 ? quantity : 1;
      }

   }
})

const { actions, reducer } = cartSlice;

export const {
   addToCart,
   addToCartByAmount,
   incrementByAUnit,
   decrementByAUnit,
   updateQuantity
} = actions