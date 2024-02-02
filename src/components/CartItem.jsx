import React from "react";
import { useCart } from "../hooks/useCart";

const CartItem = ({ id, image, price, quantity }) => {
  const { cartAdd, cartReduce, removeCartItem } = useCart();
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="w-[5rem] lg:w-[10rem] ">
        <img src={image} />
      </div>
      <p className="font-thin">$ {price}</p>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => cartAdd(id, price, image)}
          className="px-2 border-2 text-black text-xl rounded-lg  hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
        >
          +
        </button>
        <p className="border-2 px-2 rounded-lg font-thin text-xl">
          x{quantity}
        </p>
        <button
          onClick={() => cartReduce(id)}
          className="px-2  border-2 text-black text-xl rounded-lg hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
        >
          -
        </button>
        <button
          onClick={() => removeCartItem(id)}
          className="px-2  border-2 text-black text-xl rounded-lg hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
