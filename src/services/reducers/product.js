import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push({
        id: state.value.length + 1,
        ...action.payload,
      });
    },
    removeProduct: (state) => {
      state.value.pop();
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
