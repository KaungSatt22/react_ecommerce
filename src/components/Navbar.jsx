import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import Cart from "./Cart";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { authUser: user, logout } = useAuth();
  const { cartItem, filterItem, filter } = useCart();
  const [isBtn, setIsBtn] = useState(false);
  const logoutHandler = async () => {
    await logout();
  };
  const totalQuantity = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="shadow-sm sticky top-0  bg-slate-50  z-10">
      <nav className="container h-[20vh] mx-auto lg:h-[10vh] flex flex-col lg:flex-row items-center justify-between p-2">
        <NavLink to="/" className="text-3xl font-bold">
          Ecommerce
        </NavLink>
        <ul className="flex flex-col items-center space-x-2 space-y-3 lg:flex-row lg:space-y-0">
          <li>
            {user && (
              <div className="space-x-5">
                <input
                  type="text"
                  className="w-[15rem] border-2 outline-none p-2 rounded-lg text-xl"
                  placeholder="Search Item"
                  value={filter}
                  onChange={filterItem}
                />
                <button
                  onClick={() => setIsBtn(!isBtn)}
                  className="border-2 bg-black text-white p-2 text-lg lg:p-3 lg:text-xl rounded-lg relative"
                >
                  Cart
                  <span className="absolute -top-3  rounded-full px-2 bg-red-500 text-sm">
                    {totalQuantity > 0 && totalQuantity}
                  </span>
                </button>

                <NavLink
                  to="/login"
                  className="border-2 bg-black text-white p-2 text-lg lg:p-3 lg:text-xl rounded-lg"
                  onClick={logoutHandler}
                >
                  Log Out
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {isBtn && (
        <div className="h-[90vh] w-full  lg:w-[30rem] bg-slate-50 right-0  absolute  rounded-lg p-3 overflow-y-scroll ">
          <div className="flex items-center justify-between mt-5">
            <h2 className="text-3xl ">Cart Items</h2>
            <button
              className="text-xl border-2 text-black px-3 py-2 hover:bg-black hover:text-white transition-colors duration-700 ease-in-out rounded-lg"
              onClick={() => setIsBtn(!isBtn)}
            >
              X
            </button>
          </div>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
