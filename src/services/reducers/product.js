import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 1000,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 2000,
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description 3",
        price: 3000,
      }
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push({
        id: state.value.length + 1,
        ...action.payload,
      });
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter(it => it.id !== action.payload)
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
