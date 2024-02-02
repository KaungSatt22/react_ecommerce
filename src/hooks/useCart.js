import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
  const { state, cartAdd, cartReduce, removeCartItem } =
    useContext(CartContext);
  const cartItem = state.cart;
  return { cartItem, cartAdd, cartReduce, removeCartItem };
};
