import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer library behind the scenes for changing the state to immutatble
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      // state = []; //This will not work as this is just giving reference to the state
      state.items.length = 0;
      // state.items.length = 0;

      // RTK - either mutate the state or return a new state
      // return {items: []};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //Actions

export default cartSlice.reducer;  //Reducers