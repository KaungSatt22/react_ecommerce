import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const cartItem = state.cart;
  return { cartItem, dispatch };
};
