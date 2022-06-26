import React from "react";
const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};
const CartContext = React.createContext({
  initialState,
});

export default CartContext;
