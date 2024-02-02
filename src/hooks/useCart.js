import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
  const { state, cartAdd, cartReduce, removeCartItem, filterItem } =
    useContext(CartContext);
  const cartItem = state.cart;
  const filter = state.filter;
  return { cartItem, cartAdd, cartReduce, removeCartItem, filterItem, filter };
};
