import { createSlice } from "@reduxjs/toolkit";

type cartItem = {
  id: number;
  number: number;
  name: string;
  size: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

const initialState: { items: cartItem[]; totalQuantity: number } = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          number: newItem.number,
          name: newItem.name,
          size: newItem.size,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
