import React from "react";
import { NavLink } from "react-router-dom";

import { useUserAuth } from "../hooks/useUserAuth";
import { useSearch } from "../hooks/useSearch";
import { useCart } from "../hooks/useCart";
import { auth } from "../firebase";
import { useState } from "react";

import Cart from "./Cart";

const Navbar = () => {
  const user = useUserAuth();
  const { cartItem } = useCart();
  const { search, handleSearch } = useSearch();
  const [isBtn, setIsBtn] = useState(false);

  return (
    <div className="shadow-sm sticky top-0  bg-slate-50  z-10">
      <nav className="container h-[20vh] mx-auto lg:h-[10vh] flex flex-col lg:flex-row items-center justify-between p-2">
        <NavLink to="/" className="text-3xl font-bold">
          Ecommerce
        </NavLink>
        <ul className="flex flex-col items-center space-x-2 space-y-3 lg:flex-row lg:space-y-0">
          {user && (
            <li className="text-xl ">
              <input
                type="text"
                className="w-[15rem] border-2 outline-none p-2 rounded-lg"
                placeholder="Search Item"
                value={search}
                onChange={handleSearch}
              />
            </li>
          )}
          <li>
            {user ? (
              <div className="space-x-5">
                <button
                  onClick={() => setIsBtn(!isBtn)}
                  className="border-2 bg-black text-white p-2 text-lg lg:p-3 lg:text-xl rounded-lg relative"
                >
                  Cart
                  <span className="absolute -top-3  rounded-full px-2 bg-red-500 text-sm">
                    {cartItem.length > 0 && cartItem.length}
                  </span>
                </button>

                <NavLink
                  to="/login"
                  className="border-2 bg-black text-white p-2 text-lg lg:p-3 lg:text-xl rounded-lg"
                  onClick={() => auth.signOut()}
                >
                  Log Out
                </NavLink>
              </div>
            ) : (
              <div className="mb-10 lg:mb-0">
                <NavLink
                  to="/login"
                  className="border-2 bg-black text-white p-3 text-xl rounded-lg"
                >
                  Sign In
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {isBtn && (
        <div className="h-[90vh] w-full  lg:w-[30rem] bg-slate-500 right-0  absolute  rounded-lg p-3 text-white overflow-y-scroll ">
          <div className="flex items-center justify-between mt-5">
            <h2 className="text-3xl ">Cart Items</h2>
            <button
              className="text-xl border-2 text-black border-black px-2 py-1 hover:bg-black hover:text-white transition-colors duration-700 ease-in-out rounded-lg"
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
